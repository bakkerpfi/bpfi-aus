import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900">

{/* BACKGROUND IMAGE */}
<div
  className="absolute inset-0 bg-cover bg-center opacity-90"
  style={{
    backgroundImage:
      "url('/sydney.png')",
  }}
/>

{/* OVERLAY */}
<div className="absolute inset-0 bg-black/15" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-44">

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-500">
            Sydney Passive Fire Compliance Specialists
          </p>

          <h1 className="max-w-6xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Inspection
            <br />
            & Compliance Support
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-zinc-300">
            Supporting building owners,
            strata managers,
            facility managers and contractors
            across Sydney and NSW with passive fire inspections,
            compartmentation surveys,
            compliance reporting and AFSS support.
          </p>

          {/* BUTTONS */}
          <div className="mt-14 flex flex-wrap gap-6">

            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-black transition hover:bg-orange-400"
            >
              Contact Us
            </Link>

            <Link
              href="/learning"
              className="rounded-full border border-zinc-700 px-8 py-4 text-lg font-semibold transition hover:border-orange-500 hover:text-orange-500"
            >
              Passive Fire Learning
            </Link>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Services
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Sydney Passive Fire Compliance Services
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {[
              {
                title: "Passive Fire Inspections",
                text: "Inspection of passive fire systems and identification of compliance defects within existing buildings.",
              },
              {
                title: "Compartmentation Surveys",
                text: "Surveying fire separations and service penetrations throughout buildings and tenancy spaces.",
              },
              {
                title: "AFSS Support",
                text: "Supporting documentation workflows associated with Annual Fire Safety Statement processes.",
              },
              {
                title: "Fire Door Assessments",
                text: "Identification of fire door defects, missing seals, excessive gaps and non-compliant modifications.",
              },
              {
                title: "Compliance Reporting",
                text: "Structured passive fire reporting including defect registers and photographic documentation.",
              },
              {
                title: "Codexus Compliance Systems",
                text: "Digital passive fire compliance workflows powered by real inspection and installation knowledge.",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-zinc-800 bg-black p-8"
              >

                <h3 className="text-2xl font-bold">
                  {service.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {service.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY IT MATTERS */}
      <section className="border-b border-zinc-900 py-28">

        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why Passive Fire Matters
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Hidden Defects Create Real Risk
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire systems are designed to slow the spread of fire and smoke throughout a building.
            </p>

            <p>
              Defective penetrations,
              damaged fire separations,
              missing seals and non-compliant fire doors can compromise compartmentation performance.
            </p>

            <p>
              Many passive fire defects remain hidden above ceilings,
              within risers,
              service shafts and wall penetrations until inspections are carried out.
            </p>

            <p>
              BAKKER PFI Australia provides structured inspection and reporting workflows
              to help identify,
              document and manage these compliance issues.
            </p>

          </div>

        </div>

      </section>

      {/* CODEXUS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-28">

        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Codexus Compliance Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Digital Passive Fire Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Codexus is a digital passive fire compliance platform designed to organise inspections,
              defect registers,
              penetration records,
              compliance workflows and building documentation.
            </p>

            <p>
              The platform is powered by real-world inspection,
              reporting and installation knowledge provided by BAKKER PFI.
            </p>

            <p>
              Codexus helps bring passive fire information together into a structured compliance ecosystem.
            </p>

            <Link
              href="/codexus"
              className="inline-block rounded-full border border-orange-500 px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-black"
            >
              Explore Codexus
            </Link>

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
            Passive Fire Inspection & Compliance Support
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Contact Benjamin Bakker to discuss passive fire inspections,
            compartmentation surveys,
            compliance reporting and digital compliance workflows.
          </p>

          <div className="mt-14">

            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
            >
              Contact BAKKER PFI Australia
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}