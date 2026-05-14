import Navbar from "@/components/Navbar";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">

      <Navbar />

      {/* HERO */}
      <section className="border-b border-zinc-900 py-24">
        <div className="mx-auto max-w-7xl px-6">

          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
            Contact BAKKER PFI Australia
          </p>

          <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
            Sydney Passive Fire Compliance Support
          </h1>

          <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
            Contact Benjamin Bakker for passive fire inspections,
            compartmentation surveys,
            compliance reporting and AFSS support across Sydney and NSW.
          </p>

        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-10 lg:grid-cols-2">

            {/* LEFT */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
                Direct Contact
              </p>

              <h2 className="mt-6 text-4xl font-bold">
                Benjamin Bakker
              </h2>

              <p className="mt-3 text-xl text-orange-500">
                Technical Director
              </p>

              <div className="mt-12 space-y-8 text-lg text-zinc-300">

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Mobile
                  </p>

                  <a
                    href="tel:+61415568983"
                    className="mt-2 block text-2xl font-bold hover:text-orange-500"
                  >
                    +61 415 568 983
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Office
                  </p>

                  <a
                    href="tel:+61290679765"
                    className="mt-2 block text-2xl font-bold hover:text-orange-500"
                  >
                    +61 2 9067 9765
                  </a>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                    Email
                  </p>

                  <a
                    href="mailto:ben@bakkerpfi.com"
                    className="mt-2 block text-2xl font-bold hover:text-orange-500"
                  >
                    ben@bakkerpfi.com
                  </a>
                </div>

              </div>

            </div>

            {/* RIGHT */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">

              <p className="text-sm uppercase tracking-[0.3em] text-orange-500">
                Services
              </p>

              <h2 className="mt-6 text-4xl font-bold">
                Sydney Compliance Support
              </h2>

              <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-400">

                <p>
                  Passive fire inspections and compartmentation surveys.
                </p>

                <p>
                  Existing building compliance reviews and defect identification.
                </p>

                <p>
                  AFSS passive fire support documentation.
                </p>

                <p>
                  Fire stopping and penetration compliance assessments.
                </p>

                <p>
                  Fire door defect identification and reporting.
                </p>

                <p>
                  Codexus digital compliance workflow support.
                </p>

              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}