import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "About BAKKER PFI Australia",
  description:
    "Learn more about BAKKER PFI Australia and our focus on passive fire inspections, compartmentation surveys and compliance reporting workflows across Sydney and Australia.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-zinc-900 py-32">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <img
              src="/sydney.png"
              alt="Sydney Passive Fire Compliance"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/70" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-orange-500">
              About BAKKER PFI Australia
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Passive Fire Compliance
              <br />
              Inspections & Reporting
            </h1>

            <p className="mt-10 max-w-3xl text-lg leading-8 text-zinc-300">
              BAKKER PFI Australia provides passive fire inspections,
              compartmentation surveys,
              compliance reporting and remediation support
              across Sydney and Australia.
            </p>
          </div>
        </section>

        {/* OVERVIEW */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Industry Focus
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Existing Building
                <br />
                Passive Fire Compliance
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                BAKKER PFI Australia supports building owners,
                facility managers,
                consultants and contractors with passive fire inspections,
                compliance reporting and compartmentation surveys.
              </p>

              <p>
                Our focus is on improving visibility of passive fire systems
                throughout existing buildings and helping identify defects,
                penetrations and compartmentation issues requiring remediation.
              </p>

              <p>
                We work with passive fire systems associated with walls,
                floors,
                service penetrations,
                fire stopping systems and fire-rated construction.
              </p>

              <p>
                Inspection workflows are designed to support compliance reporting,
                remediation planning and long-term building compliance management.
              </p>
            </div>
          </div>
        </section>

        {/* AS1530.4 */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Fire-Rated Systems
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Understanding
                <br />
                AS1530.4 Systems
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                BAKKER PFI Australia works with passive fire systems tested
                to AS1530.4 and related fire-rated systems used throughout Australia.
              </p>

              <p>
                AS1530.4 is the primary Australian Standard used to test
                the fire resistance of walls,
                floors,
                doors and service penetrations.
              </p>

              <p>
                Understanding how these systems are tested and installed
                assists with inspections,
                compartmentation reviews and remediation workflows
                throughout existing buildings.
              </p>
              <p>
  AS1530.4 is the primary Australian Standard used to test
  the fire resistance of walls,
  floors,
  doors and service penetrations.
</p>
<p>
  These systems form an important part of passive fire compliance
  throughout Australian buildings and are commonly referenced within
  National Construction Code (NCC) compliant fire-rated construction
  and remediation workflows across New South Wales and Australia.
</p>

              <p>
                We also maintain awareness of international passive fire
                testing standards including BS 476 and EN 1366 systems
                commonly referenced throughout global passive fire markets.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Compliance Services
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Passive Fire Inspection Services
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {[
                "Passive Fire Inspections",
                "Compartmentation Surveys",
                "Fire Door Inspections",
                "Penetration Reviews",
                "Compliance Reporting",
                "Remediation Support",
              ].map((service) => (
                <div
                  key={service}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
                >
                  <h3 className="text-2xl font-bold">
                    {service}
                  </h3>

                  <p className="mt-6 leading-8 text-zinc-400">
                    Structured inspection and compliance workflows designed
                    to improve visibility of passive fire systems throughout
                    existing buildings.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CODEXUS */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <img
                src="/Codexus_Logo.png"
                alt="Codexus Compliance Systems"
                className="h-100 w-auto"
              />
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                BAKKER PFI Australia is also developing Codexus,
                a digital passive fire compliance platform designed to support
                inspections,
                defect registers,
                penetration schedules and compliance reporting workflows.
              </p>

              <p>
                Codexus is focused on improving visibility of passive fire
                systems throughout existing buildings while supporting
                long-term compliance management and remediation tracking.
              </p>

              <div className="pt-4">
                <Link
                  href="/codexus"
                  className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
                >
                  Explore Codexus
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Contact
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Speak With BAKKER PFI Australia
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              Contact us to discuss passive fire inspections,
              compartmentation surveys,
              compliance reporting and remediation support
              throughout Sydney and Australia.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:ben@bakkerpfi.com"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
              >
                Contact Australia Office
              </a>

              <a
                href="/about-ben-bakker"
                className="rounded-full border border-zinc-700 px-8 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-500"
              >
                About Ben Bakker
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}