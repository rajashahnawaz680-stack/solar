import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';
import SystemComparison from '@/components/SystemComparison';

export const metadata: Metadata = {
  title: "On-Grid Solar System Islamabad & Rawalpindi | [Business Name]",
  description: "Professional on-grid solar systems for grid-connected homes and businesses in Islamabad and Rawalpindi. Request a free quotation.",
  keywords: "on-grid solar system Islamabad, on-grid solar system Rawalpindi",
  alternates: { canonical: '/on-grid-solar-system' },
  openGraph: {
    title: "On-Grid Solar System Islamabad & Rawalpindi | [Business Name]",
    description: "Professional on-grid solar systems for grid-connected homes and businesses in Islamabad and Rawalpindi. Request a free quotation.",
    url: '/on-grid-solar-system',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function Page() {
  const faqs = [{"question": "What is an on-grid solar system?", "answer": "A solar system connected directly to the utility grid, typically functioning without battery storage."}, {"question": "Does an on-grid system use batteries?", "answer": "No, standard on-grid systems do not use batteries. If the grid goes down, the system shuts off for safety reasons."}, {"question": "Can I purchase an on-grid system on installments?", "answer": "Yes, we provide installment plan options. Final details are verified during quotation."}, {"question": "How is system size determined?", "answer": "By analyzing your historical electricity bills and daytime consumption habits."}, {"question": "What information is needed for a quotation?", "answer": "Your location, property type, average monthly bill, and available roof space."}];
  const internalLinks = [{"label": "Hybrid Systems", "href": "/hybrid-solar-system"}, {"label": "Islamabad Prices", "href": "/solar-system-price-islamabad"}, {"label": "Rawalpindi Prices", "href": "/solar-system-price-rawalpindi"}];

  return (
    <div className="w-full flex flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "What is an on-grid solar system?", "acceptedAnswer": {"@type": "Answer", "text": "A solar system connected directly to the utility grid, typically functioning without battery storage."}}, {"@type": "Question", "name": "Does an on-grid system use batteries?", "acceptedAnswer": {"@type": "Answer", "text": "No, standard on-grid systems do not use batteries. If the grid goes down, the system shuts off for safety reasons."}}, {"@type": "Question", "name": "Can I purchase an on-grid system on installments?", "acceptedAnswer": {"@type": "Answer", "text": "Yes, we provide installment plan options. Final details are verified during quotation."}}, {"@type": "Question", "name": "How is system size determined?", "acceptedAnswer": {"@type": "Answer", "text": "By analyzing your historical electricity bills and daytime consumption habits."}}, {"@type": "Question", "name": "What information is needed for a quotation?", "acceptedAnswer": {"@type": "Answer", "text": "Your location, property type, average monthly bill, and available roof space."}}]}) }} />
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'On-Grid Solar System', href: '/on-grid-solar-system' }]} />
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">On-Grid Solar System</h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed">
            An on-grid solar system is directly connected to the electricity grid. The final configuration depends on your property, electricity requirements, applicable regulations, and chosen equipment.
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
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">What Is an On-Grid System?</h2>
            <p className="text-zinc-600 mb-4">On-grid (or grid-tied) solar systems operate in tandem with the local utility grid. They generate power during the day and rely on the grid when solar generation is insufficient or during the night.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">How It Works</h2>
            <p className="text-zinc-600 mb-4">Solar panels convert sunlight into electricity, which the on-grid inverter synchronizes with the grid supply to power your premises. Depending on current utility rules and net-metering approvals, excess power may be exported to the grid.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Who May Consider It</h2>
            <p className="text-zinc-600 mb-4">Customers looking for a cost-effective solar setup without the added expense of battery storage, and those in areas with relatively stable grid electricity.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-900 mb-4">Key Components</h2>
            <ul className="list-disc pl-5 space-y-2 text-zinc-600">
              <li>Solar panel array</li>
              <li>Grid-tied inverter</li>
              <li>Bi-directional meter (subject to utility approval)</li>
              <li>Standard mounting and protection hardware</li>
            </ul>
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
