"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import NavBarBase from "./NavBarBase";
import Hamburger from "./Hamburger";
import Menu from "./Menu";
import ContactButton from "./ContactButton";

const MENUS = [
  { title: "About Us", path: "/about" },
  { title: "Products", path: "/products" },
  { title: "Research & Development", path: "/rnd" },
  { title: "Newsroom", path: "/newsroom" },
  { title: "Events & Updated", path: "/events" },
  { title: "Partnership", path: "/partnership" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-white">
      <div className="h-px w-full bg-neutral200" />

      {/* Desktop */}
      <div className="hidden md:flex items-center justify-between max-w-[1200px] mx-auto px-4 py-3">
        <Link href="/" className="flex items-center gap-2">
          <span
            aria-hidden
            className="inline-block h-5 w-5 rounded-sm"
            style={{ background: "var(--primary500)" }}
          />
          <span className="text-xl font-semibold tracking-tight">cannex</span>
        </Link>

        <nav className="flex items-center">
          {MENUS.map((m, i) => (
            <div key={m.path} className="flex items-center">
              <Menu title={m.title} href={m.path} variant="desktop" />
              {i < MENUS.length - 1 && (
                <span className="mx-1 h-5 w-px bg-neutral200" />
              )}
            </div>
          ))}
        </nav>

        <ContactButton href="/contact" />
      </div>

      {/* Mobile */}
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

      {/* overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />

      {/* slide panel */}
      <aside
        id={panelId}
        className={`fixed right-0 top-0 z-50 h-full w-[78%] max-w-[340px] translate-x-full bg-white shadow-xl transition-transform md:hidden ${
          open ? "translate-x-0" : ""
        }`}>
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
            onClick={() => setOpen(false)}
          />
        </nav>
      </aside>

      <div className="h-px w-full bg-neutral200" />
    </header>
  );
}
