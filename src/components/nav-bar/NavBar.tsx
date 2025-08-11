"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import NavBarBase from "./NavBarBase";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import Image from "next/image";
import Button from "@/components/Button";

type NavState = "navbar" | "navbarMenu";
interface NavBarProps {
  state?: NavState;
}

const MENUS = [
  { title: "About Us", path: "/about" },
  { title: "Products", path: "/products" },
  { title: "Research & Development", path: "/rnd" },
  { title: "Newsroom", path: "/newsroom" },
  { title: "Events & Updated", path: "/events" },
  { title: "Partnership", path: "/partnership" },
];

export default function NavBar({ state = "navbar" }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  // lock scroll when mobile menu open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      if (document.body.style.overflow === "hidden") {
        document.body.style.overflow = prev;
      }
    };
  }, [open]);

  // esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", onKey);
    return () => removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="w-full top-0 z-50 bg-white text-foreground border-y-2">
      {/* <div className="h-px w-full bg-neutral200 border-2" /> */}

      <div className="hidden md:block">
        <div className="mx-auto flex h-[84px] max-w-[1200px] items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-default.svg"
              alt="Cannex Logo"
              width={200}
              height={40}
            />
          </Link>
        </div>
        <div className="h-[2px] w-full bg-black" />
        <div className="mx-auto flex h-12 max-w-[1200px] items-stretch">
          <nav className="flex items-center gap-6">
            {MENUS.map((m) => (
              <Menu
                key={m.path}
                title={m.title}
                href={m.path}
                variant="desktop"
              />
            ))}
          </nav>
          <div className="ml-auto flex">
            <Button
              href="/contact"
              heightClass="h-12"
              text="Contact Us & Inquiry"
            />
          </div>
        </div>
      </div>

      {/* MOBILE: logo left + black square hamburger (kept) */}
      <div className="md:hidden">
        <NavBarBase>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-controls={panelId}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className={`w-16 h-16  flex items-center justify-center shrink-0 ${
              open ? "bg-white" : "bg-black"
            }`}
          >
            <Hamburger state={open ? "close" : "default"} />
          </button>
        </NavBarBase>
      </div>

      {open && (
        <nav className="flex flex-col gap-0 p-4">
          {MENUS.map((m, i) => (
            <div key={m.path} className="flex flex-col">
              <Menu
                title={m.title}
                href={m.path}
                onClick={() => setOpen(false)}
                variant="mobile"
              />
              {i < MENUS.length - 1 && <div className="h-px bg-neutral200" />}
            </div>
          ))}
          <Button
            href="/contact"
            fullWidth
            text="Contact Us & Inquiry"
            onClick={() => setOpen(false)}
          />
        </nav>
      )}
    </header>
  );
}
