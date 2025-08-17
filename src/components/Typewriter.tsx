// Typewriter.tsx
"use client";
import { useEffect, useState } from "react";

type Props = {
  text: string;
  startDelay?: number;
  delay?: number;
  className?: string;
  caret?: boolean;
  hideCaretOnComplete?: boolean;
  onComplete?: () => void; // <— เพิ่ม
};

export default function Typewriter({
  text,
  startDelay = 0,
  delay = 50,
  className = "",
  caret = true,
  hideCaretOnComplete = false,
  onComplete,
}: Props) {
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let intervalId: number | undefined;
    const startId = window.setTimeout(() => {
      let i = 0;
      intervalId = window.setInterval(() => {
        i += 1;
        setShown(text.slice(0, i));
        if (i >= text.length) {
          window.clearInterval(intervalId);
          setDone(true);
          onComplete?.(); // <— แจ้งจบ
        }
      }, delay);
    }, startDelay);

    return () => {
      window.clearTimeout(startId);
      if (intervalId) window.clearInterval(intervalId);
    };
  }, [text, startDelay, delay, onComplete]);

  return (
    <span className={className}>
      {shown}
      {caret && !(hideCaretOnComplete && done) && (
        <span className="inline-block w-[2px] h-[0.9em] align-[-0.12em] bg-current ml-1 animate-pulse" />
      )}
    </span>
  );
}
