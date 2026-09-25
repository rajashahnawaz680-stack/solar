import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: "Solar Installation in Islamabad | Solar Company Islamabad",
  description: "Professional solar installation services in Islamabad. Offering residential and commercial solar systems with cash and installment options.",
  keywords: "solar installation Islamabad, solar company Islamabad, solar panels Islamabad, solar system Islamabad, solar system price Islamabad, solar on installments Islamabad",
  alternates: { canonical: '/solar-installation-islamabad' },
  openGraph: {
    title: "Solar Installation in Islamabad",
    description: "Professional solar installation for homes and businesses in Islamabad. Get a quote today.",
    url: '/solar-installation-islamabad',
    siteName: 'Solar KCKY',
    type: 'website',
  },
};

export default function IslamabadPage() {
  const faqs = [
    { question: "Do you install solar systems in all sectors of Islamabad?", answer: "We aim to cover the entirety of Islamabad, subject to service availability and property assessment." },
    { question: "How much does a solar system cost in Islamabad?", answer: "Pricing depends on the system size (e.g., 5kW, 10kW), topology (on-grid, hybrid), and specific site requirements. Request a free quote for an accurate estimate." },
    { question: "Can I get solar on installments in Islamabad?", answer: "Yes, we provide installment options for eligible customers in Islamabad. Final terms are agreed upon during the quotation phase." },
    { question: "Do you handle net-metering in Islamabad?", answer: "We assist with on-grid systems and can guide you through the standard procedures required for net-metering connections where applicable." }
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 py-24 md:py-32 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Solar Installation in <span className="text-emerald-500">Islamabad</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10">
            Professional solar installation services for homes and businesses in Islamabad. Discover reliable solutions with cash purchase and installment options.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#quote-isb" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
              Get Your Free Solar Quote
            </Link>
            <a href="https://wa.me/03125634911" className="border border-zinc-700 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-800 transition">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. INTRODUCTION */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-6">Why Choose Professional Solar Installation?</h2>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Every property in Islamabad is unique, which is why a property-specific assessment is essential for an effective solar setup. We evaluate your roof space, electricity consumption, and load requirements to recommend a system that meets your needs efficiently, without resorting to generic solutions.
          </p>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Our Islamabad Services</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {['Residential Solar Installation', 'Commercial Solar Installation', 'On-Grid Solar', 'Hybrid Solar', 'Solar Panel Installation', 'Solar Consultation', 'Cash Purchase', 'Installment Options'].map((srv, i) => (
              <div key={i} className="p-4 bg-white border border-zinc-200 rounded-lg shadow-sm font-medium text-zinc-800">
                {srv}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SYSTEM OPTIONS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10">Available Solar Systems</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { label: '5kW System', link: '/5kw-solar-system' },
              { label: '10kW System', link: '/10kw-solar-system' },
              { label: '15kW System', link: '/15kw-solar-system' },
              { label: 'Hybrid Solar', link: '/hybrid-solar-system' },
              { label: 'On-Grid Solar', link: '/on-grid-solar-system' }
            ].map((sys, i) => (
              <Link key={i} href={sys.link} className="px-6 py-3 bg-zinc-100 rounded-md font-semibold text-zinc-800 hover:bg-emerald-50 hover:text-emerald-700 transition">
                {sys.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CASH & INSTALLMENTS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Cash Purchase</h3>
            <p className="text-zinc-300">Customers can request an upfront purchase quotation for their preferred system size in Islamabad. Final pricing is based on the finalized quote.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">Installment Options</h3>
            <p className="text-zinc-300">Customers can request details on available <Link href="/solar-on-installments" className="underline hover:text-white">installment options</Link>. Down payments and monthly terms are provided during quotation.</p>
          </div>
        </div>
      </section>

      {/* 6. HOW INSTALLATION WORKS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10">Installation Process</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {['Requirement', 'Assessment', 'System Proposal', 'Payment Selection', 'Installation', 'Testing/Handover'].map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <span className="font-semibold text-zinc-700 bg-zinc-100 px-4 py-2 rounded-md">{step}</span>
                {i < 5 && <svg className="w-5 h-5 text-zinc-300 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 & 8. QUOTE FORM (ISLAMABAD) */}
      <section id="quote-isb" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Request a Quote in Islamabad</h2>
            <p className="text-zinc-600">Serving customers across Islamabad, subject to service availability.</p>
          </div>
          <QuoteForm />
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Islamabad FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 10. FINAL CTA */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-emerald-900 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Get Your Free Solar Quote in Islamabad</h2>
        <div className="flex justify-center gap-4">
          <Link href="#quote-isb" className="bg-white text-emerald-900 font-bold px-8 py-4 rounded-md hover:bg-zinc-100 transition">
            Start Your Request
          </Link>
        </div>
      </section>
      
      {/* 11. INTERNAL LINKS */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/solar-installation-rawalpindi" className="text-zinc-500 hover:text-zinc-300">Rawalpindi Installation</Link>
          <Link href="/solar-system-price-islamabad" className="text-zinc-500 hover:text-zinc-300">Islamabad Prices</Link>
          <Link href="/contact" className="text-zinc-500 hover:text-zinc-300">Contact Us</Link>
        </div>
      </section>
    </div>
  );
}
