import Link from 'next/link';

export const metadata = {
  title: 'Residential Solar — Solar Panel Rawalpindi & Islamabad',
  description: 'Custom rooftop solar for homes in Rawalpindi and Islamabad.',
};

const points = [
  'Electricity usage assessment',
    'Roof condition review',
    'Custom system sizing',
    'Optional battery backup',
    'Cash and installment options',
    'Professional consultation',
];

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      <section className="relative bg-[#0B0F0E] pt-24 overflow-hidden min-h-[500px] flex items-end">
        <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1200&q=80" alt="Residential Solar" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/40 to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 pb-20 text-center w-full">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Residential Solar</h1>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">Custom rooftop solar for homes in Rawalpindi and Islamabad.</p>
          <Link href="/get-quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">
            Get My Solar Plan
          </Link>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-extrabold text-[#0B0F0E] mb-6">About This Solution</h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-8">Every home has a different roof and different electricity usage. We design residential solar systems tailored specifically to your property.</p>
            <ul className="space-y-3">
              {points.map((p, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-700">
                  <span className="w-2 h-2 bg-[#B8D83D] rounded-full shrink-0"></span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0B0F0E] rounded-3xl p-10 text-center">
            <p className="text-[#B8D83D] text-xs font-bold uppercase tracking-widest mb-4">Consultation First</p>
            <h3 className="text-2xl font-extrabold text-white mb-4">Your Plan Is Custom</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">Every system is designed after reviewing your electricity usage, roof and requirements. We prepare a proposal specifically for you.</p>
            <Link href="/get-quote" className="block bg-[#B8D83D] text-[#0B0F0E] font-bold py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors">
              Build My Solar Plan
            </Link>
            <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="block mt-3 text-sm text-gray-500 hover:text-[#25D366] transition-colors">
              or chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
