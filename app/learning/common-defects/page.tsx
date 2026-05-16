import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CommonDefectsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {/* HERO */}
        <section className="border-b border-zinc-900 py-24">
          <div className="mx-auto max-w-7xl px-6">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-orange-500">
              Passive Fire Learning
            </p>

            <h1 className="max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
              Common Passive Fire Defects
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-400">
              Understanding common passive fire defects identified
              throughout commercial buildings during inspections and
              compartmentation reviews.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24">
          <div className="mx-auto max-w-5xl space-y-20 px-6">
            {/* DEFECT 1 */}
            <div>
              <h2 className="text-3xl font-bold">
                Unsealed Service Penetrations
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                One of the most common passive fire defects involves
                unsealed or incorrectly sealed penetrations where pipes,
                cables or ducts pass through fire-rated walls and floors.
              </p>
            </div>

            {/* DEFECT 2 */}
            <div>
              <h2 className="text-3xl font-bold">
                Damaged Fire-Rated Walls
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Damage to fire-rated plasterboard systems,
                missing linings or unapproved modifications can compromise
                compartmentation performance.
              </p>
            </div>

            {/* DEFECT 3 */}
            <div>
              <h2 className="text-3xl font-bold">
                Fire Door Defects
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Missing smoke seals,
                excessive door gaps,
                damaged hardware and wedged-open fire doors are common
                issues identified during inspections.
              </p>
            </div>

            {/* DEFECT 4 */}
            <div>
              <h2 className="text-3xl font-bold">
                Incorrect Fire Stopping Systems
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Passive fire systems should match tested system
                requirements including substrate type,
                service type and fire-rating requirements.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}