import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Common Passive Fire Defects Christchurch | BAKKER PFI LTD",
  description:
    "Learn about common passive fire defects identified during inspections throughout Christchurch and Canterbury including fire door defects, unsealed penetrations and compromised fire compartmentation.",
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

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Christchurch Passive Fire Defects
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Common Passive Fire
            <br />
            Defects Identified During Inspections
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding the most common passive fire defects identified throughout buildings across Christchurch and Canterbury.
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
              Across Christchurch and Canterbury,
              passive fire defects are commonly identified during BWOF reviews,
              remediation projects,
              tenancy fitouts and existing building inspections.
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
              Maintaining passive fire systems is an important part of building fire safety management,
              BWOF compliance workflows and ongoing building maintenance throughout New Zealand.
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
              Identifying & Documenting Defects
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire inspections help identify defects,
              document issues and support structured compliance workflows.
            </p>

            <p>
              Inspection findings are commonly recorded using photographs,
              penetration schedules,
              floor plans,
              defect registers and compliance reporting systems.
            </p>

            <p>
              BAKKER PFI LTD uses structured inspection workflows and Codexus digital compliance systems
              to support passive fire visibility throughout buildings across Christchurch and Canterbury.
            </p>

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
            service penetrations,
            inspections,
            fire doors and passive fire compliance workflows.
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