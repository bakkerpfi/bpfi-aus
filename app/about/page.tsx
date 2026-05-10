import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <Navbar />

      <section className="bg-[#111111] text-white py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            About BAKKER PFI
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Existing Building Passive Fire Specialists
          </h1>

          <p className="mt-8 text-xl text-gray-300 leading-relaxed">
            BAKKER PFI LTD provides passive fire inspection, compliance
            reporting and fire register services focused on existing commercial
            buildings throughout Sydney CBD.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-24">
        <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
          <p>
            Our approach combines practical passive fire industry experience
            with digital compliance workflows and reporting systems.
          </p>

          <p>
            We support building owners, facility managers and fire safety
            professionals through passive fire inspections, defect
            identification, fire register management and rectification support.
          </p>

          <p>
            Powered by Codexus Compliance Systems.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}