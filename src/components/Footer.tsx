/* eslint-disable @next/next/no-img-element */
/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import PhoneIcon from "./icons/PhoneIcon";
import Link from "next/link";
import { MENUS, SOCIAL_MEDIAS } from "@/utils/constant";
import ArrowUp from "./icons/ArrowUp";
import { useHelperContext } from "./providers/helper-provider";
import { ContactConfig } from "@/types/web-config";

export default function Footer() {
  const { backendClient, isFooterBorder } = useHelperContext()();
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

  useEffect(() => {}, [isFooterBorder]);

  return (
    <>
      {isFooterBorder && (
        <div className="flex justify-center">
          <div className="h-[2px] w-[calc(100vw-40px)] tablet:w-full bg-black"></div>
        </div>
      )}
      <div className="w-full pt-12 py-4 px-5 tablet:pb-0 tablet:px-20 flex flex-col tablet:flex-row gap-12">
        <div className="flex flex-col gap-10 max-w-[406px]">
          <div className="flex flex-col gap-10">
            <div className="w-[200px]">
              <img src="/logo-default.webp" alt="Image | Cannex" />
            </div>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">Cannex Laboratory Company Limited</p>
                <p className="font-medium">
                  [HQ] {contactInfo?.headquarterAddress}
                </p>
                <p className="font-medium">[Lab] {contactInfo?.labAddress}</p>
                <p className="font-medium">TAX ID {contactInfo?.taxId}</p>
              </div>
              <Button
                text={contactInfo?.phone ?? ""}
                type="secondaryBlack"
                href={`tel:${contactInfo?.phone}`}
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
                  href={contactInfo?.[social?.key] ?? ""}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group overflow-hidden p-0.5 font-bold text-black hover:text-crystalGreen"
                >
                  <div className="absolute inset-0 bg-black -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-[-10]" />
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
                  className="relative group overflow-hidden my-[14px] px-1 text-black hover:text-crystalGreen font-medium w-fit"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-black -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-[-10]" />
                  {menu.title}
                </Link>
              ))}
            </div>
            <div className="flex flex-col">
              {MENUS.slice(3).map((menu) => (
                <Link
                  key={menu.path}
                  href={menu.path}
                  className="relative group overflow-hidden my-[14px] px-1 text-black hover:text-crystalGreen font-medium w-fit"
                  rel="noopener noreferrer"
                >
                  <div className="absolute inset-0 bg-black -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-[-10]" />
                  {menu.title}
                </Link>
              ))}
              <Link
                href="/contact"
                className="relative group overflow-hidden my-[14px] px-1 text-black hover:text-crystalGreen font-medium w-fit"
                rel="noopener noreferrer"
              >
                <div className="absolute inset-0 bg-black -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-[-10]" />
                Contact Us & Inquiry
              </Link>
            </div>
          </div>
          <div className="w-full tablet:w-fit flex justify-end">
            <button
              className="group overflow-hidden relative w-12 h-12 hover:bg-black flex items-center justify-center text-black hover:text-crystalGreen cursor-pointer"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div
                className="
                  absolute transition-transform duration-500 ease-out 
                  group-hover:-translate-y-10 group-hover:text-black
                "
              >
                <ArrowUp />
              </div>
              <div
                className="
                  absolute transition-transform duration-500 ease-out
                  text-crystalGreen translate-y-10 group-hover:translate-y-0
                "
              >
                <ArrowUp />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="tablet:mt-8 border-y-[2px] py-6 px-5 tablet:px-20 flex flex-col gap-8 tablet:flex-row tablet:justify-between tablet:items-center">
        <div className="flex gap-6">
          <Link
            href="/privacy-policy"
            target="_blank"
            className="relative group overflow-hidden p-0.5 font-bold text-black hover:text-crystalGreen"
          >
            <div className="absolute inset-0 bg-black -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-[-10]" />
            Privacy Policy
          </Link>
          <Link
            href="/terms-of-use"
            target="_blank"
            className="relative group overflow-hidden p-0.5 font-bold text-black hover:text-crystalGreen"
          >
            <div className="absolute inset-0 bg-black -translate-x-[110%] group-hover:translate-x-0 transition-transform duration-500 ease-out z-[-10]" />
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
