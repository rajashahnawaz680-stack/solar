import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import FAQAccordion from '@/components/FAQAccordion';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Solar on Installments in Islamabad & Rawalpindi | [Business Name]",
  description: "Explore solar installation options with cash or installment payment arrangements in Islamabad and Rawalpindi. Request a free quote today.",
  keywords: "Solar on installments Islamabad, Solar on installments Rawalpindi, Solar system installments Islamabad, Solar panels on installments Islamabad",
  alternates: { canonical: '/solar-on-installments' },
  openGraph: {
    title: "Solar on Installments in Islamabad & Rawalpindi",
    description: "Explore solar installation options with cash or installment payment arrangements.",
    url: '/solar-on-installments',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function InstallmentsPage() {
  const faqs = [
    { question: "Can I get a solar system on installments?", answer: "Yes, you can ask about available installment plans during the quotation process. Final terms depend on the applicable payment/financing arrangement." },
    { question: "Are installment options available in Islamabad?", answer: "Yes, we offer installment options for eligible customers in Islamabad." },
    { question: "Are installment options available in Rawalpindi?", answer: "Yes, our installment options are also available for eligible properties in Rawalpindi." },
    { question: "Can I also pay in cash?", answer: "Absolutely. We provide quotations for both upfront cash purchases and installment plans." },
    { question: "How is the monthly payment determined?", answer: "Final terms depend on the applicable payment/financing arrangement, system size, and down payment, and are confirmed during the quotation process." },
    { question: "Is a down payment required?", answer: "Generally, yes. The down payment amount and schedule are verified during the quotation process." },
    { question: "What information is required for an installment quotation?", answer: "We require your property details, location, and recent electricity bills to size the system and discuss installment availability." },
    { question: "Which solar system sizes can be considered for installments?", answer: "Installment options can be considered for various sizes, including 5kW, 10kW, 15kW, and Hybrid systems." },
    { question: "How long does the quotation process take?", answer: "After you submit your requirements, our team will review your usage and respond promptly to discuss options." },
    { question: "Is installment approval guaranteed?", answer: "No. Installment availability and eligibility are subject to the applicable payment/financing arrangement and review process." },
  ];

  return (
    <div className="w-full flex flex-col bg-white">
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 py-24 px-4 sm:px-6 lg:px-8 text-center border-b-8 border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Solar on Installments', href: '/solar-on-installments' }]} />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Solar on Installments in <span className="text-emerald-500">Islamabad & Rawalpindi</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Explore solar installation options with cash or installment payment arrangements. Submit your requirements and receive a quotation based on your property, electricity usage, system requirements, and available payment terms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
              Get Your Free Solar Quote
            </Link>
            <a href="https://wa.me/[WHATSAPP_NUMBER]" className="border border-zinc-600 bg-zinc-800 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-700 transition flex items-center justify-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* 2. PAYMENT OPTIONS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-200">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-zinc-200 flex flex-col h-full hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-zinc-900 mb-4">Pay in Cash</h3>
            <p className="text-zinc-600 mb-8 flex-grow leading-relaxed text-lg">
              Customers can request a quotation for an upfront solar system purchase. Final pricing depends on the selected system, equipment, installation requirements, and confirmed quotation.
            </p>
            <Link href="/get-quote" className="inline-flex justify-center bg-zinc-900 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-800 transition">
              Get Cash Quote
            </Link>
          </div>
          <div className="bg-emerald-50 p-10 rounded-2xl shadow-sm border border-emerald-100 flex flex-col h-full hover:shadow-md transition">
            <h3 className="text-3xl font-bold text-emerald-950 mb-4">Pay in Installments</h3>
            <p className="text-emerald-900 mb-8 flex-grow leading-relaxed text-lg">
              Customers can ask about available installment arrangements. Eligibility, down payment, payment schedule, duration, and final terms are confirmed during the quotation process.
            </p>
            <Link href="/get-quote" className="inline-flex justify-center bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
              Request Installment Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-16 text-center">How Solar Installments Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Submit Your Requirements", desc: "Customer provides Name, Phone, City, Area, Electricity bill, Property type, Preferred system size, and Payment preference." },
              { step: "2", title: "Requirements Review", desc: "The team reviews the customer's electricity usage and solar requirements." },
              { step: "3", title: "System Assessment", desc: "The appropriate system configuration is discussed based on the customer's requirements and site conditions." },
              { step: "4", title: "Quotation & Payment Options", desc: "Customer receives the applicable quotation and available cash/installment terms." },
              { step: "5", title: "Confirmation", desc: "Customer confirms the selected option after reviewing the applicable terms." },
              { step: "6", title: "Installation", desc: "Installation is scheduled according to the confirmed agreement." }
            ].map((item, i) => (
              <div key={i} className="bg-zinc-50 p-8 rounded-xl border border-zinc-200 relative pt-12">
                <div className="absolute top-0 left-8 -translate-y-1/2 w-14 h-14 bg-emerald-600 text-white font-bold text-2xl rounded-full flex items-center justify-center border-4 border-white shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. WHO CAN REQUEST */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Who Can Request Installment Information?</h2>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {['Homeowners', 'Residential Customers', 'Commercial Property Owners', 'Businesses', 'Customers considering different system sizes'].map((item, i) => (
              <span key={i} className="bg-zinc-800 border border-zinc-700 px-6 py-3 rounded-full text-zinc-300 font-medium">
                {item}
              </span>
            ))}
          </div>
          <div className="bg-zinc-800/50 p-6 rounded-lg border border-zinc-700 max-w-2xl mx-auto">
            <p className="text-zinc-300 font-medium flex items-center justify-center gap-3">
              <svg className="w-6 h-6 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              Installment availability and eligibility are subject to the applicable payment/financing arrangement.
            </p>
          </div>
        </div>
      </section>

      {/* 5. AVAILABLE SYSTEM TYPES */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-12 text-center">Available System Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "5kW Solar System", desc: "For moderate usage.", link: "/5kw-solar-system" },
              { title: "10kW Solar System", desc: "For higher residential usage.", link: "/10kw-solar-system" },
              { title: "15kW Solar System", desc: "For large homes & commercial.", link: "/15kw-solar-system" },
              { title: "Hybrid Solar System", desc: "Includes battery storage.", link: "/hybrid-solar-system" },
              { title: "On-Grid Solar System", desc: "Grid-connected systems.", link: "/on-grid-solar-system" }
            ].map((sys, i) => (
              <div key={i} className="p-8 border border-zinc-200 rounded-xl bg-zinc-50 hover:shadow-md transition flex flex-col">
                <h3 className="text-2xl font-bold text-zinc-900 mb-2">{sys.title}</h3>
                <p className="text-zinc-600 mb-6 flex-grow">{sys.desc}</p>
                <div className="flex gap-3">
                  <Link href={sys.link} className="flex-1 text-center bg-white border border-zinc-300 text-zinc-700 font-semibold py-3 rounded-md hover:bg-zinc-100 transition">
                    View Details
                  </Link>
                  <Link href="/get-quote" className="flex-1 text-center bg-emerald-600 text-white font-semibold py-3 rounded-md hover:bg-emerald-700 transition">
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CASH VS INSTALLMENTS */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Cash vs Installments</h2>
          <div className="overflow-x-auto shadow-sm rounded-lg border border-zinc-200">
            <table className="w-full text-left bg-white">
              <thead className="bg-zinc-100 text-zinc-900">
                <tr>
                  <th className="px-6 py-4 font-bold border-b border-zinc-200">Factor</th>
                  <th className="px-6 py-4 font-bold border-b border-zinc-200 border-l">Cash / Upfront</th>
                  <th className="px-6 py-4 font-bold border-b border-zinc-200 border-l text-emerald-800 bg-emerald-50">Installments</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 text-zinc-700">
                <tr>
                  <td className="px-6 py-4 font-medium">Payment method</td>
                  <td className="px-6 py-4 border-l border-zinc-200">Full payment upfront based on quote</td>
                  <td className="px-6 py-4 border-l border-zinc-200 bg-emerald-50">Down payment + Scheduled payments</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Quotation</td>
                  <td className="px-6 py-4 border-l border-zinc-200">Standard tailored quotation</td>
                  <td className="px-6 py-4 border-l border-zinc-200 bg-emerald-50">Tailored quotation + Payment options</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">System selection</td>
                  <td className="px-6 py-4 border-l border-zinc-200">All configurations available</td>
                  <td className="px-6 py-4 border-l border-zinc-200 bg-emerald-50">Subject to financing arrangements</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Payment schedule</td>
                  <td className="px-6 py-4 border-l border-zinc-200">N/A</td>
                  <td className="px-6 py-4 border-l border-zinc-200 bg-emerald-50 font-semibold text-emerald-700">Based on confirmed terms</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Approval/eligibility</td>
                  <td className="px-6 py-4 border-l border-zinc-200">Immediate based on quote acceptance</td>
                  <td className="px-6 py-4 border-l border-zinc-200 bg-emerald-50">Subject to review and applicable terms</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-medium">Installation</td>
                  <td className="px-6 py-4 border-l border-zinc-200">Scheduled post-payment</td>
                  <td className="px-6 py-4 border-l border-zinc-200 bg-emerald-50">Scheduled post-agreement</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7 & 8. WHAT AFFECTS COST & REQUIRED INFO */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold text-zinc-900 mb-6">What Affects the Final Cost?</h2>
            <p className="text-zinc-600 mb-6">The final quotation depends entirely on your specific property and selected components:</p>
            <ul className="space-y-3">
              {['System size', 'Electricity consumption', 'Solar panel selection', 'Inverter selection', 'Battery requirement', 'Mounting structure', 'Protection equipment', 'Installation requirements', 'Property/site conditions', 'Selected payment option'].map((item, i) => (
                <li key={i} className="flex items-center text-zinc-700"><div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>{item}</li>
              ))}
            </ul>
          </div>
          <div className="bg-zinc-50 p-8 rounded-xl border border-zinc-200">
            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Information We May Need for Your Quote</h2>
            <ul className="space-y-3 mb-8">
              {['Full name', 'Phone number', 'WhatsApp number', 'City (Islamabad/Rawalpindi)', 'Area', 'Property type', 'Monthly electricity bill', 'Desired system size', 'Cash or installment preference', 'Electricity bill document (if available)'].map((item, i) => (
                <li key={i} className="flex items-center text-zinc-700"><svg className="w-5 h-5 text-zinc-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>{item}</li>
              ))}
            </ul>
            <Link href="/get-quote" className="block text-center w-full bg-emerald-600 text-white font-bold py-4 rounded-md hover:bg-emerald-700 transition">
              Start My Quote
            </Link>
          </div>
        </div>
      </section>

      {/* 9. FAQ */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-zinc-50 border-b border-zinc-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-10 text-center">Installment FAQs</h2>
          <FAQAccordion items={faqs} />
        </div>
      </section>

      {/* 10. TRUST SECTION */}
      <section className="w-full py-16 px-4 sm:px-6 lg:px-8 bg-white border-b border-zinc-100 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-zinc-900 mb-4">Clear quotations. Clear payment terms. No hidden promises.</h2>
          <p className="text-zinc-600 text-lg">We prioritize absolute transparency in all our pricing and installment arrangements.</p>
        </div>
      </section>

      {/* 11. FINAL CTA */}
      <section className="w-full py-24 px-4 sm:px-6 lg:px-8 bg-zinc-950 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Explore Solar on Installments?</h2>
          <p className="text-xl text-zinc-400 mb-10">Tell us about your property and electricity usage to request a solar quotation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-quote" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
              Get Your Free Solar Quote
            </Link>
            <a href="https://wa.me/[WHATSAPP_NUMBER]" className="border border-zinc-600 bg-zinc-800 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-700 transition flex items-center justify-center gap-2">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
      
      {/* 12. INTERNAL LINKS */}
      <section className="w-full py-8 px-4 sm:px-6 lg:px-8 bg-zinc-900 text-center">
        <div className="flex flex-wrap justify-center gap-4 text-sm text-zinc-400">
          <Link href="/solar-installation-islamabad" className="hover:text-white transition">Solar Installation Islamabad</Link>
          <Link href="/solar-installation-rawalpindi" className="hover:text-white transition">Solar Installation Rawalpindi</Link>
          <Link href="/solar-system-price-islamabad" className="hover:text-white transition">Islamabad Prices</Link>
          <Link href="/solar-system-price-rawalpindi" className="hover:text-white transition">Rawalpindi Prices</Link>
        </div>
      </section>

    </div>
  );
}
