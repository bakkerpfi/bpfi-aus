import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "What Is Passive Fire Protection? | BAKKER PFI LTD",
  description:
    "Learn about passive fire protection, fire compartmentation and passive fire compliance throughout Christchurch and Canterbury.",
};

const systems = [
  {
    title: "Fire-Rated Walls",
    description:
      "Walls designed to help slow the spread of fire and smoke between building compartments.",
  },
  {
    title: "Fire-Rated Floors",
    description:
      "Fire-rated floor systems help reduce vertical fire spread between levels within buildings.",
  },
  {
    title: "Fire Doors",
    description:
      "Fire doors protect escape routes and help maintain fire compartmentation performance.",
  },
  {
    title: "Fire Stopping Systems",
    description:
      "Tested systems protecting service penetrations through fire-rated barriers.",
  },
  {
    title: "Smoke Barriers",
    description:
      "Smoke barriers help reduce the spread of smoke throughout buildings during fire events.",
  },
  {
    title: "Compartmentation Systems",
    description:
      "The combined passive fire systems dividing buildings into separate fire compartments.",
  },
];

export default function WhatIsPassiveFirePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/learning/fire-compartment-diagram.png"
            alt="What Is Passive Fire Protection"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Christchurch Passive Fire Learning
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            What Is
            <br />
            Passive Fire Protection?
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding how passive fire systems help slow the spread of fire and smoke throughout buildings across Christchurch and Canterbury.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Passive Fire Protection
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Slowing The Spread Of Fire & Smoke
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire protection refers to systems built into a structure designed to help slow the spread of fire and smoke.
            </p>

            <p>
              These systems help protect occupants,
              escape routes,
              property and emergency response operations during fire events.
            </p>

            <p>
              Passive fire systems are typically integrated throughout buildings using fire-rated walls,
              floors,
              ceilings,
              fire doors and fire stopping systems.
            </p>

          </div>

        </div>

      </section>

      {/* SYSTEM TYPES */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Passive Fire Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Common Passive Fire Elements
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {systems.map((system) => (
              <div
                key={system.title}
                className="rounded-3xl border border-zinc-800 bg-black p-8"
              >

                <h3 className="text-2xl font-bold">
                  {system.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {system.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FIRE COMPARTMENTATION */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Fire Compartmentation
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Dividing Buildings Into Fire Compartments
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Buildings are commonly divided into separate fire compartments designed to contain fire within a limited area for a specified period of time.
            </p>

            <p>
              Fire-rated barriers help reduce the spread of fire and smoke throughout buildings,
              improving evacuation conditions and supporting firefighting operations.
            </p>

            <p>
              When penetrations or fire separations become compromised,
              fire compartmentation performance can be significantly affected.
            </p>

          </div>

        </div>

      </section>

      {/* COMMON ISSUES */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Passive Fire Issues
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Defects Often Hidden Within Buildings
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire defects are commonly hidden above ceilings,
              within risers,
              service shafts and concealed wall penetrations.
            </p>

            <p>
              Typical defects include:
              unsealed penetrations,
              damaged fire doors,
              missing smoke seals,
              damaged fire-rated linings and unprotected openings.
            </p>

            <p>
              These issues are commonly identified during BWOF reviews,
              existing building inspections,
              tenant fitouts and remediation projects throughout Christchurch and Canterbury.
            </p>

          </div>

        </div>

      </section>

      {/* INSPECTIONS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Inspections & Reporting
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Supporting Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire inspections help identify defects,
              document building conditions and improve visibility of fire compartmentation systems.
            </p>

            <p>
              Inspection workflows commonly include:
              photographs,
              penetration records,
              fire door observations,
              defect registers and compliance reporting.
            </p>

            <p>
              BAKKER PFI LTD uses structured inspection workflows and Codexus digital systems
              to support passive fire compliance throughout Christchurch and Canterbury.
            </p>

          </div>

        </div>

      </section>

      {/* CODEXUS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Codexus Compliance Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Digital Passive Fire Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Codexus helps organise passive fire inspection records,
              defect registers,
              penetration schedules and compliance workflows throughout buildings.
            </p>

            <p>
              The platform is powered by real-world installation and inspection experience provided by BAKKER PFI LTD.
            </p>

            <div className="pt-4">

              <Link
                href="/codexus"
                className="inline-flex rounded-full border border-orange-500 px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-black"
              >
                Explore Codexus
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="py-32">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Continue Learning
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Explore More Passive Fire Topics
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Continue learning about fire compartmentation,
            fire doors,
            service penetrations and passive fire inspections.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              href="/learning"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
            >
              Back To Learning Centre
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}