import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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

{
  title: "Inspection Gallery",
  description:
    "View real-world passive fire inspection examples and common compartmentation defects.",
  href: "/learning/inspection-gallery",
  image: "/learning/fire-stopping-example.png",
},

];

export default function LearningPage() {
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
              alt="Sydney Australia"
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
              AS1530.4 systems,
              penetration sealing,
              fire doors and passive fire compliance throughout commercial buildings across Sydney and NSW.
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
                Passive fire protection systems are designed to slow the spread
                of fire and smoke throughout buildings, helping protect
                occupants, escape routes and property.
              </p>

              <p>
                Across Sydney and NSW, passive fire systems form part of the
                overall building fire safety strategy and are critical to
                maintaining compartmentation performance.
              </p>

              <p>
                Understanding how passive fire systems work supports better
                inspections, improved compliance reporting and safer buildings.
              </p>
            </div>
          </div>
        </section>

{/* PASSIVE FIRE QUIZ */}
<section className="border-b border-zinc-900 bg-zinc-950 py-24">
  <div className="mx-auto max-w-5xl px-6 text-center">
    <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
      Interactive Learning
    </p>

    <h2 className="text-4xl font-bold leading-tight md:text-6xl">
      Test Your Passive Fire Knowledge
    </h2>

    <div className="mx-auto mt-10 max-w-3xl space-y-8 text-lg leading-8 text-zinc-400">
      <p>
        BAKKER PFI Australia is developing interactive passive fire
        learning systems designed to improve understanding of
        compartmentation, fire-rated systems and compliance concepts.
      </p>

      <p>
        The quiz platform is intended to support building owners,
        consultants, contractors and industry participants with
        practical passive fire education and technical awareness.
      </p>

      <p>
        Topics include passive fire systems,
        AS1530.4 fire-rated assemblies,
        penetration sealing systems,
        fire doors and inspection workflows.
      </p>
    </div>

<div className="mt-12">
  <p className="mb-4 text-sm uppercase tracking-[0.3em] text-zinc-500">
    Quick Quiz
  </p>

  <Link
    href="/learning/quiz"
    className="inline-flex rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
  >
    Test Your Passive Fire Knowledge
  </Link>
</div>
  </div>
</section>

        {/* LEARNING TOPICS */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Learning Topics
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Passive Fire Knowledge Base
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {learningTopics.map((topic) => (
                <Link
                  key={topic.title}
                  href={topic.href}
                  className="group overflow-hidden rounded-3xl border border-zinc-800 bg-black transition hover:border-orange-500"
                >
                  <div className="overflow-hidden">
                    <img
                      src={topic.image}
                      alt={topic.title}
                      className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold">
                      {topic.title}
                    </h3>

                    <p className="mt-6 leading-8 text-zinc-400">
                      {topic.description}
                    </p>

                    <div className="mt-8 inline-flex items-center font-semibold text-orange-500">
                      Learn More
                      <span className="ml-2 transition group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* AS1530.4 */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Australian Standards
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Understanding AS1530.4 Systems
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                AS1530.4 is the primary Australian Standard used to determine
                the fire resistance of building elements including walls,
                floors, doors and service penetrations.
              </p>

              <p>
                The standard outlines controlled furnace testing procedures
                used to assess how passive fire systems perform during fire
                conditions in accordance with NCC compliance requirements.
              </p>

              <p>
                Understanding how these systems are tested and installed assists
                with passive fire inspections, compartmentation reviews and
                compliance reporting throughout existing buildings.
              </p>
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
              Learn More About Passive Fire Compliance
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              Explore passive fire systems, inspections,
              compartmentation and compliance workflows used throughout
              commercial buildings across Australia and New Zealand.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
              >
                Contact BAKKER PFI Australia
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