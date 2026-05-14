import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Service Penetration Inspections Sydney | BAKKER PFI Australia",
  description:
    "Learn about passive fire service penetrations, fire stopping systems and common penetration defects identified throughout buildings across Sydney and NSW.",
};

const penetrationDefects = [
  {
    title: "Unsealed Cable Penetrations",
    description:
      "Cables passing through fire-rated walls and floors without compliant fire stopping protection.",
  },
  {
    title: "Oversized Openings",
    description:
      "Large openings around services can compromise fire compartmentation performance.",
  },
  {
    title: "Missing Fire Collars",
    description:
      "Plastic pipes penetrating fire-rated barriers without compliant fire collars or wraps.",
  },
  {
    title: "Incorrect Sealants",
    description:
      "Use of non-tested products such as foam or standard silicone instead of compliant fire stopping systems.",
  },
  {
    title: "Damaged Fire Stopping",
    description:
      "Previously installed systems that have been damaged during later service modifications.",
  },
  {
    title: "Open Service Risers",
    description:
      "Unprotected service risers and shafts allowing fire and smoke spread between floors.",
  },
];

export default function ServicePenetrationsPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/learning/unsealed-penetration.png"
            alt="Service Penetration Inspections Sydney"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Passive Fire Penetrations Sydney
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Service Penetrations
            <br />
            & Fire Stopping Systems
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Understanding how service penetrations affect fire compartmentation
            and why compliant fire stopping systems are critical throughout buildings across Sydney and NSW.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              What Are Service Penetrations?
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Openings Through Fire-Rated Barriers
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Service penetrations occur where pipes,
              cables,
              conduits,
              ducts and other building services pass through fire-rated walls and floors.
            </p>

            <p>
              These openings can compromise fire compartmentation if they are not properly protected using compliant fire stopping systems.
            </p>

            <p>
              Throughout Sydney and NSW,
              penetration defects are commonly identified during passive fire inspections and remediation projects within existing buildings.
            </p>

          </div>

        </div>

      </section>

      {/* WHY IT MATTERS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800">

            <img
              src="/learning/fire-stopping-example.png"
              alt="Fire Stopping Systems"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Fire Compartmentation
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Why Penetrations Matter
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                Fire-rated walls and floors are designed to slow the spread of fire and smoke between compartments.
              </p>

              <p>
                Unprotected penetrations can create pathways allowing fire,
                smoke and hot gases to spread rapidly throughout a building.
              </p>

              <p>
                Many penetration defects remain hidden above ceilings,
                within risers and service shafts until inspections are carried out.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* COMMON DEFECTS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Common Inspection Findings
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Typical Penetration Defects
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {penetrationDefects.map((defect) => (
              <div
                key={defect.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
              >

                <h3 className="text-2xl font-bold">
                  {defect.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {defect.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* FIRE STOPPING SYSTEMS */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Fire Stopping Systems
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Common Protection Systems
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Different service types and substrates require different fire stopping systems depending on the tested application.
            </p>

            <p>
              Common passive fire systems include:
            </p>

            <ul className="space-y-4 pl-6 text-zinc-300 list-disc">

              <li>Fire collars</li>

              <li>Fire wraps</li>

              <li>Fire-rated sealants</li>

              <li>Coated batts</li>

              <li>Fire pillows</li>

              <li>Mortar systems</li>

            </ul>

            <p>
              Correct system selection depends on the service type,
              substrate,
              fire rating and tested system requirements.
            </p>

          </div>

        </div>

      </section>

      {/* INSPECTION WORKFLOW */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Inspection Workflow
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Inspection & Reporting
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire penetration inspections commonly involve reviewing service penetrations throughout a building and identifying defects affecting fire compartmentation.
            </p>

            <p>
              Inspection findings may include:
            </p>

            <ul className="space-y-4 pl-6 text-zinc-300 list-disc">

              <li>Photographic records</li>

              <li>Defect registers</li>

              <li>Penetration schedules</li>

              <li>Floor plan references</li>

              <li>Compartmentation surveys</li>

            </ul>

            <p>
              BAKKER PFI Australia uses structured inspection workflows and Codexus digital compliance systems to help organise passive fire information throughout buildings across Sydney and NSW.
            </p>

          </div>

        </div>

      </section>

      {/* INSPECTION GALLERY */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="overflow-hidden rounded-3xl border border-orange-500 bg-zinc-950">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* IMAGE */}
              <div className="aspect-video overflow-hidden lg:aspect-auto lg:h-full">

                <img
                  src="/learning/unsealed-penetration.png"
                  alt="Passive Fire Inspection Gallery"
                  className="h-full w-full object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-10 lg:p-16">

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
                  Real Inspection Examples
                </p>

                <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                  Explore Real Penetration Defects
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                  View examples of unsealed penetrations,
                  damaged fire stopping systems,
                  missing collars and common fire stopping inspection findings identified throughout Sydney and NSW.
                </p>

                <div className="mt-10">

                  <Link
                    href="/learning/inspection-gallery"
                    className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
                  >
                    Open Inspection Gallery
                  </Link>

                </div>

              </div>

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
            Passive Fire Penetration Inspections
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Contact Benjamin Bakker to discuss passive fire penetration inspections,
            fire stopping defects,
            compartmentation surveys and compliance workflows throughout Sydney and NSW.
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