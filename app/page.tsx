import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[720px] overflow-hidden">
        <Image
          src="/sydney-cbd.png"
          alt="Sydney CBD"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] border border-[#ff6e00]/30 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                Sydney CBD Focused
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Passive Fire Inspection &
                <span className="text-[#ff6e00]">
                  {" "}
                  Compliance Reporting
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-200 leading-relaxed max-w-2xl">
                Supporting building owners, facility managers and fire safety
                professionals with passive fire inspections, defect reporting,
                fire register creation and rectification workflow management.
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

      {/* WHY */}
      <section className="bg-[#111111] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Why BAKKER PFI
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Real Industry Experience.
              <span className="text-[#ff6e00]">
                {" "}
                Real Compliance Knowledge.
              </span>
            </h2>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              BAKKER PFI LTD combines hands-on passive fire installation
              experience with inspection and compliance reporting workflows.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              "Existing Building Focus",
              "Commercial Building Experience",
              "Digital Fire Registers",
              "Codexus Compliance Systems",
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-3xl p-8"
              >
                <div className="w-4 h-4 rounded-full bg-[#ff6e00] mb-4" />

                <p className="text-lg font-semibold leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}