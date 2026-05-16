import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Fire Compartmentation Sydney | BAKKER PFI Australia",
  description:
    "Learn about fire compartmentation, fire separations and passive fire compliance throughout Sydney and NSW.",
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
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-zinc-900 py-32">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <img
              src="/learning/fire-compartment-diagram.png"
              alt="Fire Compartmentation Sydney"
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
              Fire Compartmentation
              <br />
              & Fire Separations
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Understanding how fire compartments and fire-rated separations
              help slow the spread of fire and smoke throughout buildings.
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
                Fire compartmentation is a passive fire protection strategy
                designed to divide buildings into separate fire compartments.
              </p>

              <p>
                These compartments help slow the spread of fire and smoke
                throughout a building,
                protecting occupants,
                escape routes and property.
              </p>

              <p>
                Fire-rated walls,
                floors,
                doors and fire stopping systems all work together to maintain
                compartmentation performance.
              </p>
            </div>
          </div>
        </section>

        {/* TYPES */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Fire Separation Systems
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Common Compartmentation Elements
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {compartmentTypes.map((type) => (
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
                Why Compartmentation Matters
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Maintaining Building Fire Safety
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Defects in fire compartmentation systems can allow fire and
                smoke to spread rapidly throughout buildings.
              </p>

              <p>
                Common defects include unsealed penetrations,
                damaged fire-rated walls,
                missing fire stopping systems and defective fire doors.
              </p>

              <p>
                Regular inspections and compliance reviews assist with
                identifying issues affecting compartmentation performance.
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
                AS1530.4 Fire-Rated Systems
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                AS1530.4 is the primary Australian Standard used to determine
                the fire resistance of building elements including walls,
                floors,
                doors and service penetrations.
              </p>

              <p>
                Passive fire systems tested to AS1530.4 are designed to
                maintain compartmentation performance during fire conditions
                in accordance with NCC compliance requirements.
              </p>

              <p>
                Understanding how these systems work assists with inspections,
                compliance reviews and remediation planning throughout
                existing commercial buildings.
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
              Continue learning about passive fire systems,
              service penetrations,
              fire doors and compliance workflows throughout Sydney and NSW.
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