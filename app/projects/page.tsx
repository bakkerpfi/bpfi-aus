import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Passive Fire Projects Sydney | BAKKER PFI Australia",
  description:
    "Examples of passive fire inspections, compartmentation surveys and compliance reporting workflows supported by BAKKER PFI Australia throughout Sydney and NSW.",
};

const projectTypes = [
  {
    title: "Commercial Office Buildings",
    description:
      "Passive fire inspections, penetration reviews and compartmentation surveys within existing office environments.",
  },
  {
    title: "Apartment Buildings",
    description:
      "Inspection workflows supporting fire separation reviews, fire door compliance and remediation planning.",
  },
  {
    title: "Hotels & Accommodation",
    description:
      "Existing building inspections supporting passive fire compliance visibility and defect identification.",
  },
  {
    title: "Healthcare Facilities",
    description:
      "Review of passive fire barriers, penetrations, risers and compartmentation systems.",
  },
  {
    title: "Retail & Mixed Use Buildings",
    description:
      "Inspection and compliance reporting workflows associated with tenancy fitouts and service upgrades.",
  },
  {
    title: "Existing Building Remediation",
    description:
      "Identification and documentation of passive fire defects requiring remedial review and compliance management.",
  },
];

const workflowSteps = [
  {
    title: "Passive Fire Inspections",
    description:
      "Review of passive fire systems including penetrations, fire doors and fire separations throughout existing buildings.",
  },
  {
    title: "Defect Identification",
    description:
      "Identification of damaged barriers, non-compliant penetrations and compartmentation issues.",
  },
  {
    title: "Compliance Reporting",
    description:
      "Structured reporting workflows using inspection records, photographs and defect registers.",
  },
  {
    title: "Remediation Support",
    description:
      "Supporting building owners and contractors with visibility of passive fire remediation requirements.",
  },
];

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-zinc-900 py-32">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <img
              src="/sydney.png"
              alt="Passive Fire Projects Sydney"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/65" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Sydney Passive Fire Projects
            </p>

            <h1 className="max-w-6xl text-5xl font-bold leading-tight md:text-7xl">
              Inspection
              <br />
              & Compliance Workflows
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Examples of passive fire inspections,
              compartmentation reviews,
              penetration surveys and compliance reporting workflows
              supported by BAKKER PFI Australia throughout Sydney and NSW.
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
                BAKKER PFI Australia supports passive fire inspection and
                compliance workflows throughout commercial buildings,
                apartments,
                hotels and mixed-use developments.
              </p>

              <p>
                Our work focuses on improving visibility of passive fire systems,
                identifying compartmentation issues and supporting remediation
                planning workflows.
              </p>

              <p>
                We work with passive fire systems associated with walls,
                floors,
                service penetrations,
                fire doors and fire-rated construction systems.
              </p>

              <p>
                Inspection workflows are designed to support compliance reporting,
                remediation visibility and long-term building compliance management.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECT TYPES */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Building Types
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Project Experience
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {projectTypes.map((project) => (
                <div
                  key={project.title}
                  className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
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

        {/* WORKFLOW */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Inspection Workflow
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Structured Compliance Reporting
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {workflowSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-zinc-800 bg-black p-8"
                >
                  <h3 className="text-2xl font-bold">
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

        {/* NCC */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Australian Compliance
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                AS1530.4
                <br />
                & NCC Awareness
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                BAKKER PFI Australia works with passive fire systems tested to
                AS1530.4 and related fire-rated systems used throughout Australia.
              </p>

              <p>
                These systems form an important part of passive fire compliance
                within National Construction Code (NCC) compliant building systems
                and remediation workflows.
              </p>

              <p>
                Understanding how these systems are tested and installed assists
                with inspections,
                defect identification,
                compartmentation reviews and compliance reporting.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Contact
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Speak With BAKKER PFI Australia
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              Contact us to discuss passive fire inspections,
              compartmentation surveys,
              compliance reporting and remediation workflows
              throughout Sydney and Australia.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
              >
                Contact Australia Office
              </Link>

              <Link
                href="/about-ben-bakker"
                className="rounded-full border border-zinc-700 px-8 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-500"
              >
                About Ben Bakker
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}