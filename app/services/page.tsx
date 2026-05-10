import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/ServiceCard";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <Navbar />

      <section className="bg-[#111111] text-white py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Sydney CBD Services
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Passive Fire Inspection Services
          </h1>

          <p className="mt-8 text-xl text-gray-300 max-w-3xl leading-relaxed">
            Supporting existing commercial buildings throughout Sydney CBD with
            passive fire inspections, compliance reporting and fire register
            management.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24">
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

      <Footer />
    </main>
  );
}