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
    const el = ref.current;
    if (!el) return;

    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    const alreadyVisible = r.top < vh * 0.9 && r.bottom > vh * 0.1;
    if (alreadyVisible) {
      setShow(true);
      if (once) return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setShow(false);
        }
      },
      {
        root: null,
        rootMargin: "0px 0px -20% 0px",
        threshold: [0.2, 0.3, 0.4, 0.5, 0.6, 0.7],
      },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div ref={ref} className={className}>
      {children(show)}
    </div>
  );
}
