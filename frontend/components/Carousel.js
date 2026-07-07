'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

import './Carousel.css';

const DEFAULT_ITEMS = [
  {
    title: 'Web Development',
    description: 'Where it all started — full-stack apps, clean UI, real products.',
    id: 1,
    icon: <FiCode />
  },
  {
    title: 'Machine Learning',
    description: 'Wrangling data, training models, building real ML pipelines.',
    id: 2,
    icon: <FiLayers />
  },
  {
    title: 'NLP',
    description: 'Diving into language models and how machines understand text.',
    id: 3,
    icon: <FiFileText />
  },
  {
    title: 'Deep Learning',
    description: 'Neural networks — from the fundamentals to hands-on experiments.',
    id: 4,
    icon: <FiCircle />
  },
  {
    title: 'Intelligent Systems',
    description: 'The goal ahead: ship AI products that people actually use.',
    id: 5,
    icon: <FiLayout />
  }
];

const DRAG_BUFFER = 10;
const VELOCITY_THRESHOLD = 500;
const CARD_WIDTH = 260;
const GAP = 20;
const TOTAL_OFFSET = CARD_WIDTH + GAP;
const SPRING_OPTIONS = { type: 'spring', stiffness: 320, damping: 30 };

function CarouselItem({ item, isActive }) {
  return (
    <motion.div
      className={`carousel-card ${isActive ? 'is-active' : ''}`}
      animate={{
        scale: isActive ? 1 : 0.88,
        opacity: isActive ? 1 : 0.4,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 26 }}
    >
      <div className="carousel-card-icon">{item.icon}</div>
      <h3 className="carousel-card-title">{item.title}</h3>
      <p className="carousel-card-desc">{item.description}</p>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  autoplay = true,
  autoplayDelay = 3200,
  pauseOnHover = true,
  loop = true
}) {
  const itemsForRender = useMemo(() => {
    if (!loop || items.length === 0) return items;
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);

  useEffect(() => {
    if (!isJumping) {
      x.set(-position * TOTAL_OFFSET);
    }
  }, [position, isJumping, x]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1 || (pauseOnHover && isHovered)) return undefined;
    const timer = setInterval(() => {
      setPosition(prev => prev + 1);
    }, autoplayDelay);
    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  const handleAnimationComplete = () => {
    if (!loop) return;
    if (position === itemsForRender.length - 1) {
      setIsJumping(true);
      setPosition(1);
      x.set(-TOTAL_OFFSET);
      setTimeout(() => setIsJumping(false), 20);
    } else if (position === 0) {
      setIsJumping(true);
      setPosition(items.length);
      x.set(-items.length * TOTAL_OFFSET);
      setTimeout(() => setIsJumping(false), 20);
    }
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;
    setPosition(prev => Math.max(0, Math.min(prev + direction, itemsForRender.length - 1)));
  };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  const goPrev = () => {
    setPosition(prev => (loop ? prev - 1 : Math.max(0, prev - 1)));
  };

  const goNext = () => {
    setPosition(prev => (loop ? prev + 1 : Math.min(itemsForRender.length - 1, prev + 1)));
  };

  return (
    <div
      className="carousel-wrapper"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="carousel-row">
        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          onClick={goPrev}
          aria-label="Previous slide"
          disabled={!loop && position === 0}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <div className="carousel-window">
          <motion.div
            className="carousel-track"
            drag="x"
            style={{ x, gap: `${GAP}px` }}
            onDragEnd={handleDragEnd}
            animate={isJumping ? undefined : { x: -position * TOTAL_OFFSET }}
            transition={isJumping ? { duration: 0 } : SPRING_OPTIONS}
            onAnimationComplete={handleAnimationComplete}
          >
            {itemsForRender.map((item, index) => (
              <CarouselItem key={`${item.id}-${index}`} item={item} isActive={position === index} />
            ))}
          </motion.div>
        </div>

        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          onClick={goNext}
          aria-label="Next slide"
          disabled={!loop && position === itemsForRender.length - 1}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="carousel-dots">
        {items.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setPosition(loop ? index + 1 : index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}