"use client";

import Button from "@/components/Button";
import Contact from "@/components/Contact";
import EmailIcon from "@/components/icons/EmailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import Map from "@/components/Map";
import Image from "next/legacy/image";
import React from "react";

export default function Page() {
  return (
    <div className="w-full">
      <div className="w-full">
        <div className="relative w-full h-[375px] tablet:h-[590px]">
          <Image
            src="/contact-banner-img.jpg"
            alt="Contact Banner"
            layout="fill"
            className="w-full h-full object-cover"
            width={1920}
            height={400}
            quality={100}
          />
        </div>
        <div className="relative bg-white border-b-[2px] mx-5 -mt-[153px] tablet:-mt-[234px] tablet:mx-20">
          <div className="p-6 tablet:p-[64px_64px_0px_64px] flex flex-col gap-2">
            <p className="text-[46px] tablet:text-7xl font-bold leading-[110%]">
              Connect with Cannex
            </p>
            <p className="font-medium">
              Whether you&apos;re a licensed importer, healthcare professional,
              research institution, or investor — we’re here to build lasting
              value together.
            </p>
          </div>
          <div className="px-6 pt-4 pb-10 tablet:p-[32px_64px_32px_64px] flex flex-col tablet:flex-row items-center gap-8 tablet:gap-0">
            <div className="w-full gap-2">
              <p className="text-[14px] font-bold">Business Inquiries</p>
              <p className="text-2xl tablet:text-[32px] font-bold">
                Cannex Lab Co., Ltd.
              </p>
            </div>
            <div className="w-full flex flex-col tablet:flex-row flex-wrap gap-4 tablet:gap-6">
              <Button
                text="+66(0)2-260-2800"
                type="secondaryBlack"
                className="w-full tablet:w-fit shrink-0"
                prefixIcon={<PhoneIcon />}
              />
              <Button
                text="info@cannex-g.com"
                type="secondaryBlack"
                className="w-full tablet:w-fit shrink-0"
                prefixIcon={<EmailIcon />}
              />
            </div>
          </div>
          <div className="mt-8 flex flex-col tablet:flex-row px-6 tablet:px-16 w-full ">
            <div className="w-full border-[2px_0px_2px_0px] tablet:border-[2px_2px_0px_2px]">
              <div className="relative w-full h-[324px]">
                <Image
                  src="/headquarter-img.png"
                  alt="headquarter"
                  className="w-full h-full object-cover"
                  layout="fill"
                  width={1920}
                  height={400}
                  quality={100}
                />
              </div>
              <div className="py-8 px-6 border-t-[2px] relative">
                32/27 Sino-Thai Tower, 6F, Sukhumvit 21 Rd. (Asok),
                Klongtoey-Nua, Wattana, Bangkok 10110, Thailand
                <p className="text-[20px] text-white font-bold bg-black py-2.5 px-2.5 absolute top-0 left-6 transform -translate-y-1/2">
                  Headquarter
                </p>
              </div>
            </div>
            <div className="w-full tablet:border-[2px_2px_0px_0px]">
              <div className="relative w-full h-[324px]">
                <Image
                  src="/lab-img.png"
                  alt="lab"
                  className="w-full h-full object-cover"
                  layout="fill"
                  width={1920}
                  height={400}
                  quality={100}
                />
              </div>
              <div className="py-8 px-6 border-t-[2px] relative">
                B1.2, 408/7, Moo.7, Sukhumvit Rd., Bangpoo Mai, Mueang Samut
                Prakan, Samut Prakan 10280, Thailand
                <p className="text-[20px] text-white font-bold bg-black py-2.5 px-2.5 absolute top-0 left-6 transform -translate-y-1/2">
                  Lab
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Map />
    </div>
  );
}
