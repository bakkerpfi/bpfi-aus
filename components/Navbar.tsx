"use client";

import { useState } from "react";
import Image from "next/image";

export default function Navbar() {
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

          <div>
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

          <a
            href="/services"
            className="hover:text-[#ff6e00] transition-colors"
          >
            Services
          </a>

          <div className="relative group">
            <button className="hover:text-[#ff6e00] transition-colors flex items-center gap-2">
              About

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div className="absolute left-0 mt-4 w-64 bg-white border border-gray-200 rounded-2xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden">
              <a
                href="/about"
                className="block px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                About BAKKER PFI
              </a>

              <a
                href="/about-ben-bakker"
                className="block px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                About Ben Bakker
              </a>
            </div>
          </div>

          <a
            href="/contact"
            className="hover:text-[#ff6e00] transition-colors"
          >
            Contact
          </a>
        </nav>

        <a
          href="/contact"
          className="bg-[#ff6e00] hover:bg-[#e66300] transition-colors text-white px-5 py-3 rounded-xl text-sm font-semibold"
        >
          Request Inspection
        </a>
      </div>
    </header>
  );
}