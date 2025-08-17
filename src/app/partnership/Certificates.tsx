/* eslint-disable @next/next/no-img-element */
"use client";

interface Certification {
  title: string;
  authority: string;
  description: string;
  image?: { src: string; alt?: string };
}
interface CertificationCategory {
  category: string;
  items: Certification[];
}
interface CompanyCertifications {
  company: string;
  certifications: CertificationCategory[];
}

/* ---------- Data (ของเดิม) ---------- */
const data: CompanyCertifications = {
  company: "Siam Agri-Bio Co., Ltd.",
  certifications: [
    {
      category: "Hemp Extraction and Manufacturing",
      items: [
        {
          title: "Manufacturing of Hemp-Derived Products",
          authority: "FDA (Thailand)",
          description:
            "Products made from hemp extracts are primarily limited to food and cosmetics. However, if used for other purposes, they must comply with relevant regulations and laws governing those products.",
          image: { src: "/certs/mock-cert.png", alt: "Mock Certificate 1" },
        },
        {
          title: "Manufacturing of Herbal Products Using Herbal Ingredients",
          authority: "FDA (Thailand)",
          description:
            "Herbal Extracts / Liquids / Alcohol Extracts / CBD Oil / Spray-Dried Products / Freeze-Dried Products / Other Ingredients.",
          image: { src: "/certs/mock-cert.png", alt: "Mock Certificate 2" },
        },
        {
          title: "Manufacturing License",
          authority: "IEAT (Industrial Estate Authority of Thailand)",
          description:
            "IEAT is an industrial estate managed by the Thai government, providing a safe, secure, and efficient operating environment where environmental standards and infrastructure are centrally managed by the state.",
          image: { src: "/certs/mock-cert.png", alt: "IEAT License" },
        },
        {
          title: "Thai GMP",
          authority: "GMP for Herbal Products Containing Hemp — FDA (Thailand)",
          description:
            "Thai GMP is a manufacturing quality standard ensuring the safety and quality of pharmaceuticals, supplements, and herbal products by regulating facilities, processes, and hygiene management.",
          image: { src: "/certs/mock-cert.png", alt: "Thai GMP Certificate" },
        },
      ],
    },
  ],
};

export default function Certificates() {
  const cat = data.certifications[0];
  const leftItems = cat.items.slice(0, 2); // Left column
  const rightItems = cat.items.slice(2); // Right column

  return (
    <section className="w-full bg-white text-[var(--foreground)]">
      {/* Heading */}
      <div className="px-[20px] desktop:px-[80px] py-[32px] desktop:py-[48px]">
        <h2 className="text-3xl tablet:text-4xl desktop:text-5xl font-extrabold leading-tight desktop:pb-[0px]">
          License and Certification
        </h2>
      </div>
      {/* Full-width divider */}
      <div className="border-b-2 border-black mx-[20px] desktop:mx-0 desktop:w-full" />

      {/* Content */}
      <div>
        <div className="w-full">
          {/* Desktop: 2 columns (right side has the vertical border only) */}
          <div className="desktop:grid desktop:grid-cols-2">
            {/* LEFT COLUMN */}
            <div className="mx-[20px] desktop:px-[80px] desktop:mx-0">
              <h3 className="mt-[40px] text-2xl tablet:text-3xl font-extrabold leading-snug mb-6">
                {cat.category}
              </h3>

              {leftItems.map((it, i) => (
                <div key={it.title} className="py-6">
                  <ItemRow item={it} />
                  {i !== leftItems.length - 1 && (
                    <div className="mt-6  mx-[16px] tablet:mx-[20px] desktop:mx-0" />
                  )}
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN (desktop-only left border) */}
            <div
              className="
                mx-[20px] desktop:mx-0
                desktop:border-l-2 desktop:border-black
                desktop:pl-[40px]
              ">
              <div className="mt-[40px]" />
              {rightItems.map((it, i) => (
                <div key={it.title} className="py-6">
                  <ItemRow item={it} />
                  {i !== rightItems.length - 1 && (
                    <div className="mt-6 border-b-[2px] border-black  tablet:mx-[20px] desktop:mx-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-b-2 border-black mx-[20px] desktop:mx-0 desktop:w-full" />
      </div>
    </section>
  );
}

/* ---------- Subcomponent: รายการรูป+ข้อความ (responsive) ---------- */
function ItemRow({ item }: { item: Certification }) {
  return (
    <div className="grid grid-cols-1 desktop:grid-cols-[180px,1fr] desktop:gap-8 desktop:items-start">
      {/* รูป */}
      {item.image?.src && (
        <div className="border border-black/25 rounded-[6px] overflow-hidden bg-white shadow-sm">
          <img
            src={item.image.src}
            alt={item.image.alt ?? item.title}
            className="block w-full h-auto"
            loading="lazy"
          />
        </div>
      )}

      {/* ข้อความ */}
      <div className="mt-3 desktop:mt-0">
        <h4 className="font-extrabold leading-snug text-lg tablet:text-xl">
          {item.title}
        </h4>
        <div className="mt-1 font-semibold text-sm">{item.authority}</div>
        <p className="mt-2 text-sm leading-relaxed text-neutral-900">
          {item.description}
        </p>
      </div>
    </div>
  );
}
