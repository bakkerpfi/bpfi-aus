import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Passive Fire Inspections Sydney | BAKKER PFI Australia",
  description:
    "Passive fire inspection and compliance reporting services across Sydney and NSW including fire compartmentation, fire doors and penetration inspections.",
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
            src="/sydney.png"
            alt="Sydney Passive Fire Inspections"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Sydney Passive Fire Compliance
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Inspections
            <br />
            & Compliance Reporting
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding how passive fire inspections,
            compartmentation reviews and compliance reporting support building fire safety across Sydney and NSW.
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

      {/* AFSS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              AFSS & Compliance
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Supporting NSW Building Compliance
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Throughout NSW,
              passive fire inspections form part of the overall building fire safety strategy and support compliance management processes associated with Annual Fire Safety Statements (AFSS).
            </p>

            <p>
              Passive fire systems contribute to the performance of Essential Fire Safety Measures (EFSM)
              by helping maintain fire compartmentation throughout buildings.
            </p>

            <p>
              During inspections,
              passive fire defects may be identified and documented to support remediation planning,
              compliance reporting and ongoing building maintenance workflows.
            </p>

          </div>

        </div>

      </section>

      {/* COMMON DEFECTS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Inspection Findings
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Typical Passive Fire Defects
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              "Unsealed service penetrations",
              "Damaged fire-rated walls",
              "Non-compliant fire stopping systems",
              "Missing fire collars",
              "Excessive fire door gaps",
              "Missing smoke seals",
              "Compromised ceiling barriers",
              "Damaged fire doors",
              "Unprotected cable penetrations",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
              >

                <h3 className="text-2xl font-bold">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* INSPECTION PROCESS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Inspection Workflow
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              How Passive Fire Inspections Work
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire inspections generally involve reviewing fire compartmentation systems throughout a building,
              identifying defects and documenting non-compliant conditions.
            </p>

            <p>
              This may include inspection of service penetrations,
              fire-rated walls,
              ceiling barriers,
              fire doors,
              risers,
              shafts and concealed spaces.
            </p>

            <p>
              Inspection findings are commonly documented using photographs,
              defect registers,
              floor plans and compliance reporting workflows.
            </p>

            <p>
              BAKKER PFI Australia uses structured inspection workflows and Codexus digital compliance systems
              to help organise passive fire information and support compliance visibility throughout buildings.
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
              The platform is powered by real-world passive fire inspection and installation knowledge provided by BAKKER PFI Australia.
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
            Sydney & NSW
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Passive Fire Inspection Support
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Contact Benjamin Bakker to discuss passive fire inspections,
            compartmentation surveys,
            defect reporting and compliance workflows throughout Sydney and NSW.
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