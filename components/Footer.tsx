export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black py-10 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-start gap-10 md:grid-cols-3">
          {/* LEFT */}
          <div>
            <p className="text-lg font-bold">
              BAKKER PFI LTD
            </p>

            <p className="mt-2 text-gray-400">
              Passive Fire Inspection & Compliance Specialists
            </p>

            <p className="mt-4 text-sm text-gray-500">
              Powering Codexus Compliance Systems
            </p>
          </div>

          {/* CONTACT */}
          <div>
            <p className="mb-4 font-semibold">
              Contact
            </p>

            <div className="space-y-3 text-sm text-gray-400">
              <p>
                Mobile:{" "}
                <a
                  href="tel:+61415568983"
                  className="transition-colors hover:text-white"
                >
                  +61 415 568 983
                </a>
              </p>

              <p>
                Office:{" "}
                <a
                  href="tel:+61290679765"
                  className="transition-colors hover:text-white"
                >
                  +61 2 9067 9765
                </a>
              </p>

              <p>
                Email:{" "}
                <a
                  href="mailto:ben@bakkerpfi.com"
                  className="transition-colors hover:text-white"
                >
                  ben@bakkerpfi.com
                </a>
              </p>

              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/benjamin1975/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-white"
                >
                  Benjamin Bakker
                </a>
              </p>
            </div>
          </div>

          {/* SERVICE AREA */}
          <div>
            <p className="mb-4 font-semibold">
              Sydney & NSW
            </p>

            <p className="text-sm leading-relaxed text-gray-400">
              Passive fire inspections, compartmentation surveys, fire door
              inspections, penetration reviews, AFSS reporting and compliance
              support throughout Sydney and New South Wales commercial &
              residential buildings.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-gray-500">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>
              © 2026 BAKKER PFI LTD. All rights reserved.
            </p>

            <p>
              Sydney Passive Fire Compliance Specialists
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}