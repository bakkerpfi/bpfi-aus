import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HomePage() {

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

{/* HERO */}
<section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-zinc-900">
  {/* BACKGROUND IMAGE */}
  <div className="absolute inset-0">
    <img
      src="/sydney.png"
      alt="Sydney Skyline"
      className="h-full w-full object-cover"
    />

    {/* DARK OVERLAY */}
    <div className="absolute inset-0 bg-black/60" />

    {/* GRADIENT */}
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
  </div>

  <div className="relative z-10 mx-auto max-w-7xl px-6">
    <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
      Sydney Passive Fire Compliance
    </p>

    <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
      Passive Fire Inspection & Compliance Reporting
    </h1>

    <p className="mt-8 max-w-2xl text-lg text-zinc-300">
      Supporting building owners, consultants, AFSS providers and contractors
      across Sydney and NSW with passive fire inspections,
      compartmentation surveys, compliance reporting
      and rectification workflow support.
    </p>

    <div className="mt-10 flex flex-wrap gap-4">
      <Link
        href="/contact"
        className="bg-orange-500 px-6 py-3 font-semibold text-black transition hover:bg-orange-400"
      >
        Request Inspection
      </Link>

      <Link
        href="/about-ben-bakker"
        className="border border-zinc-700 px-6 py-3 font-semibold transition hover:border-orange-500"
      >
        About Ben Bakker
      </Link>
    </div>
  </div>
</section>

{/* SERVICES */}
<section className="border-b border-zinc-900 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-16">
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
        Services
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Sydney Passive Fire Compliance Services
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
      <div className="border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500">
        <h3 className="mb-4 text-2xl font-semibold">
          Passive Fire Inspections
        </h3>

        <p className="leading-7 text-zinc-400">
          Inspection of passive fire systems, penetrations,
          fire stopping defects and compartmentation issues
          throughout existing commercial buildings.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500">
        <h3 className="mb-4 text-2xl font-semibold">
          Compartmentation Surveys
        </h3>

        <p className="leading-7 text-zinc-400">
          Detailed surveys of risers, walls, ceilings,
          fire separations and service penetrations
          to identify compliance gaps and defects.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500">
        <h3 className="mb-4 text-2xl font-semibold">
          Compliance Reporting
        </h3>

        <p className="leading-7 text-zinc-400">
          Professional passive fire reports with defect
          identification, photos, recommendations and
          rectification pathway support.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500">
        <h3 className="mb-4 text-2xl font-semibold">
          AFSS Support
        </h3>

        <p className="leading-7 text-zinc-400">
          Supporting AFSS providers, consultants,
          building managers and contractors with
          passive fire compliance documentation.
        </p>
      </div>
    </div>
  </div>
</section>

{/* WHY BPFI */}
<section className="border-b border-zinc-900 py-24">
  <div className="mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2">
    <div>
      <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
        Why BAKKER PFI Australia
      </p>

      <h2 className="text-4xl font-bold md:text-5xl">
        Technical Passive Fire Compliance Specialists
      </h2>
    </div>

    <div className="space-y-6 text-lg leading-8 text-zinc-400">
      <p>
        BAKKER PFI Australia focuses on passive fire inspections,
        compartmentation assessments and compliance reporting
        for existing commercial and residential buildings
        throughout Sydney and New South Wales.
      </p>

      <p>
        Our role is to identify passive fire defects,
        document compliance issues and provide a clear
        pathway toward rectification and ongoing compliance.
      </p>

      <p>
        We work alongside AFSS providers, consultants,
        contractors, building managers and strata teams
        to support practical compliance outcomes.
      </p>

      <p>
        Our inspection workflows are supported by Codexus
        compliance systems, allowing structured reporting,
        defect tracking and scalable passive fire documentation.
      </p>
    </div>
  </div>
</section>

{/* CODEXUS */}
<section className="border-b border-zinc-900 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
      Codexus
    </p>

    <h2 className="max-w-4xl text-4xl font-bold md:text-5xl">
      Digital Passive Fire Compliance Systems
    </h2>

    <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
      BAKKER PFI is developing digital passive fire
      compliance workflows powered by Codexus —
      including inspection records, defect tracking,
      compliance reporting, digital fire registers
      and rectification management systems.
    </p>

    <div className="mt-14 grid gap-8 md:grid-cols-3">
      <div className="border border-zinc-800 bg-zinc-950 p-8">
        <h3 className="mb-4 text-2xl font-semibold">
          Inspection Reporting
        </h3>

        <p className="leading-7 text-zinc-400">
          Structured digital passive fire inspection reports
          with defect tracking and compliance workflows.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-8">
        <h3 className="mb-4 text-2xl font-semibold">
          Fire Register Systems
        </h3>

        <p className="leading-7 text-zinc-400">
          Digital fire stopping registers and compartmentation
          records aligned with building compliance requirements.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-8">
        <h3 className="mb-4 text-2xl font-semibold">
          Compliance Workflow
        </h3>

        <p className="leading-7 text-zinc-400">
          Managing identification, reporting,
          rectification and compliance pathways
          through connected digital systems.
        </p>
      </div>
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

      <Footer />
    </main>
  );
}