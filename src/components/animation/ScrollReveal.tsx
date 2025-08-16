/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollRevealProps {
  children: (show: boolean) => ReactNode;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShow(true);
            if (once && ref.current) observer.unobserve(ref.current);
          } else if (!once) {
            setShow(false);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [once]);

  return (
    <div ref={ref} className={`${className} transition-all `}>
      {children(show)}
    </div>
  );
}
