"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0.94, y: 6 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function TypedKeyword({ text, delay = 350 }: { text: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduceMotion ? text : "");
  const [typing, setTyping] = useState(!reduceMotion);

  useEffect(() => {
    if (reduceMotion) {
      setDisplayed(text);
      setTyping(false);
      return;
    }

    let index = 0;
    let timer: number | undefined;
    const startTimer = window.setTimeout(() => {
      const tick = () => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index < text.length) {
          timer = window.setTimeout(tick, 20 + (index % 4) * 5);
        } else {
          setTyping(false);
        }
      };
      tick();
    }, delay);

    return () => {
      window.clearTimeout(startTimer);
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [delay, reduceMotion, text]);

  return (
    <span className="typed-keyword" aria-label={text}>
      <span className="typed-keyword__measure" aria-hidden="true">
        {text}
      </span>
      <span className="typed-keyword__live" aria-hidden="true">
        {displayed}
        {typing && <span className="typed-keyword__cursor" />}
      </span>
    </span>
  );
}

export function Burst({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`burst ${className}`}
      viewBox="0 0 64 64"
      aria-hidden="true"
      fill="none"
    >
      <path d="M31.5 5.5c1.1 8.3.7 17.6.4 26.2" />
      <path d="M32.2 58.8c-.7-9.7-.7-18.1-.3-27.1" />
      <path d="M5.3 31.6c8.7-.5 17.4-.2 26.6.1" />
      <path d="M58.7 32.2c-8.2-1-17.7-.7-26.8-.5" />
      <path d="M12.7 12.4c5.7 6.4 12.6 12.5 19.2 19.3" />
      <path d="M51.5 51.8c-6.9-5.9-13-12.6-19.6-20.1" />
      <path d="M51.8 12.2c-6 6.9-12.6 13.1-19.9 19.5" />
      <path d="M12.2 51.4c6.6-5.5 13.2-12.2 19.7-19.7" />
      <path d="M21.6 7.8c2.5 8.6 6.3 16 10.3 23.9" />
      <path d="M42.4 56.1c-2.8-8.7-6.6-16.4-10.5-24.4" />
      <path d="M7.7 42.2c8.5-2.5 16.6-6.5 24.2-10.5" />
      <path d="M56.1 21.4c-8.6 2.7-16.3 6.5-24.2 10.3" />
      <circle cx="31.9" cy="31.7" r="2.1" />
    </svg>
  );
}
