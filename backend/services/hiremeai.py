import os
from pathlib import Path
import time
import json
from fastapi import FastAPI
from pydantic import BaseModel, ConfigDict
from dotenv import load_dotenv
from groq import Groq
from pypdf import PdfReader
from fastapi.middleware.cors import CORSMiddleware
from typing import List, Optional, Union

load_dotenv()

# 1. Fetch the API key and store it in a variable first
my_api_key = os.getenv("GROQ_API_KEY")

# 2. Check if the API key exists
if not my_api_key:
    raise ValueError("GROQ_API_KEY environment variable is not set.")

client = Groq(api_key=my_api_key)

model = "llama-3.1-8b-instant"
role = 'user'

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Production me specific React port ya domain de sakte hain
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatResponse(BaseModel):
    question: str

class Experience(BaseModel):
    company: str | None = None
    role: str | None = None
    duration: str | None = None
    description: str | None = None
    responsibilities: list[str] = []

# 1. Project structure (tech parameter fixed)
class Project(BaseModel):
    name: str | None = None
    description: str | None = None
    tech: Union[str, list[str]] | None = None  # <--- STRING AUR LIST DONO ALLOWED HAIN

class Resume(BaseModel):
    name: str | None = None
    email: str | None = None
    phone: str | None = None
    total_experience: float | None = None
    skills: list[str] = []
    experiences: list[Experience] = []
    education: list[str] = []
    projects: list[Project] = []
    certifications: list[str] = []

def ask_candidate(question: str, resume: Resume):
    system_prompt = f"""
    You are an expert AI assistant. Your task is to answer questions about a candidate based on their resume.
    The resume is provided in JSON format and matches the following schema:
    {resume_schema}
    IMPORTANT: 
    Your entire response must be a single, valid JSON object with the following structure:
    {{
        "answer": "Your answer here"
    }}
    Do not include markdown code blocks like ```json.
    Do not return the schema itself in your response.
    Be professional and
    keep the response concise and to the point.
    Answer as if HR professional is interviewing the candidate. If the answer is not available in the resume, respond with "Information not available in the resume."
    """
    
    message={
        "role": "user", 
        "content": f"Question: {question}\nResume: {resume.model_dump()}"
    }
    
    messages = [{"role": "system", "content": system_prompt}, message] # Ensure system prompt is explicitly passed
    response_format={"type": "json_object"}
    
    response = client.chat.completions.create(model=model, messages=messages, response_format=response_format)
    
    data=json.loads(response.choices[0].message.content)
    
    # Pre-empting key mismatch bugs by lowercasing keys if any
    data = {k.lower(): v for k, v in data.items()}
    
    return data.get("answer", "")

resume_schema = json.dumps(Resume.model_json_schema(), indent=2)
def parse_resume(resume_text):
    system_prompt = f"""
    You are an expert AI assistant. Your task is to parse resumes and extract relevant information. 
    Return ONLY a valid JSON object matching the following schema:
    {resume_schema}
    IMPORTANT: 
    Your entire response must be a single, valid JSON object. Do not include markdown code blocks like ```json.
    Do not return the schema itself in your response.
    Do not return fields like "properties", "title" or "type" in your response.
    If a field is not mentioned, return an empty list for that field.
    keep the response concise and to the point.
    """

    message={
    "role": "user", 
    "content": resume_text
    }
    messages = [{"role": "system", "content": system_prompt}, message] # Ensure system prompt is explicitly passed
    response_format={"type": "json_object"}
    response = client.chat.completions.create(model=model, messages=messages, response_format=response_format)
    data=json.loads(response.choices[0].message.content)
    
    # Pre-empting key mismatch bugs by lowercasing keys if any
    data = {k.lower(): v for k, v in data.items()}
    
    resume = Resume(**data)
    return resume

# Path Helper to reliably locate the PDF relative to hiremeai.py file
BASE_DIR = Path(__file__).resolve().parent
PDF_PATH = os.path.join(BASE_DIR, "AASTHA_RESUME.pdf")

# Helper function to extract PDF text
def read_pdf(file_path: str) -> str:
    reader = PdfReader(file_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"
    return text

# Define your route handler here
@app.get("/")
def home():
    resume_text = read_pdf(PDF_PATH)
    resume = parse_resume(resume_text)  
    return {
        "message": "Resume parsed successfully", 
        "data": resume.model_dump()
    }

@app.post("/chat")
def chat_with_resume(chat_request: ChatResponse):
    resume_text = read_pdf(PDF_PATH)
    resume = parse_resume(resume_text)  
    answer = ask_candidate(chat_request.question, resume)
    return {"answer": answer}