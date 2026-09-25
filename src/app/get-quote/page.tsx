import Link from 'next/link';
import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Get a Free Solar Quote in Islamabad & Rawalpindi | [Business Name]",
  description: "Request a free solar quotation for your home or business in Islamabad and Rawalpindi. Ask about our cash and installment payment options.",
  keywords: "Get solar quote Islamabad, solar quote Rawalpindi, solar installation quote",
  alternates: { canonical: '/get-quote' },
  openGraph: {
    title: "Get a Free Solar Quote in Islamabad & Rawalpindi",
    description: "Request a customized solar quotation with cash or installment options.",
    url: '/get-quote',
    siteName: '[Business Name]',
    type: 'website',
  },
};

export default function GetQuotePage() {
  return (
    <div className="w-full flex flex-col bg-zinc-50">
      
      {/* 1. HERO */}
      <section className="w-full bg-zinc-950 pt-24 pb-32 px-4 sm:px-6 lg:px-8 text-center border-b-8 border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Get Quote', href: '/get-quote' }]} />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
            Get Your Free <span className="text-emerald-500">Solar Quote</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed">
            Tell us about your property and electricity usage. Our team can review your requirements and help you explore a suitable solar solution for your home or business in Islamabad & Rawalpindi.
          </p>
        </div>
      </section>

      {/* 2. TWO-COLUMN LAYOUT (Form + Sidebar) */}
      <section className="w-full px-4 sm:px-6 lg:px-8 -mt-20 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row gap-10">
          
          {/* LEFT: FORM */}
          <div className="w-full lg:w-2/3">
            <QuoteForm />
          </div>
          
          {/* RIGHT: SIDEBAR */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8">
            
            {/* Contact Box */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-zinc-100 mt-0 lg:mt-6">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">Contact Us Directly</h3>
              <div className="space-y-4">
                <a href="https://wa.me/[WHATSAPP_NUMBER]" className="flex items-center gap-4 text-zinc-700 hover:text-emerald-600 transition">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">WhatsApp</div>
                    <div className="text-sm">Click to chat</div>
                  </div>
                </a>
                <a href="tel:[PHONE_NUMBER]" className="flex items-center gap-4 text-zinc-700 hover:text-emerald-600 transition">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">Call Us</div>
                    <div className="text-sm">[PHONE_NUMBER]</div>
                  </div>
                </a>
                <a href="mailto:[BUSINESS_EMAIL]" className="flex items-center gap-4 text-zinc-700 hover:text-emerald-600 transition">
                  <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  </div>
                  <div>
                    <div className="font-semibold text-zinc-900">Email</div>
                    <div className="text-sm">[BUSINESS_EMAIL]</div>
                  </div>
                </a>
              </div>
            </div>

            {/* How It Works Box */}
            <div className="bg-zinc-900 p-8 rounded-xl shadow-lg text-white">
              <h3 className="text-xl font-bold mb-6 border-b border-zinc-700 pb-4">How It Works</h3>
              <ol className="space-y-4 text-zinc-300 list-decimal pl-4">
                <li className="pl-2">Submit your details</li>
                <li className="pl-2">Share your electricity usage</li>
                <li className="pl-2">Discuss your requirements</li>
                <li className="pl-2">Receive your quotation</li>
                <li className="pl-2">Choose cash or available installment option</li>
                <li className="pl-2">Schedule installation after confirmation</li>
              </ol>
            </div>

            {/* Trust Box */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-emerald-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-4">Why Request a Quote?</h3>
              <ul className="space-y-3 text-zinc-600">
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>System sizing based on your requirements</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Cash purchase option</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Installment option</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Islamabad service</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Rawalpindi service</li>
                <li className="flex items-start gap-2"><svg className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>Professional quotation process</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 3. RELATED LINKS */}
      <section className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-zinc-950">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-zinc-400">
          <Link href="/solar-installation-islamabad" className="hover:text-white transition">Solar Installation Islamabad</Link>
          <Link href="/solar-installation-rawalpindi" className="hover:text-white transition">Solar Installation Rawalpindi</Link>
          <Link href="/solar-on-installments" className="hover:text-white transition">Solar on Installments</Link>
          <Link href="/5kw-solar-system" className="hover:text-white transition">5kW Solar System</Link>
          <Link href="/10kw-solar-system" className="hover:text-white transition">10kW Solar System</Link>
          <Link href="/15kw-solar-system" className="hover:text-white transition">15kW Solar System</Link>
          <Link href="/hybrid-solar-system" className="hover:text-white transition">Hybrid Solar System</Link>
          <Link href="/on-grid-solar-system" className="hover:text-white transition">On-Grid Solar System</Link>
          <Link href="/contact" className="hover:text-white transition">Contact</Link>
        </div>
      </section>
      
    </div>
  );
}
