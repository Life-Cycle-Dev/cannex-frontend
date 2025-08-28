/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import NavBarBase from "./NavBarBase";
import Hamburger from "./Hamburger";
import Menu from "./Menu";

import Button from "@/components/Button";
import RightUpIcon from "../icons/RightUpIcon";
import { MENUS } from "@/utils/constant";
import { useHelperContext } from "../providers/helper-provider";

export default function NavBar() {
  const { isNavbarSticky } = useHelperContext()();
  const [isOpen, setIsOpen] = useState(false);
  const [isShow, setIsShow] = useState(true);
  const panelId = useId();

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const update = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 80) {
        setIsShow(false);
      } else {
        setIsShow(true);
      }

      lastScrollY = current;
    };

    if (isNavbarSticky) {
      window.addEventListener("scroll", update);
      return () => window.removeEventListener("scroll", update);
    }
  }, [isNavbarSticky]);

  // lock scroll when mobile menu open
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = prev;
      }
    };
  }, [isOpen]);

  // esc to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setIsOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [isOpen]);

  return (
    <header
      className={`w-full top-0 z-50 bg-white text-foreground border-y-2 transition-transform duration-300 ${
        isNavbarSticky &&
        (isShow ? "sticky translate-y-0" : "-translate-y-full")
      }`}
    >
      {/* DESKTOP */}
      <div className="hidden desktop:block">
        <div className="mx-auto flex h-[84px] max-w-[1200px] items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo-default.webp"
              alt="Cannex Logo"
              width={200}
              height={40}
            />
          </Link>
        </div>
        <div className="h-[2px] w-full bg-black" />
        <div className="flex justify-end items-stretch scroll-auto">
          <nav className="w-full flex items-center justify-end">
            <div className="flex items-center justify-end">
              {MENUS.map((m) => (
                <Menu
                  key={m.path}
                  title={m.title}
                  href={m.path}
                  variant="desktop"
                />
              ))}
            </div>
            <div className="w-[296px] text-end">
              <Button
                href="/contact"
                className="h-12 w-fit px-0 cursor-pointer"
                text="Contact Us & Inquiry"
                suffixIcon={<RightUpIcon />}
              />
            </div>
          </nav>
        </div>
      </div>

      {/* MOBILE */}
      <div className="desktop:hidden w-full">
        <NavBarBase isShowLogo={!isOpen}>
          <button
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-controls={panelId}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((s) => !s)}
            className={`w-16 h-16 flex items-center justify-center absolute right-0 ${
              isOpen ? "bg-white" : "bg-black"
            }`}
          >
            <Hamburger state={isOpen ? "close" : "default"} />
          </button>
        </NavBarBase>
      </div>

      {isOpen && (
        <nav
          className="flex flex-col gap-0 p-4 min-h-[100vh] 
               origin-top animate-slideDown desktop:hidden"
        >
          {MENUS.map((m) => (
            <div key={m.path} className="flex flex-col">
              <Menu
                title={m.title}
                href={m.path}
                onClick={() => setIsOpen(false)}
                variant="mobile"
              />
            </div>
          ))}
          <Button
            href="/contact"
            className="w-full mt-6 h-12"
            text="Contact Us & Inquiry"
            suffixIcon={<RightUpIcon />}
            onClick={() => setIsOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}
