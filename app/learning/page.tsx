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
            src="/christchurch.png"
            alt="Christchurch New Zealand"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Christchurch Passive Fire Learning Centre
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
            fire doors and passive fire compliance throughout buildings across Christchurch and Canterbury.
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
              Throughout Christchurch and Canterbury,
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
              Christchurch Passive Fire Learning Topics
            </h2>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {learningTopics.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 transition hover:border-orange-500 hover:bg-zinc-900"
              >

                <div className="aspect-video overflow-hidden">

                  <img
                    src={topic.image}
                    alt={topic.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                </div>

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

      {/* QUIZ */}
      <section className="py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Passive Fire Awareness Quiz
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Test Your Passive Fire Knowledge
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Complete the Christchurch Passive Fire Awareness Quiz and generate your BAKKER PFI LTD learning certificate.
          </p>

          <div className="mt-12">

            <Link
              href="/learning/quiz/start"
              className="inline-flex rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
            >
              Start Quiz
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}
