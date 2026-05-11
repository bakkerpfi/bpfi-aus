"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <a href="/" className="flex items-center gap-4">
          <Image
            src="/bakker-logo.png"
            alt="BAKKER PFI LTD"
            width={170}
            height={50}
            className="object-contain w-auto h-auto"
          />

          <div className="hidden sm:block">
            <h1 className="text-xl font-bold tracking-tight">
              BAKKER PFI LTD
            </h1>

            <p className="text-gray-500 text-sm">
              Bakker Passive Fire Inspections
            </p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/" className="hover:text-[#ff6e00] transition-colors">
            Home
          </a>

          <a href="/services" className="hover:text-[#ff6e00] transition-colors">
            Services
          </a>

          <div className="relative group">
            <button className="hover:text-[#ff6e00] transition-colors flex items-center gap-2">
              About
              <span>⌄</span>
            </button>

            <div className="absolute left-0 mt-4 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
              <a href="/about" className="block px-6 py-4 hover:bg-gray-50">
                About BAKKER PFI
              </a>

              <a
                href="/about-ben-bakker"
                className="block px-6 py-4 hover:bg-gray-50"
              >
                About Ben Bakker
              </a>
            </div>
          </div>

          <a href="/contact" className="hover:text-[#ff6e00] transition-colors">
            Contact
          </a>
        </nav>

        <a
          href="/contact"
          className="hidden md:inline-flex bg-[#ff6e00] hover:bg-[#e66300] transition-colors text-white px-5 py-3 rounded-xl text-sm font-semibold"
        >
          Request Inspection
        </a>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden border border-gray-300 rounded-xl px-4 py-3 text-sm font-semibold"
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-6 py-6 space-y-4 text-base font-medium">
            <a
              href="/"
              className="block py-3 border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="/services"
              className="block py-3 border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Services
            </a>

            <div className="pt-2">
              <p className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                About
              </p>

              <a
                href="/about"
                className="block py-3 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                About BAKKER PFI
              </a>

              <a
                href="/about-ben-bakker"
                className="block py-3 border-b border-gray-100"
                onClick={() => setMenuOpen(false)}
              >
                About Ben Bakker
              </a>
            </div>

            <a
              href="/contact"
              className="block py-3 border-b border-gray-100"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <a
              href="/contact"
              className="block text-center bg-[#ff6e00] text-white px-5 py-4 rounded-xl font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              Request Inspection
            </a>
          </div>
        </div>
      )}
    </header>
  );
}