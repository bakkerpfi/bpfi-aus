import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Fire Door Inspections Sydney | BAKKER PFI Australia",
  description:
    "Learn about fire door inspections, excessive gaps, missing smoke seals and common fire door defects identified throughout buildings across Sydney and NSW.",
};

const defects = [
  {
    title: "Excessive Door Gaps",
    description:
      "Large gaps around fire doors can allow smoke and fire to spread between compartments.",
  },
  {
    title: "Missing Smoke Seals",
    description:
      "Missing or damaged smoke seals reduce the performance of fire doors protecting escape routes.",
  },
  {
    title: "Damaged Door Closers",
    description:
      "Faulty or disconnected door closers may prevent fire doors from self-closing correctly.",
  },
  {
    title: "Wedged Open Doors",
    description:
      "Fire doors held open without approved hold-open systems compromise fire compartmentation.",
  },
  {
    title: "Damaged Frames & Hardware",
    description:
      "Damaged hinges, frames and latching hardware can affect the operation of fire doors.",
  },
  {
    title: "Unapproved Modifications",
    description:
      "Drilling, cutting or altering fire doors can compromise their tested fire performance.",
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
            alt="Fire Door Inspections Sydney"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Fire Door Compliance Sydney
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Fire Door Inspections
            <br />
            & Common Defects
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding how fire doors protect escape routes,
            maintain fire compartmentation and support building fire safety throughout Sydney and NSW.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why Fire Doors Matter
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Protecting Escape Routes & Compartments
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Fire doors are designed to slow the spread of fire and smoke throughout buildings,
              helping protect occupants and maintain safe evacuation pathways.
            </p>

            <p>
              Throughout Sydney and NSW,
              fire doors form part of the building’s overall passive fire protection strategy and contribute to fire compartmentation performance.
            </p>

            <p>
              Damaged or non-compliant fire doors can compromise smoke containment and reduce the effectiveness of fire separation systems.
            </p>

          </div>

        </div>

      </section>

      {/* COMMON DEFECTS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Fire Door Issues
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Typical Defects Identified During Inspections
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {defects.map((defect) => (
              <div
                key={defect.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
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

      {/* GAPS & SEALS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800">

            <img
              src="/learning/fire-door-example.png"
              alt="Fire Door Defects"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Smoke Containment
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Why Door Gaps Matter
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                Excessive gaps around fire doors can allow smoke and hot gases to spread rapidly between compartments.
              </p>

              <p>
                Missing smoke seals,
                damaged thresholds and incorrectly adjusted doors may reduce smoke containment performance during a fire event.
              </p>

              <p>
                During passive fire inspections,
                fire door gaps,
                smoke seals and door operation are commonly reviewed as part of broader building fire safety assessments.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* AFSS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              NSW Compliance
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Supporting Building Fire Safety Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Fire door inspections may support building fire safety management processes associated with Annual Fire Safety Statements (AFSS)
              and ongoing Essential Fire Safety Measures (EFSM) maintenance workflows.
            </p>

            <p>
              Building owners,
              strata managers and facility managers often require visibility of passive fire defects affecting fire compartmentation systems.
            </p>

            <p>
              Inspection reporting may include photographs,
              defect registers and recommendations supporting remediation planning and compliance management.
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
                  src="/learning/fire-door-example.png"
                  alt="Fire Door Inspection Gallery"
                  className="h-full w-full object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-10 lg:p-16">

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
                  Real Inspection Examples
                </p>

                <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                  Explore Real Fire Door Defects
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                  View examples of excessive fire door gaps,
                  damaged smoke seals,
                  non-compliant modifications and common fire door inspection findings.
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
            Fire Door Inspection Support
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Contact Benjamin Bakker to discuss fire door inspections,
            passive fire defect reporting and compartmentation reviews throughout Sydney and NSW.
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