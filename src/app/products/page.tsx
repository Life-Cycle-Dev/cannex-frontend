"use client";

import CannexSvg from "@/components/icons/CannexSvg";
import SupportingInformation from "@/components/SupportingInformation";
import WrapUp from "@/components/WrapUp";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";

const products = [
  {
    title: "Premium\nCanabis Flower",
    img: "/product/product-flower.png",
    subTittle: "Cultivated by California experts. Certified for medical use.",
    description:
      "Our cannabis flowers are cultivated indoors at our Bangkok site by California growers from Cookies Maywood. Each batch is carefully grown, harvested, and cured to retain terpene richness and potency.",
    details: [
      "Grown under Thai GACP and EU-GACP standards (SGS certified)",
      "Over 21+ exclusive strains including Gary Payton, Cereal Milk, and London Pound Cake",
      "Optimized for export to EU and Japan",
      "Packaged for wholesale or formulation use",
    ],
    disclaimer:
      "For brands and medical programs seeking true genetic quality and consistency.",
  },
  {
    title: "CBD Isolate [Crystal Powder]",
    img: "/product/product-isolate.png",
    subTittle: "Ultra-pure. THC-Free. Ready for global formulation.",
    description:
      "Our pharmaceutical-grade CBD isolate is extracted using advanced Japanese technology and crystallized to ≥99% purity — with 0.0% THC content. Ideal for blending into wellness, nutraceutical, and therapeutic products where precision and compliance matter most.",
    details: [
      "THC-free (≤10 ppm)",
      "Verified by in-house HPLC and LC-MS/MS testing",
      "Suitable for the EU, Japan, and Australia markets",
      "Packaged for formulation, capsules, beverages, and more",
    ],
    disclaimer: "Precision in every gram. Confidence in every batch.",
  },
  {
    title: "Medical Cannabis Oil",
    img: "/product/product-oil.png",
    subTittle: "Standardized. THC-Free. Clinically oriented.",
    description:
      "Cannex oils are developed in our ISO Class 7 cleanroom facility under strict PIC/S GMP conditions. Each batch is standardized for consistent cannabinoid content and tailored for healthcare and medical applications.",
    details: [
      "Available in Full Spectrum, Broad Spectrum, or THC-free",
      "Designed for tinctures, soft gels, and vapes",
      "Lab-tested for cannabinoid profiles and contaminants",
      "Customizable per regulatory requirement (e.g., EU, JP)",
    ],
    disclaimer: "For medical programs demanding consistency and compliance.",
  },
  {
    title: "Custom Formulation",
    img: "/product/product-custom.png",
    subTittle: "Your Formula. Our Precision.",
    description:
      "We partner with brands and medical license holders to co-develop proprietary cannabinoid products — from R&D to scaled manufacturing. Whether you seek a unique terpene profile or minor cannabinoid blend, our lab and QA/QC ecosystem ensures your vision becomes a viable, compliant product.",
    details: [
      "Minor cannabinoids (CBG, CBN, CBC) separation",
      "Terpene reconstitution for flavor and efficacy",
      "Packaging & dosage system consulting",
      "Co-branding or white-label options are available",
    ],
    disclaimer:
      "Turn your formulation into a market-ready medical product — with Cannex behind it.",
  },
];

export default function Page() {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
    });
  }, []);
  return (
    <div>
      <div className="p-[32px_20px_16px_20px] tablet:p-[64px_80px_48px_80px] flex flex-col gap-6">
        <p
          data-aos="fade-down"
          className="text-[46px] tablet:text-7xl font-bold leading-[110%]"
        >
          Products
        </p>
        <div className="flex flex-col tablet:flex-row gap-4 tablet:justify-between">
          <div className="text-[40px] tablet:text-[52px] font-bold leading-[110%] text-black flex flex-col gap-2">
            <p className="tablet:hidden bg-crystalGreen w-fit">
              Pharmaceutical-
            </p>
            <p className="tablet:hidden bg-crystalGreen w-fit">
              Grade Products
            </p>
            <p className="hidden tablet:block bg-crystalGreen w-fit">
              Pharmaceutical- Grade Products
            </p>
            <p className="tablet:hidden bg-white w-fit">Designed for</p>
            <p className="tablet:hidden bg-white w-fit">Global Markets.</p>
            <p className="hidden tablet:block bg-white w-fit">
              Designed for Global Markets.
            </p>
          </div>
          <p
            data-aos="fade-right"
            className="font-medium leading-[125%] w-full tablet:w-[405px]"
          >
            From full-spectrum flower to zero-THC CBD isolate, Cannex delivers
            reliable, precisely formulated products developed for pharmacies,
            healthcare providers, and wellness innovators across Europe, Asia,
            and Oceania.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="w-full h-[375px] tablet:h-[720px]">
          <Image
            src="/product-banner.jpg"
            alt="product banner"
            width={1440}
            height={961}
            className="w-full h-full object-cover"
            quality={100}
            priority
          />
        </div>
        <CannexSvg className="absolute bottom-0 w-full fill-black" />
      </div>
      <div>
        {products.map((product, idx) => (
          <div
            key={idx}
            className={`border-t-[2px] grid tablet:grid-cols-2 ${
              idx % 2 === 1
                ? "tablet:[&>*:first-child]:order-2 [&>*:last-child]:order-1"
                : ""
            }`}
          >
            <div
              className={`w-full relative border-b-[2px] tablet:border-b-0 p-[42px] tablet:p-20 
                  ${idx % 2 === 1 ? "" : "tablet:border-r-[2px]"}`}
            >
              <Image
                src={product.img}
                alt={product.title}
                className="w-full h-full object-contain"
                width={360}
                height={360}
                quality={95}
                priority
              />
            </div>

            <div
              className={`p-[32px_20px_16px_20px] tablet:p-[96px_80px_92px_64px] w-full flex flex-col gap-8
                ${idx % 2 === 0 ? "" : "tablet:border-r-[2px]"}`}
            >
              <p className="text-[40px] tablet:text-[52px] font-bold leading-[110%] whitespace-pre-line">
                {product.title}
              </p>
              <p className="font-bold text-2xl leading-[120%]">
                {product.subTittle}
              </p>
              <p className="font-medium leading-[125%]">
                {product.description}
              </p>

              <div className="font-medium leading-[125%] tablet:grid tablet:grid-cols-2 border-t-2 border-l-2 border-r-2">
                {product.details.map((detail, index) => (
                  <div
                    key={index}
                    className={`p-4 tablet:px-6 border-b-2
                       ${index % 2 === 0 ? "tablet:border-r-2" : ""}`}
                  >
                    {detail}
                  </div>
                ))}
              </div>

              <p className="font-medium leading-[125%]">{product.disclaimer}</p>
            </div>
          </div>
        ))}
      </div>

      <SupportingInformation />
      <WrapUp />
    </div>
  );
}
