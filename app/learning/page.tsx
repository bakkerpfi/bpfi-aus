import Navbar from "@/components/Navbar";
import Link from "next/link";

const learningTopics = [
  {
    title: "What Is Passive Fire?",
    description:
      "Understand how passive fire systems help contain fire and smoke within buildings.",
    href: "/learning/what-is-passive-fire",
    image: "/learning/fire-compartment-diagram.png",
  },
  {
    title: "Fire Compartmentation",
    description:
      "Learn how buildings are divided into fire compartments using walls, floors and ceilings.",
    href: "/learning/fire-compartmentation",
    image: "/learning/fire-compartment-diagram.png",
  },
  {
    title: "Service Penetrations",
    description:
      "Understand how pipes, cables and ducts passing through fire-rated walls must be protected.",
    href: "/learning/service-penetrations",
    image: "/learning/fire-stopping-example.png",
  },
  {
    title: "Fire Doors",
    description:
      "Learn how fire doors protect escape routes and help maintain compartmentation.",
    href: "/learning/fire-doors",
    image: "/learning/fire-door-example.png",
  },
  {
    title: "Common Passive Fire Defects",
    description:
      "Explore the most common passive fire issues identified during inspections.",
    href: "/learning/common-defects",
    image: "/learning/unsealed-penetration.png",
  },
  {
    title: "Inspections & Compliance",
    description:
      "Learn how inspections and compliance reporting support building fire safety.",
    href: "/learning/inspections-compliance",
    image: "/learning/fire-stopping-example.png",
  },
];

export default function LearningPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/sydney.png"
            alt="Sydney Australia Skyline"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Sydney Passive Fire Learning Centre
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire Learning
            <br />
            & Compliance Education
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Learn about passive fire systems,
            fire compartmentation,
            penetration sealing,
            fire doors and passive fire compliance throughout buildings across Sydney and NSW.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Why Passive Fire Matters
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Protecting Buildings & Saving Lives
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire protection systems are designed to slow the spread of fire and smoke throughout buildings,
              helping protect occupants,
              escape routes and property.
            </p>

            <p>
              Across Sydney and NSW,
              passive fire systems form part of the overall building fire safety strategy and are critical to maintaining fire compartmentation performance.
            </p>

            <p>
              Fire-rated walls,
              floors,
              ceilings,
              fire doors and penetration sealing systems all work together to create compliant fire compartments throughout a building.
            </p>

          </div>

        </div>
      </section>

      {/* TOPICS */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-16">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Learning Topics
            </p>

            <h2 className="text-4xl font-bold md:text-6xl">
              Sydney Passive Fire Learning Topics
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {learningTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition hover:border-orange-500 hover:bg-zinc-900"
              >

                {/* IMAGE */}
                <div className="aspect-video overflow-hidden">

                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-8">

                  <h3 className="mb-5 text-2xl font-bold transition group-hover:text-orange-500">
                    {topic.title}
                  </h3>

                  <p className="leading-8 text-zinc-400">
                    {topic.description}
                  </p>

                  <div className="mt-8 text-sm uppercase tracking-[0.2em] text-orange-500">
                    Open Learning Page →
                  </div>

                </div>

              </Link>
            ))}

          </div>

        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Fire Compartmentation
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              How Passive Fire Systems Work
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Buildings are divided into fire compartments designed to slow the spread of fire and smoke.
            </p>

            <p>
              When services such as pipes,
              cables or ducts pass through fire-rated walls or floors,
              those openings must be properly protected using tested fire stopping systems.
            </p>

            <p>
              Defective penetrations,
              damaged fire doors and unsealed openings can compromise compartmentation performance throughout a building.
            </p>

          </div>

        </div>
      </section>

      {/* LEARNING GUIDE */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Interactive Learning
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Passive Fire Basic Understanding Guide
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            BAKKER PFI Australia is developing interactive passive fire learning resources
            designed to help building owners,
            facility managers,
            contractors and strata managers
            better understand passive fire systems and compliance responsibilities throughout NSW.
          </p>

          <div className="mt-12">

            <button className="rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400">
              Learning Guide Coming Soon
            </button>

          </div>

        </div>
      </section>

      {/* CERTIFICATE */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Certification
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Passive Fire Awareness Certificate
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Future learning modules will include a basic understanding quiz
            allowing participants to receive a BAKKER PFI Passive Fire Awareness Certificate.
          </p>

        </div>
      </section>

      {/* INSPECTION GALLERY CTA */}
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
                  Real Building Inspections
                </p>

                <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                  Explore Real Passive Fire Inspection Examples
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                  Explore real passive fire inspection examples including fire door defects,
                  service penetrations,
                  fire stopping failures,
                  smoke sealing issues and compartmentation breaches identified throughout buildings across Sydney and NSW.
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

      {/* PASSIVE FIRE QUIZ */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="overflow-hidden rounded-3xl border border-orange-500 bg-zinc-950">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* IMAGE */}
              <div className="aspect-video overflow-hidden lg:aspect-auto lg:h-full">

                <img
                  src="/learning/fire-compartment-diagram.png"
                  alt="Passive Fire Awareness Quiz"
                  className="h-full w-full object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-10 lg:p-16">

                <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
                  Interactive Learning
                </p>

                <h2 className="text-4xl font-bold leading-tight md:text-5xl">
                  Test Your Passive Fire Knowledge
                </h2>

                <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
                  Complete the BAKKER PFI Passive Fire Awareness Quiz
                  and receive your personalised Passive Fire Awareness Certificate.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <Link
                    href="/learning/quiz"
                    className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
                  >
                    Start Quiz
                  </Link>

                  <Link
                    href="/learning"
                    className="inline-flex rounded-full border border-zinc-700 px-8 py-4 font-semibold transition hover:border-orange-500"
                  >
                    Open Learning Centre
                  </Link>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 md:flex-row md:items-center md:justify-between">

          <div className="flex items-center gap-4">

            <img
              src="/logo.png"
              alt="BAKKER PFI"
              className="h-14 w-auto"
            />

            <div>

              <p className="text-xl font-bold text-orange-500">
                BAKKER PFI Australia
              </p>

              <p className="mt-1 text-sm text-zinc-500">
                Passive Fire Inspection & Compliance Reporting
              </p>

            </div>

          </div>

          <p className="text-sm text-zinc-600">
            © 2026 BAKKER PFI Australia. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}