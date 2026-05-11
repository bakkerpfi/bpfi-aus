import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[760px] overflow-hidden">
        <Image
          src="/sydney-cbd.png"
          alt="Sydney CBD"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] border border-[#ff6e00]/30 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                Sydney CBD Focused
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Passive Fire Inspection &
                <span className="text-[#ff6e00]"> Compliance Reporting</span>
              </h1>

              <p className="mt-8 text-xl text-gray-200 leading-relaxed max-w-2xl">
                Helping building owners and facility managers understand passive
                fire risk, identify compliance gaps and create a clear pathway
                toward rectification and ongoing fire register management.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="bg-[#ff6e00] hover:bg-[#e66300] transition-colors text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg"
                >
                  Request Inspection
                </a>

                <a
                  href="/services"
                  className="border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white px-8 py-4 rounded-xl font-semibold text-lg"
                >
                  View Services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BUILDING OWNER PROBLEMS */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <div className="inline-block bg-[#ff6e00]/10 text-[#ff6e00] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            For Building Owners & Managers
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Know What Is In Your Building
          </h2>

          <p className="mt-6 text-gray-600 text-xl max-w-3xl leading-relaxed">
            Existing buildings often contain years of undocumented service
            penetrations, damaged fire stopping and incomplete passive fire
            records. We help bring structure, visibility and compliance clarity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <ServiceCard
            title="Unknown Defects"
            text="Identify missing, damaged, incomplete or non-compliant passive fire seals throughout the building."
          />

          <ServiceCard
            title="Missing Records"
            text="Create structured records where fire stopping history, photos and tested systems are missing or unclear."
          />

          <ServiceCard
            title="Compliance Gaps"
            text="Report on passive fire issues that may expose building owners to compliance, audit or insurance risk."
          />

          <ServiceCard
            title="Rectification Planning"
            text="Support building managers with clear defect schedules and practical next steps for remediation."
          />
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-[#111111] text-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Our Process
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Inspect. Report. Register. Rectify. Track.
            </h2>

            <p className="mt-6 text-gray-300 text-xl max-w-3xl leading-relaxed">
              We provide a structured passive fire workflow designed for
              existing buildings, giving building owners a clear pathway from
              inspection through to compliance management.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-5">
            {[
              {
                step: "01",
                title: "Inspect",
                text: "Review passive fire penetrations, fire separations, risers and service openings.",
              },
              {
                step: "02",
                title: "Report",
                text: "Document defects, photos, locations and compliance concerns in a clear report.",
              },
              {
                step: "03",
                title: "Register",
                text: "Create a passive fire register for lifecycle tracking and future inspections.",
              },
              {
                step: "04",
                title: "Rectify",
                text: "Support rectification planning with tested system recommendations and defect schedules.",
              },
              {
                step: "05",
                title: "Track",
                text: "Maintain visibility of completed works, outstanding defects and ongoing compliance records.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white/5 border border-white/10 rounded-3xl p-6"
              >
                <p className="text-[#ff6e00] font-bold text-lg">{item.step}</p>
                <h3 className="text-2xl font-bold mt-4">{item.title}</h3>
                <p className="text-gray-300 mt-4 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <div className="inline-block bg-[#ff6e00]/10 text-[#ff6e00] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Inspection Services
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Existing Building Passive Fire Specialists
          </h2>

          <p className="mt-6 text-gray-600 text-xl max-w-3xl leading-relaxed">
            Focused on inspection, compliance reporting and passive fire
            lifecycle management for commercial buildings throughout Sydney CBD.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          <ServiceCard
            title="Passive Fire Surveys"
            text="Inspection of penetrations, risers, fire walls, ceilings and service openings throughout existing buildings."
          />

          <ServiceCard
            title="Compliance Reporting"
            text="Detailed defect reporting and compliance gap analysis for commercial passive fire systems."
          />

          <ServiceCard
            title="Fire Registers"
            text="Digital fire register creation including location tracking, tested systems and lifecycle records."
          />

          <ServiceCard
            title="Rectification Support"
            text="Supporting building owners and contractors through passive fire rectification workflows."
          />
        </div>
      </section>

      {/* COMMON ISSUES */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div className="inline-block bg-[#ff6e00]/10 text-[#ff6e00] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Common Existing Building Issues
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Passive Fire Problems Are Often Hidden
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-relaxed">
              Many passive fire defects are found above ceilings, inside service
              risers, around later trade penetrations or in areas where building
              alterations have occurred over time.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Undocumented service penetrations",
              "Damaged or incomplete fire stopping",
              "Non-tested or unsuitable systems",
              "Missing photos and compliance records",
              "Unclear rectification history",
              "Inconsistent contractor workmanship",
              "No structured passive fire register",
              "Ongoing audit and insurance exposure",
            ].map((issue) => (
              <div
                key={issue}
                className="bg-[#f5f5f5] rounded-2xl p-5 border border-gray-100 flex items-center gap-4"
              >
                <div className="w-3 h-3 rounded-full bg-[#ff6e00]" />
                <p className="font-semibold">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE WORK WITH */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="mb-16">
          <div className="inline-block bg-[#ff6e00]/10 text-[#ff6e00] px-4 py-2 rounded-full text-sm font-semibold mb-4">
            Who We Support
          </div>

          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Designed For Building Compliance Stakeholders
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            "Building Owners",
            "Facility Managers",
            "Strata Managers",
            "Commercial Property Managers",
            "Fire Safety Managers",
            "Remedial Consultants",
          ].map((person) => (
            <div
              key={person}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="w-4 h-4 rounded-full bg-[#ff6e00] mb-5" />
              <p className="text-xl font-bold">{person}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CODEXUS */}
      <section className="bg-[#111111] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Powered by Codexus
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Digital Passive Fire Register & Compliance Workflow Systems
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              Codexus Compliance Systems supports structured passive fire
              reporting, defect tracking, fire register management and
              lifecycle compliance workflows for existing buildings.
            </p>

            <a
              href="/contact"
              className="inline-flex mt-10 bg-[#ff6e00] hover:bg-[#e66300] transition-colors text-white px-8 py-4 rounded-xl font-semibold text-lg"
            >
              Discuss Your Building
            </a>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[32px] p-8">
            <div className="grid gap-4">
              {[
                "Inspection records",
                "Defect schedules",
                "Photo evidence",
                "Tested system references",
                "Rectification status",
                "Ongoing compliance tracking",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-black/30 rounded-2xl p-5 border border-white/10"
                >
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}