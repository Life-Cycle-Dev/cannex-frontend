// src/components/FocusAreas.tsx
"use client";

import Image from "next/image";

export default function FocusAreas() {
  return (
    <section className="bg-white w-full">
      <div className="w-full">
        {/* กรอบนอก */}
        {/* ลบ desktop:grid-rows-3 ออก เพื่อให้แถว auto สูงตามเนื้อหา */}
        <div className="relative grid grid-cols-1 desktop:grid-cols-3 border border-neutral200 w-full">
          {/* คอลัมน์ซ้าย: ลากยาว 3 แถว (รวมความสูงตามภาพ/ข้อความจริง) */}
          <div className="desktop:row-span-3 p-6 desktop:p-8 border-b desktop:border-b-0 desktop:border-r border-neutral200 flex items-start">
            <h3 className="text-3xl desktop:text-4xl font-bold leading-tight text-black">
              Our Core
              <br />
              Focus Areas
            </h3>
          </div>

          {/* แถว 1 */}
          <CellImage
            src="/rnd/Image 3_4-1.png"
            alt="Cannabinoid research equipment"
            className="desktop:col-start-2"
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
            className="desktop:col-start-3"
          />

          {/* แถว 2 */}
          <CellText
            number="2"
            title="Formulation Development"
            points={[
              "Custom ratios for tinctures, gummies, soft gels, vapes",
              "Product development guided by clinical use cases and global compliance",
              "Terpene profile design for efficacy and flavor control",
            ]}
            className="desktop:col-start-2"
          />
          <CellImage
            src="/rnd/Image 3_4-2.png"
            alt="Precision pipetting in lab"
            className="desktop:col-start-3"
          />

          {/* แถว 3 */}
          <CellImage
            src="/rnd/Image 3_4.png"
            alt="Gloved hand holding sample"
            className="desktop:col-start-2"
          />
          <CellText
            number="3"
            title="Delivery Systems & Packaging"
            points={[
              "Dose-consistent delivery (sublingual, vapor, topical)",
              "Stability testing for export conditions (heat, humidity)",
              "Secure packaging for traceability and patient safety",
            ]}
            className="desktop:col-start-3"
          />
        </div>
      </div>
    </section>
  );
}

/* ---------- Subcomponents ---------- */

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
        // ปล่อยให้สูงตามรูป (ไม่ใส่ h-full / aspect)
        "w-full",
        className,
      ].join(" ")}>
      {/* ใช้ intrinsic size ให้รูปเป็นตัวกำหนดความสูงของ cell */}
      <Image
        src={src}
        alt={alt}
        width={332} // ขนาดฐานที่อยากได้บนเดสก์ท็อป
        height={392}
        className="w-full h-auto object-cover" // กว้างเต็มคอลัมน์ สูงตามสัดส่วนจริง
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
  return (
    <div
      className={[
        "relative p-6 desktop:p-8 border-t border-l border-neutral200 w-full",
        className,
      ].join(" ")}>
      <h4 className="text-xl desktop:text-2xl font-bold text-black">{title}</h4>
      <div className="mt-3 h-px w-16 bg-neutral200" />
      <ul className="mt-4 space-y-2 text-neutral900 text-sm desktop:text-base">
        {points.map((p, i) => (
          <li key={i} className="leading-relaxed">
            {p}
          </li>
        ))}
      </ul>
      <span className="absolute -bottom-3 left-6 desktop:left-8 text-[56px] desktop:text-[72px] leading-none text-black select-none">
        {number}
      </span>
    </div>
  );
}
