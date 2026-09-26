'use client';
import { useState } from 'react';
import Link from 'next/link';
import { PACKAGES } from '@/lib/packages';

type FilterType = 'All' | 'On-Grid' | 'Hybrid' | 'Off-Grid';

function PriceCard({ pkg }: { pkg: typeof PACKAGES[0] }) {
  const wa = `https://wa.me/923125634911?text=Hello%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.size + ' ' + pkg.type)}%20Solar%20Package.%20Please%20share%20details.`;
  const typeColor = pkg.type === 'On-Grid' ? 'bg-blue-50 text-blue-700' : pkg.type === 'Hybrid' ? 'bg-amber-50 text-amber-700' : 'bg-green-50 text-green-700';
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative h-48 overflow-hidden">
        <img src={pkg.img} alt={`${pkg.size} ${pkg.type} Solar System`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/60 to-transparent"></div>
        <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full ${typeColor}`}>{pkg.type}</span>
        <div className="absolute bottom-4 left-4">
          <div className="text-white font-extrabold text-3xl">{pkg.size}</div>
          <div className="text-gray-300 text-sm">Solar System</div>
        </div>
      </div>
      <div className="p-6">
        <div className="text-2xl font-extrabold text-[#0B0F0E] mb-1">{pkg.priceLabel}</div>
        <p className="text-xs text-gray-400 mb-4">Package pricing may vary. Confirm final quotation.</p>
        <div className="space-y-2 mb-6 text-sm text-gray-600">
          <div className="flex items-start gap-2"><span className="w-2 h-2 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span><span>{pkg.panels}</span></div>
          <div className="flex items-start gap-2"><span className="w-2 h-2 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span><span>{pkg.inverter}</span></div>
          {pkg.battery && <div className="flex items-start gap-2"><span className="w-2 h-2 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span><span>{pkg.battery}</span></div>}
          <div className="flex items-start gap-2"><span className="w-2 h-2 bg-[#B8D83D] rounded-full shrink-0 mt-1.5"></span><span>{pkg.mounting}</span></div>
          {pkg.netMetering && <div className="flex items-start gap-2"><span className="w-2 h-2 bg-[#25D366] rounded-full shrink-0 mt-1.5"></span><span>{pkg.netMetering}</span></div>}
        </div>
        <div className="flex flex-col gap-2">
          <Link href={`/solar-packages/${pkg.id}`} className="w-full bg-[#B8D83D] text-[#0B0F0E] text-center font-bold py-3 rounded-xl hover:bg-[#9dbf2c] transition-colors">
            View Package
          </Link>
          <a href={wa} target="_blank" rel="noopener noreferrer" className="w-full border border-[#25D366] text-[#25D366] text-center font-semibold py-2.5 rounded-xl hover:bg-[#25D366] hover:text-white transition-colors text-sm">
            WhatsApp Enquiry
          </a>
        </div>
      </div>
    </div>
  );
}

export default function SolarPackagesPage() {
  const [filter, setFilter] = useState<FilterType>('All');
  const filtered = filter === 'All' ? PACKAGES : PACKAGES.filter(p => p.type === filter);
  const filters: FilterType[] = ['All', 'On-Grid', 'Hybrid', 'Off-Grid'];

  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      {/* Hero */}
      <section className="bg-[#0B0F0E] pt-32 pb-20 px-4 text-center">
        <span className="inline-block bg-[#183C32] text-[#B8D83D] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">Verified Packages</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Solar Packages</h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Explore solar system packages designed for different electricity requirements and property types across Rawalpindi and Islamabad.
        </p>
      </section>

      {/* Filters */}
      <div className="sticky top-16 z-30 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4 flex flex-wrap items-center gap-3">
          <span className="text-sm font-bold text-gray-500 mr-2">Filter:</span>
          {filters.map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-xl text-sm font-bold transition-all ${filter === f ? 'bg-[#0B0F0E] text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}>
              {f}
            </button>
          ))}
          <span className="ml-auto text-sm text-gray-400">{filtered.length} packages</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* ON-GRID SECTION */}
        {(filter === 'All' || filter === 'On-Grid') && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B0F0E]">On-Grid Solar Packages</h2>
                <p className="text-gray-500 text-sm">Grid-connected systems with net metering capability</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PACKAGES.filter(p => p.type === 'On-Grid').map(pkg => <PriceCard key={pkg.id} pkg={pkg} />)}
            </div>
          </section>
        )}

        {/* HYBRID SECTION */}
        {(filter === 'All' || filter === 'Hybrid') && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18"/></svg>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B0F0E]">Hybrid Solar Packages</h2>
                <p className="text-gray-500 text-sm">Solar + battery backup — ideal for load shedding areas</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PACKAGES.filter(p => p.type === 'Hybrid').map(pkg => <PriceCard key={pkg.id} pkg={pkg} />)}
            </div>
          </section>
        )}

        {/* OFF-GRID SECTION */}
        {(filter === 'All' || filter === 'Off-Grid') && (
          <section className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#0B0F0E]">Off-Grid / Captive Solar Packages</h2>
                <p className="text-gray-500 text-sm">Energy-independent systems for specialized solar requirements</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {PACKAGES.filter(p => p.type === 'Off-Grid').map(pkg => <PriceCard key={pkg.id} pkg={pkg} />)}
              {/* Custom quote card */}
              <div className="bg-[#0B0F0E] rounded-2xl p-8 flex flex-col justify-between min-h-[300px]">
                <div>
                  <span className="text-[#B8D83D] text-xs font-bold uppercase tracking-widest">Customized</span>
                  <h3 className="text-3xl font-extrabold text-white mt-2 mb-3">Custom Size</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">Require a larger or specialized off-grid system? We will design and quote a customized solution for your specific requirements.</p>
                </div>
                <div className="mt-8 flex flex-col gap-3">
                  <Link href="/get-quote" className="w-full bg-[#B8D83D] text-[#0B0F0E] text-center font-bold py-3 rounded-xl hover:bg-[#9dbf2c] transition-colors">
                    Request Custom Quote
                  </Link>
                  <a href="https://wa.me/923125634911?text=Hi%2C%20I%20need%20a%20customized%20off-grid%20solar%20system." target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white text-center font-semibold py-2.5 rounded-xl hover:bg-[#20b858] transition-colors text-sm">
                    WhatsApp Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* COMPARISON TABLE */}
        <section className="mb-20">
          <h2 className="text-2xl font-extrabold text-[#0B0F0E] mb-8">Package Comparison</h2>
          <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-100">
            <table className="w-full bg-white text-sm">
              <thead>
                <tr className="bg-[#0B0F0E] text-white">
                  <th className="text-left p-4 font-bold">Size</th>
                  <th className="text-left p-4 font-bold">Type</th>
                  <th className="text-left p-4 font-bold">Price</th>
                  <th className="text-left p-4 font-bold hidden md:table-cell">Panels</th>
                  <th className="text-left p-4 font-bold hidden lg:table-cell">Battery</th>
                  <th className="text-left p-4 font-bold hidden md:table-cell">Best For</th>
                  <th className="text-left p-4 font-bold"></th>
                </tr>
              </thead>
              <tbody>
                {PACKAGES.map((pkg, i) => (
                  <tr key={pkg.id} className={`border-b border-gray-50 hover:bg-gray-50 transition-colors ${i % 2 === 0 ? '' : 'bg-gray-25'}`}>
                    <td className="p-4 font-extrabold text-[#0B0F0E]">{pkg.size}</td>
                    <td className="p-4">
                      <span className={`text-xs font-bold px-2 py-1 rounded-lg ${pkg.type === 'On-Grid' ? 'bg-blue-100 text-blue-700' : pkg.type === 'Hybrid' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700'}`}>{pkg.type}</span>
                    </td>
                    <td className="p-4 font-bold text-[#0B0F0E]">{pkg.priceLabel}</td>
                    <td className="p-4 text-gray-600 hidden md:table-cell">{pkg.panels}</td>
                    <td className="p-4 text-gray-600 hidden lg:table-cell">{pkg.battery ?? '—'}</td>
                    <td className="p-4 text-gray-500 hidden md:table-cell text-xs">{pkg.bestFor}</td>
                    <td className="p-4">
                      <Link href={`/solar-packages/${pkg.id}`} className="text-[#B8D83D] font-bold text-xs hover:underline whitespace-nowrap">View →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">Package pricing may vary based on system configuration, site requirements and applicable installation conditions. Confirm the final quotation before purchase.</p>
        </section>

        {/* FINAL CTA */}
        <div className="bg-[#0B0F0E] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Not Sure Which Package Is Right?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Tell us your electricity usage and requirements. We will help you choose the right system.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/get-quote" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">
              Build My Solar Plan
            </Link>
            <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-10 py-4 rounded-xl hover:bg-[#20b858] transition-colors">
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
