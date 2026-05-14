import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Fire Door Inspections Christchurch | BAKKER PFI LTD",
  description:
    "Learn about fire door inspections, common fire door defects and passive fire compliance workflows throughout Christchurch and Canterbury.",
};

const defects = [
  {
    title: "Excessive Door Gaps",
    description:
      "Large perimeter gaps can allow smoke and fire to spread between fire compartments.",
  },
  {
    title: "Missing Smoke Seals",
    description:
      "Damaged or missing smoke seals reduce the effectiveness of fire doors protecting escape routes.",
  },
  {
    title: "Damaged Door Closers",
    description:
      "Faulty or disconnected door closers can prevent fire doors from self-closing correctly.",
  },
  {
    title: "Non-Compliant Modifications",
    description:
      "Holes, unapproved hardware and field modifications can compromise fire door performance.",
  },
  {
    title: "Damaged Frames",
    description:
      "Damaged or altered frames may affect the fire resistance performance of the door assembly.",
  },
  {
    title: "Threshold Gaps",
    description:
      "Large gaps beneath fire doors can reduce smoke containment performance.",
  },
];

export default function FireDoorsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/learning/fire-door-example.png"
            alt="Fire Door Inspection Christchurch"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/55" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Christchurch Fire Door Compliance
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Fire Door Inspections
            <br />
            & Compliance
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding fire door systems,
            common defects and inspection workflows throughout Christchurch and Canterbury.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              What Are Fire Doors?
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Protecting Escape Routes & Compartments
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Fire doors form part of a building’s passive fire protection system and are designed to help slow the spread of fire and smoke.
            </p>

            <p>
              These doors help protect escape routes,
              stairwells,
              corridors and fire compartments throughout buildings.
            </p>

            <p>
              Throughout Christchurch and Canterbury,
              fire doors are commonly inspected as part of BWOF reviews,
              existing building inspections and passive fire remediation projects.
            </p>

          </div>

        </div>

      </section>

      {/* COMMON DEFECTS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Fire Door Defects
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Typical Issues Identified During Inspections
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {defects.map((defect) => (
              <div
                key={defect.title}
                className="rounded-3xl border border-zinc-800 bg-black p-8"
              >

                <h3 className="text-2xl font-bold">
                  {defect.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {defect.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY DEFECTS MATTER */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why Fire Doors Matter
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Maintaining Compartmentation Performance
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Fire doors are designed to operate as part of the overall fire compartmentation system within a building.
            </p>

            <p>
              Defective fire doors can compromise smoke control,
              evacuation pathways and the performance of fire-rated separations.
            </p>

            <p>
              Excessive gaps,
              damaged seals and faulty hardware are commonly identified during inspections throughout existing buildings.
            </p>

          </div>

        </div>

      </section>

      {/* INSPECTIONS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Fire Door Inspections
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Inspection & Reporting Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Fire door inspections commonly include review of door gaps,
              smoke seals,
              frames,
              closers,
              signage and general door condition.
            </p>

            <p>
              Inspection findings may be documented using photographs,
              defect registers and compliance reporting workflows.
            </p>

            <p>
              BAKKER PFI LTD supports fire door inspections and passive fire compliance workflows throughout Christchurch and Canterbury.
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
              Digital Fire Door & Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Codexus helps organise passive fire inspection records,
              defect registers,
              fire door observations and compliance workflows.
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