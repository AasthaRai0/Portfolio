'use client'; // Yeh line zaroor add karein agar background/animations use ho rahe hain

import BeamsBackground from '../../components/BeamsBackground';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Certifications from '../../components/Certifications';
import Projects from '../../components/Projects';
import Education from '../../components/Education';
import Footer from '../../components/Footer';
import RevealProvider from '../../components/RevealProvider';
import Chat from '../../components/Chat';

export default function HomePage() {
  return (
    <RevealProvider>
      <BeamsBackground />
      
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Projects />
        <Education />
        <Chat />
      </main>
      <Footer />
    </RevealProvider>
  );
}