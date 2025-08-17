"use client";

type PartnerBlock = {
  title: string;
  body: string;
};

const PARTNERS: PartnerBlock[] = [
  {
    title: "Thai universities and medical institutes",
    body: "for preclinical studies, lab testing, and pilot trials",
  },
  {
    title: "Japanese chemical companies",
    body: "for advanced separation, formulation, and THC remediation",
  },
  {
    title: "International medical brands",
    body: "co-developing patient-ready products for export",
  },
];

export default function ScientificCollaboration() {
  return (
    <section
      id="scientific-collaboration"
      aria-labelledby="scientific-collaboration-title"
      className="bg-white text-foreground px-5 tablet:p-0 tablet:border-t-[2px]"
    >
      {/* Heading */}
      <div className="w-full border-t-[2px] tablet:border-none py-10 tablet:p-[80px_80px_32px_80px] flex flex-col gap-4">
        <p className="text-[40px] tablet:text-[52px] font-bold leading-[]">
          Scientific Collaboration
        </p>
        <p className="tablet:text-xl font-medium leading-[125%]">
          We partner with
        </p>
      </div>

      <div
        role="table"
        className="w-full grid tablet:grid-cols-3 border-b-[2px]"
      >
        {/* Title row */}
        {PARTNERS.map((p, i) => (
          <div
            key={`title-${i}`}
            role="cell"
            className="border-t-[2px] tablet:border-r-[2px] py-6 tablet:py-4 tablet:px-20 text-[32px] font-bold leading-[120%] flex items-center"
          >
            {p.title}
          </div>
        ))}

        {/* Body row */}
        {PARTNERS.map((p, i) => (
          <div
            key={`body-${i}`}
            role="cell"
            className="border-t-[2px] tablet:border-r-[2px] py-6 tablet:py-8 tablet:px-20 text-xl font-medium leading-[125%] whitespace-pre-line"
          >
            {p.body}
          </div>
        ))}
      </div>
    </section>
  );
}
