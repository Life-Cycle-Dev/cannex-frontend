/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import Image from "next/legacy/image";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import PhoneIcon from "./icons/PhoneIcon";
import Link from "next/link";
import { MENUS, SOCIAL_MEDIAS } from "@/utils/constant";
import ArrowUp from "./icons/ArrowUp";
import { useHelperContext } from "./providers/helper-provider";
import { WebConfig } from "@/types/web-config";

export default function Footer() {
  const { backendClient } = useHelperContext()();
  const [contactInfo, setContactInfo] = useState<WebConfig[]>([]);

  const getContactByKey = (key: string) => {
    const contact = contactInfo.find((item) => item.key === key);
    return contact ? contact.value : "";
  };

  const fetchData = async () => {
    const response = await backendClient.getContactInfo();
    if (response.data) {
      setContactInfo(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-full border-t-[2px] pt-12 py-4 px-5 tablet:pb-0 tablet:px-20 flex flex-col tablet:flex-row gap-12">
        <div className="flex flex-col gap-10 max-w-[406px]">
          <div className="flex flex-col gap-10">
            <div className="w-[200px]">
              <Image
                src="/logo-default.svg"
                alt="Cannex Logo"
                width={200}
                height={40}
                className=""
              />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">Cannex Laboratory Company Limited</p>
                <p className="font-medium">
                  [HQ] {getContactByKey("contact.headquarter-address")}
                </p>
                <p className="font-medium">
                  [Lab] {getContactByKey("contact.lab-address")}
                </p>
                <p className="font-medium">
                  TAX ID {getContactByKey("contact.tax-id")}
                </p>
              </div>
              <Button
                text={getContactByKey("contact.phone")}
                type="secondaryBlack"
                className="w-full tablet:w-fit"
                prefixIcon={<PhoneIcon />}
              />
            </div>
          </div>
          {
            <div className="flex gap-6">
              {SOCIAL_MEDIAS.map((social) => (
                <Link
                  key={social.name}
                  href={getContactByKey(social.key)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-0.5 font-bold text-black hover:text-crystalGreen bg-white hover:bg-black"
                >
                  {social.name}
                </Link>
              ))}
            </div>
          }
        </div>
        <div className="w-full tablet:flex tablet:pt-20">
          <div className="flex flex-col tablet:hidden">
            {MENUS.map((menu) => (
              <Link
                key={menu.path}
                href={menu.path}
                className="py-[14px] px-1 text-black hover:text-crystalGreen hover:bg-black font-medium w-fit"
                rel="noopener noreferrer"
              >
                {menu.title}
              </Link>
            ))}
          </div>
          <div className="hidden tablet:flex w-full gap-8">
            <div className="flex flex-col">
              {MENUS.slice(0, 3).map((menu) => (
                <Link
                  key={menu.path}
                  href={menu.path}
                  className="py-[14px] px-1 text-black hover:text-crystalGreen hover:bg-black font-medium w-fit"
                  rel="noopener noreferrer"
                >
                  {menu.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              {MENUS.slice(3).map((menu) => (
                <Link
                  key={menu.path}
                  href={menu.path}
                  className="py-[14px] px-1 text-black hover:text-crystalGreen hover:bg-black font-medium w-fit"
                  rel="noopener noreferrer"
                >
                  {menu.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className="py-[14px] px-1 text-black hover:text-crystalGreen hover:bg-black font-medium w-fit"
                rel="noopener noreferrer"
              >
                Contact Us & Inquiry
              </Link>
            </div>
          </div>
          <div className="w-full tablet:w-fit flex justify-end">
            <button
              className="w-12 h-12 hover:bg-black flex items-center justify-center text-black hover:text-crystalGreen cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <ArrowUp />
            </button>
          </div>
        </div>
      </div>
      <div className="tablet:mt-8 border-y-[2px] py-6 px-5 tablet:px-20 flex flex-col gap-8 tablet:flex-row tablet:justify-between tablet:items-center">
        <div className="flex gap-6">
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="p-0.5 font-bold text-black hover:text-crystalGreen bg-white hover:bg-black"
          >
            Privacy Policy
          </Link>
          <Link
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="p-0.5 font-bold text-black hover:text-crystalGreen bg-white hover:bg-black"
          >
            Terms of Use
          </Link>
        </div>
        <p className="font-medium">
          All Rights Reserved Copyright © 2025 Cannex
        </p>
      </div>
    </>
  );
}
