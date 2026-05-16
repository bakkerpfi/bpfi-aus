import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutBenBakkerPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="border-b border-zinc-900 px-6 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2 md:items-center">
            {/* IMAGE */}
            <div className="overflow-hidden rounded-[32px] border border-zinc-800">
              <img
                src="/ben-bakker.png"
                alt="Benjamin Bakker"
                className="h-full w-full object-cover"
              />
            </div>

{/* CONTENT */}
<div>
  <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
    About Ben Bakker
  </p>

  <h1 className="text-5xl font-bold leading-tight md:text-6xl">
    Benjamin Bakker
  </h1>

  <p className="mt-8 text-xl leading-9 text-zinc-300">
    Passive Fire Compliance Specialist focused on inspections,
    compartmentation reviews, fire stopping systems,
    compliance reporting and remediation pathway support
    across New Zealand and Australia.
  </p>

  <div className="mt-8 space-y-6 text-lg leading-8 text-zinc-400">
    <p>
      Ben’s background combines practical passive fire installation
      experience with technical compliance reporting and inspection
      workflows for existing commercial buildings and construction
      projects.
    </p>

    <p>
      His work focuses heavily on passive fire inspections,
      fire-rated compartmentation systems, defect identification,
      AS1530.4 system understanding and pathway-to-compliance
      reporting for building owners, consultants,
      AFSS providers and contractors.
    </p>

    <p>
      Ben is also involved in passive fire industry development,
      competency discussions and digital compliance systems
      through Codexus compliance platforms and international
      industry engagement.
    </p>
  </div>

  {/* QUICK INFO */}
  <div className="mt-10 flex flex-wrap gap-4">
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <p className="text-sm text-gray-400">
        Position
      </p>

      <p className="mt-1 font-semibold">
        Managing Director
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <p className="text-sm text-gray-400">
        Industry Focus
      </p>

      <p className="mt-1 font-semibold">
        Passive Fire Compliance
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <p className="text-sm text-gray-400">
        Specialisation
      </p>

      <p className="mt-1 font-semibold">
        Inspections & Reporting
      </p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
      <p className="text-sm text-gray-400">
        Technical Focus
      </p>

      <p className="mt-1 font-semibold">
        AS1530.4 Systems
      </p>
    </div>
  </div>
</div>
</div>
        </section>

{/* TECHNICAL SYSTEM KNOWLEDGE */}
<section className="border-b border-zinc-900 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
      Technical System Knowledge
    </p>

    <h2 className="max-w-5xl text-4xl font-bold md:text-5xl">
      Understanding Passive Fire Systems Beyond Basic Inspection
    </h2>

    <div className="mt-12 grid gap-12 lg:grid-cols-2">
      <div className="space-y-8 text-lg leading-9 text-zinc-400">
        <p>
          Benjamin Bakker’s background includes practical installation
          experience and technical understanding of passive fire systems
          tested to AS1530.4 and related passive fire standards used
          throughout Australia and New Zealand.
        </p>

        <p>
          This includes knowledge of fire-rated wall and floor systems,
          penetration sealing systems, service movement requirements,
          substrate conditions and tested passive fire system limitations.
        </p>

        <p>
          Understanding how passive fire systems are actually installed
          and perform within real buildings assists with identifying
          defects, non-compliant conditions and inappropriate repairs
          during inspections and compliance reviews.
        </p>

        <p>
          This practical system knowledge supports more accurate
          compartmentation reviews, passive fire inspections,
          defect reporting and remediation pathways for existing buildings.
        </p>
      </div>

      <div className="grid gap-6">
        <div className="border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="mb-4 text-2xl font-semibold">
            AS1530.4 Systems
          </h3>

<p className="leading-8 text-zinc-400">
  Understanding of passive fire systems tested to AS1530.4,
  the primary Australian Standard used to determine the fire
  resistance of building elements including walls, floors,
  doors and service penetrations in accordance with NCC
  compliance requirements.
</p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="mb-4 text-2xl font-semibold">
            Fire-Rated Construction
          </h3>

          <p className="leading-8 text-zinc-400">
            Understanding of fire-rated wall and floor systems,
            substrate conditions and compartmentation requirements
            across commercial buildings.
          </p>
        </div>

        <div className="border border-zinc-800 bg-zinc-950 p-8">
          <h3 className="mb-4 text-2xl font-semibold">
            Installation Knowledge
          </h3>

          <p className="leading-8 text-zinc-400">
            Practical installation background supporting accurate
            defect identification, reporting and remediation pathways.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* CREDENTIALS */}
<section className="border-b border-zinc-900 py-24">
  <div className="mx-auto max-w-7xl px-6">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
      Credentials & Industry Experience
    </p>

    <h2 className="text-4xl font-bold md:text-5xl">
      Passive Fire Compliance & Technical Experience
    </h2>

    <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
      <div className="border border-zinc-800 bg-zinc-950 p-8">
        <h3 className="mb-4 text-2xl font-semibold">
          ASFP ANZ
        </h3>

        <p className="leading-8 text-zinc-400">
          ASFP ANZ Council participation supporting passive fire industry
          development and compliance systems.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-8">
        <h3 className="mb-4 text-2xl font-semibold">
          FPANZ Experience
        </h3>

        <p className="leading-8 text-zinc-400">
          Previous FPANZ SIG Chair involvement and passive fire industry
          technical discussions.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-8">
        <h3 className="mb-4 text-2xl font-semibold">
          NZQA Passive Fire
        </h3>

        <p className="leading-8 text-zinc-400">
          Level 3 NZQA Passive Fire qualification and involvement
          in industry review discussions relating to passive fire
          learning pathways and competency development.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-8">
        <h3 className="mb-4 text-2xl font-semibold">
          SBCG
        </h3>

        <p className="leading-8 text-zinc-400">
          Southern Building Control Group (SBCG) PS3 Author
          experience for passive fire compliance documentation.
        </p>
      </div>

      <div className="border border-zinc-800 bg-zinc-950 p-8">
        <h3 className="mb-4 text-2xl font-semibold">
          Auckland Council
        </h3>

        <p className="leading-8 text-zinc-400">
          PS3 Author experience supporting passive fire compliance
          and technical reporting workflows.
        </p>
      </div>
    </div>
  </div>
</section>

        {/* OVERVIEW */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-5xl px-6">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Professional Overview
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Technical Compliance & Inspection Systems
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-9 text-zinc-400">
              <p>
                Benjamin Bakker is involved in passive fire compliance,
                inspections, reporting systems and digital workflow development
                across New Zealand and Australia.
              </p>

              <p>
                His background includes practical installation experience,
                passive fire defect identification, compartmentation reviews,
                QA systems, compliance reporting and remediation workflow
                development for existing commercial buildings and construction
                projects.
              </p>

              <p>
                Ben focuses heavily on passive fire inspections and pathway-to-
                compliance reporting for existing buildings, working alongside
                building managers, consultants, AFSS providers and contractors.
              </p>

              <p>
                He is also involved in developing Codexus compliance systems —
                digital passive fire workflows designed to support inspection
                records, fire registers, defect tracking and compliance
                documentation.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Contact
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Discuss Passive Fire Compliance
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              For passive fire inspections, compliance reporting,
              compartmentation reviews or technical compliance support
              across Sydney and NSW.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="mailto:ben@bakkerpfi.com"
                className="inline-flex border border-orange-500 px-8 py-4 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-black"
              >
                Contact Ben Bakker
              </a>

              <a
                href="https://www.linkedin.com/in/benjamin1975/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex border border-zinc-700 px-8 py-4 font-semibold text-white transition hover:border-orange-500"
              >
                LinkedIn Profile
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}