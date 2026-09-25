/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import SystemComparison from '@/components/SystemComparison';

export const metadata: Metadata = {
  title: "10kW Solar System | Solar Installation Islamabad & Rawalpindi",
  description: "Discover 10kW solar systems tailored for higher electricity requirements in Islamabad and Rawalpindi. Get quotes for cash or installment plans.",
  keywords: "10kW solar system, 10kW solar system Islamabad, 10kW solar system Rawalpindi",
  alternates: { canonical: '/10kw-solar-system' },
  openGraph: {
    title: "10kW Solar System | Solar Installation Islamabad & Rawalpindi",
    description: "Discover 10kW solar systems tailored for higher electricity requirements in Islamabad and Rawalpindi. Get quotes for cash or installment plans.",
    url: '/10kw-solar-system',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function Page() {
  const faqs = [{"question": "What is a 10kW solar system?", "answer": "A 10kW system is a robust solar setup designed to generate significant power for larger homes or small businesses."}, {"question": "Is 10kW suitable for my property?", "answer": "It depends on your average consumption. We conduct a thorough electricity usage assessment to confirm suitability."}, {"question": "Can I purchase a 10kW system on installments?", "answer": "Yes, installment plans can be requested, with terms clarified during quotation."}, {"question": "How much does a 10kW system cost?", "answer": "Prices vary based on panel brands, inverter choices, and battery requirements. Please request a free quote for accurate pricing."}];
  const internalLinks = [{"label": "5kW System", "href": "/5kw-solar-system"}, {"label": "15kW System", "href": "/15kw-solar-system"}, {"label": "Hybrid Solar", "href": "/hybrid-solar-system"}, {"label": "On-Grid Solar", "href": "/on-grid-solar-system"}, {"label": "Solar Installation Islamabad", "href": "/solar-installation-islamabad"}, {"label": "Solar Installation Rawalpindi", "href": "/solar-installation-rawalpindi"}, {"label": "Get Quote", "href": "/get-quote"}];

  return (
    <div className="w-full flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is a 10kW solar system?", "acceptedAnswer": {"@type": "Answer", "text": "A 10kW system is a robust solar setup designed to generate significant power for larger homes or small businesses."}}, {"@type": "Question", "name": "Is 10kW suitable for my property?", "acceptedAnswer": {"@type": "Answer", "text": "It depends on your average consumption. We conduct a thorough electricity usage assessment to confirm suitability."}}, {"@type": "Question", "name": "Can I purchase a 10kW system on installments?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, installment plans can be requested, with terms clarified during quotation."}}, {"@type": "Question", "name": "How much does a 10kW system cost?", "acceptedAnswer": {"@type": "Answer", "text": "Prices vary based on panel brands, inverter choices, and battery requirements. Please request a free quote for accurate pricing."}}]}) }} />
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: '10kW Solar System', href: '/10kw-solar-system' }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">10kW Solar System</h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed">
            A 10kW system may be highly suitable for higher electricity requirements, providing robust generation capacity subject to proper property assessment and equipment configuration.
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
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Who May Consider a 10kW System</h2>
            <p className="text-zinc-600 mb-4">A 10kW system is generally considered for properties with elevated electricity consumption, such as larger homes or small business premises.</p>
            <ul className="list-disc pl-5 space-y-2 text-zinc-600">
              <li>Properties operating multiple heavy loads.</li>
              <li>Customers seeking a robust solar foundation for their energy needs.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Electricity Usage Assessment</h2>
            <p className="text-zinc-600 mb-4">Our process involves evaluating your unique electricity consumption patterns. We analyze your historical bills and peak usage hours to confirm whether a 10kW setup aligns with your goals.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">System Components</h2>
            <p className="text-zinc-600 mb-3">While specific components vary based on the agreed quotation, a standard 10kW project involves:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['Solar panels array', '10kW Capacity Inverter', 'Mounting & Racking', 'Breakers & Protection', 'Quality Cabling', 'Installation Services'].map((item, i) => (
                 <div key={i} className="bg-zinc-50 p-4 border border-zinc-200 rounded text-sm font-medium text-zinc-700">{item}</div>
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
