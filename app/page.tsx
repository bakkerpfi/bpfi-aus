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
              "url('/christchurch.png')",
          }}
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/20" />

        {/* CONTENT */}
        <div className="relative mx-auto max-w-7xl px-6 py-32 md:py-44">

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-500">
            Christchurch Passive Fire Compliance Specialists
          </p>

          <h1 className="max-w-6xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Inspection
            <br />
            & Compliance Support
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-zinc-300">
            Supporting building owners,
            IQPs,
            facility managers and contractors
            across Christchurch and Canterbury with passive fire inspections,
            compartmentation surveys,
            compliance reporting and BWOF remedial support.
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
              Christchurch Passive Fire Compliance Services
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
                text: "Surveying fire separations, risers and service penetrations throughout buildings and tenancy spaces.",
              },
              {
                title: "BWOF Remedial Support",
                text: "Supporting building owners and IQPs with passive fire defect identification and compliance pathways.",
              },
              {
                title: "Fire Door Assessments",
                text: "Identification of fire door defects, excessive gaps, missing smoke seals and non-compliant modifications.",
              },
              {
                title: "Compliance Reporting",
                text: "Structured passive fire reporting including defect registers, photographic documentation and survey records.",
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
              Existing Building Compliance
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Understanding Passive Fire Defects
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire systems within existing buildings can become compromised over time due to renovations,
              tenant fitouts,
              service upgrades and poor workmanship.
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
              BAKKER PFI LTD provides structured inspection and reporting workflows
              to help identify,
              document and manage these compliance issues throughout Christchurch and Canterbury.
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
              reporting and installation knowledge provided by BAKKER PFI LTD.
            </p>

            <p>
              Codexus helps bring passive fire information together into a structured compliance ecosystem supporting BWOF workflows,
              IQP reporting and ongoing building compliance management.
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

      {/* BENJAMIN SECTION */}
      <section className="border-b border-zinc-900 py-28">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-[420px_1fr]">

            {/* IMAGE */}
            <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950">

              <img
                src="/ben-bakker.png"
                alt="Benjamin Bakker"
                className="h-full w-full object-cover"
              />

            </div>

            {/* CONTENT */}
            <div>

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
                Technical Leadership
              </p>

              <h2 className="text-5xl font-bold leading-tight md:text-6xl">
                Benjamin Bakker
              </h2>

              <p className="mt-6 text-2xl text-zinc-400">
                Technical Director & Passive Fire Compliance Specialist
              </p>

              <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

                <p>
                  Benjamin Bakker has over 10 years experience in the passive fire industry,
                  specialising in passive fire installation,
                  inspections,
                  compliance systems and reporting workflows.
                </p>

                <p>
                  He is a Level 3 PFP Certified professional,
                  a PS3 Auckland Council Author,
                  former FPANZ SIG Chair,
                  and current ASFP ANZ Council member.
                </p>

                <p>
                  Benjamin is leading the development of Codexus,
                  a digital passive fire compliance platform focused on inspections,
                  fire registers,
                  reporting systems,
                  defect management and compliance workflows.
                </p>

                <p>
                  Through BAKKER PFI LTD,
                  Benjamin is focused on supporting building owners,
                  IQPs,
                  consultants and contractors with passive fire inspection,
                  compartmentation surveys and compliance reporting throughout Christchurch and Canterbury.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* REGIONAL OPERATIONS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
                Regional Operations
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                New Zealand, Australia & Singapore Operations
              </h2>

            </div>

            {/* RIGHT */}
            <div className="space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                BAKKER PFI operates across New Zealand,
                Australia and Singapore,
                supporting passive fire inspections,
                compliance reporting,
                digital workflow systems and technical compliance support.
              </p>

              <p>
                Auckland remains the company’s primary operational base,
                providing ongoing real-world installation experience,
                technical product knowledge and practical industry understanding.
              </p>

              <p>
                This operational knowledge supports inspection and compliance workflows
                throughout Christchurch,
                Sydney and Singapore,
                helping bridge the gap between installation,
                inspection and compliance reporting.
              </p>

              <p>
                By maintaining active involvement within real construction and remediation environments,
                BAKKER PFI remains closely connected to tested systems,
                site conditions and evolving compliance challenges.
              </p>

              <p>
                This practical field experience forms the foundation of our reporting workflows,
                compartmentation surveys and Codexus digital compliance platform.
              </p>

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
            Passive Fire Inspection & Compliance Support
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Contact Benjamin Bakker to discuss passive fire inspections,
            compartmentation surveys,
            BWOF remedial support and digital compliance workflows.
          </p>

          <div className="mt-14">

            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
            >
              Contact BAKKER PFI LTD
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}