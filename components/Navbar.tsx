"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-4"
        >

          <img
            src="/logo.png"
            alt="BAKKER PFI LTD"
            className="h-12 w-auto"
          />

          <div className="hidden md:block">

            <div className="text-lg font-bold tracking-wide text-white">
              BAKKER PFI LTD
            </div>

            <div className="text-xs uppercase tracking-[0.25em] text-orange-500">
              Christchurch Passive Fire Compliance
            </div>

          </div>

        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-wide md:flex">

          <Link
            href="/"
            className="transition hover:text-orange-500"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="transition hover:text-orange-500"
          >
            About
          </Link>

          <Link
            href="/services"
            className="transition hover:text-orange-500"
          >
            Services
          </Link>

          <Link
            href="/projects"
            className="transition hover:text-orange-500"
          >
            Projects
          </Link>

          <Link
            href="/learning"
            className="transition hover:text-orange-500"
          >
            Learning
          </Link>

          <Link
            href="/codexus"
            className="transition hover:text-orange-500"
          >
            Codexus
          </Link>

          <Link
            href="/contact"
            className="rounded-full border border-orange-500 px-5 py-2 text-orange-500 transition hover:bg-orange-500 hover:text-black"
          >
            Contact
          </Link>

        </nav>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (

        <div className="border-t border-zinc-800 bg-black md:hidden">

          <nav className="flex flex-col px-6 py-6 text-sm uppercase tracking-wide">

            <Link
              href="/"
              className="border-b border-zinc-800 py-4"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="border-b border-zinc-800 py-4"
              onClick={() => setOpen(false)}
            >
              About
            </Link>

            <Link
              href="/services"
              className="border-b border-zinc-800 py-4"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>

            <Link
              href="/projects"
              className="border-b border-zinc-800 py-4"
              onClick={() => setOpen(false)}
            >
              Projects
            </Link>

            <Link
              href="/learning"
              className="border-b border-zinc-800 py-4"
              onClick={() => setOpen(false)}
            >
              Learning
            </Link>

            <Link
              href="/codexus"
              className="border-b border-zinc-800 py-4"
              onClick={() => setOpen(false)}
            >
              Codexus
            </Link>

            <Link
              href="/contact"
              className="py-4 text-orange-500"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>

          </nav>

        </div>

      )}

    </header>
  );
}