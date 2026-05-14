import Navbar from "@/components/Navbar";

const team = [
  {
    name: "Benjamin Bakker",
    role: "Technical Director & Passive Fire Compliance Specialist",
    image: "/ben-bakker.png",
    description:
      "Benjamin Bakker has over 10 years experience in passive fire protection specialising in inspections, compliance reporting, compartmentation surveys, installation systems and digital compliance workflows across New Zealand and Australia.",
  },
  {
    name: "Nicole Del Rosario",
    role: "Project Manager",
    image: "/nicole-del-rosario.png",
    description:
      "Nicole Del Rosario supports project coordination, passive fire compliance workflows, reporting systems and operational management across BAKKER PFI LTD projects.",
  },
  {
    name: "Raul Cabanero",
    role: "Passive Fire Installer",
    image: "/raul.png",
    description:
      "Raul Cabanero supports passive fire installation and remediation works, providing practical tested system installation experience and real-world site knowledge.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            About BAKKER PFI LTD
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Compliance Specialists
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            BAKKER PFI LTD provides passive fire inspections,
            fire compartmentation surveys,
            compliance reporting and BWOF remedial support
            throughout Christchurch and Canterbury.
          </p>

        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-5xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Inspection & Compliance Support
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Real Industry Experience Supporting Compliance
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                BAKKER PFI LTD supports building owners,
                IQPs,
                facility managers,
                consultants and contractors with passive fire inspections,
                compliance reporting and compartmentation surveys throughout Christchurch and Canterbury.
              </p>

              <p>
                Our approach combines practical installation knowledge,
                inspection workflows and digital compliance systems
                to help identify passive fire defects,
                document compliance issues
                and support rectification pathways.
              </p>

              <p>
                We work alongside passive fire manufacturers,
                contractors,
                building consultants and fire safety professionals
                to improve visibility and understanding of passive fire systems within existing buildings.
              </p>

              <p>
                Our inspection workflows are designed to support documentation requirements associated with BWOF compliance,
                IQP reviews,
                fire separations,
                passive fire penetrations and ongoing building compliance management.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Auckland Operations Team
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Technical & Operational Support
            </h2>

          </div>

          <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-3">

            {team.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
              >

                {/* IMAGE */}
                <div className="aspect-[4/5] overflow-hidden bg-zinc-900">

                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="text-3xl font-bold">
                    {member.name}
                  </h3>

                  <p className="mt-3 text-lg text-orange-500">
                    {member.role}
                  </p>

                  <p className="mt-6 leading-8 text-zinc-400">
                    {member.description}
                  </p>

                </div>

              </div>
            ))}

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
                technical product knowledge
                and practical industry understanding.
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

      {/* CODEXUS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-28">

        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Codexus Compliance Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Powered By Real Installation Knowledge
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
              Unlike many purely theoretical systems,
              Codexus is powered by real-world passive fire installation,
              remediation and inspection experience provided by BAKKER PFI LTD.
            </p>

            <p>
              This practical field knowledge helps support more accurate reporting,
              improved defect identification
              and structured pathways toward building compliance.
            </p>

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

            <a
              href="/contact"
              className="rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
            >
              Contact BAKKER PFI LTD
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}