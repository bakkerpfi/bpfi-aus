import Navbar from "@/components/Navbar";

const services = [
  {
    title: "Passive Fire Inspections",
    description:
      "Inspection of passive fire penetrations, fire stopping systems and existing compliance conditions within buildings.",
  },
  {
    title: "Fire Compartmentation Surveys",
    description:
      "Assessment of fire-rated walls, risers, ceilings and compartment lines to identify passive fire defects and compliance gaps.",
  },
  {
    title: "Compliance Reporting",
    description:
      "Professional reporting including defect identification, photographic records, recommendations and compliance pathways.",
  },
  {
    title: "Existing Building Assessments",
    description:
      "Review of existing buildings to identify passive fire issues associated with upgrades, fitouts and aging infrastructure.",
  },
  {
    title: "FSM & PE Workflow Support",
    description:
      "Supporting Fire Safety Managers, Professional Engineers and Responsible Individuals with passive fire compliance workflows.",
  },
  {
    title: "Rectification Workflow Support",
    description:
      "Managing defect tracking, documentation and compliance pathways toward rectification and completion.",
  },
  {
    title: "Digital Fire Registers",
    description:
      "Development of digital passive fire records and inspection systems powered by Codexus compliance workflows.",
  },
  {
    title: "Codexus Compliance Systems",
    description:
      "Digital compliance systems for inspections, reporting, defect management and passive fire workflow tracking.",
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Singapore Services
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Compliance Services
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Supporting building owners,
            FSMs, consultants and contractors
            with passive fire inspections,
            compliance reporting and rectification workflows.
          </p>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {services.map((service) => (
              <div
                key={service.title}
                className="border border-zinc-800 bg-zinc-950 p-8 transition hover:border-orange-500"
              >
                <h2 className="mb-5 text-2xl font-semibold leading-tight">
                  {service.title}
                </h2>

                <p className="leading-7 text-zinc-400">
                  {service.description}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* WORKFLOW */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Compliance Workflow
            </p>

            <h2 className="text-4xl font-bold md:text-5xl">
              Pathway To Compliance
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-zinc-400">

            <p>
              Our workflow focuses on identifying passive fire defects,
              documenting compliance issues and supporting the pathway toward rectification.
            </p>

            <p>
              We work alongside FSMs,
              PE teams,
              contractors and building owners
              to support practical compliance outcomes.
            </p>

            <p>
              Our reporting systems are designed to improve visibility,
              accountability and long-term compliance management.
            </p>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xl font-bold text-orange-500">
              BAKKER PFI Pte Ltd
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Passive Fire Inspection & Compliance Reporting
            </p>
          </div>

          <p className="text-sm text-zinc-600">
            © 2026 BAKKER PFI Pte Ltd. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}