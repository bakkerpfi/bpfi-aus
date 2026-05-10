type Props = {
  title: string;
  text: string;
};

export default function ServiceCard({ title, text }: Props) {
  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="w-14 h-14 rounded-2xl bg-[#ff6e00]/10 flex items-center justify-center mb-6">
        <div className="w-6 h-6 rounded-full bg-[#ff6e00]" />
      </div>

      <h3 className="text-2xl font-bold mb-4">{title}</h3>

      <p className="text-gray-600 leading-relaxed">{text}</p>
    </div>
  );
}