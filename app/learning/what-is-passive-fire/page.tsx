import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "What Is Passive Fire Protection? | BAKKER PFI Australia",
  description:
    "Learn what passive fire protection is, how fire compartmentation systems work and why passive fire inspections are important throughout buildings across Sydney and NSW.",
};

const passiveSystems = [
  {
    title: "Fire-Rated Walls",
    description:
      "Walls designed to slow the spread of fire and smoke between compartments.",
  },
  {
    title: "Fire Doors",
    description:
      "Doors helping protect escape routes and maintain compartmentation.",
  },
  {
    title: "Penetration Sealing",
    description:
      "Fire stopping systems protecting service penetrations through walls and floors.",
  },
  {
    title: "Fire-Rated Floors",
    description:
      "Floor systems designed to separate fire compartments between levels.",
  },
  {
    title: "Ceiling Barriers",
    description:
      "Ceiling systems helping maintain fire separation within concealed spaces.",
  },
  {
    title: "Service Risers",
    description:
      "Protected shafts reducing vertical fire and smoke spread throughout buildings.",
  },
];

const activeSystems = [
  "Fire sprinklers",
  "Smoke detectors",
  "Fire alarms",
  "Extinguishers",
  "Emergency warning systems",
  "Hydrant systems",
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

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Passive Fire Protection Sydney
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            What Is
            <br />
            Passive Fire Protection?
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding how passive fire systems help slow the spread of fire and smoke throughout buildings across Sydney and NSW.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Understanding Passive Fire
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Built Into The Structure Of The Building
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire protection systems are designed to slow the spread of fire and smoke throughout buildings,
              helping protect occupants,
              evacuation routes and property.
            </p>

            <p>
              Unlike active fire systems such as sprinklers and alarms,
              passive fire systems are built into the structure of the building itself.
            </p>

            <p>
              Throughout Sydney and NSW,
              passive fire systems form part of the overall building fire safety strategy helping maintain fire compartmentation during a fire event.
            </p>

          </div>

        </div>

      </section>

      {/* PASSIVE VS ACTIVE */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

          {/* PASSIVE */}
          <div className="rounded-3xl border border-zinc-800 bg-black p-10">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Passive Fire Systems
            </p>

            <h2 className="text-4xl font-bold">
              Built Into The Building
            </h2>

            <div className="mt-10 space-y-5 text-lg text-zinc-400">

              <p>• Fire-rated walls</p>

              <p>• Fire-rated floors</p>

              <p>• Fire doors</p>

              <p>• Penetration sealing systems</p>

              <p>• Ceiling barriers</p>

              <p>• Fire compartmentation systems</p>

            </div>

          </div>

          {/* ACTIVE */}
          <div className="rounded-3xl border border-zinc-800 bg-black p-10">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Active Fire Systems
            </p>

            <h2 className="text-4xl font-bold">
              Systems That Activate During Fire
            </h2>

            <div className="mt-10 space-y-5 text-lg text-zinc-400">

              {activeSystems.map((system) => (
                <p key={system}>• {system}</p>
              ))}

            </div>

          </div>

        </div>

      </section>

      {/* COMMON PASSIVE SYSTEMS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Passive Fire Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              What Makes Up A Passive Fire System?
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {passiveSystems.map((item) => (
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
              alt="Fire Compartmentation"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why Passive Fire Matters
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Slowing Fire & Smoke Spread
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                Passive fire systems help slow the spread of fire and smoke between compartments throughout a building.
              </p>

              <p>
                These systems help protect evacuation routes,
                reduce smoke spread and improve overall building fire safety performance.
              </p>

              <p>
                When passive fire systems are damaged or compromised,
                smoke and fire can spread more rapidly through penetrations,
                risers,
                ceilings and fire separations.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* COMMON DEFECTS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Passive Fire Issues
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Defects Often Develop Over Time
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire systems within existing buildings are often affected by renovations,
              tenant fitouts,
              service upgrades and later building modifications.
            </p>

            <p>
              Common issues include:
            </p>

            <ul className="space-y-4 pl-6 text-zinc-300 list-disc">

              <li>Unsealed penetrations</li>

              <li>Damaged fire doors</li>

              <li>Missing smoke seals</li>

              <li>Compromised ceiling barriers</li>

              <li>Non-compliant fire stopping systems</li>

            </ul>

            <div className="flex flex-wrap gap-4 pt-6">

              <Link
                href="/learning/common-defects"
                className="rounded-full border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-black"
              >
                View Common Defects
              </Link>

              <Link
                href="/learning/fire-doors"
                className="rounded-full border border-zinc-700 px-6 py-3 font-semibold transition hover:border-orange-500 hover:text-orange-500"
              >
                Fire Doors
              </Link>

            </div>

          </div>

        </div>

      </section>

      {/* NSW COMPLIANCE */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              NSW Compliance
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Supporting Building Fire Safety
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire inspections may support building fire safety workflows associated with Annual Fire Safety Statements (AFSS)
              and Essential Fire Safety Measures (EFSM) maintenance programs.
            </p>

            <p>
              Building owners,
              strata managers,
              facility managers and contractors often require visibility of passive fire defects affecting fire compartmentation systems.
            </p>

            <p>
              Inspection reporting commonly includes defect registers,
              photographic documentation,
              penetration schedules and compartmentation surveys.
            </p>

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
            compartmentation reviews,
            penetration inspections and compliance workflows throughout Sydney and NSW.
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