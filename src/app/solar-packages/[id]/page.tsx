import { notFound } from 'next/navigation';
import Link from 'next/link';
import { PACKAGES } from '@/lib/packages';

export function generateStaticParams() {
  return PACKAGES.map(p => ({ id: p.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const pkg = PACKAGES.find(p => p.id === params.id);
  if (!pkg) return {};
  return {
    title: `${pkg.size} ${pkg.type} Solar Package — Solar Panel`,
    description: `${pkg.size} ${pkg.type} solar system package. ${pkg.panels}. ${pkg.inverter}. ${pkg.priceLabel}. Serving Rawalpindi and Islamabad.`,
  };
}

const included = [
  { key: 'panels', label: 'Solar Panels', icon: '☀️' },
  { key: 'inverter', label: 'Inverter', icon: '⚡' },
  { key: 'battery', label: 'Battery Backup', icon: '🔋' },
  { key: 'mounting', label: 'Mounting Structure', icon: '🔩' },
  { key: 'protection', label: 'Protection & Wiring', icon: '🔌' },
  { key: 'installation', label: 'Installation & Support', icon: '🛠️' },
  { key: 'netMetering', label: 'Net Metering File', icon: '📋' },
];

export default function PackageDetailPage({ params }: { params: { id: string } }) {
  const pkg = PACKAGES.find(p => p.id === params.id);
  if (!pkg) return notFound();

  const waMsg = `Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.size + ' ' + pkg.type)}%20Solar%20Package%20(${encodeURIComponent(pkg.priceLabel)}).%20Please%20share%20the%20details.`;
  const quoteUrl = `/get-quote?package=${encodeURIComponent(pkg.id)}&type=${encodeURIComponent(pkg.type)}&size=${encodeURIComponent(pkg.size)}`;
  const typeColor = pkg.type === 'On-Grid' ? 'bg-blue-100 text-blue-700' : pkg.type === 'Hybrid' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700';

  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      {/* Breadcrumb */}
      <div className="bg-[#0B0F0E] pt-24 pb-4 px-4">
        <div className="max-w-5xl mx-auto text-xs text-gray-500 flex items-center gap-2">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <span>/</span>
          <Link href="/solar-packages" className="hover:text-white transition-colors">Solar Packages</Link>
          <span>/</span>
          <span className="text-[#B8D83D]">{pkg.size} {pkg.type}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative bg-[#0B0F0E] pb-20 overflow-hidden">
        <img src={pkg.img} alt={`${pkg.size} ${pkg.type} Solar`} className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] to-transparent"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-12 pb-8">
          <span className={`inline-block text-xs font-bold px-3 py-1 rounded-full mb-4 ${typeColor}`}>{pkg.type} Solar System</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">{pkg.size} {pkg.type} Solar Package</h1>
          <div className="flex items-end gap-3 mb-6">
            <span className="text-4xl font-extrabold text-[#B8D83D]">{pkg.priceLabel}</span>
          </div>
          <p className="text-gray-400 text-lg max-w-2xl mb-10">{pkg.bestFor}</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={quoteUrl} className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">
              Get This Solar System
            </Link>
            <a href={`https://wa.me/923125634911?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="border border-[#25D366] text-[#25D366] font-bold px-10 py-4 rounded-xl hover:bg-[#25D366] hover:text-white transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">

            {/* System Components */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-extrabold text-[#0B0F0E] mb-6">System Components</h2>
              <div className="space-y-4">
                {[
                  { label: 'Solar Panels', value: pkg.panels },
                  { label: 'Inverter', value: pkg.inverter },
                  ...(pkg.battery ? [{ label: 'Battery', value: pkg.battery }] : []),
                  { label: 'Mounting Structure', value: pkg.mounting },
                  { label: 'Protection & Wiring', value: pkg.protection },
                  { label: 'Installation', value: pkg.installation },
                  ...(pkg.netMetering ? [{ label: 'Net Metering', value: pkg.netMetering }] : []),
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 py-3 border-b border-gray-50 last:border-0">
                    <span className="text-[#B8D83D] font-bold text-sm w-36 shrink-0">{item.label}</span>
                    <span className="text-gray-600 text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* What Is Included */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-extrabold text-[#0B0F0E] mb-6">What Is Included</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {included.map(item => {
                  const isIncluded = item.key === 'battery' ? !!pkg.battery : item.key === 'netMetering' ? !!pkg.netMetering : true;
                  return (
                    <div key={item.key} className={`p-4 rounded-xl border text-center ${isIncluded ? 'border-[#B8D83D] bg-[#fafff0]' : 'border-gray-100 bg-gray-50 opacity-40'}`}>
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <div className="text-xs font-bold text-[#0B0F0E]">{item.label}</div>
                      <div className={`text-xs mt-1 font-semibold ${isIncluded ? 'text-[#183C32]' : 'text-gray-400'}`}>{isIncluded ? 'Included' : 'Not Included'}</div>
                    </div>
                  );
                })}
              </div>
            </section>

            {/* Who Is This For */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-extrabold text-[#0B0F0E] mb-4">Who Is This System For?</h2>
              <p className="text-gray-600 leading-relaxed">{pkg.bestFor}. This system is suitable for customers in Rawalpindi and Islamabad who want to reduce their electricity bills and are looking for a {pkg.type.toLowerCase()} solar configuration.</p>
            </section>

            {/* Installation */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-extrabold text-[#0B0F0E] mb-4">Installation & Service</h2>
              <p className="text-gray-600 mb-4">{pkg.installation}</p>
              <p className="text-sm text-gray-500">Installation is included as part of this package. After-sales support is provided by our team. Contact us for specific service conditions.</p>
              <Link href="/solar-installation" className="inline-block mt-4 text-sm font-bold text-[#B8D83D] hover:underline">Learn about our installation process →</Link>
            </section>

            {/* FAQ */}
            <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
              <h2 className="text-xl font-extrabold text-[#0B0F0E] mb-6">Package FAQ</h2>
              {[
                ['Is installation included in the price?', pkg.installation + ' — installation is part of this package.'],
                ['Can I pay in installments?', 'Yes. Please contact us to discuss installment and payment plan options for this package.'],
                ['Is net metering available?', pkg.netMetering ? 'Yes — net metering file is included with this package.' : 'Net metering is not included in this package configuration. Ask about net metering options.'],
                ['What warranty is available?', 'Warranty details depend on the specific brands included in your finalized package. Confirm during the quotation stage.'],
                ['Can the package be customized?', 'Yes. Contact us to discuss any adjustments to the standard package configuration.'],
              ].map(([q, a], i) => (
                <details key={i} className="group border-b border-gray-50 last:border-0 cursor-pointer">
                  <summary className="flex items-center justify-between py-4 font-bold text-[#0B0F0E] list-none select-none text-sm">
                    {q}
                    <svg className="w-4 h-4 text-[#B8D83D] shrink-0 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                  </summary>
                  <div className="pb-4 text-sm text-gray-600 leading-relaxed">{a}</div>
                </details>
              ))}
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Price Card */}
            <div className="bg-white rounded-2xl border border-[#B8D83D]/30 shadow-md p-6 sticky top-24">
              <div className="text-xs text-gray-400 mb-1">Package Price</div>
              <div className="text-3xl font-extrabold text-[#0B0F0E] mb-1">{pkg.priceLabel}</div>
              <p className="text-xs text-gray-400 mb-6">May vary based on site & configuration</p>
              <div className="flex flex-col gap-3">
                <Link href={quoteUrl} className="w-full bg-[#B8D83D] text-[#0B0F0E] text-center font-bold py-3.5 rounded-xl hover:bg-[#9dbf2c] transition-colors">
                  Get This System
                </Link>
                <a href={`https://wa.me/923125634911?text=${waMsg}`} target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white text-center font-bold py-3 rounded-xl hover:bg-[#20b858] transition-colors flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
                  WhatsApp Us
                </a>
                <a href="tel:03125634911" className="w-full border border-gray-200 text-[#0B0F0E] text-center font-semibold py-3 rounded-xl hover:border-[#B8D83D] transition-colors text-sm">
                  Call 03125634911
                </a>
              </div>
              {/* Payment Options */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <h3 className="text-sm font-bold text-[#0B0F0E] mb-3">Payment Options</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span>
                    <span><strong>Cash:</strong> Direct purchase with custom quotation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span>
                    <span><strong>Installment:</strong> Ask about available payment plan options</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Packages */}
            <div className="bg-[#0B0F0E] rounded-2xl p-6">
              <h3 className="text-sm font-bold text-white mb-4">Other Packages</h3>
              <div className="space-y-2">
                {PACKAGES.filter(p => p.id !== pkg.id).slice(0, 4).map(p => (
                  <Link key={p.id} href={`/solar-packages/${p.id}`} className="flex items-center justify-between py-2 border-b border-white/10 last:border-0 hover:text-[#B8D83D] transition-colors group">
                    <div>
                      <span className="text-white text-sm font-bold group-hover:text-[#B8D83D] transition-colors">{p.size} {p.type}</span>
                    </div>
                    <span className="text-[#B8D83D] text-xs font-bold">{p.priceLabel}</span>
                  </Link>
                ))}
              </div>
              <Link href="/solar-packages" className="block mt-4 text-xs text-gray-500 hover:text-white transition-colors text-center">View all packages →</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
