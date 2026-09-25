/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import SystemComparison from '@/components/SystemComparison';

export const metadata: Metadata = {
  title: "15kW Solar System | Solar Installation Islamabad & Rawalpindi",
  description: "Premium 15kW solar systems for large residential and commercial properties in Islamabad and Rawalpindi. Request cash or installment quotes.",
  keywords: "15kW solar system, 15kW solar system Islamabad, 15kW solar system Rawalpindi",
  alternates: { canonical: '/15kw-solar-system' },
  openGraph: {
    title: "15kW Solar System | Solar Installation Islamabad & Rawalpindi",
    description: "Premium 15kW solar systems for large residential and commercial properties in Islamabad and Rawalpindi. Request cash or installment quotes.",
    url: '/15kw-solar-system',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function Page() {
  const faqs = [{"question": "What is a 15kW solar system?", "answer": "A large-scale solar solution for high-consumption properties, capable of managing substantial electrical loads."}, {"question": "Is 15kW suitable for commercial use?", "answer": "Yes, 15kW systems are frequently installed for small to medium-sized commercial enterprises."}, {"question": "Are installment plans available for 15kW systems?", "answer": "Yes, installment eligibility and structural terms are determined during the formal quotation stage."}, {"question": "How much roof space is required?", "answer": "A 15kW system requires significant roof space. Our site assessment will confirm if your property can accommodate the panel array."}, {"question": "How much does a 15kW system cost?", "answer": "Costs depend heavily on site complexity and equipment choices. Request a current quote for exact figures."}];
  const internalLinks = [{"label": "5kW System", "href": "/5kw-solar-system"}, {"label": "10kW System", "href": "/10kw-solar-system"}, {"label": "Islamabad Services", "href": "/solar-installation-islamabad"}, {"label": "Rawalpindi Services", "href": "/solar-installation-rawalpindi"}, {"label": "Installments", "href": "/solar-on-installments"}];

  return (
    <div className="w-full flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is a 15kW solar system?", "acceptedAnswer": {"@type": "Answer", "text": "A large-scale solar solution for high-consumption properties, capable of managing substantial electrical loads."}}, {"@type": "Question", "name": "Is 15kW suitable for commercial use?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, 15kW systems are frequently installed for small to medium-sized commercial enterprises."}}, {"@type": "Question", "name": "Are installment plans available for 15kW systems?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, installment eligibility and structural terms are determined during the formal quotation stage."}}, {"@type": "Question", "name": "How much roof space is required?", "acceptedAnswer": {"@type": "Answer", "text": "A 15kW system requires significant roof space. Our site assessment will confirm if your property can accommodate the panel array."}}, {"@type": "Question", "name": "How much does a 15kW system cost?", "acceptedAnswer": {"@type": "Answer", "text": "Costs depend heavily on site complexity and equipment choices. Request a current quote for exact figures."}}]}) }} />
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: '15kW Solar System', href: '/15kw-solar-system' }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">15kW Solar System</h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed">
            Our 15kW solar systems are engineered for larger residential, commercial, or higher-consumption requirements. Final suitability relies entirely on consumption profiles, property conditions, and professional assessment.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="#quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
              Get Your Free Solar Quote
            </Link>
            <a href="https://wa.me/[WHATSAPP_NUMBER]" className="border border-zinc-700 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-800 transition">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto flex flex-col gap-12">
          
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Suitable Applications</h2>
            <p className="text-zinc-600 mb-4">Designed for significant power demands, a 15kW system is often chosen for extensive residential villas, office buildings, or facilities with heavy load requirements during the day.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">System Assessment</h2>
            <p className="text-zinc-600 mb-4">A system of this scale requires careful engineering. Our team assesses your peak electrical loads, roof structural integrity, available area, and grid-connection parameters to ensure safe and effective deployment.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Components & Configuration</h2>
            <p className="text-zinc-600 mb-3">Custom configurations are common for 15kW setups. Typical inclusions (subject to quote) are:</p>
            <div className="flex flex-wrap gap-3">
              {['High-yield Solar Panels', '15kW Three-Phase Inverter', 'Commercial-grade Mounting', 'Advanced Protection Relays', 'Professional Commissioning'].map((item, i) => (
                 <span key={i} className="bg-zinc-100 px-4 py-2 border border-zinc-200 rounded-full text-sm font-medium text-zinc-700">{item}</span>
              ))}
            </div>
          </div>
        
        </div>
      </section>

      {/* 3. CASH & INSTALLMENTS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-y border-zinc-100">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Payment Options</h2>
        </div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-200">
            <h3 className="text-2xl font-bold mb-4 text-zinc-900">Cash Purchase</h3>
            <p className="text-zinc-600 mb-6 leading-relaxed">Customers can request a cash quotation based on the selected configuration. Proceed with an upfront payment according to the confirmed quotation.</p>
            <Link href="#quote" className="inline-block bg-zinc-900 text-white font-semibold px-6 py-3 rounded-md hover:bg-zinc-800 transition">Get Cash Quote</Link>
          </div>
          <div className="bg-emerald-50 p-8 rounded-xl shadow-sm border border-emerald-100">
            <h3 className="text-2xl font-bold mb-4 text-emerald-900">Installment Option</h3>
            <p className="text-emerald-800 mb-6 leading-relaxed">Installment availability, eligibility, down payment, schedule, and final terms are confirmed during the quotation process based on available financing arrangements.</p>
            <Link href="/solar-on-installments" className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-emerald-700 transition">Ask About Installments</Link>
          </div>
        </div>
      </section>

      {/* 4. INSTALLATION PROCESS */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Installation Process</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {['Requirement Collection', 'Site Assessment', 'System Proposal', 'Payment Selection', 'Installation', 'Testing & Handover'].map((step, i) => (
              <div key={i} className="text-center p-4 border border-zinc-100 rounded-lg bg-zinc-50">
                <div className="w-10 h-10 mx-auto bg-emerald-100 text-emerald-700 font-bold rounded-full flex items-center justify-center mb-3">{i + 1}</div>
                <h4 className="font-semibold text-zinc-800 text-sm">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. SYSTEM COMPARISON */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8 text-center">System Comparison</h2>
          <SystemComparison />
        </div>
      </section>

      {/* 6. QUOTE FORM */}
      <section id="quote" className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-4">Request a Quotation</h2>
            <p className="text-zinc-400">Fill out the form below to receive a personalized system proposal for your property.</p>
          </div>
          <div className="text-zinc-900">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 8. FINAL CTA */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-emerald-700 text-center text-white">
        <h2 className="text-3xl font-bold mb-6">Get Your Quote Today</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="#quote" className="bg-white text-emerald-800 font-bold px-8 py-4 rounded-md hover:bg-zinc-100 transition">
            Get Your Free Solar Quote
          </Link>
          <a href="tel:[PHONE_NUMBER]" className="border-2 border-emerald-400 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-600 transition">
            Call Now: [PHONE_NUMBER]
          </a>
        </div>
      </section>

      {/* 9. INTERNAL LINKS */}
      <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-zinc-950 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-4 text-sm">
          {internalLinks.map((lnk: any, i: number) => (
             <Link key={i} href={lnk.href} className="text-zinc-400 hover:text-white transition px-2">{lnk.label}</Link>
          ))}
        </div>
      </section>

    </div>
  );
}
