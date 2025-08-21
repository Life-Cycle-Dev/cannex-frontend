/* eslint-disable @next/next/no-img-element */
"use client";

type Alliance = { flag: string; title: string; bullets: string[] };

const ALLIANCES: Alliance[] = [
  {
    flag: "/partnership/icon/usa-flag.png",
    title: "Cannex Pharma (USA)",
    bullets: [
      "Founded by the team behind Cookies Maywood",
      "Exclusive cannabis genetics & premium cultivation know-how",
      "Brand-building and operational excellence from California",
      "Export-oriented cultivation and compliance leadership",
    ],
  },
  {
    flag: "/partnership/icon/jp-flag.png",
    title: "Japanese Pharmaceutical Partners",
    bullets: [
      "Advanced extraction, crystallization, and chromatography",
      "Engineering systems for THC-free certification (≤10 ppm)",
      "Co-formulation and lab-grade precision",
    ],
  },
  {
    flag: "/partnership/icon/th-flag.png",
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
      <section
        aria-labelledby="alliances-title"
        className="w-full border-t-2 border-b-2  border-black"
      >
        <div className="border-black  py-[20px] desktop:px-[80px] desktop:py-[64px]">
          <h1
            id="alliances-title"
            className="text-3xl tablet:text-4xl desktop:text-5xl font-extrabold leading-tight mx-[20px]"
          >
            Our Key Strategic
            <br />
            Alliances
          </h1>
        </div>
        <div className="mt-[20px] desktop:hidden border-t-[2px] border-black">
          <div className="relative w-full aspect-[16/10]">
            <img
              src="/partnership/Image.png"
              alt="Image | Cannex"
              className="object-cover"
            />
          </div>
        </div>
        {/* Grid: ซ้าย/ขวา */}
        <div className="grid grid-cols-1 desktop:grid-cols-2">
          {/* LEFT: 3 บล็อก */}
          <div className="border-black">
            {ALLIANCES.map((a) => (
              <AllianceItem key={a.title} data={a} />
            ))}
          </div>

          {/* RIGHT: รูปภาพ */}
          <div className="hidden desktop:block desktop:row-span-3 border-l-2 border-black">
            <div className="relative w-full h-full border-t-[2px]">
              <img
                src="/partnership/Image.png"
                alt="Image | Cannex"
                className="object-cover "
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ---------- Subcomponent ---------- */
function AllianceItem({ data }: { data: Alliance }) {
  return (
    <div className="border-black border-t-2 border-b-0 mx-[20px] desktop:mx-0">
      <div
        className={`
          pb-[32px]
          pt-[32px]           
          desktop:pt-0
          desktop:px-[80px]
        `}
      >
        <h3 className="mt-0 desktop:mt-[32px] text-xl desktop:text-2xl font-extrabold leading-snug flex items-start gap-3">
          <span aria-hidden className="relative w-6 h-6 flex-shrink-0">
            <img src={data.flag} alt={data.title} className="object-contain" />
          </span>
          <span>{data.title}</span>
        </h3>

        <ul className="mt-3 space-y-1 text-sm desktop:text-[15px] text-neutral-900">
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
