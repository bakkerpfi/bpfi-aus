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
        <div className="grid md:grid-cols-3 gap-6 mb-10">
  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
    <p className="text-sm text-gray-400 mb-2">Office</p>

    <a
      href="tel:+61290679765"
      className="text-xl font-bold hover:text-[#ff6e00] transition-colors"
    >
      +61 2 9067 9765
    </a>
  </div>

  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
    <p className="text-sm text-gray-400 mb-2">Mobile</p>

    <a
      href="tel:+61415568983"
      className="text-xl font-bold hover:text-[#ff6e00] transition-colors"
    >
      +61 415 568 983
    </a>
  </div>

  <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm">
    <p className="text-sm text-gray-400 mb-2">Email</p>

    <a
      href="mailto:ben@bakkerpfi.com"
      className="text-xl font-bold hover:text-[#ff6e00] transition-colors break-all"
    >
      ben@bakkerpfi.com
    </a>
  </div>
</div>
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