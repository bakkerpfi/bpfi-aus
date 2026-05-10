import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      {/* HEADER */}
      <header className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center gap-4">
          <Image
            src="/bakker-logo.png"
            alt="BAKKER PFI LTD"
            width={180}
            height={60}
            className="object-contain"
          />

          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              BAKKER PFI LTD
            </h1>

            <p className="text-gray-500 text-sm md:text-base">
              Australia Passive Fire Inspection Specialists
            </p>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative w-full h-[720px] overflow-hidden">
        <Image
          src="/sydney-cbd.png"
          alt="Sydney CBD"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />

        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-3xl">
              <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] border border-[#ff6e00]/30 px-4 py-2 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                Sydney CBD Focused
              </div>

              <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight tracking-tight">
                Passive Fire Inspection &
                <span className="text-[#ff6e00]">
                  {" "}
                  Compliance Reporting
                </span>
              </h2>

              <p className="mt-8 text-xl text-gray-200 leading-relaxed max-w-2xl">
                Bakker Passive Fire Inspections supports building owners,
                facility managers and fire safety professionals with passive
                fire inspections, defect reporting, fire register creation and
                rectification workflow management for existing commercial
                buildings across Sydney CBD.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <button className="bg-[#ff6e00] hover:bg-[#e66300] transition-colors text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg">
                  Request Inspection
                </button>

                <button className="border border-white/30 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors text-white px-8 py-4 rounded-xl font-semibold text-lg">
                  View Services
                </button>
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

          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Existing Building Passive Fire Specialists
          </h3>

          <p className="mt-6 text-gray-600 text-xl max-w-3xl leading-relaxed">
            Focused on inspection, compliance reporting and passive fire
            lifecycle management for commercial buildings throughout Sydney CBD.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {[
            {
              title: "Passive Fire Surveys",
              text: "Inspection of penetrations, risers, fire walls, ceilings and service openings throughout existing buildings.",
            },
            {
              title: "Compliance Reporting",
              text: "Detailed defect reporting and compliance gap analysis for commercial passive fire systems.",
            },
            {
              title: "Fire Registers",
              text: "Digital fire register creation including location tracking, tested systems and lifecycle records.",
            },
            {
              title: "Rectification Support",
              text: "Supporting building owners and contractors through passive fire rectification workflows.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-[#ff6e00]/10 flex items-center justify-center mb-6">
                <div className="w-6 h-6 rounded-full bg-[#ff6e00]" />
              </div>

              <h4 className="text-2xl font-bold mb-4">{service.title}</h4>

              <p className="text-gray-600 leading-relaxed">{service.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY BPFI */}
      <section className="bg-[#111111] text-white py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Why BAKKER PFI
            </div>

            <h3 className="text-4xl md:text-5xl font-bold leading-tight">
              Real Industry Experience.
              <span className="text-[#ff6e00]"> Real Compliance Knowledge.</span>
            </h3>

            <p className="mt-8 text-gray-300 text-lg leading-relaxed">
              BAKKER PFI LTD combines hands-on passive fire installation
              experience with inspection and compliance reporting workflows.
              This practical industry knowledge helps identify real-world
              passive fire issues within existing buildings.
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
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
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

      {/* FOOTER */}
      <footer className="bg-black text-white py-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-bold text-lg">BAKKER PFI LTD</p>

            <p className="text-gray-400">
              Bakker Passive Fire Inspections
            </p>
          </div>

          <div className="text-gray-500 text-sm">
            Powered by Codexus Compliance Systems
          </div>
        </div>
      </footer>
    </main>
  );
}