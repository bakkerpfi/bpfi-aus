export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div>
            <p className="font-bold text-lg">BAKKER PFI LTD</p>

            <p className="text-gray-400 mt-2">
              Bakker Passive Fire Inspections
            </p>

            <p className="text-gray-500 mt-4 text-sm">
              Powered by Codexus Compliance Systems
            </p>
          </div>

          <div>
            <p className="font-semibold mb-4">Contact</p>

            <div className="space-y-3 text-gray-400 text-sm">
              <p>
                Office:{" "}
                <a
                  href="tel:+61290679765"
                  className="hover:text-white transition-colors"
                >
                  +61 2 9067 9765
                </a>
              </p>

              <p>
                Mobile:{" "}
                <a
                  href="tel:+61415568983"
                  className="hover:text-white transition-colors"
                >
                  +61 415 568 983
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:ben@bakkerpfi.com"
                  className="hover:text-white transition-colors"
                >
                  ben@bakkerpfi.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <p className="font-semibold mb-4">Focused Service Area</p>

            <p className="text-gray-400 text-sm leading-relaxed">
              Passive fire inspection and compliance reporting services focused
              on existing commercial buildings throughout Sydney CBD and
              surrounding commercial precincts.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}