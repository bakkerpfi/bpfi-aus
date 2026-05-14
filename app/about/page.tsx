import Navbar from "@/components/Navbar";

const team = [
  {
    name: "Benjamin Bakker",
    role: "Technical Director & Passive Fire Compliance Specialist",
    image: "/ben-bakker.png",
    description:
      "Benjamin Bakker has over 20 years experience in passive fire protection specialising in inspections, compliance reporting, compartmentation surveys, installation systems and digital compliance workflows across New Zealand and Australia.",
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
            About BAKKER PFI Australia
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Compliance Specialists
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            BAKKER PFI Australia provides passive fire inspections,
            fire compartmentation surveys,
            compliance reporting and rectification workflow support
            throughout Sydney and NSW.
          </p>

        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-5xl">

            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Technical Leadership
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Inspection & Compliance Support
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                BAKKER PFI Australia supports building owners,
                strata managers,
                facility managers,
                consultants and contractors with passive fire inspections,
                compliance reporting and compartmentation surveys across Sydney.
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
                Our inspection workflows are designed to support documentation requirements associated with NCC compliance,
                Essential Fire Safety Measures (EFSM)
                and Annual Fire Safety Statement (AFSS) processes.
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* TEAM */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 lg:grid-cols-1 max-w-2xl">

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
                Australia & New Zealand Operations
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
                throughout Sydney,
                Christchurch and Singapore,
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

    </main>
  );
}