import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Service Penetrations Sydney | BAKKER PFI Australia",
  description:
    "Learn about service penetrations, fire stopping systems and passive fire compliance throughout Sydney and NSW.",
};

const penetrationTypes = [
  {
    title: "Cable Penetrations",
    description:
      "Electrical cables passing through fire-rated walls and floors require tested fire stopping systems.",
  },
  {
    title: "Pipe Penetrations",
    description:
      "Plastic and metal pipes passing through fire-rated barriers require compliant sealing systems.",
  },
  {
    title: "Duct Penetrations",
    description:
      "Mechanical ducts may require fire dampers and tested fire stopping systems.",
  },
  {
    title: "Mixed Services",
    description:
      "Multiple services grouped together require tested systems suitable for combined penetrations.",
  },
  {
    title: "Blank Openings",
    description:
      "Unused openings through fire-rated barriers must be properly fire sealed.",
  },
  {
    title: "Riser Penetrations",
    description:
      "Vertical service risers require fire stopping systems to maintain compartmentation.",
  },
];

export default function ServicePenetrationsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-zinc-900 py-32">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <img
              src="/learning/fire-stopping-example.png"
              alt="Service Penetrations Sydney"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/60" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Sydney Passive Fire Learning
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Service Penetrations
              <br />
              & Fire Stopping
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Understanding how service penetrations affect
              fire compartmentation and how tested fire stopping systems
              help maintain passive fire performance throughout buildings.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                What Are Service Penetrations?
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Openings Through Fire-Rated Barriers
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Service penetrations are openings created when pipes,
                cables,
                ducts or other services pass through fire-rated walls
                and floors.
              </p>

              <p>
                These openings can compromise fire compartmentation if
                they are not properly protected using tested fire
                stopping systems.
              </p>

              <p>
                Fire stopping systems are designed to help maintain the
                fire resistance performance of the wall or floor assembly.
              </p>
            </div>
          </div>
        </section>

        {/* TYPES */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Common Penetration Types
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Fire Stopping Applications
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {penetrationTypes.map((type) => (
                <div
                  key={type.title}
                  className="rounded-3xl border border-zinc-800 bg-black p-8"
                >
                  <h3 className="text-2xl font-bold">
                    {type.title}
                  </h3>

                  <p className="mt-6 leading-8 text-zinc-400">
                    {type.description}
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
                Why Fire Stopping Matters
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Maintaining Compartmentation Performance
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Unsealed or incorrectly sealed penetrations are one of
                the most common passive fire defects identified during
                inspections.
              </p>

              <p>
                Fire and smoke can spread rapidly through unprotected
                openings affecting multiple fire compartments throughout
                buildings.
              </p>

              <p>
                Regular inspections assist with identifying damaged,
                missing or non-compliant fire stopping systems.
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
                AS1530.4 Fire Stopping Systems
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Fire stopping systems tested to AS1530.4 are designed
                to maintain the fire resistance performance of fire-rated
                walls and floors.
              </p>

              <p>
                Systems are tested for specific service types,
                substrates,
                opening sizes and fire-rating requirements.
              </p>

              <p>
                Understanding tested systems assists with inspections,
                compliance reviews and remediation planning throughout
                existing buildings.
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
              fire doors,
              inspections and passive fire compliance workflows.
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