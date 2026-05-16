import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "What Is Passive Fire? | BAKKER PFI Australia",
  description:
    "Learn what passive fire protection is, how fire compartmentation works and why passive fire systems are critical throughout buildings.",
};

const passiveFireElements = [
  {
    title: "Fire-Rated Walls",
    description:
      "Fire-rated walls divide buildings into separate fire compartments.",
  },
  {
    title: "Fire Doors",
    description:
      "Fire doors help protect escape routes and limit fire spread.",
  },
  {
    title: "Fire Stopping Systems",
    description:
      "Fire stopping protects openings created by pipes, cables and ducts.",
  },
  {
    title: "Fire-Rated Floors",
    description:
      "Fire-rated floor systems reduce vertical fire spread between levels.",
  },
  {
    title: "Smoke Seals",
    description:
      "Smoke seals assist with limiting smoke movement through door gaps.",
  },
  {
    title: "Compartmentation Systems",
    description:
      "Passive fire systems work together to maintain fire compartments.",
  },
];

export default function WhatIsPassiveFirePage() {
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
              alt="What Is Passive Fire"
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
              What Is
              <br />
              Passive Fire?
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Understanding how passive fire protection systems help slow
              the spread of fire and smoke throughout buildings.
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
                Passive fire protection refers to building systems designed
                to slow the spread of fire and smoke throughout buildings.
              </p>

              <p>
                These systems form part of the building structure and work
                continuously without requiring activation during a fire event.
              </p>

              <p>
                Passive fire systems help protect occupants,
                escape routes and property by maintaining fire
                compartmentation throughout buildings.
              </p>
            </div>
          </div>
        </section>

        {/* ACTIVE VS PASSIVE */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Active vs Passive Fire
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Understanding The Difference
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* PASSIVE */}
              <div className="rounded-3xl border border-zinc-800 bg-black p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
                  Passive Fire
                </p>

                <h3 className="mt-6 text-3xl font-bold">
                  Built Into The Building
                </h3>

                <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
                  <p>
                    Fire-rated walls and floors
                  </p>

                  <p>
                    Fire doors and smoke seals
                  </p>

                  <p>
                    Fire stopping systems
                  </p>

                  <p>
                    Compartmentation barriers
                  </p>

                  <p>
                    Fire-rated construction systems
                  </p>
                </div>
              </div>

              {/* ACTIVE */}
              <div className="rounded-3xl border border-zinc-800 bg-black p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
                  Active Fire
                </p>

                <h3 className="mt-6 text-3xl font-bold">
                  Activated During Fire Events
                </h3>

                <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
                  <p>
                    Sprinkler systems
                  </p>

                  <p>
                    Fire alarms
                  </p>

                  <p>
                    Smoke detection systems
                  </p>

                  <p>
                    Emergency warning systems
                  </p>

                  <p>
                    Fire extinguishers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ELEMENTS */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Passive Fire Elements
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Common Passive Fire Systems
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {passiveFireElements.map((element) => (
                <div
                  key={element.title}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
                >
                  <h3 className="text-2xl font-bold">
                    {element.title}
                  </h3>

                  <p className="mt-6 leading-8 text-zinc-400">
                    {element.description}
                  </p>
                </div>
              ))}
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
                AS1530.4 is the primary Australian Standard used to test
                fire-rated building systems including walls,
                floors,
                doors and service penetrations.
              </p>

              <p>
                These systems are tested in controlled furnace conditions
                to determine how long they can resist the spread of fire
                and smoke.
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
              service penetrations,
              fire doors and passive fire compliance workflows.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/learning"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
              >
                Back To Learning Centre
              </Link>

              <Link
                href="/learning/fire-compartmentation"
                className="rounded-full border border-zinc-700 px-8 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-500"
              >
                Fire Compartmentation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}