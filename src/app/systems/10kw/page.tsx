import Link from 'next/link';

export const metadata = {
  title: '10Kw | SUNORA ENERGY',
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F6F1] pt-20">
      <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden bg-[#0B0F0E]">
        <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1920&q=80" alt="10Kw" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
           <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">10Kw</h1>
           <p className="text-xl text-gray-300 mb-8">Professional solar and energy solutions designed for maximum reliability.</p>
           <Link href="/quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-lg">
             Request a Consultation
           </Link>
        </div>
      </section>
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
         <h2 className="text-3xl font-bold text-[#0B0F0E] mb-6">Expert 10Kw</h2>
         <p className="text-lg text-gray-700 leading-relaxed mb-8">
           At SUNORA ENERGY, we specialize in high-quality engineering and deployment for your energy needs. 
           Our expert team ensures safety, compliance, and optimized performance for properties across Islamabad and Rawalpindi.
         </p>
      </section>
    </main>
  );
}
