"use client";
import DOMPurify from "isomorphic-dompurify";

export default function ContentView({ value }: { value: string }) {
  const safe = DOMPurify.sanitize(value);
  return (
    <div className="ck-content" dangerouslySetInnerHTML={{ __html: safe }} />
  );
}
