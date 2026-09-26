import Link from 'next/link';

export const metadata = {
  title: 'Battery Storage — Solar Panel',
  description: 'Battery backup solutions to protect against load shedding in Rawalpindi and Islamabad.',
};

const features = [
  'Keep critical appliances running',
  'Protect against load shedding',
  'Store excess solar energy',
  'Reduce grid dependency',
  'Custom battery sizing',
  'Cash and installment options',
];

export default function BatteryStoragePage() {
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      <section className="relative bg-[#0B0F0E] pt-24 overflow-hidden min-h-[500px] flex items-end">
        <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80" alt="Battery Storage" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-20 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Battery Storage</h1>
          <p className="text-xl text-gray-300 mb-10">Reliable backup power for your home or business during grid outages.</p>
          <Link href="/get-quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">
            Discuss My Backup Requirements
          </Link>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
              <span className="w-3 h-3 bg-[#B8D83D] rounded-full shrink-0"></span>
              <span className="text-gray-700 font-medium">{f}</span>
            </div>
          ))}
        </div>
        <div className="bg-[#0B0F0E] rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4">Get a Custom Battery Plan</h2>
          <p className="text-gray-400 mb-8">Tell us your backup requirements and we will prepare a customized solution.</p>
          <Link href="/get-quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors">
            Build My Solar Plan
          </Link>
        </div>
      </section>
    </main>
  );
}
