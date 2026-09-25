import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | Solar Company Islamabad & Rawalpindi",
  description: "Review our refund and cancellation policies for solar installation inquiries, equipment supply, and technical services.",
  alternates: { canonical: '/refund-cancellation' }
};

export default function RefundCancellationPage() {
  return (
    <div className="w-full bg-white pb-24">
      <section className="w-full bg-zinc-950 py-16 px-4 text-center border-b-4 border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Refund & Cancellation', href: '/refund-cancellation' }]} />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Refund & Cancellation Policy</h1>
          <p className="text-zinc-400">Last Updated: [LAST_UPDATED_DATE]</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 prose prose-zinc prose-lg">
        <h2>1. Quote Requests</h2>
        <p>Requesting a quotation through our website or direct communication channels is normally an inquiry and does not itself constitute a completed purchase or binding agreement.</p>

        <h2>2. Cancellation Before Confirmation</h2>
        <p>Customers may contact us to freely cancel or modify an inquiry at any time before an order or installation arrangement is formally confirmed and a deposit or payment is made.</p>

        <h2>3. After Order Confirmation</h2>
        <p>Once a quotation or order has been confirmed and processed, cancellation and refund treatment may depend heavily on the following factors:</p>
        <ul>
          <li>Equipment already ordered or reserved</li>
          <li>Equipment already supplied to the site</li>
          <li>Work or administrative effort already completed</li>
          <li>Site preparation activities</li>
          <li>Installation labor assigned</li>
          <li>Third-party or supplier costs incurred</li>
          <li>The specific payment terms outlined in the confirmed quotation/order</li>
        </ul>
        <p>For these reasons, an automatic full refund is not promised once an order is confirmed.</p>

        <h2>4. Installation Work</h2>
        <p>Completed services or physical installation work already performed may significantly affect refund eligibility. Labor costs and completed site work are generally non-refundable.</p>

        <h2>5. Equipment</h2>
        <p>If equipment (such as solar panels, inverters, or batteries) has been specifically procured for the customer, cancellation or refund requests may be subject to the confirmed quotation/order and any applicable supplier or manufacturer terms.</p>

        <h2>6. Defective or Incorrect Equipment</h2>
        <p>Customers should contact support promptly if supplied equipment appears defective, damaged, or materially different from the confirmed order so that we may assess the situation and coordinate necessary replacements or repairs.</p>

        <h2>7. Refund Processing</h2>
        <p>Where a cancellation is permitted and a refund is approved, the processing method and timing may depend on the original payment method, the applicable payment provider, and standard processing requirements.</p>

        <h2>8. How to Request Cancellation or Refund</h2>
        <p>To request a cancellation or discuss a refund, please contact us with the following details:</p>
        <ul>
          <li>Your full name</li>
          <li>Phone number</li>
          <li>Order/quotation reference (if available)</li>
          <li>The reason for your request</li>
          <li>Any relevant supporting information or documentation</li>
        </ul>
        <p>Contact Details:</p>
        <ul>
          <li>Email: [BUSINESS_EMAIL]</li>
          <li>Phone: [PHONE_NUMBER]</li>
          <li>WhatsApp: [WHATSAPP_NUMBER]</li>
        </ul>

        <h2>9. Policy Updates</h2>
        <p>This policy may be updated from time to time. The latest version will be published on this website and apply to all relevant services.</p>
      </section>
    </div>
  );
}
