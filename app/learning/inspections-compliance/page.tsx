import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Passive Fire Inspections Christchurch | BAKKER PFI LTD",
  description:
    "Passive fire inspection and compliance reporting services across Christchurch and Canterbury including fire compartmentation, fire doors and penetration inspections.",
};

export default function InspectionsCompliancePage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/christchurch.png"
            alt="Christchurch Passive Fire Inspections"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/20" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Christchurch Passive Fire Compliance
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Inspections
            <br />
            & Compliance Reporting
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-200">
            Understanding how passive fire inspections,
            compartmentation reviews and compliance reporting support building fire safety across Christchurch and Canterbury.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why Inspections Matter
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Passive Fire Defects Are Often Hidden
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire systems are designed to slow the spread of fire and smoke throughout a building,
              protecting occupants,
              escape routes and property.
            </p>

            <p>
              However,
              many passive fire defects remain hidden above ceilings,
              within risers,
              service shafts and concealed wall penetrations until inspections are carried out.
            </p>

            <p>
              Damaged fire doors,
              missing smoke seals,
              unsealed penetrations and compromised fire-rated barriers can all affect compartmentation performance.
            </p>

          </div>

        </div>

      </section>

      {/* BWOF */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              BWOF & Compliance
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Supporting Building Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire inspections can support compliance workflows associated with Building Warrants of Fitness (BWOF),
              IQP inspections and ongoing building maintenance programmes.
            </p>

            <p>
              Inspection reports help identify passive fire defects,
              document building conditions
              and support remedial planning for fire compartmentation systems.
            </p>

            <p>
              These workflows improve visibility of passive fire systems throughout existing buildings
              and assist building owners and facility managers with understanding compliance risks.
            </p>

          </div>

        </div>

      </section>

      {/* INSPECTION AREAS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Inspection Scope
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Typical Survey Areas
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              "Fire doors",
              "Service penetrations",
              "Risers & shafts",
              "Fire & smoke separations",
              "Fire-rated walls",
              "Fire-rated floors",
              "Ceiling compartmentation",
              "Plant rooms",
              "Escape routes",
              "Compliance schedule systems",
              "Passive fire barriers",
              "Existing building defects",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500"
              >

                <p className="text-xl font-semibold leading-8">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Inspection Workflow
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Structured Inspection & Reporting
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              BAKKER PFI LTD uses structured inspection workflows designed to improve visibility of passive fire systems throughout buildings.
            </p>

            <p>
              Inspection records may include:
              photographs,
              penetration records,
              defect identification,
              fire door observations,
              compartmentation reviews and compliance reporting.
            </p>

            <p>
              These workflows support BWOF compliance visibility,
              defect management
              and passive fire reporting throughout Christchurch and Canterbury.
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
              Digital Passive Fire Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Codexus is a digital passive fire compliance platform designed to support inspections,
              defect registers,
              penetration records and compliance reporting workflows.
            </p>

            <p>
              The platform is powered by real-world passive fire inspection and installation knowledge provided by BAKKER PFI LTD.
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
            Christchurch & Canterbury
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Passive Fire Inspection Support
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Contact Benjamin Bakker to discuss passive fire inspections,
            compartmentation surveys,
            defect reporting and compliance workflows throughout Christchurch and Canterbury.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
            >
              Contact BAKKER PFI LTD
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