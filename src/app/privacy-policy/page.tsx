import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Privacy Policy | Solar Company Islamabad & Rawalpindi",
  description: "Read our privacy policy to understand how we collect, use, and protect your information when you request a solar quotation or use our website.",
  alternates: { canonical: '/privacy-policy' }
};

export default function PrivacyPolicyPage() {
  return (
    <div className="w-full bg-white pb-24">
      <section className="w-full bg-zinc-950 py-16 px-4 text-center border-b-4 border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-zinc-400">Last Updated: [LAST_UPDATED_DATE]</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 prose prose-zinc prose-lg">
        <h2>1. Introduction</h2>
        <p>This policy describes how information may be collected and used when visitors use this website or submit an inquiry, quote request, or communication regarding our solar installation services in Islamabad and Rawalpindi.</p>
        
        <h2>2. Information We May Collect</h2>
        <p>When you interact with our website or submit a request, we may collect the following information:</p>
        <ul>
          <li>Name</li>
          <li>Phone number</li>
          <li>WhatsApp number</li>
          <li>Email address</li>
          <li>City and Area</li>
          <li>Property type</li>
          <li>Approximate electricity bill</li>
          <li>Requested solar system size</li>
          <li>System preference</li>
          <li>Payment preference (Cash or Installments)</li>
          <li>Message or inquiry information</li>
          <li>Uploaded electricity bill or supporting document, if submitted</li>
        </ul>

        <h2>3. How Information Is Used</h2>
        <p>The information we collect is used for legitimate business purposes, which may include:</p>
        <ul>
          <li>Responding to your quote requests and inquiries</li>
          <li>Contacting customers regarding solar installations</li>
          <li>Understanding your solar requirements</li>
          <li>Preparing accurate quotations</li>
          <li>Arranging site assessments and installation discussions</li>
          <li>Responding to WhatsApp, phone, or email inquiries</li>
          <li>Improving our website and overall service experience</li>
          <li>Handling customer support</li>
        </ul>

        <h2>4. Uploaded Documents</h2>
        <p>If you choose to upload an electricity bill or any supporting documents, these are used strictly for quotation and service-related purposes. They are processed securely and are not made publicly accessible.</p>

        <h2>5. Cookies and Analytics</h2>
        <p>The website may use cookies or similar technologies where enabled for functionality, security, analytics, or user experience. You can adjust your browser settings to decline cookies if you prefer, though this may affect how the website functions.</p>

        <h2>6. Third-Party Services</h2>
        <p>Certain website functions may rely on third-party service providers. Where applicable, their handling of information may be governed by their own privacy policies.</p>

        <h2>7. Data Security</h2>
        <p>We implement reasonable administrative, technical, and physical measures to safeguard your personal information. However, no data transmission over the internet or electronic storage system can be guaranteed to be absolutely secure.</p>

        <h2>8. Data Retention</h2>
        <p>Information may be retained as reasonably necessary for responding to inquiries, providing services, fulfilling legal obligations, dispute handling, or other legitimate business purposes.</p>

        <h2>9. User Requests</h2>
        <p>If you wish to inquire about the personal information we hold or request its deletion, please contact us using the information provided below.</p>

        <h2>10. Policy Updates</h2>
        <p>This privacy policy may be updated periodically to reflect changes in our practices or applicable laws. The latest version will always be published on this website.</p>

        <h2>11. Contact Us</h2>
        <p>If you have any questions or concerns about this privacy policy or our data practices, please contact us:</p>
        <ul>
          <li>Email: [BUSINESS_EMAIL]</li>
          <li>Phone: [PHONE_NUMBER]</li>
          <li>WhatsApp: [WHATSAPP_NUMBER]</li>
        </ul>

        <div className="bg-zinc-100 p-6 rounded-md mt-12 border-l-4 border-zinc-400 text-base text-zinc-700">
          <strong>Note:</strong> This website does not guarantee that every privacy right or requirement applicable to every visitor is covered by this general policy. Where required, additional legal notices or disclosures may apply.
        </div>
      </section>
    </div>
  );
}
