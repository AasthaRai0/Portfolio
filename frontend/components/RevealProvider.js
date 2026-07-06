'use client';

import useReveal from './useReveal';

export default function RevealProvider({ children }) {
  useReveal();
  return children;
}
