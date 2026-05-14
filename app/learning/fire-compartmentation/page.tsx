import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Fire Compartmentation Sydney | BAKKER PFI Australia",
  description:
    "Learn how fire compartmentation systems work and why passive fire inspections are critical throughout buildings across Sydney and NSW.",
};

const compartmentElements = [
  {
    title: "Fire-Rated Walls",
    description:
      "Walls designed to slow the spread of fire and smoke between compartments.",
  },
  {
    title: "Fire-Rated Floors",
    description:
      "Floors forming fire separations between levels within buildings.",
  },
  {
    title: "Fire Doors",
    description:
      "Doors protecting escape routes and maintaining compartment boundaries.",
  },
  {
    title: "Penetration Sealing",
    description:
      "Fire stopping systems protecting openings created by building services.",
  },
  {
    title: "Ceiling Barriers",
    description:
      "Ceiling systems helping maintain compartmentation within concealed spaces.",
  },
  {
    title: "Service Risers",
    description:
      "Protected shafts and risers reducing vertical fire and smoke spread.",
  },
];

const commonFailures = [
  "Unsealed service penetrations",
  "Damaged fire-rated walls",
  "Excessive fire door gaps",
  "Missing smoke seals",
  "Compromised ceiling barriers",
  "Open risers and shafts",
  "Untested fire stopping systems",
  "Unapproved modifications",
];

export default function FireCompartmentationPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/learning/fire-compartment-diagram.png"
            alt="Fire Compartmentation Sydney"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Fire Compartmentation Sydney
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Understanding
            <br />
            Fire Compartmentation
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Learn how fire compartmentation systems help slow the spread of fire and smoke throughout buildings across Sydney and NSW.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              What Is Fire Compartmentation?
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Dividing Buildings Into Fire Compartments
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Fire compartmentation is the process of dividing a building into separate fire-resistant compartments designed to slow the spread of fire and smoke.
            </p>

            <p>
              These compartments help protect occupants,
              maintain evacuation pathways and reduce fire spread throughout a building during a fire event.
            </p>

            <p>
              Throughout Sydney and NSW,
              fire compartmentation systems form part of the overall building fire safety strategy within both new and existing buildings.
            </p>

          </div>

        </div>

      </section>

      {/* COMPARTMENT ELEMENTS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Compartmentation Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              What Creates A Fire Compartment?
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {compartmentElements.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
              >

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY IT MATTERS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800">

            <img
              src="/learning/fire-compartment-diagram.png"
              alt="Fire Compartmentation Diagram"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why It Matters
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Slowing Fire & Smoke Spread
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                Fire compartmentation systems are designed to slow the movement of fire,
                smoke and hot gases between different areas of a building.
              </p>

              <p>
                When compartmentation systems are compromised,
                smoke and fire can spread more rapidly throughout escape routes,
                ceiling voids,
                risers and adjacent tenancy spaces.
              </p>

              <p>
                Passive fire inspections help identify defects affecting compartmentation performance before they become major compliance or safety issues.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* COMMON FAILURES */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Compartmentation Failures
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Typical Issues Identified During Inspections
            </h2>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {commonFailures.map((failure) => (
              <div
                key={failure}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-lg font-semibold"
              >
                {failure}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* EXISTING BUILDINGS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Existing Buildings
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Hidden Defects Often Develop Over Time
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Compartmentation systems within existing buildings are often affected by renovations,
              tenant fitouts,
              service upgrades and later building modifications.
            </p>

            <p>
              Many defects remain hidden above ceilings,
              within risers and concealed spaces until compartmentation surveys or passive fire inspections are carried out.
            </p>

            <p>
              Inspection workflows commonly include photographic documentation,
              defect registers,
              penetration schedules and floor plan references helping provide visibility of building fire safety conditions.
            </p>

          </div>

        </div>

      </section>

      {/* CODEXUS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Codexus Compliance Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Digital Compartmentation Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Codexus is a digital passive fire compliance platform designed to support compartmentation inspections,
              penetration records,
              defect registers and compliance reporting workflows.
            </p>

            <p>
              The platform is powered by real-world passive fire inspection and installation knowledge provided by BAKKER PFI Australia.
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
            Sydney & NSW
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Fire Compartmentation Inspections
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Contact Benjamin Bakker to discuss compartmentation surveys,
            passive fire inspections,
            penetration reviews and compliance workflows throughout Sydney and NSW.
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