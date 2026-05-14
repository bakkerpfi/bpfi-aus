import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Passive Fire Projects Christchurch | BAKKER PFI LTD",
  description:
    "Examples of passive fire inspections, compartmentation surveys and compliance workflows supported by BAKKER PFI LTD throughout Christchurch and Canterbury.",
};

const projectTypes = [
  {
    title: "Apartment Buildings",
    description:
      "Passive fire inspections, fire door reviews and compartmentation surveys within multi-level residential buildings.",
  },
  {
    title: "Commercial Offices",
    description:
      "Inspection workflows supporting fire separation reviews, service penetrations and compliance visibility.",
  },
  {
    title: "Hotels & Accommodation",
    description:
      "Existing building inspections supporting passive fire compliance and remediation planning.",
  },
  {
    title: "Healthcare Facilities",
    description:
      "Review of fire compartmentation systems, risers, penetrations and passive fire barriers.",
  },
  {
    title: "Retail & Mixed Use Buildings",
    description:
      "Inspection and reporting workflows associated with tenancy fitouts and service upgrades.",
  },
  {
    title: "Existing Building Remediation",
    description:
      "Identification and documentation of passive fire defects requiring remedial review.",
  },
];

const workflowSteps = [
  {
    title: "Inspection",
    description:
      "Review of passive fire systems throughout buildings including penetrations, fire doors and fire separations.",
  },
  {
    title: "Defect Identification",
    description:
      "Identification of passive fire defects, damaged barriers and compartmentation issues.",
  },
  {
    title: "Reporting",
    description:
      "Structured reporting workflows using photographs, defect registers and inspection records.",
  },
  {
    title: "Compliance Visibility",
    description:
      "Improving visibility of passive fire systems and supporting compliance management workflows.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/christchurch.png"
            alt="Passive Fire Projects Christchurch"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Christchurch Passive Fire Projects
          </p>

          <h1 className="max-w-6xl text-5xl font-bold leading-tight md:text-7xl">
            Inspection
            <br />
            & Compliance Workflows
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Examples of passive fire inspections,
            fire compartmentation reviews,
            penetration surveys and compliance workflows supported by BAKKER PFI LTD throughout Christchurch and Canterbury.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Existing Building Focus
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Supporting Passive Fire Visibility
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              BAKKER PFI LTD supports passive fire inspection and compliance workflows throughout existing buildings across Christchurch and Canterbury.
            </p>

            <p>
              Our work focuses on improving visibility of passive fire systems,
              identifying compartmentation defects and supporting structured reporting workflows.
            </p>

            <p>
              We combine real-world installation knowledge with digital compliance systems and practical inspection workflows.
            </p>

          </div>

        </div>

      </section>

      {/* PROJECT TYPES */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Project Types
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Buildings & Inspection Environments
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {projectTypes.map((project) => (
              <div
                key={project.title}
                className="rounded-3xl border border-zinc-800 bg-black p-8 transition hover:border-orange-500"
              >

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {project.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* COMMON SCOPE */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Scope Of Works
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Inspection & Survey Activities
            </h2>

          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {[
              "Passive fire inspections",
              "Compartmentation surveys",
              "Fire door inspections",
              "Service penetration reviews",
              "Ceiling space inspections",
              "Fire separation reviews",
              "Defect identification",
              "Photographic reporting",
              "Defect registers",
              "BWOF remedial support",
              "Compliance workflow reporting",
              "Digital inspection systems",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
              >

                <p className="text-lg font-semibold">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WORKFLOW */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Workflow
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Structured Inspection & Reporting
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {workflowSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-zinc-800 bg-black p-8"
              >

                <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
                  Step {index + 1}
                </p>

                <h3 className="mt-5 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CODEXUS */}
      <section className="border-b border-zinc-900 py-24">

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
              Codexus is a digital passive fire compliance platform designed to support inspection records,
              defect registers,
              penetration schedules and reporting workflows.
            </p>

            <p>
              The platform is powered by real-world passive fire installation and inspection experience provided by BAKKER PFI LTD.
            </p>

            <p>
              These systems help improve visibility of passive fire systems throughout buildings and support structured compliance management workflows.
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
            Christchurch & Canterbury
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Passive Fire Inspection Support
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Contact Benjamin Bakker to discuss passive fire inspections,
            compartmentation surveys,
            compliance reporting and BWOF remedial support throughout Christchurch and Canterbury.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
            >
              Contact BAKKER PFI LTD
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-zinc-700 px-8 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-500"
            >
              View Services
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}