import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Common Passive Fire Defects Sydney | BAKKER PFI Australia",
  description:
    "Learn about common passive fire defects identified during inspections throughout Sydney and NSW including fire door defects, unsealed penetrations and compromised fire compartmentation.",
};

const defects = [
  {
    title: "Unsealed Service Penetrations",
    description:
      "Pipes, cables and ducts passing through fire-rated walls and floors without compliant fire stopping protection.",
    image: "/learning/unsealed-penetration.png",
  },
  {
    title: "Excessive Fire Door Gaps",
    description:
      "Fire doors with excessive perimeter gaps can allow smoke and fire to spread between compartments.",
    image: "/learning/fire-door-example.png",
  },
  {
    title: "Missing Smoke Seals",
    description:
      "Damaged or missing smoke seals reduce the effectiveness of fire doors protecting escape routes.",
    image: "/learning/fire-door-example.png",
  },
  {
    title: "Non-Compliant Fire Stopping",
    description:
      "Incorrect products, foam fillers or untested systems installed around service penetrations.",
    image: "/learning/fire-stopping-example.png",
  },
  {
    title: "Compromised Ceiling Barriers",
    description:
      "Missing ceiling barriers and open voids can compromise fire compartmentation throughout buildings.",
    image: "/learning/fire-compartment-diagram.png",
  },
  {
    title: "Damaged Fire-Rated Walls",
    description:
      "Openings, damaged linings and unprotected modifications affecting fire-rated wall performance.",
    image: "/learning/fire-compartment-diagram.png",
  },
];

export default function CommonDefectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/learning/unsealed-penetration.png"
            alt="Common Passive Fire Defects"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Sydney Passive Fire Defects
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Common Passive Fire
            <br />
            Defects Identified During Inspections
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding the most common passive fire issues identified throughout buildings across Sydney and NSW.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Inspection Findings
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Hidden Defects Create Real Risk
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire defects are often concealed above ceilings,
              within risers,
              service shafts and wall penetrations until inspections are carried out.
            </p>

            <p>
              Compromised fire compartmentation can allow smoke and fire to spread more rapidly throughout a building,
              affecting escape routes and fire separation performance.
            </p>

            <p>
              Across Sydney and NSW,
              passive fire defects are commonly identified during building inspections,
              remediation projects and compliance reviews associated with Annual Fire Safety Statement (AFSS) processes.
            </p>

          </div>

        </div>

      </section>

      {/* DEFECT GRID */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Defects
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Typical Passive Fire Issues
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {defects.map((defect) => (
              <div
                key={defect.title}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
              >

                {/* IMAGE */}
                <div className="aspect-video overflow-hidden">

                  <img
                    src={defect.image}
                    alt={defect.title}
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="text-2xl font-bold">
                    {defect.title}
                  </h3>

                  <p className="mt-6 leading-8 text-zinc-400">
                    {defect.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY DEFECTS MATTER */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why It Matters
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Fire Compartmentation Must Remain Intact
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire systems are designed to slow the spread of fire and smoke throughout buildings,
              helping protect occupants and supporting evacuation pathways.
            </p>

            <p>
              Defective penetrations,
              damaged fire doors and compromised fire-rated barriers can reduce the effectiveness of compartmentation systems.
            </p>

            <p>
              Maintaining passive fire systems is an important part of building fire safety management and ongoing compliance workflows throughout NSW.
            </p>

          </div>

        </div>

      </section>

      {/* INSPECTION GALLERY */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="overflow-hidden rounded-3xl border border-orange-500 bg-zinc-950">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* IMAGE */}
              <div className="aspect-video overflow-hidden lg:aspect-auto lg:h-full">

                <img
                  src="/learning/unsealed-penetration.png"
                  alt="Passive Fire Inspection Gallery"
                  className="h-full w-full object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-10 lg:p-16">

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
                  Inspection Gallery
                </p>

                <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                  Explore Real Inspection Examples
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                  View examples of fire stopping defects,
                  fire door issues,
                  compartmentation breaches and passive fire inspection findings identified throughout buildings across Sydney and NSW.
                </p>

                <div className="mt-10">

                  <Link
                    href="/learning/inspection-gallery"
                    className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
                  >
                    Open Inspection Gallery
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Sydney & NSW
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Passive Fire Inspection Support
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Contact Benjamin Bakker to discuss passive fire inspections,
            defect reporting,
            fire compartmentation reviews and compliance workflows throughout Sydney and NSW.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
            >
              Contact BAKKER PFI Australia
            </Link>

            <Link
              href="/learning"
              className="rounded-full border border-zinc-700 px-10 py-5 text-lg font-semibold transition hover:border-orange-500 hover:text-orange-500"
            >
              Back To Learning Centre
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}