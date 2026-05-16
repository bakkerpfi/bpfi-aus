import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Passive Fire Inspections & Compliance Sydney | BAKKER PFI Australia",
  description:
    "Learn about passive fire inspections, compliance workflows and compartmentation reviews throughout Sydney and NSW.",
};

export default function InspectionsCompliancePage() {
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
              alt="Passive Fire Inspections Sydney"
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
              Passive Fire Inspections
              <br />
              & Compliance
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Understanding passive fire inspection workflows,
              compartmentation reviews and compliance reporting
              throughout Sydney and NSW commercial buildings.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Passive Fire Inspections
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Identifying Building Fire Safety Defects
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Passive fire inspections help identify defects affecting
                fire compartmentation throughout buildings.
              </p>

              <p>
                Inspections commonly identify unsealed penetrations,
                damaged fire-rated walls,
                defective fire doors and non-compliant fire stopping systems.
              </p>

              <p>
                Existing buildings often contain concealed passive fire
                defects resulting from historical building modifications
                and service installations.
              </p>
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Inspection Workflow
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Typical Compliance Process
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {[
                {
                  title: "Inspection",
                  text: "Site inspections identify passive fire defects and compartmentation issues.",
                },
                {
                  title: "Documentation",
                  text: "Defects are documented with photos, observations and location references.",
                },
                {
                  title: "Reporting",
                  text: "Compliance reports outline identified issues and remediation recommendations.",
                },
                {
                  title: "Rectification",
                  text: "Passive fire remediation works are completed using tested systems.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-zinc-800 bg-black p-8"
                >
                  <h3 className="text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-6 leading-8 text-zinc-400">
                    {step.text}
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
                Existing Buildings
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Maintaining Passive Fire Systems
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Passive fire systems require ongoing maintenance and review
                throughout the life of a building.
              </p>

              <p>
                Building modifications,
                new services and historical alterations can affect
                compartmentation performance over time.
              </p>

              <p>
                Regular inspection workflows assist with identifying
                remediation requirements and maintaining building compliance.
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
              service penetrations and passive fire compliance workflows.
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