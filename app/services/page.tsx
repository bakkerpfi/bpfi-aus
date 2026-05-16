import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Passive Fire Services Sydney | BAKKER PFI Australia",
  description:
    "Passive fire inspections, compartmentation surveys, AFSS support and compliance reporting throughout Sydney and NSW.",
};

const services = [
  {
    title: "Passive Fire Inspections",
    description:
      "Inspection workflows supporting identification of passive fire defects throughout existing commercial buildings.",
  },
  {
    title: "Compartmentation Surveys",
    description:
      "Review of fire-rated separations, penetrations, risers, ceiling spaces and fire barriers.",
  },
  {
    title: "Fire Door Inspections",
    description:
      "Inspection of fire doors, smoke seals, door gaps, hardware and compartmentation performance.",
  },
  {
    title: "Penetration Surveys",
    description:
      "Identification and documentation of passive fire penetration defects and fire stopping systems.",
  },
  {
    title: "AFSS Support",
    description:
      "Supporting AFSS providers, consultants and contractors with passive fire compliance workflows.",
  },
  {
    title: "Compliance Reporting",
    description:
      "Structured reporting workflows including photographs, defect registers and passive fire observations.",
  },
];

export default function ServicesPage() {
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
              alt="Sydney Passive Fire Services"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Sydney Passive Fire Compliance Specialists
            </p>

            <h1 className="max-w-6xl text-5xl font-bold leading-tight md:text-7xl">
              Passive Fire Inspection
              <br />
              & Compliance Services
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Supporting building owners, AFSS providers,
              facility managers and contractors throughout
              Sydney and NSW with passive fire inspections,
              compartmentation surveys,
              compliance reporting and remediation pathway support.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Inspection & Compliance Services
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Supporting Existing Building Compliance
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                BAKKER PFI Australia supports passive fire inspection
                and compliance workflows throughout existing commercial
                and residential buildings across Sydney and NSW.
              </p>

              <p>
                Our focus is improving visibility of passive fire systems,
                identifying compartmentation defects and supporting
                structured compliance reporting workflows.
              </p>

              <p>
                We combine real-world installation knowledge with
                inspection systems and digital compliance workflows
                to support practical passive fire management.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICES GRID */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Services
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Sydney Passive Fire Services
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-zinc-800 bg-black p-8 transition hover:border-orange-500"
                >
                  <h3 className="text-2xl font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-6 leading-8 text-zinc-400">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TECHNICAL KNOWLEDGE */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Technical Knowledge
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                AS1530.4 & Passive Fire Systems
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                BAKKER PFI Australia combines practical installation
                knowledge with technical understanding of passive fire
                systems tested to AS1530.4 and related fire-rated systems
                used throughout Australia and New Zealand.
              </p>

              <p>
                AS1530.4 is the primary Australian Standard used to determine
                the fire resistance of building elements including walls,
                floors, doors and service penetrations in accordance with
                NCC compliance requirements.
              </p>

              <p>
                Understanding how passive fire systems are installed and
                perform within real buildings assists with identifying
                defects, non-compliant conditions and remediation pathways
                during inspections and compliance reviews.
              </p>
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
                Digital Passive Fire Workflows
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Codexus is a digital passive fire compliance platform
                designed to support inspection records,
                defect registers,
                penetration schedules and compliance workflows.
              </p>

              <p>
                The platform is powered by real-world installation
                and inspection experience provided by BAKKER PFI Australia.
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
              Sydney
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Passive Fire Inspection Support
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              Contact Benjamin Bakker to discuss passive fire inspections,
              compartmentation surveys,
              compliance reporting and remediation pathway support.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
              >
                Contact BAKKER PFI Australia
              </Link>

              <Link
                href="/learning"
                className="rounded-full border border-zinc-700 px-8 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-500"
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