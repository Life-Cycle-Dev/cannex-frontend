"use client";

import Image from "next/image";

/* ---------- Data ---------- */
type Alliance = { flag: string; title: string; bullets: string[] };

const ALLIANCES: Alliance[] = [
  {
    flag: "🇺🇸",
    title: "Cannex Pharma (USA)",
    bullets: [
      "Founded by the team behind Cookies Maywood",
      "Exclusive cannabis genetics & premium cultivation know-how",
      "Brand-building and operational excellence from California",
      "Export-oriented cultivation and compliance leadership",
    ],
  },
  {
    flag: "🇯🇵",
    title: "Japanese Pharmaceutical Partners",
    bullets: [
      "Advanced extraction, crystallization, and chromatography",
      "Engineering systems for THC-free certification (≤10 ppm)",
      "Co-formulation and lab-grade precision",
    ],
  },
  {
    flag: "🇹🇭",
    title: "Siam Agri-Bio (Thailand)",
    bullets: [
      "PIC/S GMP-certified facility for extraction & production",
      "Regional supply hub for APAC",
      "Compliant with Thai FDA and aligned with EU-GMP roadmap",
    ],
  },
];

/* ---------- Page ---------- */
export default function Home() {
  return (
    <main className="bg-white text-[var(--foreground)]">
      {/* กรอบนอก */}
      <section
        aria-labelledby="alliances-title"
        className="w-full border-t-2  border-black">
        {/* Title */}
        <div className="border-black px-[80px] py-[64px]">
          <h1
            id="alliances-title"
            className="text-3xl tablet:text-4xl desktop:text-5xl font-extrabold leading-tight">
            Our Key Strategic
            <br />
            Alliances
          </h1>
        </div>

        {/* Grid: ซ้าย/ขวา */}
        <div className="grid grid-cols-1 desktop:grid-cols-2">
          {/* LEFT: 3 บล็อก */}
          <div className="border-black">
            {ALLIANCES.map((a, i) => (
              <AllianceItem key={a.title} data={a} isFirst={i === 0} />
            ))}
          </div>

          {/* RIGHT: รูปภาพ */}
          <div className="desktop:row-span-3 border-t-2 desktop:border-t-0 desktop:border-l-2 border-black">
            {/* ปรับคอนเทนเนอร์: ใช้ aspect ratio บนจอเล็ก / ให้เต็มคอลัมน์บนเดสก์ท็อปโดยไม่ยัด min-h เกินจริง */}
            <div className="relative w-full aspect-[16/10] desktop:aspect-auto desktop:h-full border-t-2">
              <Image
                src="/partners/Image.png" // ใช้รูปความละเอียดสูง (แนะนำ ≥1600px กว้าง)
                alt="Scientists in cleanroom gear"
                fill
                priority
                quality={90}
                sizes="(min-width: 1280px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Subcomponent ---------- */
function AllianceItem({
  data,
  isFirst,
}: {
  data: Alliance;
  isFirst?: boolean;
}) {
  return (
    <div
      className={[
        "border-black",
        isFirst ? "border-t-2" : "border-t-2",
        "border-b-0",
      ].join(" ")}>
      <div className="px-[80px] pt-[32px] pb-[32px]">
        <h3 className="mt-0 desktop:mt-[32px] text-xl desktop:text-2xl font-extrabold leading-snug flex items-start gap-3">
          <span aria-hidden className="text-2xl">
            {data.flag}
          </span>
          <span>{data.title}</span>
        </h3>

        <ul className="mt-3 space-y-1 text-sm desktop:text-[15px] text-neutral900">
          {data.bullets.map((b, i) => (
            <li key={i} className="pl-4 relative leading-relaxed">
              <span className="absolute left-0 top-2 block w-1 h-1 rounded-full bg-black" />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}


