"use client";

import ScrollReveal from "@/components/animation/ScrollReveal";
import { getClassNameAnimation } from "@/utils/animation-helper";

type Bullet = { strong?: string; text: string };

const OFFER: Bullet[] = [
  { strong: "OEM / White-label", text: " product development" },
  { strong: "R&D collaboration", text: " with clinical or academic focus" },
  {
    strong: "Supply chain integration",
    text: " with batch tracking and QA/QC access",
  },
  {
    strong: "Regulatory support",
    text: " for market entry (EU, JP, AU, etc.)",
  },
  {
    strong: "Brand partnership or licensing",
    text: " using Cannex formulation IP",
  },
];

const AUDIENCE: Bullet[] = [
  { text: "Pharmaceutical distributors" },
  { text: "Research institutions and hospitals" },
  { text: "Government regulators" },
  { text: "Consumer health and nutraceutical brands" },
  { text: "Licensed cannabis operators" },
];

export default function OfferAndAudience() {
  return (
    <section className="w-full bg-white text-[var(--foreground)] border-black">
      <div className="grid grid-cols-1 desktop:grid-cols-2">
        {/* LEFT */}
        <ScrollReveal once>
          {(show) => (
            <div
              className={getClassNameAnimation(
                show,
                500,
                "opacity-0 -translate-x-20",
                "opacity-100 translate-x-0",
              )}
            >
              <Column
                titleA="What We Offer"
                titleB="Our Partners"
                bullets={OFFER}
                showLeftBorder={false}
              />
            </div>
          )}
        </ScrollReveal>

        {/* RIGHT */}
        <ScrollReveal once>
          {(show) => (
            <div
              className={getClassNameAnimation(
                show,
                1000,
                "opacity-0 translate-x-20",
                "opacity-100 translate-x-0",
              )}
            >
              <Column
                titleA="Who We"
                titleB="Work With"
                bullets={AUDIENCE}
                showLeftBorder
              />
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ---------- Subcomponents ---------- */

function Column({
  titleA,
  titleB,
  bullets,
  showLeftBorder,
}: {
  titleA: string;
  titleB: string;
  bullets: Bullet[];
  showLeftBorder?: boolean;
}) {
  return (
    <div className={showLeftBorder ? "desktop:border-l-2" : ""}>
      {/* Padding: mobile 20/32, desktop 80/64 */}
      <div className="px-[20px] py-[32px] desktop:px-[80px] desktop:py-[64px]">
        {/* Heading */}
        <h3 className="text-[48px] tablet:text-[52px] desktop:text-5xl font-extrabold leading-tight">
          {titleA}
          <br />
          {titleB}
        </h3>

        {/* Divider under heading */}
        <div className="mt-6 h-[1px] w-full bg-black" />

        {/* Bullets */}
        <ul className="mt-2">
          {bullets.map((b, i) => (
            <li key={i} className="py-4 text-[16px]">
              {b.strong ? (
                <span className="font-bold">{b.strong}</span>
              ) : null}
              {b.text}
              <div className="mt-4 h-[1px] w-full bg-black" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
