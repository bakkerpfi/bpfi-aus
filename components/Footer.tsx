export default function Footer() {
  return (
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
  );
}