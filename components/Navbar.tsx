"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[9999] border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-4">
          <img
            src="/logo.png"
            alt="BAKKER PFI Australia"
            className="h-12 w-auto"
          />

          <div className="hidden md:block">
            <div className="text-lg font-bold tracking-wide text-white">
              BAKKER PFI Australia
            </div>

            <div className="text-xs uppercase tracking-[0.25em] text-orange-500">
              Sydney Passive Fire Compliance
            </div>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <nav className="hidden items-center gap-8 text-sm uppercase tracking-wide text-white md:flex">
          <Link href="/" className="transition hover:text-orange-500">
            Home
          </Link>

          {/* ABOUT DROPDOWN */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setAboutOpen(!aboutOpen)}
              className="flex items-center gap-1 uppercase tracking-wide transition hover:text-orange-500"
            >
              About
              <ChevronDown size={16} />
            </button>

            {aboutOpen && (
              <div className="absolute left-0 top-full z-[9999] mt-4 min-w-[240px] rounded-2xl border border-zinc-800 bg-black p-2 shadow-2xl">
                <Link
                  href="/about"
                  className="block rounded-xl px-4 py-3 text-sm transition hover:bg-zinc-900 hover:text-orange-500"
                  onClick={() => setAboutOpen(false)}
                >
                  About BAKKER PFI
                </Link>

                <Link
                  href="/about-ben-bakker"
                  className="block rounded-xl px-4 py-3 text-sm transition hover:bg-zinc-900 hover:text-orange-500"
                  onClick={() => setAboutOpen(false)}
                >
                  About Ben Bakker
                </Link>
              </div>
            )}
          </div>

          <Link href="/services" className="transition hover:text-orange-500">
            Services
          </Link>

          <Link href="/projects" className="transition hover:text-orange-500">
            Projects
          </Link>

          <Link href="/locations" className="transition hover:text-orange-500">
            Locations
          </Link>

          <Link href="/learning" className="transition hover:text-orange-500">
            Learning
          </Link>

          <Link href="/codexus" className="transition hover:text-orange-500">
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
          type="button"
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="border-t border-zinc-800 bg-black md:hidden">
          <nav className="flex flex-col px-6 py-6 text-sm uppercase tracking-wide text-white">
            <Link
              href="/"
              className="border-b border-zinc-800 py-4"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            {/* ABOUT SECTION */}
            <div className="border-b border-zinc-800 py-4">
              <p className="mb-3 text-xs uppercase tracking-[0.25em] text-zinc-500">
                About
              </p>

              <div className="flex flex-col gap-3">
                <Link
                  href="/about"
                  className="transition hover:text-orange-500"
                  onClick={() => setOpen(false)}
                >
                  About BAKKER PFI
                </Link>

                <Link
                  href="/about-ben-bakker"
                  className="transition hover:text-orange-500"
                  onClick={() => setOpen(false)}
                >
                  About Ben Bakker
                </Link>
              </div>
            </div>

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
              href="/locations"
              className="border-b border-zinc-800 py-4"
              onClick={() => setOpen(false)}
            >
              Locations
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