/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Button from "@/components/Button";
import Contact from "@/components/homepage/Contact";
import EmailIcon from "@/components/icons/EmailIcon";
import PhoneIcon from "@/components/icons/PhoneIcon";
import Map from "@/components/Map";
import { useHelperContext } from "@/components/providers/helper-provider";
import { ContactConfig } from "@/types/web-config";

import React, { useEffect, useState } from "react";

export default function Page() {
  const { backendClient } = useHelperContext()();
  const [contactInfo, setContactInfo] = useState<ContactConfig>();

  const fetchData = async () => {
    const response = await backendClient.getContactConfig();
    if (response) {
      setContactInfo(response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full">
        <div className="w-full">
          <div className="relative w-full h-[375px] tablet:h-[590px]">
            <img
              src="/asset/contact-banner-img.webp"
              alt="Image | Cannex"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative bg-white border-b-[2px] tablet:border-b-0 mx-5 -mt-[153px] tablet:-mt-[234px] tablet:mx-20">
            <div className="p-6 tablet:p-[64px_64px_0px_64px] flex flex-col gap-2">
              <h1 className="text-[46px] tablet:text-7xl font-bold leading-[110%]">
                Connect with Cannex
              </h1>
              <h2 className="font-medium w-full">
                Whether you&apos;re a licensed importer, healthcare
                professional, research institution,
                <br className="hidden tablet:block" /> or investor — we’re here
                to build lasting value together.
              </h2>
            </div>
            <div className="px-6 pt-4 pb-10 tablet:p-[32px_64px_32px_64px] flex flex-col tablet:flex-row tablet:items-end gap-8 tablet:gap-0">
              <div className="w-full gap-2">
                <p className="text-[14px] font-bold">Business Inquiries</p>
                <p className="text-2xl tablet:text-[32px] font-bold">
                  {contactInfo?.companyName}
                </p>
              </div>
              <div className="w-full flex flex-col tablet:flex-row flex-wrap gap-4 tablet:gap-6">
                <Button
                  text={contactInfo?.phone ?? ""}
                  type="secondaryBlack"
                  className="w-full tablet:w-fit shrink-0"
                  prefixIcon={<PhoneIcon />}
                  onClick={() => {
                    if (contactInfo?.phone) {
                      window.location.href = `tel:${contactInfo.phone}`;
                    }
                  }}
                />
                <Button
                  text={contactInfo?.email ?? ""}
                  type="secondaryBlack"
                  className="w-full tablet:w-fit shrink-0"
                  prefixIcon={<EmailIcon />}
                  onClick={() => {
                    if (contactInfo?.email) {
                      window.location.href = `mailto:${contactInfo.email}`;
                    }
                  }}
                />
              </div>
            </div>
            <div className="mt-8 tablet:mt-0 flex flex-col tablet:flex-row px-6 tablet:px-16 w-full ">
              <div className="w-full border-[2px_0px_2px_0px] tablet:border-[2px_2px_0px_2px]">
                <div className="relative w-full aspect-2/1">
                  <img
                    src="/asset/headquarter-img.webp"
                    alt="Image | Cannex"
                    className="w-full h-full object-cover object-[0px_-55px]"
                  />
                </div>
                <div className="py-8 px-6 border-t-[2px] relative">
                  {contactInfo?.headquarterAddress ?? ""}
                  <p className="text-[20px] text-white font-bold bg-black py-1.5 px-2.5 absolute top-0 left-6 transform -translate-y-1/2">
                    Headquarter
                  </p>
                </div>
              </div>
              <div className="w-full tablet:border-[2px_2px_0px_0px]">
                <div className="relative w-full aspect-2/1">
                  <img
                    src="/asset/lab-img.webp"
                    alt="Image | Cannex"
                    className="w-full h-full object-cover object-[0px_-88px]"
                  />
                </div>
                <div className="py-8 px-6 border-t-[2px] relative">
                  {contactInfo?.labAddress ?? ""}
                  <p className="text-[20px] text-white font-bold bg-black py-1.5 px-2.5 absolute top-0 left-6 transform -translate-y-1/2">
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
    </>
  );
}
