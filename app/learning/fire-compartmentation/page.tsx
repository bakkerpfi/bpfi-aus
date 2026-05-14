import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Fire Compartmentation Christchurch | BAKKER PFI LTD",
  description:
    "Learn about fire compartmentation, fire separations and passive fire compliance throughout Christchurch and Canterbury.",
};

const compartmentTypes = [
  {
    title: "Fire-Rated Walls",
    description:
      "Fire-rated walls help divide buildings into separate fire compartments designed to slow the spread of fire and smoke.",
  },
  {
    title: "Fire-Rated Floors",
    description:
      "Fire-rated floor systems help prevent vertical fire spread between levels within buildings.",
  },
  {
    title: "Fire Doors",
    description:
      "Fire doors form part of the compartmentation system protecting escape routes and separated spaces.",
  },
  {
    title: "Service Penetrations",
    description:
      "Openings created by services passing through fire-rated barriers must be protected using tested systems.",
  },
  {
    title: "Ceiling Barriers",
    description:
      "Ceiling spaces and concealed voids may require fire barriers to maintain compartmentation performance.",
  },
  {
    title: "Risers & Shafts",
    description:
      "Vertical risers and service shafts require fire separation systems to reduce fire spread throughout buildings.",
  },
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
            alt="Fire Compartmentation Christchurch"
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
            Fire Compartmentation
            <br />
            & Fire Separations
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding how fire compartments and fire-rated separations help slow the spread of fire and smoke throughout buildings.
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
              Fire compartmentation is a passive fire protection strategy designed to divide buildings into separate fire compartments.
            </p>

            <p>
              These compartments help slow the spread of fire and smoke throughout a building,
              protecting occupants,
              escape routes and property.
            </p>

            <p>
              Fire-rated walls,
              floors,
              doors and fire stopping systems all work together to maintain compartmentation performance.
            </p>

          </div>

        </div>

      </section>

      {/* TYPES */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Compartmentation Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Common Fire Separation Elements
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {compartmentTypes.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-zinc-800 bg-black p-8"
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
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why Compartmentation Matters
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Slowing The Spread Of Fire & Smoke
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Compartmentation systems are designed to help contain fire and smoke within a limited area for a specified period of time.
            </p>

            <p>
              This helps improve evacuation conditions,
              protects escape routes and supports firefighting operations.
            </p>

            <p>
              Compromised fire separations can allow fire and smoke to spread rapidly throughout buildings.
            </p>

          </div>

        </div>

      </section>

      {/* COMMON ISSUES */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Compartmentation Issues
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Defects Identified During Inspections
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Common compartmentation defects include:
              unsealed penetrations,
              damaged fire-rated linings,
              missing barriers,
              defective fire doors and unprotected ceiling voids.
            </p>

            <p>
              Tenant fitouts,
              service upgrades and renovation works often create new openings within fire-rated barriers.
            </p>

            <p>
              These issues are frequently identified during BWOF reviews,
              remediation projects and existing building inspections throughout Christchurch and Canterbury.
            </p>

          </div>

        </div>

      </section>

      {/* INSPECTIONS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Inspection & Reporting
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Structured Passive Fire Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire inspections commonly include review of fire separations,
              service penetrations,
              fire doors and compartmentation systems throughout buildings.
            </p>

            <p>
              Inspection findings may be documented using photographs,
              defect registers,
              floor plans and compliance reporting systems.
            </p>

            <p>
              BAKKER PFI LTD uses structured inspection workflows and Codexus digital systems
              to support passive fire visibility and compliance management throughout Christchurch and Canterbury.
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
              Digital Fire Compartmentation Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Codexus helps organise passive fire inspection records,
              compartmentation observations,
              defect registers and compliance workflows.
            </p>

            <p>
              The platform is powered by real-world installation and inspection knowledge provided by BAKKER PFI LTD.
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
            Continue learning about fire doors,
            service penetrations,
            inspections and passive fire compliance workflows.
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