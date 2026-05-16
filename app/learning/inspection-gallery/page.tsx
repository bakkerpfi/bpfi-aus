import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Passive Fire Inspection Gallery Sydney | BAKKER PFI Australia",
  description:
    "Real-world passive fire inspection examples, compartmentation defects and fire stopping issues identified throughout Sydney and NSW.",
};

const galleryItems = [
  {
    title: "Unsealed Service Penetration",
    description:
      "Unprotected cable penetration through a fire-rated wall identified during inspection.",
    image: "/learning/unsealed-penetration.png",
  },
  {
    title: "Fire Door Gap Defect",
    description:
      "Excessive perimeter gap reducing smoke containment performance.",
    image: "/learning/fire-door-example.png",
  },
  {
    title: "Fire Stopping System",
    description:
      "Example of a tested fire stopping system protecting service penetrations.",
    image: "/learning/fire-stopping-example.png",
  },
  {
    title: "Compartmentation Barrier",
    description:
      "Fire compartmentation barrier protecting concealed ceiling spaces.",
    image: "/learning/fire-compartment-diagram.png",
  },
  {
    title: "Damaged Fire Separation",
    description:
      "Compromised fire-rated barrier requiring remediation works.",
    image: "/learning/fire-compartment-diagram.png",
  },
  {
    title: "Existing Building Defect",
    description:
      "Passive fire defect identified during existing building inspection workflow.",
    image: "/learning/unsealed-penetration.png",
  },
];

export default function InspectionGalleryPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="relative overflow-hidden border-b border-zinc-900 py-32">
          {/* BACKGROUND */}
          <div className="absolute inset-0">
            <img
              src="/learning/fire-stopping-example.png"
              alt="Passive Fire Inspection Gallery Sydney"
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/65" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          </div>

          {/* CONTENT */}
          <div className="relative z-10 mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Sydney Passive Fire Inspection Gallery
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Real Inspection
              <br />
              & Defect Examples
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-300">
              Examples of passive fire defects,
              fire compartmentation issues and inspection findings
              identified throughout commercial buildings across Sydney and NSW.
            </p>
          </div>
        </section>

        {/* INTRO */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Real Inspection Examples
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Understanding Passive Fire Defects
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Passive fire defects are often hidden within buildings and
                may remain unidentified until inspections are carried out.
              </p>

              <p>
                Typical issues include unsealed penetrations,
                damaged fire separations,
                defective fire doors,
                missing smoke seals and non-compliant fire stopping systems.
              </p>

              <p>
                These examples help demonstrate how passive fire defects
                can affect compartmentation performance throughout buildings.
              </p>
            </div>
          </div>
        </section>

        {/* GALLERY */}
        <section className="border-b border-zinc-900 bg-zinc-950 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Inspection Gallery
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Common Passive Fire Issues
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {galleryItems.map((item) => (
                <div
                  key={item.title}
                  className="overflow-hidden rounded-3xl border border-zinc-800 bg-black"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-64 w-full object-cover"
                  />

                  <div className="p-8">
                    <h3 className="text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-6 leading-8 text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* WHY INSPECTIONS MATTER */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-orange-500">
                Inspection Workflows
              </p>

              <h2 className="text-4xl font-bold leading-tight md:text-6xl">
                Identifying Hidden Building Defects
              </h2>
            </div>

            <div className="space-y-8 text-lg leading-8 text-zinc-400">
              <p>
                Passive fire inspections assist with identifying defects
                affecting fire compartmentation throughout buildings.
              </p>

              <p>
                Existing buildings may contain concealed defects resulting
                from historical service installations,
                building modifications or damaged fire-rated systems.
              </p>

              <p>
                Structured inspection and reporting workflows support
                building owners,
                consultants and contractors with remediation planning
                and compliance management.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32">
          <div className="mx-auto max-w-5xl px-6 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Continue Learning
            </p>

            <h2 className="text-4xl font-bold leading-tight md:text-6xl">
              Explore More Passive Fire Topics
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              Continue learning about fire compartmentation,
              fire doors,
              penetration sealing systems and passive fire compliance workflows.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link
                href="/learning"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-black transition hover:bg-orange-400"
              >
                Back To Learning Centre
              </Link>

              <Link
                href="/learning/common-defects"
                className="rounded-full border border-zinc-700 px-8 py-4 font-semibold transition hover:border-orange-500 hover:text-orange-500"
              >
                Common Passive Fire Defects
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}