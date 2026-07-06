'use client';

import { useEffect } from 'react';

/**
 * Adds the `is-visible` class to every element with the `.reveal` class
 * once it scrolls into view, and fills any `.skill-bar-fill` bars based on
 * their `data-width` attribute. Mirrors the behaviour of the original
 * static-HTML IntersectionObserver script.
 */
export default function useReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealEls.forEach((el) => io.observe(el));

    const bars = document.querySelectorAll('.skill-bar-fill');
    const barIo = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = `${entry.target.dataset.width}%`;
            barIo.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.4 }
    );
    bars.forEach((b) => barIo.observe(b));

    return () => {
      io.disconnect();
      barIo.disconnect();
    };
  }, []);
}
