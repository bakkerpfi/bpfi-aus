import Image from "next/image";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center gap-4">
<Image
  src="/bakker-logo.png"
  alt="BAKKER PFI LTD"
  width={170}
  height={50}
  className="object-contain w-auto h-auto"
/>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              BAKKER PFI LTD
            </h1>

            <p className="text-gray-500 text-sm">
              Bakker Passive Fire Inspections
            </p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="/" className="hover:text-[#ff6e00] transition-colors">
            Home
          </a>

          <a
            href="/services"
            className="hover:text-[#ff6e00] transition-colors"
          >
            Services
          </a>

          <a
            href="/about"
            className="hover:text-[#ff6e00] transition-colors"
          >
            About
          </a>

          <a
            href="/contact"
            className="hover:text-[#ff6e00] transition-colors"
          >
            Contact
          </a>
        </nav>

        <a
          href="/contact"
          className="bg-[#ff6e00] hover:bg-[#e66300] transition-colors text-white px-5 py-3 rounded-xl text-sm font-semibold"
        >
          Request Inspection
        </a>
      </div>
    </header>
  );
}