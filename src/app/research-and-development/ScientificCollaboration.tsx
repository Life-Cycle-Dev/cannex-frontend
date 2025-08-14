"use client";

type PartnerBlock = {
  title: string;
  subtitle: string;
  body: string;
};

const PARTNERS: PartnerBlock[] = [
  {
    title: "Thai universities and",
    subtitle: "medical institutes",
    body: "for preclinical studies, lab testing,\nand pilot trials",
  },
  {
    title: "Japanese chemical",
    subtitle: "companies",
    body: "for advanced separation,\nformulation, and THC remediation",
  },
  {
    title: "International",
    subtitle: "medical brands",
    body: "co-developing patient-ready\nproducts for export",
  },
];

export default function ScientificCollaboration() {
  return (
    <section
      id="scientific-collaboration"
      aria-labelledby="scientific-collaboration-title"
      className="bg-white text-foreground">
      {/* Heading */}
      <div className="mx-auto w-full  px-6 desktop:px-8 py-10 desktop:py-14">
        <h2
          id="scientific-collaboration-title"
          className="text-4xl tablet:text-5xl desktop:text-6xl font-bold leading-tight">
          <span>Scientific Collaboration</span>
          <br />
        </h2>{" "}
        <span>We partner with</span>
      </div>

      {/* Top divider */}
      <div className="h-px w-full bg-neutral200" aria-hidden="true" />

      {/* Table-style grid */}
      <div
        role="table"
        className="w-full grid grid-cols-1 tablet:grid-cols-3 border-x border-b border-neutral200">
        {PARTNERS.map((p, i) => (
          <div
            key={i}
            role="row"
            className={
              i < PARTNERS.length - 1 ? "border-r border-neutral200" : ""
            }>
            <div role="cell" className="p-5">
              <h3 className="text-xl tablet:text-2xl font-bold leading-snug">
                {p.title}
                <br />
                {p.subtitle}
              </h3>
            </div>
            <div
              role="cell"
              className="border-t border-neutral200 p-5 text-sm tablet:text-base text-foreground/80 whitespace-pre-line">
              {p.body}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom divider */}
      <div className="h-px w-full bg-neutral200" aria-hidden="true" />
    </section>
  );
}
