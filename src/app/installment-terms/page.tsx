import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import FAQAccordion from '@/components/FAQAccordion';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Solar Installment Terms | Islamabad & Rawalpindi",
  description: "General information regarding solar installment options, eligibility, payment terms, and procedures for customers in Islamabad and Rawalpindi.",
  alternates: { canonical: '/installment-terms' }
};

export default function InstallmentTermsPage() {
  const faqs = [
    { question: "Can I get solar on installments?", answer: "Customers can request available installment information; final availability and eligibility are confirmed during quotation." },
    { question: "Is installment payment available in Islamabad?", answer: "Customers in Islamabad can request information about available payment options, subject to applicable terms." },
    { question: "Is installment payment available in Rawalpindi?", answer: "Customers in Rawalpindi can request information about available payment options, subject to applicable terms." },
    { question: "Is approval guaranteed?", answer: "No. Any applicable eligibility or approval process is subject to the relevant arrangement." },
    { question: "Do I need a down payment?", answer: "Any down payment requirement is confirmed in the applicable quotation/payment arrangement." },
    { question: "How is the installment amount determined?", answer: "It depends on the confirmed system price and applicable payment arrangement." },
    { question: "Can I pay in cash instead?", answer: "Yes, customers can request a cash/upfront quotation." }
  ];

  return (
    <div className="w-full bg-white pb-24">
      <section className="w-full bg-zinc-950 py-16 px-4 text-center border-b-4 border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Solar Installment Terms', href: '/installment-terms' }]} />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Solar Installment Terms</h1>
          <p className="text-zinc-400">Last Updated: [LAST_UPDATED_DATE]</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        <div className="prose prose-zinc prose-lg max-w-none">
          <p className="lead text-xl text-zinc-700">
            This page provides transparent general information about installment-based solar purchases. Installment availability may be offered or arranged depending on the applicable payment arrangement and customer eligibility.
          </p>

          <h2>How the Process Works</h2>
          <ol>
            <li>Submit a Quote Request</li>
            <li>Review Electricity & Property Requirements</li>
            <li>Determine Suitable System Configuration</li>
            <li>Receive Quotation</li>
            <li>Review Available Payment Options</li>
            <li>Confirm Applicable Terms</li>
            <li>Proceed With Installation</li>
          </ol>

          <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 my-8 rounded-r-md">
            <h3 className="mt-0 mb-2 text-emerald-900 font-bold">Important Payment Information</h3>
            <p className="mb-0 text-emerald-800">
              Installment availability, eligibility, down payment requirements, payment schedule, duration, fees or charges, and other financial terms are not fixed on this page. They are confirmed during the quotation process based on the applicable arrangement.
            </p>
          </div>

          <h2>Who Can Request Installment Information?</h2>
          <p>Installment information can be requested by:</p>
          <ul>
            <li>Homeowners</li>
            <li>Residential customers</li>
            <li>Commercial customers</li>
            <li>Businesses</li>
            <li>Customers considering 5kW, 10kW, 15kW, or other suitable configurations</li>
          </ul>
          <p><em>Final eligibility and terms are subject to the applicable arrangement.</em></p>

          <h2>Cash vs Installments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
            <div className="bg-zinc-50 border border-zinc-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Cash / Upfront</h3>
              <ul className="space-y-2 text-zinc-700 list-disc pl-5">
                <li>Payment made according to confirmed quotation/order terms.</li>
                <li>No installment schedule.</li>
                <li>Final amount confirmed through quotation.</li>
              </ul>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-emerald-950 mb-4">Installments</h3>
              <ul className="space-y-2 text-emerald-900 list-disc pl-5">
                <li>Payment spread according to confirmed installment arrangement.</li>
                <li>Eligibility may apply.</li>
                <li>Down payment/schedule/fees may apply depending on confirmed terms.</li>
              </ul>
            </div>
          </div>

          <h2>System Sizes</h2>
          <p>Installment options may be discussed for various system sizes. Review details here:</p>
          <ul className="not-prose flex flex-wrap gap-3">
            <li><Link href="/5kw-solar-system" className="inline-block px-4 py-2 bg-zinc-100 text-zinc-800 rounded hover:bg-zinc-200">5kW Solar System</Link></li>
            <li><Link href="/10kw-solar-system" className="inline-block px-4 py-2 bg-zinc-100 text-zinc-800 rounded hover:bg-zinc-200">10kW Solar System</Link></li>
            <li><Link href="/15kw-solar-system" className="inline-block px-4 py-2 bg-zinc-100 text-zinc-800 rounded hover:bg-zinc-200">15kW Solar System</Link></li>
            <li><Link href="/hybrid-solar-system" className="inline-block px-4 py-2 bg-zinc-100 text-zinc-800 rounded hover:bg-zinc-200">Hybrid Solar System</Link></li>
            <li><Link href="/on-grid-solar-system" className="inline-block px-4 py-2 bg-zinc-100 text-zinc-800 rounded hover:bg-zinc-200">On-Grid Solar System</Link></li>
          </ul>

          <h2>Before Confirming</h2>
          <p>Before confirming any agreement, customers should carefully review the following details provided in their official quotation:</p>
          <ul>
            <li>Total quoted price</li>
            <li>Equipment/configuration</li>
            <li>Installation scope</li>
            <li>Payment schedule</li>
            <li>Down payment if applicable</li>
            <li>Applicable fees/charges</li>
            <li>Cancellation/refund terms</li>
            <li>Any applicable warranty terms</li>
            <li>Other conditions in the confirmed quotation</li>
          </ul>

        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-zinc-900 mb-8">Frequently Asked Questions</h2>
          <FAQAccordion items={faqs} />
        </div>

        <div className="mt-16 text-center">
          <Link href="/get-quote" className="inline-block bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition">
            Request Your Solar Quote
          </Link>
        </div>

      </section>
    </div>
  );
}
