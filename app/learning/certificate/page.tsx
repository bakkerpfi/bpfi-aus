"use client";

import { Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Navbar from "@/components/Navbar";

function CertificateContent() {

  const certificateRef =
    useRef<HTMLDivElement>(null);

  const searchParams =
    useSearchParams();

  const name =
    searchParams.get("name") || "Participant";

  const downloadCertificate = async () => {

    if (!certificateRef.current) return;

    const canvas = await html2canvas(
      certificateRef.current,
      {
        scale: 2,
      }
    );

    const imgData =
      canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: [
        canvas.width,
        canvas.height,
      ],
    });

    pdf.addImage(
      imgData,
      "PNG",
      0,
      0,
      canvas.width,
      canvas.height
    );

    pdf.save(
      "Bakker-PFI-Certificate.pdf"
    );
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 py-10">

      <div
        ref={certificateRef}
        id="certificate"
        className="mx-auto flex h-[1080px] w-[760px] flex-col justify-between overflow-hidden rounded-[20px] border border-orange-500 bg-zinc-950 p-10 shadow-2xl"
      >

        {/* HEADER */}
        <div className="text-center">

          <img
            src="/logo.png"
            alt="BAKKER PFI"
            className="mx-auto mb-10 h-24 w-auto"
          />

          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-orange-500">
            Certificate of Completion
          </p>

          <h1 className="text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Basic Understanding
          </h1>

        </div>

        {/* BODY */}
        <div className="mt-20 text-center">

          <p className="text-lg uppercase tracking-[0.3em] text-zinc-500">
            Awarded To
          </p>

          <h2 className="mt-6 text-5xl font-bold text-orange-500 md:text-6xl">
            {name}
          </h2>

          <p className="mx-auto mt-12 max-w-3xl text-xl leading-10 text-zinc-400">
            For successfully completing the
            BAKKER PFI Ltd Passive Fire Learning Quiz
            and demonstrating a basic understanding of passive fire protection systems,
            fire compartmentation and compliance principles.
          </p>

        </div>

        {/* FOOTER */}
        <div className="mt-24 grid gap-10 border-t border-zinc-800 pt-10 md:grid-cols-2">

          <div>

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Issued By
            </p>

            <p className="mt-4 text-2xl font-bold">
              BAKKER PFI Ltd
            </p>

            <p className="mt-2 text-zinc-500">
              Passive Fire Inspection & Compliance Reporting
            </p>

          </div>

          <div className="md:text-right">

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Learning Centre
            </p>

<p className="mt-4 text-2xl font-bold">
  Sydney, Australia
</p>

<p className="mt-2 text-zinc-500">
  www.bakkerpfi.com
</p>

          </div>

        </div>

      </div>

      {/* DOWNLOAD BUTTON */}
      <div className="mt-10">

        <button
           onClick={() => window.print()}
          className="print:hidden rounded-2xl bg-orange-500 px-10 py-5 text-lg font-semibold text-white transition hover:bg-orange-600"
        >
          Download Certificate
        </button>

      </div>

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