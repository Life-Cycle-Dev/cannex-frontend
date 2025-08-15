/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

const data: any = [
  {
    splitRow: true,
    subCategories: [
      {
        title: "Market Analysis and Planning",
        logos: [
          { src: "/rnd/pather/image 10.png", alt: "Image 10" },
          { src: "/rnd/pather/image 11.png", alt: "Image 11" },
          { src: "/rnd/pather/image 12.png", alt: "Image 12" },
        ],
      },
      {
        title: "Variety Improvement and Cultivation",
        logos: [
          { src: "/rnd/pather/image 13.png", alt: "Image 13" },
          { src: "/rnd/pather/image 14.png", alt: "Image 14" },
        ],
      },
    ],
    logos: [],
  },
  {
    title: "Technology and Engineering",
    logos: [
      { src: "/rnd/pather/image 15.png", alt: "Daicel" },
      { src: "/rnd/pather/image 16.png", alt: "JT" },
      { src: "/rnd/pather/image 17.png", alt: "Mitsubishi Chemical Group" },
      { src: "/rnd/pather/image 18.png", alt: "KMITL" },
      { src: "/rnd/pather/image 19.png", alt: "Mighty Engineering" },
    ],
  },
  {
    title: "Analysis, Testing and Clinical Trials",
    logos: [
      { src: "/rnd/pather/Frame 170.png", alt: "Thammasat University" },
      { src: "/rnd/pather/image 21.png", alt: "Medical Partner 21" },
      { src: "/rnd/pather/image 22.png", alt: "NCTC" },
      { src: "/rnd/pather/image 23.png", alt: "Shimadzu" },
      { src: "/rnd/pather/image 24.png", alt: "Bara Scientific" },
    ],
  },
];

export default function PartnersMatrix(): any {
  return (
    <section className="w-full bg-white text-foreground">
      <div className="w-full px-0">
        <div className="h-px w-full bg-neutral200" />
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
            ),
          )}
        </div>
        <div className="h-px w-full bg-neutral200" />
      </div>
    </section>
  );
}

function Row({ title, logos, borderTop }: any): any {
  return (
    <>
      <div
        className={[
          "md:col-span-2 w-full",
          borderTop ? "border-t border-neutral200" : "",
        ].join(" ")}>
        <div className="grid grid-cols-1 md:grid-cols-[420px_1fr]">
          <div className="px-6 desktop:px-8 py-6 desktop:py-8">
            <h3 className="text-lg md:text-xl font-extrabold leading-snug">
              {breakTwoLines(title)}
            </h3>
          </div>
          <div />
        </div>
        <div className="h-px w-full bg-neutral200" />
      </div>
      <div className="md:col-span-2 p-0">
        <LogosStrip logos={logos} cols={5} />
      </div>
    </>
  );
}

function LogosStrip({ logos = [] as any[], cols = 5 }: any): any {
  const desktopCols =
    cols === 2
      ? "md:grid-cols-2"
      : cols === 3
      ? "md:grid-cols-3"
      : "md:grid-cols-5";

  const visible = logos.slice(0, cols);

  const mobileCols = 2;
  const mobileRemainder = visible.length % mobileCols;
  const mobileFillerCount = (mobileCols - mobileRemainder) % mobileCols; 
  const desktopFillerCount = Math.max(0, cols - visible.length);

  const cellBorderClass = (iMobile: number, iDesktop: number) => {
    const baseLeft = iMobile % 2 !== 0 ? "border-l" : "border-l-0";
    const baseTop = iMobile >= 2 ? "border-t" : "border-t-0";
    const mdLeft = iDesktop % 5 !== 0 ? "md:border-l" : "md:border-l-0";
    const mdTop = iDesktop >= 5 ? "md:border-t" : "md:border-t-0";
    return `${baseLeft} ${baseTop} ${mdLeft} ${mdTop}`;
  };

  return (
    <div className="w-full border-r border-b border-neutral200">
      <div className={`grid grid-cols-2 ${desktopCols} gap-0 w-full`}>
        {visible.map((l: any, i: number) => (
          <div
            key={i}
            className={`${cellBorderClass(
              i,
              i
            )} border-neutral200 h-[96px] md:h-[112px] desktop:h-[128px] grid place-items-center`}>
            <img
              src={l.src}
              alt={l.alt}
              className="max-h-[70%] max-w-[80%] object-contain"
              loading="lazy"
            />
          </div>
        ))}

        {Array.from({ length: mobileFillerCount }).map((_, k) => {
          const iMobile = visible.length + k;
          return (
            <div
              key={`mf-${k}`}
              className={`${cellBorderClass(
                iMobile,
                0
              )} border-neutral200 h-[96px] md:h-[112px] desktop:h-[128px] grid place-items-center md:hidden`}
            />
          );
        })}

        {Array.from({ length: desktopFillerCount }).map((_, k) => {
          const iDesktop = visible.length + k;
          return (
            <div
              key={`df-${k}`}
              className={`${cellBorderClass(
                0,
                iDesktop
              )} border-neutral200 h-[96px] md:h-[112px] desktop:h-[128px] hidden md:grid place-items-center`}
            />
          );
        })}
      </div>
    </div>
  );
}



function SplitRow({ subs, borderTop }: any): any {
  const left = subs?.[0] ?? { title: "", logos: [] };
  const right = subs?.[1] ?? { title: "", logos: [] };
  const allLogos = [...left.logos, ...right.logos];

  return (
    <div
      className={[
        "md:col-span-2 w-full",
        borderTop ? "border-t border-neutral200" : "",
      ].join(" ")}>
      <div className="md:hidden">
        <Row title={left.title} logos={left.logos} borderTop={false} />
        <Row title={right.title} logos={right.logos} borderTop />
      </div>

      <div className="hidden md:block">
        <div className="grid grid-cols-5 w-full">
          <div className="col-span-3 px-6 desktop:px-8 py-6 desktop:py-8 border-r border-neutral200">
            <h3 className="text-lg md:text-xl font-extrabold leading-snug">
              {breakTwoLines(left.title)}
            </h3>
          </div>
          <div className="col-span-2 px-6 desktop:px-8 py-6 desktop:py-8">
            <h3 className="text-lg md:text-xl font-extrabold leading-snug">
              {breakTwoLines(right.title)}
            </h3>
          </div>
        </div>
        <div className="h-px w-full bg-neutral200" />
        <LogosStrip logos={allLogos} cols={5} />
      </div>
    </div>
  );
}

function LogosGrid({ logos }: any): any {
  const filled = [...logos];
  while (filled.length < 5) filled.push(null);

  return (
    <div className="grid grid-cols-2 md:grid-cols-5 gap-0 w-full">
      {filled.map((l, i) => (
        <div
          key={i}
          className="aspect-[3/2] w-full border border-neutral200 bg-white grid place-items-center p-3">
          {l ? (
            <img
              src={l.src}
              alt={l.alt}
              className="max-h-full max-w-full object-contain"
              loading="lazy"
            />
          ) : null}
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
