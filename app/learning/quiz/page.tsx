import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata = {
  title: "Passive Fire Awareness Quiz Sydney | BAKKER PFI Australia",
  description:
    "Test your understanding of passive fire systems, fire compartmentation and common compliance issues throughout buildings across Sydney and NSW.",
};

const quizTopics = [
  {
    title: "Fire Compartmentation",
    description:
      "Understand how buildings are divided into fire compartments to slow the spread of fire and smoke.",
  },
  {
    title: "Fire Doors",
    description:
      "Learn how fire doors protect escape routes and maintain compartmentation systems.",
  },
  {
    title: "Service Penetrations",
    description:
      "Understand how pipes, cables and ducts passing through fire-rated barriers must be protected.",
  },
  {
    title: "Fire Stopping Systems",
    description:
      "Learn about fire collars, sealants, wraps and penetration sealing systems.",
  },
  {
    title: "Common Passive Fire Defects",
    description:
      "Identify common issues affecting compartmentation performance throughout buildings.",
  },
  {
    title: "Inspection & Compliance",
    description:
      "Understand how passive fire inspections and compliance workflows support building fire safety.",
  },
];

export default function QuizPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-zinc-900 py-32">

        {/* BACKGROUND */}
        <div className="absolute inset-0">

          <img
            src="/learning/fire-compartment-diagram.png"
            alt="Passive Fire Awareness Quiz"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/70" />

          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />

        </div>

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Passive Fire Awareness Sydney
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Passive Fire
            <br />
            Awareness Quiz
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
            Test your understanding of passive fire systems,
            fire compartmentation,
            fire doors and common compliance issues identified throughout buildings across Sydney and NSW.
          </p>

        </div>

      </section>

      {/* INTRO */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Passive Fire Learning
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Building Awareness Through Education
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Passive fire systems are often misunderstood despite playing a critical role in protecting buildings,
              evacuation pathways and occupants during a fire event.
            </p>

            <p>
              This awareness quiz has been developed to help building owners,
              facility managers,
              strata managers,
              contractors and general building users better understand passive fire protection systems.
            </p>

            <p>
              The quiz focuses on practical passive fire concepts commonly identified during inspections and compliance reviews throughout Sydney and NSW.
            </p>

          </div>

        </div>

      </section>

      {/* QUIZ TOPICS */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-4xl">

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Quiz Topics
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              What The Quiz Covers
            </h2>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {quizTopics.map((topic) => (
              <div
                key={topic.title}
                className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8"
              >

                <h3 className="text-2xl font-bold">
                  {topic.title}
                </h3>

                <p className="mt-6 leading-8 text-zinc-400">
                  {topic.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CERTIFICATE */}
      <section className="border-b border-zinc-900 bg-zinc-950 py-24">

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          {/* IMAGE */}
          <div className="overflow-hidden rounded-3xl border border-zinc-800">

            <img
              src="/learning/fire-stopping-example.png"
              alt="Passive Fire Awareness Certificate"
              className="h-full w-full object-cover"
            />

          </div>

          {/* CONTENT */}
          <div>

            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
              Awareness Certificate
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Passive Fire Awareness Certificate
            </h2>

            <div className="mt-10 space-y-8 text-lg leading-8 text-zinc-400">

              <p>
                Participants completing the quiz can generate a personalised Passive Fire Awareness Certificate.
              </p>

              <p>
                The certificate is intended as an educational awareness tool helping improve understanding of passive fire systems and compartmentation principles.
              </p>

              <p>
                This learning resource does not replace formal competency training,
                accreditation or certification requirements associated with building compliance and fire safety systems.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* START QUIZ */}
      <section className="border-b border-zinc-900 py-24">

        <div className="mx-auto max-w-5xl px-6 text-center">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Interactive Learning
          </p>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            Start The Passive Fire Awareness Quiz
          </h2>

          <p className="mx-auto mt-10 max-w-3xl text-xl leading-10 text-zinc-400">
            Test your understanding of passive fire systems,
            fire compartmentation,
            fire doors and service penetration protection systems.
          </p>

          <div className="mt-14">

<Link
  href="/learning/quiz/start"
              className="rounded-full bg-orange-500 px-10 py-5 text-lg font-semibold text-black transition hover:bg-orange-400"
            >
              Start Quiz
            </Link>

          </div>

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
              Digital Compliance Workflows
            </h2>

          </div>

          <div className="space-y-8 text-lg leading-8 text-zinc-400">

            <p>
              Codexus is a digital passive fire compliance platform supporting inspections,
              penetration records,
              defect registers and compartmentation workflows.
            </p>

            <p>
              The platform is powered by real-world inspection and installation knowledge provided by BAKKER PFI Australia.
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
            fire compartmentation reviews,
            compliance workflows and passive fire awareness education throughout Sydney and NSW.
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