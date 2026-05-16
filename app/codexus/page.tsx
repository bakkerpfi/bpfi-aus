import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Codexus Compliance Systems | BAKKER PFI Australia",
  description:
    "Codexus is a digital passive fire compliance platform supporting inspections, defect registers, penetration schedules and compliance workflows throughout Sydney and NSW.",
};

const features = [
  {
    title: "Inspection Records",
    description:
      "Organise passive fire inspection records, observations and photographic documentation.",
  },
  {
    title: "Defect Registers",
    description:
      "Track passive fire defects, compartmentation issues and remediation workflows.",
  },
  {
    title: "Penetration Schedules",
    description:
      "Manage service penetration records and fire stopping observations throughout buildings.",
  },
  {
    title: "Fire Door Workflows",
    description:
      "Document fire door inspections, smoke seal defects and compartmentation issues.",
  },
  {
    title: "Compliance Reporting",
    description:
      "Structured reporting workflows supporting passive fire compliance visibility.",
  },
  {
    title: "Digital Building Records",
    description:
      "Centralised passive fire records supporting ongoing building compliance management.",
  },
];

export default function CodexusPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#050816] text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-blue-950 py-32">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <img
              src="/sydney.png"
              alt="Codexus Compliance Systems"
              className="h-full w-full object-cover opacity-25"
            />

            <div className="absolute inset-0 bg-[#050816]/80" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#050816] via-[#050816]/70 to-transparent" />
          </div>

          {/* GRID OVERLAY */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-400">
              Codexus Compliance Systems
            </p>

            <h1 className="max-w-6xl text-5xl font-bold leading-tight md:text-7xl">
              Digital Passive Fire
              <br />
              Compliance Workflows
            </h1>

            <p className="mt-10 max-w-3xl text-xl leading-10 text-zinc-300">
              Codexus is a digital passive fire compliance platform
              designed to support inspections,
              defect registers,
              penetration schedules,
              compartmentation visibility and compliance workflows
              throughout existing commercial buildings.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-blue-950 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400">
                Powered By Real Industry Experience
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Built From Real Passive Fire Workflows
              </h2>
            </div>

            {/* RIGHT */}
            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Codexus has been developed using real-world passive fire
                inspection,
                installation and compliance reporting experience
                provided by BAKKER PFI Australia.
              </p>

              <p>
                The platform is designed to improve visibility of
                passive fire systems throughout existing buildings
                while supporting structured inspection and reporting workflows.
              </p>

              <p>
                Codexus combines practical building knowledge with
                digital compliance systems to support building owners,
                consultants,
                AFSS providers and remediation contractors.
              </p>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="border-b border-blue-950 bg-[#081122] py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400">
                Platform Features
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Digital Compliance Tools
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-blue-950 bg-[#050816] p-8"
                >
                  <h3 className="text-2xl font-bold">
                    {feature.title}
                  </h3>

                  <p className="mt-6 leading-8 text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="border-b border-blue-950 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400">
                Compliance Workflow
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Inspection To Remediation
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Codexus supports workflows beginning with inspections
                and defect identification through to reporting,
                remediation planning and ongoing compliance management.
              </p>

              <p>
                The system is designed to improve visibility of
                compartmentation systems throughout the life of a building.
              </p>

              <p>
                Digital workflows assist with organising building records,
                photographs,
                penetration schedules and passive fire documentation.
              </p>
            </div>
          </div>
        </section>

        {/* INDUSTRY FOCUS */}
        <section className="border-b border-blue-950 bg-[#081122] py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.35em] text-blue-400">
                Australia & New Zealand
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Built Around Real Building Compliance
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Codexus has been developed around practical passive fire
                workflows used throughout existing buildings across
                Australia and New Zealand.
              </p>

              <p>
                The platform aligns with compartmentation reviews,
                fire door inspections,
                service penetration management and compliance reporting systems.
              </p>

              <p>
                Understanding how passive fire systems are installed and
                maintained assists with improving inspection quality
                and remediation visibility.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.35em] text-blue-400">
              Codexus Compliance Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Digital Passive Fire Compliance
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              Learn more about passive fire inspections,
              compartmentation workflows,
              defect registers and compliance reporting systems.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-blue-500 px-8 py-4 font-semibold text-white transition hover:bg-blue-400"
              >
                Contact BAKKER PFI Australia
              </Link>

              <Link
                href="/learning"
                className="rounded-full border border-blue-800 px-8 py-4 font-semibold transition hover:border-blue-400 hover:text-blue-400"
              >
                Passive Fire Learning
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}