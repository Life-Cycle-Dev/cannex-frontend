// src/components/FocusAreas.tsx
"use client";

import Image from "next/image";

export default function FocusAreas() {
  return (
    <section className="bg-white w-full">
      <div className="w-full">
        <div className="relative grid grid-cols-1 tablet:grid-cols-3 border border-neutral200 w-full">
          <div className="tablet:row-span-3 p-6 tablet:p-8 border-b tablet:border-b-0 tablet:border-r border-neutral200 flex items-start">
            <h3 className="text-3xl tablet:text-4xl font-bold leading-tight text-black">
              Our Core
              <br />
              Focus Areas
            </h3>
          </div>

          {/* Row 1: mobile -> Image then Text / tablet -> col 2 (img), col 3 (text) */}
          <CellImage
            src="/research-and-development/Image 3_4-2.png"
            alt="Cannabinoid research equipment"
            className="tablet:col-start-2"
          />
          <CellText
            number="1"
            title="Cannabinoid Innovation"
            points={[
              "Water-soluble CBD for increased bioavailability in beverages and oral forms",
              "Pure THC isolation using preparative chromatography",
              "Minor cannabinoid separation (CBG, CBC, CBN) for targeted effects",
              "Cannabinoid–terpene matching to enhance therapeutic outcomes",
            ]}
            className="tablet:col-start-3"
          />

          {/* Row 2: mobile -> Image then Text / tablet -> same row (row 2), text left (col 2), image right (col 3) */}
          <CellImage
            src="/research-and-development/Image 3_4-1.png"
            alt="Precision pipetting in lab"
            className="tablet:col-start-3 tablet:row-start-2"
          />
          <CellText
            number="2"
            title="Formulation Development"
            points={[
              "Custom ratios for tinctures, gummies, soft gels, vapes",
              "Product development guided by clinical use cases and global compliance",
              "Terpene profile design for efficacy and flavor control",
            ]}
            className="tablet:col-start-2 tablet:row-start-2"
          />

          {/* Row 3: mobile -> Image then Text / tablet -> col 2 (img), col 3 (text) */}
          <CellImage
            src="/research-and-development/Image 3_4.png"
            alt="Gloved hand holding sample"
            className="tablet:col-start-2 tablet:row-start-3"
          />
          <CellText
            number="3"
            title="Delivery Systems & Packaging"
            points={[
              "Dose-consistent delivery (sublingual, vapor, topical)",
              "Stability testing for export conditions (heat, humidity)",
              "Secure packaging for traceability and patient safety",
            ]}
            className="tablet:col-start-3 tablet:row-start-3"
          />
        </div>
      </div>
    </section>
  );
}

function CellImage({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={[
        "relative border-t border-l border-neutral200",
        "w-full",
        className,
      ].join(" ")}
    >
      <Image
        src={src}
        alt={alt}
        width={332}
        height={392}
        className="w-full h-auto object-cover"
        sizes="(min-width: 1280px) 33vw, 100vw"
        quality={95}
      />
    </div>
  );
}

function CellText({
  number,
  title,
  points,
  className = "",
}: {
  number: string;
  title: string;
  points: string[];
  className?: string;
}) {
  const splitLead = (text: string): [string, string] => {
    const delimiters = [",", " for ", " using ", " such as ", " to "];
    for (const d of delimiters) {
      const idx = text.toLowerCase().indexOf(d.trim().toLowerCase());
      if (idx > -1) {
        const before = text.slice(0, idx).trim();
        const after = text.slice(idx).trimStart();
        return [before, after];
      }
    }
    return [text, ""];
  };

  return (
    <div
      className={[
        "relative p-6 tablet:p-8 border border-neutral200 w-full",
        className,
      ].join(" ")}
    >
      <h4 className="text-xl tablet:text-5xl font-bold text-black">{title}</h4>
      <div className="mt-3 h-px w-full bg-neutral200" />
      <ul className="mt-4 list-none text-sm tablet:text-base">
        {points.map((p, i) => {
          const [lead, tail] = splitLead(p);
          return (
            <li key={i} className="py-3 border-b border-neutral200">
              <span className="font-semibold text-black">{lead}</span>
              {tail && <span className="text-neutral900"> {tail}</span>}
            </li>
          );
        })}
      </ul>
      <span className="absolute -bottom-3 right-3 tablet:right-6 text-[72px] tablet:text-[96px] font-bold text-black select-none">
        {number}
      </span>
    </div>
  );
}
