import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-[#0B0F0E] overflow-hidden">
      <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1920&q=80" alt="Solar rooftop" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0E] to-transparent"></div>
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Let&apos;s Find the Right Solar Direction for Your Property.
        </h2>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Tell us about your electricity usage, property and payment preference.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/get-quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">
            Build My Solar Plan
          </Link>
          <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="border border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-[#0B0F0E] transition-colors">
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
