import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutBenBakkerPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <Navbar />

      {/* HERO */}
      <section className="bg-[#111111] text-white py-32">
        <div className="max-w-6xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              About Ben Bakker
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
              Existing Building
              <span className="text-[#ff6e00]">
                {" "}
                Passive Fire Specialist
              </span>
            </h1>

            <p className="mt-8 text-xl text-gray-300 leading-relaxed">
              Ben Bakker is the Managing Director of BAKKER PFI LTD and
              specialises in passive fire inspections, compliance reporting and
              existing building passive fire systems.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-sm text-gray-400">Managing Director</p>
                <p className="font-semibold mt-1">BAKKER PFI LTD</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-sm text-gray-400">Industry Focus</p>
                <p className="font-semibold mt-1">Existing Buildings</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl px-5 py-4">
                <p className="text-sm text-gray-400">Specialisation</p>
                <p className="font-semibold mt-1">Compliance Reporting</p>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative">
            <div className="absolute inset-0 bg-[#ff6e00]/20 blur-3xl rounded-full" />

            <div className="relative bg-white/5 border border-white/10 rounded-[32px] overflow-hidden backdrop-blur-sm">
              <Image
                src="/ben-bakker.png"
                alt="Ben Bakker"
                width={700}
                height={900}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="space-y-10">
          <div>
            <div className="inline-block bg-[#ff6e00]/10 text-[#ff6e00] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Experience
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Practical Industry Knowledge
            </h2>

            <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ben Bakker has extensive experience within the passive fire
                industry, with a focus on existing building passive fire
                systems, inspections, compliance reporting and rectification
                workflows.
              </p>

              <p>
                His work includes commercial passive fire installations,
                compliance documentation, fire register systems and inspection
                reporting across a range of existing commercial buildings.
              </p>

              <p>
                This practical experience provides real-world understanding of
                passive fire defects, system failures and compliance challenges
                commonly found within existing buildings.
              </p>
            </div>
          </div>

          {/* QUALIFICATIONS */}
          <div className="pt-16">
            <div className="inline-block bg-[#ff6e00]/10 text-[#ff6e00] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Qualifications & Industry Involvement
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Managing Director — BAKKER PFI LTD",
                "Passive Fire Engineering Consultant",
                "Level 3 Passive Fire Protection Certified",
                "PS3 Auckland Council Author",
                "Former FPANZ Passive Fire Special Interest Group Chair",
                "Current ASFP ANZ Council Member",
                "Existing Building Passive Fire Specialist",
                "Developer of Codexus Compliance Systems",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
                >
                  <div className="w-4 h-4 rounded-full bg-[#ff6e00] mb-5" />

                  <p className="text-lg font-semibold leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* INDUSTRY */}
          <div className="pt-16">
            <div className="inline-block bg-[#ff6e00]/10 text-[#ff6e00] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Industry Focus
            </div>

            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Industry Leadership, Compliance Systems & Existing Buildings
            </h2>

            <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Ben has been actively involved in the passive fire industry
                through technical discussion, industry working groups and
                association-level participation.
              </p>

              <p>
                His experience includes serving as Chair of the FPANZ Passive
                Fire Special Interest Group and currently serving as a member
                of the ASFP ANZ Council.
              </p>

              <p>
                Ben’s focus is on improving passive fire compliance workflows
                for existing buildings through inspection systems, reporting
                structures, digital fire registers and lifecycle management.
              </p>

              <p>
                This includes the ongoing development of Codexus Compliance
                Systems, designed to support inspection reporting, passive fire
                registers and compliance tracking workflows.
              </p>

              <p>
                The objective is to provide building owners and facility
                managers with clear pathways toward passive fire compliance
                through practical reporting and structured workflow management.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}