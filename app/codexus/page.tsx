import Navbar from "@/components/Navbar";

export default function CodexusPage() {

  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-800">

        <div className="mx-auto max-w-7xl px-6 py-32">

          <p className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-500">
            Codexus Compliance Systems
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Compliance Intelligence
            Powered by BAKKER PFI
          </h1>

          <p className="mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Codexus is a passive fire compliance platform designed to organise,
            track and manage passive fire information across buildings,
            inspections, penetrations, defect registers and compliance reporting.
          </p>

        </div>

      </section>

      {/* WHAT IS CODEXUS */}
      <section className="border-b border-zinc-800 bg-zinc-950">

        <div className="mx-auto grid max-w-7xl gap-20 px-6 py-28 md:grid-cols-2">

          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-500">
              What Is Codexus?
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              A Digital Passive Fire Compliance System
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-9 text-zinc-400">

            <p>
              Passive fire information is often fragmented across reports,
              photos, contractor records, drawings and fire safety documentation.
            </p>

            <p>
              Codexus was developed to bring this information together into
              one structured compliance workflow.
            </p>

            <p>
              The platform helps organise inspections, identify defects,
              manage fire stopping information and create digital compliance records
              for buildings and facility managers.
            </p>

          </div>

        </div>

      </section>

      {/* POWERED BY BAKKER PFI */}
      <section className="border-b border-zinc-800">

        <div className="mx-auto grid max-w-7xl gap-20 px-6 py-28 md:grid-cols-2">

          <div>

            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-500">
              Powered by BAKKER PFI
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              Real Inspection Knowledge Drives The Platform
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-9 text-zinc-400">

            <p>
              Codexus is powered by real-world passive fire inspections,
              compartmentation surveys, compliance reporting and field installation experience.
            </p>

            <p>
              BAKKER PFI performs inspections, identifies defects,
              documents penetrations, reviews tested systems and feeds
              structured field information into the Codexus workflow.
            </p>

            <p>
              Codexus is only as intelligent as the quality of the information entered into it.
            </p>

          </div>

        </div>

      </section>

      {/* WORKFLOW */}
      <section className="border-b border-zinc-800 bg-zinc-950">

        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="max-w-4xl">

            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-500">
              Compliance Workflow
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              How Information Flows Through Codexus
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            {[
              "Inspection",
              "Defect Identification",
              "Photo Documentation",
              "System Verification",
              "Codexus Processing",
              "Compliance Reporting",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-3xl border border-zinc-800 bg-black p-10 text-center"
              >

                <div className="mb-6 text-5xl font-bold text-orange-500">
                  {index + 1}
                </div>

                <h3 className="text-2xl font-bold">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* OUTPUTS */}
      <section className="border-b border-zinc-800">

        <div className="mx-auto max-w-7xl px-6 py-28">

          <div className="max-w-4xl">

            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-500">
              Compliance Outputs
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-5xl">
              What Codexus Produces
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            {[
              "Passive Fire Reports",
              "Compartmentation Surveys",
              "Defect Registers",
              "Penetration Registers",
              "Fire Stopping Schedules",
              "Photo Documentation",
              "QA Records",
              "Compliance Pathways",
              "Digital Building Records",
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

      {/* FUTURE */}
      <section>

        <div className="mx-auto max-w-7xl px-6 py-32">

          <div className="max-w-5xl">

            <p className="mb-6 text-sm uppercase tracking-[0.4em] text-orange-500">
              Future Vision
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Building The Future Of Passive Fire Compliance
            </h2>

            <p className="mt-10 text-xl leading-10 text-zinc-400">
              Codexus is being developed as a next-generation passive fire
              compliance ecosystem focused on digital building records,
              compliance traceability, QR-linked penetrations,
              live compliance workflows and intelligent reporting systems.
            </p>

            <p className="mt-8 text-xl leading-10 text-zinc-400">
              The long-term vision is to improve visibility,
              accountability and understanding of passive fire systems
              throughout the lifecycle of a building.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}