import Link from "next/link";
import Image from "next/image";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const regions = [
  {
    title: "Auckland Headquarters",
    href: "/",
    image: "/auckland.png",
    description:
      "Passive fire installation, inspections, fire stopping and technical compliance support across Auckland and New Zealand commercial projects.",
  },

  {
    title: "Sydney",
    href: "/locations/sydney",
    image: "/sydney.png",
    description:
      "AFSS passive fire inspections, compartmentation surveys and compliance reporting support throughout Sydney and NSW.",
  },

  {
    title: "Singapore",
    href: "/locations/singapore",
    image: "/singapore.png",
    description:
      "Passive fire inspection support, compliance gap analysis and digital workflow systems aligned with Singapore fire code requirements.",
  },

  {
    title: "Christchurch",
    href: "/locations/christchurch",
    image: "/christchurch.png",
    description:
      "Focused on BWOF inspections, passive fire compliance reviews, defect identification and existing building compliance workflows.",
  },
];

export default function LocationsPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white min-h-screen">
        {/* HERO */}
        <section className="bg-zinc-950 px-4 py-20 text-white md:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
              BAKKER PFI LTD
            </p>

            <h1 className="mt-6 max-w-4xl text-4xl font-bold tracking-tight md:text-6xl">
              Passive Fire Compliance Across Australia, New Zealand and
              Singapore
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">
              AFSS passive fire inspections, compartmentation reporting,
              compliance reviews and fire stopping services for commercial
              buildings and construction projects across Australia, New Zealand
              and Singapore.
            </p>
          </div>
        </section>

        {/* LOCATIONS */}
        <section className="px-4 py-20 md:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
              {regions.map((region) => (
                <Link
                  key={region.title}
                  href={region.href}
                  className="group overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="relative h-56 w-full overflow-hidden">
<Image
  src={region.image}
  alt={region.title}
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 25vw"
  className="object-cover transition duration-500 group-hover:scale-105"
/>
                  </div>

                  <div className="p-6">
                    <h2 className="text-2xl font-semibold text-zinc-900">
                      {region.title}
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-zinc-600">
                      {region.description}
                    </p>

                    <div className="mt-6 inline-flex items-center text-sm font-semibold text-orange-600">
                      View Location
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

        {/* REGIONAL STRUCTURE */}
        <section className="bg-zinc-50 px-4 py-20 md:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-500">
                  International Structure
                </p>

                <h2 className="mt-4 text-4xl font-bold tracking-tight text-zinc-900">
                  Regional delivery supported by shared technical systems
                </h2>

                <p className="mt-6 leading-8 text-zinc-600">
                  BAKKER PFI LTD operates across Australia, New Zealand and
                  Singapore through a connected regional compliance model.
                </p>

                <p className="mt-5 leading-8 text-zinc-600">
                  Each region focuses on local building compliance requirements,
                  passive fire inspections and reporting workflows while
                  remaining connected through shared technical systems, QA
                  methodology and Codexus compliance platforms developed from
                  our Auckland headquarters.
                </p>

                <p className="mt-5 leading-8 text-zinc-600">
                  This structure allows BAKKER PFI LTD to deliver scalable
                  compliance systems, consistent reporting standards and
                  region-specific passive fire expertise across multiple
                  jurisdictions.
                </p>
              </div>

              <div className="rounded-[32px] border border-zinc-200 bg-white p-8 shadow-sm">
                <h3 className="text-2xl font-semibold text-zinc-900">
                  Auckland Headquarters Support
                </h3>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-2xl bg-zinc-50 p-5">
                    <h4 className="font-semibold text-zinc-900">
                      Technical Review
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      Central technical oversight and passive fire compliance
                      methodology.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-5">
                    <h4 className="font-semibold text-zinc-900">
                      Codexus Compliance Systems
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      Shared digital reporting, QA workflows and compliance
                      documentation systems.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-5">
                    <h4 className="font-semibold text-zinc-900">
                      QA & Reporting Standards
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      Consistent reporting formats, inspection methodology and
                      documentation standards across all regions.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-zinc-50 p-5">
                    <h4 className="font-semibold text-zinc-900">
                      Regional Compliance Knowledge
                    </h4>

                    <p className="mt-2 text-sm leading-7 text-zinc-600">
                      Local compliance understanding supported by shared passive
                      fire systems and technical guidance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}