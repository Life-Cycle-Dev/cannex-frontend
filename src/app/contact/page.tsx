"use client";

import Button from "@/components/Button";
import Contact from "@/components/Contact";
import EmailIcon from "@/components/icons/EmailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import Map from "@/components/Map";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="">
      <div className="pb-20 relative overflow-visible">
        <Image
          src="/contact-banner-img.jpg"
          alt="Contact Banner"
          className=""
          width={1920}
          height={400}
          quality={100}
        />
        <div className="bg-white absolute top-[50vh] left-20 right-20">
          <div className="pl-16 pt-16 flex flex-col gap-2">
            <p className="text-7xl font-bold">Connect with Cannex</p>
            <p className="font-medium">
              Whether you&apos;re a licensed importer, healthcare professional,
              research institution, or investor — we’re here to build lasting
              value together.
            </p>
          </div>
          <div className="pl-16 flex items-center">
            <div className="w-full gap-2">
              <p className="text-[14px] font-bold">Business Inquiries</p>
              <p className="text-[32px] font-bold">Cannex Lab Co., Ltd.</p>
            </div>
            <div className="w-full flex gap-6">
              <Button
                text="+66(0)2-260-2800"
                type="secondaryBlack"
                width="w-fit"
                prefixIcon={<PhoneIcon />}
              />
              <Button
                text="info@cannex-g.com"
                type="secondaryBlack"
                width="w-fit"
                prefixIcon={<EmailIcon />}
              />
            </div>
          </div>
        </div>
      </div>

      <Contact />
      <Map />
    </div>
  );
}
