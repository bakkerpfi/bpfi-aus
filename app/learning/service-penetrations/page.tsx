import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Service Penetrations Christchurch | BAKKER PFI LTD",
  description:
    "Learn about passive fire service penetrations, fire stopping systems and compartmentation compliance throughout Christchurch and Canterbury.",
};

const penetrationTypes = [
  {
    title: "Plastic Pipes",
    description:
      "Plastic pipes can melt during fire exposure and require tested fire stopping systems such as fire collars or wraps.",
  },
  {
    title: "Metal Pipes",
    description:
      "Metal service penetrations require tested sealing systems to maintain fire compartmentation performance.",
  },
  {
    title: "Electrical Cables",
    description:
      "Cable penetrations passing through fire-rated barriers require compliant fire stopping protection.",
  },
  {
    title: "Cable Trays",
    description:
      "Large cable tray openings can create significant compartmentation risks if left unprotected.",
  },
  {
    title: "HVAC Ducts",
    description:
      "Mechanical duct penetrations often require fire dampers and tested fire-rated sealing systems.",
  },
  {
    title: "Mixed Services",
    description:
      "Openings containing multiple services require carefully selected tested systems to maintain fire ratings.",
  },
];

export default function ServicePenetrationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/learning/fire-stopping-example.png"
            alt="Passive Fire Service Penetrations Christchurch"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Christchurch Passive Fire Compliance
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Service Penetrations
            <br />
            & Fire Stopping Systems
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding service penetrations,
            fire stopping systems and fire compartmentation throughout buildings across Christchurch and Canterbury.
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
              ducts or other services pass through fire-rated walls or floors.
            </p>

            <p>
              These openings must be protected using tested fire stopping systems designed to maintain the fire resistance performance of the barrier.
            </p>

            <p>
              Throughout Christchurch and Canterbury,
              penetration defects are commonly identified during BWOF inspections,
              fitouts,
              remediation projects and existing building reviews.
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
              Typical Services Found In Buildings
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {penetrationTypes.map((item) => (
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

      {/* WHY FIRE STOPPING MATTERS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why Fire Stopping Matters
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Maintaining Fire Compartmentation
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Fire compartmentation systems are designed to slow the spread of fire and smoke throughout buildings.
            </p>

            <p>
              Unprotected penetrations can create direct pathways for smoke,
              heat and fire to spread between fire compartments.
            </p>

            <p>
              Properly selected tested systems help maintain the fire resistance performance of walls and floors.
            </p>

          </div>

        </div>

      </section>

      {/* COMMON DEFECTS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Defects
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Typical Penetration Issues
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Common passive fire defects include:
              unsealed openings,
              incorrect products,
              damaged seals,
              foam fillers,
              oversized openings and untested systems.
            </p>

            <p>
              Service upgrades and tenant fitouts frequently create new penetrations that may not be properly protected.
            </p>

            <p>
              These issues are commonly identified during inspections throughout existing buildings across Christchurch and Canterbury.
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
              Structured Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Penetration inspections commonly include:
              photographs,
              defect identification,
              fire stopping observations,
              penetration schedules and compliance reporting.
            </p>

            <p>
              BAKKER PFI LTD uses structured inspection workflows and Codexus digital systems
              to support passive fire visibility throughout buildings.
            </p>

            <p>
              These workflows help support BWOF compliance,
              remediation planning and ongoing passive fire management throughout Christchurch and Canterbury.
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
              Digital Penetration & Compliance Management
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Codexus helps organise penetration records,
              defect registers,
              inspection data and passive fire reporting workflows.
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

          </div>

        </div>

      </section>

    </main>
  );
}