"use client";

import Image from "next/image";
import React from "react";
import Button from "./Button";
import PhoneIcon from "./icons/PhoneIcon";
import Link from "next/link";
import { MENUS, SOCIAL_MEDIAS } from "@/utils/constant";
import ArrowUp from "./icons/ArrowUp";

export default function Footer() {
  return (
    <>
      <div className="w-full border-t-[2px] pt-12 px-5 tablet:px-20 flex flex-col tablet:flex-row gap-12">
        <div className="flex flex-col gap-10 max-w-[406px]">
          <div className="flex flex-col gap-10">
            <Image
              src="/logo-default.svg"
              alt="Cannex Logo"
              width={200}
              height={40}
            />
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="font-bold">Cannex Laboratory Company Limited</p>
                <p className="font-medium">
                  [HQ] 32/27 Sino-Thai Tower, 6F, Sukhumvit 21 Rd. (Asok),
                  Klongtoey-Nua, Wattana, Bangkok 10110, Thailand
                </p>
                <p className="font-medium">
                  [Lab] B1.2, 408/7, Moo.7, Sukhumvit Rd., Bangpoo Mai, Mueang
                  Samut Prakan, Samut Prakan 10280, Thailand
                </p>
                <p className="font-medium">TAX ID 0105564162586</p>
              </div>
              <Button
                text="+66(0)2-260-2800"
                type="secondaryBlack"
                width="w-full tablet:w-fit"
                prefixIcon={<PhoneIcon />}
              />
            </div>
          </div>
          {
            <div className="flex gap-6">
              {SOCIAL_MEDIAS.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
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
      <div className="mt-8 border-y-[2px] py-6 px-5 tablet:px-20 flex flex-col gap-8 tablet:flex-row tablet:justify-between tablet:items-center">
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
