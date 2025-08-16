/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";

// ม้อกไว้ก่อน อิอิ
const CERTS = [
  { src: "/certs/cert-1.png", alt: "License 1" },
  { src: "/certs/cert-2.png", alt: "License 2" },
  { src: "/certs/cert-3.png", alt: "Certificate 3" },
  { src: "/certs/cert-4.png", alt: "Certificate 4" },
];

export default function Certificates() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section className="w-full bg-white text-[var(--foreground)]">
      <div className="px-[20px] desktop:px-[80px] py-[32px] desktop:py-[48px]">
        <h2 className="text-3xl tablet:text-4xl desktop:text-5xl font-extrabold leading-tight">
          License and Certification
        </h2>
      </div>

      <div className="px-[20px] desktop:px-[80px] pb-[64px]">
        <div
          className="
            mx-auto max-w-[980px]
            grid grid-cols-1 gap-10
          ">
          {CERTS.map((c, i) => (
            <button
              key={c.src}
              onClick={() => setOpenIdx(i)}
              className="
                group w-full
                border border-black/20 hover:border-black
                bg-white
                shadow-sm hover:shadow-md
                transition
                rounded-[6px]
                overflow-hidden
              ">
              <div className="w-full bg-black/3">
                <img
                  src={c.src}
                  alt={c.alt}
                  className="
                    block w-full h-auto
                    group-hover:brightness-95 transition
                  "
                  loading="lazy"
                />
              </div>
            </button>
          ))}
        </div>
      </div>

      {openIdx !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="
            fixed inset-0 z-50
            bg-black/80
            flex items-center justify-center
            p-4
          "
          onClick={() => setOpenIdx(null)}>
          <div
            className="relative max-w-[90vw] max-h-[90vh] bg-white rounded-md overflow-hidden"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={CERTS[openIdx].src}
              alt={CERTS[openIdx].alt}
              className="block max-w-[90vw] max-h-[90vh] w-auto h-auto"
            />

            <button
              onClick={() => setOpenIdx(null)}
              className="
                absolute top-2 right-2
                bg-black text-white
                px-3 py-1 text-sm rounded
                hover:bg-black/80
              ">
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
