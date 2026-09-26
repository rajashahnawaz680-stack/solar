import Link from 'next/link';
import { PACKAGES } from '@/lib/packages';

export const metadata = {
  title: 'Cash Solar Packages — Solar Panel Rawalpindi & Islamabad',
  description: 'Browse solar packages available for direct cash purchase. On-Grid, Hybrid and Off-Grid packages with pricing.',
};

export default function CashPackagesPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      <section className="bg-[#0B0F0E] pt-32 pb-20 px-4 text-center">
        <span className="inline-block bg-[#183C32] text-[#B8D83D] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">Cash Purchase</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Cash Solar Packages</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Explore available solar packages for direct purchase. Every package price is based on the standard configuration. A final quotation is prepared for your specific site.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-12 flex items-start gap-4">
          <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <p className="text-amber-800 text-sm leading-relaxed">Package pricing may vary based on system configuration, site requirements and applicable installation conditions. <strong>Confirm the final quotation before purchase.</strong></p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {PACKAGES.map(pkg => {
            const wa = `https://wa.me/923125634911?text=Hi%2C%20I%20want%20to%20purchase%20the%20${encodeURIComponent(pkg.size + ' ' + pkg.type)}%20Solar%20Package%20(${encodeURIComponent(pkg.priceLabel)})%20through%20cash.`;
            const typeColor = pkg.type === 'On-Grid' ? 'bg-blue-100 text-blue-700' : pkg.type === 'Hybrid' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700';
            return (
              <div key={pkg.id} className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className={`text-xs font-bold px-2 py-1 rounded-lg ${typeColor}`}>{pkg.type}</span>
                    <h3 className="text-3xl font-extrabold text-[#0B0F0E] mt-2">{pkg.size}</h3>
                    <p className="text-gray-500 text-sm">Solar System</p>
                  </div>
                  <div className="text-right">
                    <div className="text-xl font-extrabold text-[#0B0F0E]">{pkg.priceLabel}</div>
                    <div className="text-xs text-gray-400">Cash Price</div>
                  </div>
                </div>
                <div className="space-y-2 mb-6 text-sm text-gray-600 border-t border-gray-50 pt-4">
                  <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span><span>{pkg.panels}</span></div>
                  <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span><span>{pkg.inverter}</span></div>
                  {pkg.battery && <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span><span>{pkg.battery}</span></div>}
                  <div className="flex items-start gap-2"><span className="w-1.5 h-1.5 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span><span>{pkg.installation}</span></div>
                </div>
                <div className="flex flex-col gap-2">
                  <Link href={`/solar-packages/${pkg.id}`} className="w-full bg-[#B8D83D] text-[#0B0F0E] text-center font-bold py-3 rounded-xl hover:bg-[#9dbf2c] transition-colors">
                    Choose This Package
                  </Link>
                  <a href={wa} target="_blank" rel="noopener noreferrer" className="w-full border border-[#25D366] text-[#25D366] text-center font-semibold py-2.5 rounded-xl hover:bg-[#25D366] hover:text-white transition-colors text-sm">
                    WhatsApp Enquiry
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#0B0F0E] rounded-3xl p-8">
            <h3 className="text-xl font-extrabold text-white mb-3">Cash Purchase</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">Purchase your selected package through direct payment. A final quotation is prepared for your specific property after site assessment. No hidden charges — all included components are listed per package.</p>
            <Link href="/get-quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-8 py-3 rounded-xl hover:bg-[#9dbf2c] transition-colors">
              Request My Cash Quote
            </Link>
          </div>
          <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-md">
            <h3 className="text-xl font-extrabold text-[#0B0F0E] mb-3">Prefer Installments?</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">We also offer installment and payment plan options. Contact us to discuss eligibility and available terms for your selected package.</p>
            <a href="https://wa.me/923125634911?text=Hi%2C%20I%20want%20to%20ask%20about%20installment%20options." target="_blank" rel="noopener noreferrer" className="inline-block bg-[#25D366] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#20b858] transition-colors">
              Ask About Installments
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
