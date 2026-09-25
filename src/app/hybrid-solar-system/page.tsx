/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-unescaped-entities */
import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import SystemComparison from '@/components/SystemComparison';

export const metadata: Metadata = {
  title: "Hybrid Solar System Islamabad & Rawalpindi | [Business Name]",
  description: "Discover hybrid solar systems with battery storage for reliable power in Islamabad and Rawalpindi. Cash and installment options available.",
  keywords: "hybrid solar system Islamabad, hybrid solar system Rawalpindi",
  alternates: { canonical: '/hybrid-solar-system' },
  openGraph: {
    title: "Hybrid Solar System Islamabad & Rawalpindi | [Business Name]",
    description: "Discover hybrid solar systems with battery storage for reliable power in Islamabad and Rawalpindi. Cash and installment options available.",
    url: '/hybrid-solar-system',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function Page() {
  const faqs = [{"question": "What is a hybrid solar system?", "answer": "A system that uses solar panels, battery storage, and grid connection together for flexible energy management."}, {"question": "Does a hybrid system use batteries?", "answer": "Yes, battery integration is a core component of a hybrid solar system."}, {"question": "Can a hybrid system use grid electricity?", "answer": "Yes, it remains connected to the grid and can draw power when solar and battery reserves are depleted."}, {"question": "How is battery size determined?", "answer": "It is determined by assessing the specific electrical loads you wish to run during an outage and the desired duration."}, {"question": "Can I purchase a hybrid system on installments?", "answer": "Yes, installment plans can be explored during your customized quotation process."}, {"question": "How much does a hybrid solar system cost?", "answer": "Because battery technologies and capacities vary greatly, prices differ. Request a quote for precise costing."}];
  const internalLinks = [{"label": "On-Grid Systems", "href": "/on-grid-solar-system"}, {"label": "5kW System", "href": "/5kw-solar-system"}, {"label": "10kW System", "href": "/10kw-solar-system"}, {"label": "15kW System", "href": "/15kw-solar-system"}];

  return (
    <div className="w-full flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is a hybrid solar system?", "acceptedAnswer": {"@type": "Answer", "text": "A system that uses solar panels, battery storage, and grid connection together for flexible energy management."}}, {"@type": "Question", "name": "Does a hybrid system use batteries?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, battery integration is a core component of a hybrid solar system."}}, {"@type": "Question", "name": "Can a hybrid system use grid electricity?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, it remains connected to the grid and can draw power when solar and battery reserves are depleted."}}, {"@type": "Question", "name": "How is battery size determined?", "acceptedAnswer": {"@type": "Answer", "text": "It is determined by assessing the specific electrical loads you wish to run during an outage and the desired duration."}}, {"@type": "Question", "name": "Can I purchase a hybrid system on installments?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, installment plans can be explored during your customized quotation process."}}, {"@type": "Question", "name": "How much does a hybrid solar system cost?", "acceptedAnswer": {"@type": "Answer", "text": "Because battery technologies and capacities vary greatly, prices differ. Request a quote for precise costing."}}]}) }} />
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Hybrid Solar System', href: '/hybrid-solar-system' }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Hybrid Solar System</h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed">
            Hybrid solar systems cleverly combine solar generation with battery storage and grid electricity, providing flexibility and power reliability depending on your selected configuration.
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
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">What Is a Hybrid Solar System?</h2>
            <p className="text-zinc-600 mb-4">A hybrid solar system works by generating electricity from solar panels while being connected to both a battery storage system and the local electricity grid. This provides options for power usage when sunlight is unavailable.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">How a Hybrid System Works</h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-600">
              <li><strong>Solar Generation:</strong> Panels generate power during the day.</li>
              <li><strong>Battery Storage:</strong> Excess power can be stored in batteries for later use.</li>
              <li><strong>Grid Connection:</strong> The system can draw from or send power to the grid, depending on configuration and local regulations.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Who May Consider Hybrid Solar</h2>
            <p className="text-zinc-600 mb-4">Customers who experience frequent grid outages or those who wish to maintain critical loads during night-time hours often consider hybrid configurations.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Battery Considerations</h2>
            <p className="text-zinc-600 mb-4">The backup duration provided by a hybrid system depends entirely on the size, type, and quantity of batteries installed, as well as the load applied during an outage. We assess your critical loads to recommend a suitable battery bank.</p>
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
