import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Terms & Conditions | Solar Company Islamabad & Rawalpindi",
  description: "Read our terms and conditions regarding solar installation services, quotations, cash payments, and installment options in Islamabad and Rawalpindi.",
  alternates: { canonical: '/terms-and-conditions' }
};

export default function TermsPage() {
  return (
    <div className="w-full bg-white pb-24">
      <section className="w-full bg-zinc-950 py-16 px-4 text-center border-b-4 border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Terms & Conditions', href: '/terms-and-conditions' }]} />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Terms & Conditions</h1>
          <p className="text-zinc-400">Last Updated: [LAST_UPDATED_DATE]</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 prose prose-zinc prose-lg">
        <h2>1. Introduction</h2>
        <p>These Terms and Conditions govern your use of our website and our solar installation services. By accessing the website or requesting a quotation, you acknowledge and agree to these terms.</p>

        <h2>2. Website Use</h2>
        <p>This website is intended to provide information about our solar installation services in Islamabad and Rawalpindi. You agree to use the website lawfully and to provide accurate information when submitting requests.</p>

        <h2>3. Solar Information</h2>
        <p>Information provided on this website regarding solar systems, capacities, and capabilities is general information. Final system recommendations depend on a property-specific assessment and confirmed customer requirements.</p>

        <h2>4. Quote Requests</h2>
        <p>Submitting a quote request through our website, via phone, or WhatsApp is an inquiry only. A quote request does not automatically create a binding order or contract.</p>

        <h2>5. Site Assessment</h2>
        <p>A physical or technical site assessment may be required before finalizing a quotation or installation agreement to verify roof condition, shading, space, and electrical requirements.</p>

        <h2>6. System Design & Configuration</h2>
        <p>Systems are designed based on the information provided and standard assumptions. Modifications may be necessary upon detailed technical review.</p>

        <h2>7. Pricing & Quotations</h2>
        <p>Prices depend on multiple factors and are subject to change. Factors affecting final pricing include:</p>
        <ul>
          <li>System size</li>
          <li>Equipment selection</li>
          <li>Battery requirements</li>
          <li>Mounting structure</li>
          <li>Electrical protection</li>
          <li>Installation requirements</li>
          <li>Property conditions</li>
          <li>Current supplier/equipment availability</li>
          <li>Payment arrangement</li>
        </ul>

        <h2>8. Cash / Upfront Payments</h2>
        <p>Customers paying via cash or upfront purchase must follow the payment terms detailed in their finalized quotation or agreement.</p>

        <h2>9. Installment Options</h2>
        <p>Customers may request installment options. Installment availability, eligibility, down payment, schedule, duration, fees/charges, and final terms depend on the applicable confirmed arrangement. We do not guarantee financing approval.</p>

        <h2>10. Installation Services</h2>
        <p>Installation arrangements and timelines are confirmed through the formal quotation/order process.</p>

        <h2>11. Equipment & Components</h2>
        <p>We do not promise or guarantee a particular manufacturer or model unless it is specifically included and itemized in the customer's confirmed quotation.</p>

        <h2>12. Customer Responsibilities</h2>
        <p>To ensure a smooth process, customers are responsible for:</p>
        <ul>
          <li>Providing accurate property and electrical information</li>
          <li>Providing reasonable site access when required for assessment or installation</li>
          <li>Disclosing relevant structural or electrical limitations</li>
          <li>Reviewing the quotation carefully before confirming</li>
          <li>Providing any requested supporting documents</li>
        </ul>

        <h2>13. Third-Party Services / Suppliers</h2>
        <p>We may engage third-party suppliers or contractors for equipment or installation support. Those entities operate under their own professional guidelines.</p>

        <h2>14. Changes to Services</h2>
        <p>We reserve the right to modify or discontinue any part of our services or website at any time without prior notice.</p>

        <h2>15. Cancellations</h2>
        <p>Cancellation policies vary based on the status of your order. Please refer to our <Link href="/refund-cancellation">Refund & Cancellation Policy</Link> for details.</p>

        <h2>16. Refunds</h2>
        <p>Refund eligibility is determined by the stage of processing and completed work. See the <Link href="/refund-cancellation">Refund & Cancellation Policy</Link>.</p>

        <h2>17. Limitation of Information</h2>
        <p>We make reasonable efforts to ensure the accuracy of the information provided, but we do not guarantee the completeness or accuracy of any content. We do not guarantee specific savings, ROI, electricity-bill reduction, or system performance unless formally documented in a confirmed agreement.</p>

        <h2>18. Intellectual Property</h2>
        <p>All content, branding, and materials on this website are protected by applicable intellectual property laws.</p>

        <h2>19. Website Availability</h2>
        <p>We do not guarantee that the website will be uninterrupted, secure, or error-free at all times.</p>

        <h2>20. Governing Law</h2>
        <p>These terms shall be governed by and construed in accordance with the laws of [GOVERNING_LAW_PLACEHOLDER].</p>

        <h2>21. Contact Information</h2>
        <p>If you have questions about these Terms & Conditions, please contact us:</p>
        <ul>
          <li>Email: [BUSINESS_EMAIL]</li>
          <li>Phone: [PHONE_NUMBER]</li>
          <li>WhatsApp: [WHATSAPP_NUMBER]</li>
        </ul>
      </section>
    </div>
  );
}
