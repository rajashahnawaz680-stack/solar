import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "Solar Installation in Rawalpindi | Solar Company Rawalpindi",
  description: "Reliable solar installation services in Rawalpindi. Get custom quotations for residential and commercial solar systems with flexible payment options.",
  keywords: "solar installation Rawalpindi, solar company Rawalpindi, solar panels Rawalpindi, solar system Rawalpindi, solar system price Rawalpindi, solar on installments Rawalpindi",
  alternates: { canonical: '/solar-installation-rawalpindi' },
  openGraph: {
    title: "Solar Installation in Rawalpindi",
    description: "Reliable solar installation for homes and businesses in Rawalpindi. Flexible payment options available.",
    url: '/solar-installation-rawalpindi',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function RawalpindiPage() {
  const faqs = [
    { question: "Do you offer solar installation services throughout Rawalpindi?", answer: "Yes, our installation services are available across Rawalpindi, depending on site viability and scheduling." },
    { question: "How can I check the solar system price in Rawalpindi?", answer: "Since prices vary based on your load requirements and chosen system (e.g., Hybrid vs On-Grid), please fill out our quote form for a customized price estimate." },
    { question: "Are solar installment plans available for Rawalpindi residents?", answer: "Yes, we provide installment purchasing options. Our team will share the eligibility criteria and terms once you request a quotation." },
    { question: "How long does the installation take?", answer: "Once the system is planned and payment terms are confirmed, the physical installation is typically completed within a few days." }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-900 py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-center border-b-[8px] border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Solar Installation in <span className="text-emerald-400">Rawalpindi</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed">
            Empowering Rawalpindi residents and businesses with reliable solar systems. Enjoy professional service with straightforward cash and installment options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#quote-rwp" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition shadow-lg shadow-emerald-900/30">
              Get Your Free Solar Quote
            </Link>
            <a href="https://wa.me/[WHATSAPP_NUMBER]" className="bg-zinc-800 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-700 transition flex items-center justify-center gap-2">
              <svg className="w-5 h-5 text-emerald-400" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">Expert Solar Services for Rawalpindi</h2>
            <p className="text-lg text-zinc-600 leading-relaxed mb-4">
              Transitioning to solar power in Rawalpindi requires a well-planned approach. Our dedicated team carefully reviews your property's electrical load and space to design a system that works optimally.
            </p>
            <p className="text-lg text-zinc-600 leading-relaxed">
              We focus on providing transparent quotes, clear timelines, and professional installation standards without the guesswork.
            </p>
          </div>
          <div className="flex-1 bg-white p-8 rounded-xl border border-zinc-200 shadow-sm">
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Service Availability</h3>
            <p className="text-zinc-600">We serve major residential and commercial sectors across Rawalpindi, subject to preliminary assessment and scheduling.</p>
          </div>
        </div>
      </section>

      {/* 3 & 4. SERVICES & SYSTEM OPTIONS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">What We Offer</h2>
            <ul className="space-y-4">
              {['Residential Solar Installation', 'Commercial Solar Installation', 'Solar Panel Installation', 'Solar Consultation', 'Cash Purchase', 'Installment Options'].map((srv, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-700">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full"></div> {srv}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-8">System Sizes & Topologies</h2>
            <div className="flex flex-col gap-4">
              <Link href="/5kw-solar-system" className="p-4 bg-zinc-50 border border-zinc-200 rounded-lg font-medium text-zinc-800 hover:border-emerald-500 transition">5kW Solar System</Link>
              <Link href="/10kw-solar-system" className="p-4 bg-zinc-50 border border-zinc-200 rounded-lg font-medium text-zinc-800 hover:border-emerald-500 transition">10kW Solar System</Link>
              <Link href="/15kw-solar-system" className="p-4 bg-zinc-50 border border-zinc-200 rounded-lg font-medium text-zinc-800 hover:border-emerald-500 transition">15kW Solar System</Link>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <Link href="/hybrid-solar-system" className="p-3 bg-zinc-900 text-white text-center rounded-lg font-medium hover:bg-zinc-800 transition">Hybrid Solar</Link>
                <Link href="/on-grid-solar-system" className="p-3 bg-zinc-900 text-white text-center rounded-lg font-medium hover:bg-zinc-800 transition">On-Grid Solar</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CASH & INSTALLMENTS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10">Payment Options</h2>
          <div className="bg-white rounded-xl shadow-sm border border-zinc-200 overflow-hidden flex flex-col md:flex-row text-left">
            <div className="flex-1 p-8 border-b md:border-b-0 md:border-r border-zinc-200">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Buy in Cash</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Proceed with an upfront payment based on the final accepted quotation for your Rawalpindi property.</p>
            </div>
            <div className="flex-1 p-8">
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Pay in Installments</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">Request details on our <Link href="/solar-on-installments" className="text-emerald-600 underline">installment plans</Link>. Specific payment terms are clarified during the quoting process.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. INSTALLATION PROCESS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-12 text-center">How We Work</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Requirement', 'Assessment', 'System Proposal', 'Payment Selection', 'Installation', 'Testing/Handover'].map((step, i) => (
              <div key={i} className="text-center p-4">
                <div className="w-12 h-12 mx-auto bg-emerald-100 text-emerald-700 font-bold rounded-full flex items-center justify-center mb-4">{i + 1}</div>
                <h4 className="font-semibold text-zinc-800">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. QUOTE FORM (RAWALPINDI) */}
      <section id="quote-rwp" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Request a Quote in Rawalpindi</h2>
            <p className="text-zinc-400">Fill out the form below to receive a personalized system proposal.</p>
          </div>
          <div className="text-zinc-900">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Rawalpindi FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-emerald-600 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Get Your Free Solar Quote in Rawalpindi</h2>
        <Link href="#quote-rwp" className="inline-block bg-white text-emerald-700 font-bold px-10 py-4 rounded-md hover:bg-zinc-100 transition shadow-md">
          Start Your Quotation Process
        </Link>
      </section>
      
      {/* 11. INTERNAL LINKS */}
      <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/solar-installation-islamabad" className="text-zinc-400 hover:text-white transition">Islamabad Installation</Link>
          <Link href="/solar-system-price-rawalpindi" className="text-zinc-400 hover:text-white transition">Rawalpindi Prices</Link>
          <Link href="/get-quote" className="text-zinc-400 hover:text-white transition">Get Quote</Link>
          <Link href="/solar-on-installments" className="text-zinc-400 hover:text-white transition">Installments</Link>
        </div>
      </section>
    </div>
  );
}
