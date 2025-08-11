"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import NavBarBase from "./NavBarBase";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import ContactButton from "./ContactButton";
import Image from "next/image";

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
  const [open, setOpen] = useState(state === "navbarMenu");
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
    <header className="sticky top-0 z-50 bg-white text-foreground">
      <div className="h-px w-full bg-neutral200" />

      <div className="hidden md:block">
        <div className="mx-auto flex h-14 max-w-[1200px] items-center justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo-default.svg"
              alt="Cannex Logo"
              width={160}
              height={32}
            />
          </Link>
        </div>
        <div className="h-px w-full bg-neutral200" />
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
            <ContactButton href="/contact" heightClass="h-12" />
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
            className="w-16 h-16 bg-black flex items-center justify-center shrink-0">
            <Hamburger state={open ? "close" : "default"} />
          </button>
        </NavBarBase>
      </div>

      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      <aside
        id={panelId}
        className={`fixed right-0 top-0 z-50 h-full w-[78%] max-w-[340px] translate-x-full bg-white shadow-xl transition-transform md:hidden ${
          open ? "translate-x-0" : ""
        }`}
        role="dialog"
        aria-modal="true">
        <div className="flex items-center justify-between border-b border-neutral200 px-4 py-3">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2">
            <span
              aria-hidden
              className="inline-block h-5 w-5 rounded-sm"
              style={{ background: "var(--primary500)" }}
            />
            <span className="text-lg font-semibold tracking-tight">cannex</span>
          </Link>
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="rounded-md p-2">
            <Hamburger state="close" />
          </button>
        </div>

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
          <ContactButton
            href="/contact"
            fullWidth
            className="mt-4"
            onClick={() => setOpen(false)}
          />
        </nav>
      </aside>

      <div className="h-px w-full bg-neutral200" />
    </header>
  );
}
