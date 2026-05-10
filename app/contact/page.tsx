import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-black">
      <Navbar />

      <section className="bg-[#111111] text-white py-32">
        <div className="max-w-5xl mx-auto px-6">
          <div className="inline-block bg-[#ff6e00]/20 text-[#ff9b4a] px-4 py-2 rounded-full text-sm font-semibold mb-6">
            Contact
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Request a Passive Fire Inspection
          </h1>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-24">
        <form className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 space-y-6">
          <div>
            <label className="block mb-2 font-semibold">
              Full Name
            </label>

            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Company
            </label>

            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Email Address
            </label>

            <input
              type="email"
              className="w-full border border-gray-300 rounded-xl px-4 py-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Building Address
            </label>

            <input
              type="text"
              className="w-full border border-gray-300 rounded-xl px-4 py-4"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Message
            </label>

            <textarea
              rows={6}
              className="w-full border border-gray-300 rounded-xl px-4 py-4"
            />
          </div>

          <button className="bg-[#ff6e00] hover:bg-[#e66300] transition-colors text-white px-8 py-4 rounded-xl font-semibold text-lg">
            Submit Request
          </button>
        </form>
      </section>

      <Footer />
    </main>
  );
}