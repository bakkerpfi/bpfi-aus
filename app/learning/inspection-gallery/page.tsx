import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Passive Fire Inspection Gallery Sydney | BAKKER PFI Australia",
  description:
    "Explore real passive fire inspection examples including fire door defects, unsealed penetrations and compartmentation breaches identified throughout Sydney and NSW.",
};

const gallerySections = [
  {
    title: "Fire Door Defects",
    description:
      "Examples of excessive gaps, missing smoke seals and damaged fire doors identified during inspections.",
    image: "/learning/fire-door-example.png",
  },
  {
    title: "Unsealed Penetrations",
    description:
      "Examples of cables, pipes and services passing through fire-rated barriers without compliant protection.",
    image: "/learning/unsealed-penetration.png",
  },
  {
    title: "Fire Stopping Systems",
    description:
      "Examples of compliant and non-compliant fire stopping systems protecting service penetrations.",
    image: "/learning/fire-stopping-example.png",
  },
  {
    title: "Compartmentation Barriers",
    description:
      "Examples of fire-rated walls, ceilings and compartmentation systems throughout buildings.",
    image: "/learning/fire-compartment-diagram.png",
  },
];

export default function InspectionGalleryPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/learning/unsealed-penetration.png"
            alt="Passive Fire Inspection Gallery"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Passive Fire Inspection Gallery Sydney
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Real Passive Fire
            <br />
            Inspection Examples
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Explore real examples of passive fire defects,
            fire door issues,
            penetration sealing systems and compartmentation inspections throughout Sydney and NSW.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Real Inspection Workflows
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Visualising Passive Fire Defects
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Many passive fire defects remain hidden above ceilings,
              within risers,
              service shafts and concealed wall penetrations until inspections are carried out.
            </p>

            <p>
              Inspection galleries help building owners,
              facility managers and contractors better understand how compartmentation systems can become compromised over time.
            </p>

            <p>
              The examples shown throughout this gallery reflect common passive fire conditions identified during inspections and compliance reviews across Sydney and NSW.
            </p>

          </div>

        </div>

      </section>

      {/* GALLERY GRID */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Inspection Categories
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Common Inspection Findings
            </h2>

          </div>

          <div className="grid gap-10 lg:grid-cols-2">

            {gallerySections.map((section) => (
              <div
                key={section.title}
                className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950"
              >

                {/* IMAGE */}
                <div className="aspect-video overflow-hidden">

                  <img
                    src={section.image}
                    alt={section.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-10">

                  <h3 className="text-3xl font-bold">
                    {section.title}
                  </h3>

                  <p className="mt-6 text-lg leading-8 text-zinc-400">
                    {section.description}
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FIRE DOOR SECTION */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800">

            <img
              src="/learning/fire-door-example.png"
              alt="Fire Door Defects"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Fire Door Defects
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Common Fire Door Inspection Findings
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                Fire door inspections commonly identify excessive door gaps,
                damaged smoke seals,
                faulty closers and non-compliant modifications.
              </p>

              <p>
                Damaged fire doors can compromise smoke containment and reduce compartmentation performance throughout a building.
              </p>

              <p>
                Fire doors are an important part of building fire safety systems and often form part of Annual Fire Safety Statement (AFSS) compliance workflows throughout NSW.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PENETRATION DEFECTS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Penetration Defects
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Unsealed Services & Fire Stopping Failures
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                Service penetrations occur where pipes,
                cables,
                conduits and ducts pass through fire-rated walls and floors.
              </p>

              <p>
                Common inspection findings include oversized openings,
                missing collars,
                damaged fire stopping systems and non-compliant sealants.
              </p>

              <p>
                Unsealed penetrations can compromise fire compartmentation allowing smoke and fire to spread more rapidly throughout a building.
              </p>

            </div>

          </div>

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800">

            <img
              src="/learning/unsealed-penetration.png"
              alt="Unsealed Penetration Defects"
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </section>

      {/* COMPARTMENTATION */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800">

            <img
              src="/learning/fire-compartment-diagram.png"
              alt="Fire Compartmentation"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Compartmentation Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Protecting Fire Compartments
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                Fire compartmentation systems are designed to slow the spread of fire and smoke throughout buildings.
              </p>

              <p>
                Inspection workflows often involve reviewing fire-rated walls,
                ceilings,
                risers,
                shafts and service penetrations affecting compartment boundaries.
              </p>

              <p>
                Many compartmentation defects remain hidden until detailed surveys and passive fire inspections are carried out.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* INSPECTION WORKFLOW */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Inspection Reporting
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Structured Compliance Workflows
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Passive fire inspections commonly include photographic records,
            defect registers,
            penetration schedules and compartmentation reviews helping provide visibility of building fire safety conditions throughout Sydney and NSW.
          </p>

        </div>

      </section>

      {/* CODEXUS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Codexus Compliance Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Digital Inspection & Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Codexus is a digital passive fire compliance platform designed to support inspection workflows,
              penetration records,
              defect registers and compliance reporting systems.
            </p>

            <p>
              The platform is powered by real-world passive fire inspection and installation knowledge provided by BAKKER PFI Australia.
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
            Sydney & NSW
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Passive Fire Inspection Support
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Contact Benjamin Bakker to discuss passive fire inspections,
            compartmentation surveys,
            fire door reviews and compliance workflows throughout Sydney and NSW.
          </p>

          <div className="mt-14 flex flex-wrap justify-center gap-4">

            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
            >
              Contact BAKKER PFI Australia
            </Link>

            <Link
              href="/learning"
              className="rounded-full border border-zinc-700 px-10 py-5 text-lg font-semibold transition hover:border-orange-500 hover:text-orange-500"
            >
              Back To Learning Centre
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}