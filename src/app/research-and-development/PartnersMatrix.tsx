/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const data: any = [
  {
    splitRow: true,
    subCategories: [
      {
        title: "Market Analysis and Planning",
        logos: [
          { src: "/logos/lightec.png", alt: "Lightec" },
          { src: "/logos/cookies.png", alt: "Cookies" },
          { src: "/logos/toyo.png", alt: "TOYO" },
        ],
      },
      {
        title: "Variety Improvement and Cultivation",
        logos: [
          { src: "/logos/ku.png", alt: "Kasetsart University" },
          { src: "/logos/agri.png", alt: "Agriculture Institute" },
        ],
      },
    ],
    logos: [],
  },
  {
    title: "Technology and Engineering",
    logos: [
      { src: "/logos/daicel.png", alt: "Daicel" },
      { src: "/logos/jt.png", alt: "JT" },
      { src: "/logos/mitsubishi-chem.png", alt: "Mitsubishi Chemical" },
      { src: "/logos/kmutl.png", alt: "KMUTL" },
      { src: "/logos/mighty-eng.png", alt: "Mighty Engineering" },
    ],
  },
  {
    title: "Analysis, Testing and Clinical Trials",
    logos: [
      { src: "/logos/thammasat.png", alt: "Thammasat University" },
      { src: "/logos/med.png", alt: "Medical Council" },
      { src: "/logos/nctc.png", alt: "NCTC" },
      { src: "/logos/shimadzu.png", alt: "Shimadzu" },
      { src: "/logos/bara.png", alt: "Bara Scientific" },
    ],
  },
];

export default function PartnersMatrix(): any {
  return (
    <section className="w-full bg-[var(--background)] text-[var(--foreground)]">
      <div className="w-full px-0">
        <div className="h-px w-full bg-[var(--border)]" />
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr] w-full">
          {data.map((cat: any, idx: any) =>
            cat.splitRow && cat.subCategories ? (
              <SplitRow
                key={`split-${idx}`}
                subs={cat.subCategories}
                borderTop={idx !== 0}
              />
            ) : (
              <Row
                key={cat.title}
                title={cat.title}
                logos={cat.logos}
                borderTop={idx !== 0}
              />
            )
          )}
        </div>
        <div className="h-px w-full bg-[var(--border)]" />
      </div>
    </section>
  );
}

/* ---------- Rows ---------- */

function Row({ title, logos, borderTop }: any): any {
  return (
    <>
      {/* ซ้าย: หัวข้อหมวด */}
      <div
        className={[
          "px-6 desktop:px-8 py-6 desktop:py-8",
          "border-r border-[var(--border)]",
          borderTop ? "border-t border-[var(--border)]" : "",
        ].join(" ")}>
        <h3 className="text-lg md:text-xl font-extrabold leading-snug">
          {breakTwoLines(title)}
        </h3>
      </div>

      {/* ขวา: โลโก้ */}
      <div
        className={[
          "px-4 md:px-6 py-4 md:py-6",
          borderTop ? "border-t border-[var(--border)]" : "",
        ].join(" ")}>
        <LogosGrid logos={logos} />
      </div>
    </>
  );
}

function SplitRow({ subs, borderTop }: any): any {
  return (
    <>
      {/* เว้นคอลัมน์ซ้ายตามเลย์เอาต์ */}
      <div
        className={[
          "border-r border-[var(--border)]",
          borderTop ? "border-t border-[var(--border)]" : "",
        ].join(" ")}
      />

      {/* ขวา: 2 หมวดย่อย */}
      <div
        className={[
          "grid grid-cols-1 md:grid-cols-2",
          borderTop ? "border-t border-[var(--border)]" : "",
        ].join(" ")}>
        {subs.map((s: any) => (
          <div
            key={s.title}
            className={[
              "border-[var(--border)]",
              "md:border-l first:md:border-l-0 border-t md:border-t-0",
            ].join(" ")}>
            <div className="px-6 desktop:px-8 py-6 desktop:py-8">
              <h3 className="text-lg md:text-xl font-extrabold leading-snug">
                {breakTwoLines(s.title)}
              </h3>
            </div>
            <div className="border-t border-[var(--border)] px-4 md:px-6 py-4 md:py-6">
              <LogosGrid logos={s.logos} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ---------- UI Bits ---------- */

function LogosGrid({ logos }: any): any {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
      {logos?.map((l: any) => (
        <div
          key={l.alt}
          className="aspect-[3/2] w-full border border-[var(--border)] bg-[var(--background)] grid place-items-center p-3"
          title={l.alt}>
          <img
            src={l.src}
            alt={l.alt}
            className="max-h-full max-w-full object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
}

function breakTwoLines(text: any): any {
  const parts = String(text).split(" ");
  const mid = Math.ceil(parts.length / 2);
  return (
    <>
      {parts.slice(0, mid).join(" ")}
      <br />
      {parts.slice(mid).join(" ")}
    </>
  );
}
