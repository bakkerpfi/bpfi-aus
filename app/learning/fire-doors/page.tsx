import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Fire Door Inspections Sydney | BAKKER PFI Australia",
  description:
    "Learn about fire door inspections, common fire door defects and passive fire compliance workflows throughout Sydney and NSW.",
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
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-zinc-900 py-32">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <img
              src="/learning/fire-door-example.png"
              alt="Fire Door Inspection Sydney"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Sydney Passive Fire Learning
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Fire Door Inspections
              <br />
              & Compliance
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Understanding fire door systems,
              common defects and passive fire compliance workflows
              throughout commercial buildings across Sydney and NSW.
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
                Fire doors form part of a building’s passive fire protection
                system and are designed to help slow the spread of fire
                and smoke between fire compartments.
              </p>

              <p>
                Correctly functioning fire doors assist with protecting
                occupants,
                escape routes and separated spaces throughout buildings.
              </p>

              <p>
                Fire doors must remain in good condition and should not be
                modified in ways that compromise fire resistance performance.
              </p>
            </div>
          </div>
        </section>

        {/* DEFECTS */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Common Fire Door Issues
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Fire Door Defects
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

        {/* INSPECTIONS */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Fire Door Inspections
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Identifying Common Compliance Issues
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Fire door inspections help identify issues affecting
                compartmentation performance throughout buildings.
              </p>

              <p>
                Common issues include excessive gaps,
                missing smoke seals,
                damaged hardware and non-compliant modifications.
              </p>

              <p>
                Inspections assist building owners,
                contractors and compliance teams with identifying
                remediation requirements and maintaining passive fire systems.
              </p>
            </div>
          </div>
        </section>

        {/* AS1530.4 */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Australian Standards
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Fire-Rated Door Systems
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Fire door systems form part of the overall passive fire
                strategy used to maintain compartmentation throughout buildings.
              </p>

              <p>
                Fire-rated systems tested to AS1530.4 are designed to
                resist the spread of fire and smoke in accordance with
                NCC compliance requirements.
              </p>

              <p>
                Understanding fire door system requirements assists with
                inspections,
                defect identification and compliance reporting workflows.
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
              Continue learning about compartmentation,
              service penetrations,
              fire stopping systems and passive fire compliance workflows.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/learning"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
              >
                Back To Learning Centre
              </Link>

              <Link
                href="/learning/common-defects"
                className="rounded-full border border-zinc-700 px-8 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-500"
              >
                Common Passive Fire Defects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}