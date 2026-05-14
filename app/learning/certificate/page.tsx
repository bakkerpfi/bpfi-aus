"use client";

import { Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";

function CertificateContent() {

  const certificateRef =
    useRef<HTMLDivElement>(null);

  const searchParams =
    useSearchParams();

  const name =
    searchParams.get("name") || "Participant";

  return (
    <section className="flex flex-col items-center justify-center bg-black px-4 py-10 print:p-0">

      {/* CERTIFICATE */}
      <div
        ref={certificateRef}
        id="certificate"
        className="relative mx-auto flex h-[1122px] w-[794px] flex-col justify-between overflow-hidden border border-orange-500 bg-zinc-950 p-14 shadow-2xl print:h-[1122px] print:w-[794px] print:rounded-none print:border-none print:shadow-none"
      >

        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(249,115,22,0.12),transparent_40%)]" />

        {/* HEADER */}
        <div className="relative z-10 text-center">

          <img
            src="/logo.png"
            alt="BAKKER PFI LTD"
            className="mx-auto mb-10 h-24 w-auto"
          />

          <p className="mb-4 text-sm uppercase tracking-[0.45em] text-orange-500">
            Certificate of Completion
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Passive Fire
            <br />
            Basic Understanding
          </h1>

        </div>

        {/* BODY */}
        <div className="relative z-10 text-center">

          <p className="text-lg uppercase tracking-[0.35em] text-zinc-500">
            Awarded To
          </p>

          <h2 className="mt-8 text-6xl font-bold text-orange-500">
            {name}
          </h2>

          <p className="mx-auto mt-14 max-w-3xl text-2xl leading-[2.2rem] text-zinc-300">
            For successfully completing the
            BAKKER PFI LTD Christchurch Passive Fire Awareness Quiz
            and demonstrating a foundational understanding of passive fire protection,
            fire compartmentation,
            service penetrations,
            fire doors and passive fire compliance workflows.
          </p>

        </div>

        {/* FOOTER */}
        <div className="relative z-10 grid gap-10 border-t border-zinc-800 pt-10 md:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Issued By
            </p>

            <p className="mt-4 text-3xl font-bold">
              BAKKER PFI LTD
            </p>

            <p className="mt-3 text-lg text-zinc-400">
              Passive Fire Inspection & Compliance Reporting
            </p>

          </div>

          {/* RIGHT */}
          <div className="md:text-right">

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Learning Centre
            </p>

            <p className="mt-4 text-3xl font-bold">
              Christchurch, New Zealand
            </p>

            <p className="mt-3 text-lg text-zinc-400">
              www.bakkerpfi.co.nz
            </p>

          </div>

        </div>

      </div>

      {/* BUTTON */}
      <div className="mt-10 print:hidden">

        <button
          onClick={() => window.print()}
          className="rounded-2xl bg-orange-500 px-10 py-5 text-lg font-semibold text-white transition hover:bg-orange-600"
        >
          Download Certificate
        </button>

      </div>

      {/* PRINT FIX */}
      <style jsx global>{`
        @media print {

          @page {
            size: A4 portrait;
            margin: 0;
          }

          html,
          body {
            width: 794px;
            height: 1122px;
            background: black;
            overflow: hidden;
          }

          nav {
            display: none !important;
          }

          #certificate {
            page-break-after: avoid;
            break-after: avoid;
          }

        }
      `}</style>

    </section>
  );
}

export default function CertificatePage() {

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      <Suspense
        fallback={
          <div className="flex min-h-screen items-center justify-center">
            Loading Certificate...
          </div>
        }
      >
        <CertificateContent />
      </Suspense>

    </main>
  );
}