import Link from 'next/link';
import { PACKAGES } from '@/lib/packages';

export default function HomePage() {
  const featured = PACKAGES.filter(p => ['5kw-on-grid', '5kw-hybrid', '10kw-on-grid', '3-5kw-hybrid'].includes(p.id));

  return (
    <main>
      {/* ── 01 HERO ── */}
      <section className="relative min-h-screen bg-[#0B0F0E] flex items-center justify-center overflow-hidden">
        <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1920&q=80" alt="Premium rooftop solar" className="absolute inset-0 w-full h-full object-cover opacity-45 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F0E]/30 via-transparent to-[#0B0F0E]"></div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <span className="inline-block bg-[#183C32] text-[#B8D83D] text-xs font-bold px-5 py-2 rounded-full tracking-widest uppercase mb-8">Rawalpindi & Islamabad</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            Solar Solutions<br /><span className="text-[#B8D83D]">Built for Pakistan</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
            On-Grid, Hybrid and Off-Grid solar packages for residential and commercial properties. Cash and installment options available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solar-packages" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-2xl text-lg">
              Explore Solar Packages
            </Link>
            <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="border border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-[#0B0F0E] transition-colors text-lg">
              WhatsApp Us
            </a>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div><div className="text-3xl font-extrabold text-[#B8D83D]">8</div><div className="text-gray-400 text-xs mt-1">Packages Available</div></div>
            <div><div className="text-3xl font-extrabold text-[#B8D83D]">2</div><div className="text-gray-400 text-xs mt-1">Cities Served</div></div>
            <div><div className="text-3xl font-extrabold text-[#B8D83D]">3</div><div className="text-gray-400 text-xs mt-1">System Types</div></div>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
        </div>
      </section>

      {/* ── 02 PACKAGES PREVIEW ── */}
      <section id="packages" className="py-24 bg-[#F5F6F1]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block bg-[#183C32] text-[#B8D83D] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-4">Verified Pricing</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0F0E] mb-4">Explore Solar Packages</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Choose from available On-Grid, Hybrid and Off-Grid solar packages designed for Rawalpindi and Islamabad properties.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {featured.map(pkg => {
              const typeColor = pkg.type === 'On-Grid' ? 'bg-blue-100 text-blue-700' : pkg.type === 'Hybrid' ? 'bg-amber-100 text-amber-700' : 'bg-green-100 text-green-700';
              const wa = `https://wa.me/923125634911?text=Hi%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(pkg.size + ' ' + pkg.type)}%20Solar%20Package.`;
              return (
                <div key={pkg.id} className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="relative h-40 overflow-hidden">
                    <img src={pkg.img} alt={`${pkg.size} ${pkg.type} Solar`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/70 to-transparent"></div>
                    <span className={`absolute top-3 left-3 text-xs font-bold px-2 py-0.5 rounded-full ${typeColor}`}>{pkg.type}</span>
                    <div className="absolute bottom-3 left-3">
                      <div className="text-white font-extrabold text-2xl">{pkg.size}</div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-xl font-extrabold text-[#0B0F0E] mb-1">{pkg.priceLabel}</div>
                    <p className="text-gray-500 text-xs mb-4">{pkg.panels}</p>
                    <div className="flex gap-2">
                      <Link href={`/solar-packages/${pkg.id}`} className="flex-1 bg-[#B8D83D] text-[#0B0F0E] text-center font-bold py-2.5 rounded-xl hover:bg-[#9dbf2c] transition-colors text-sm">
                        View Package
                      </Link>
                      <a href={wa} target="_blank" rel="noopener noreferrer" className="w-10 border border-[#25D366] text-[#25D366] rounded-xl flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="text-center">
            <Link href="/solar-packages" className="inline-flex items-center gap-2 text-[#0B0F0E] font-bold text-lg border-2 border-[#0B0F0E] px-10 py-4 rounded-xl hover:bg-[#0B0F0E] hover:text-white transition-colors">
              View All Solar Packages →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 03 SOLUTIONS ── */}
      <section id="solutions" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0F0E] mb-4">Solar Solutions</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">On-Grid, Hybrid and Off-Grid solar systems for homes and businesses across Rawalpindi and Islamabad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'On-Grid Solar', desc: 'Grid-connected rooftop solar. Reduce electricity bills and benefit from net metering.', href: '/solar-solutions/on-grid', img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=600&q=80' },
              { title: 'Hybrid Solar', desc: 'Solar + battery backup. Generate your own energy and stay protected during load shedding.', href: '/solar-solutions/hybrid', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=600&q=80' },
              { title: 'Off-Grid Solar', desc: 'Energy-independent captive solar systems. For specialized requirements and remote properties.', href: '/solar-solutions/on-grid', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80' },
            ].map(s => (
              <Link key={s.title} href={s.href} className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 h-80">
                <img src={s.img} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] via-[#0B0F0E]/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-extrabold text-white mb-2">{s.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{s.desc}</p>
                  <span className="text-[#B8D83D] text-sm font-bold">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 04 CASH PACKAGES ── */}
      <section id="payment" className="py-24 bg-[#0B0F0E]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block bg-[#183C32] text-[#B8D83D] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">Payment Options</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Cash & Installment Options</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Purchase your solar system directly through cash or ask about available installment and payment plan options. Both routes are available for all standard packages.
              </p>
              <div className="space-y-4 mb-10">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-lg mb-2">Cash Purchase</h3>
                  <p className="text-gray-400 text-sm">Select a package, confirm your site, receive a final quotation and purchase directly. All included components are listed per package with no hidden charges.</p>
                  <Link href="/cash-solar-packages" className="inline-block mt-4 text-[#B8D83D] font-bold text-sm hover:underline">Browse Cash Packages →</Link>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                  <h3 className="text-white font-bold text-lg mb-2">Installment / Payment Plan</h3>
                  <p className="text-gray-400 text-sm">Ask about available payment plan options for any of our standard packages. Terms are confirmed during the quotation stage.</p>
                  <a href="https://wa.me/923125634911?text=Hi%2C%20I%20want%20to%20ask%20about%20solar%20installment%20options." target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[#25D366] font-bold text-sm hover:underline">Ask About Installments →</a>
                </div>
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=800&q=80" alt="Solar payment" className="w-full h-96 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── 05 RESIDENTIAL / COMMERCIAL ── */}
      <section className="py-24 bg-[#F5F6F1]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0F0E] mb-4">Residential & Commercial</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">Solar solutions designed for both homes and commercial properties across Rawalpindi and Islamabad.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link href="/solar-solutions/residential" className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-96">
              <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80" alt="Residential solar" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#B8D83D] text-xs font-bold uppercase tracking-widest">Residential</span>
                <h3 className="text-2xl font-extrabold text-white mt-2 mb-3">Home Solar Systems</h3>
                <p className="text-gray-300 text-sm">Custom rooftop solar for villas, homes and apartments.</p>
              </div>
            </Link>
            <Link href="/solar-solutions/commercial" className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-96">
              <img src="https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=800&q=80" alt="Commercial solar" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-[#B8D83D] text-xs font-bold uppercase tracking-widest">Commercial</span>
                <h3 className="text-2xl font-extrabold text-white mt-2 mb-3">Commercial Solar Systems</h3>
                <p className="text-gray-300 text-sm">High-capacity solar for offices, shops, factories and commercial buildings.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ── 06 HOW IT WORKS ── */}
      <section id="why-solar" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#0B0F0E] mb-4">How the Process Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { num: '01', title: 'Share Requirements' },
              { num: '02', title: 'Bill Review' },
              { num: '03', title: 'Discuss Options' },
              { num: '04', title: 'Receive Proposal' },
              { num: '05', title: 'Installation' },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 bg-[#B8D83D] rounded-2xl flex items-center justify-center mx-auto mb-4 text-[#0B0F0E] font-extrabold text-lg">{step.num}</div>
                <h3 className="font-bold text-[#0B0F0E] text-sm">{step.title}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/how-it-works" className="inline-block text-[#0B0F0E] font-bold border-2 border-[#0B0F0E] px-8 py-3 rounded-xl hover:bg-[#0B0F0E] hover:text-white transition-colors">
              Full Process Overview →
            </Link>
          </div>
        </div>
      </section>

      {/* ── 07 INSTALLATION ── */}
      <section className="py-24 bg-[#F5F6F1]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=800&q=80" alt="Solar installation" className="w-full h-96 object-cover" />
            </div>
            <div>
              <span className="inline-block bg-[#183C32] text-[#B8D83D] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">Installation</span>
              <h2 className="text-4xl font-extrabold text-[#0B0F0E] mb-6">Professional Solar Installation</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">Our installation process covers site assessment, system planning, equipment preparation, installation, configuration, testing and handover. Installation is included as part of every standard package.</p>
              <Link href="/solar-installation" className="inline-block bg-[#0B0F0E] text-white font-bold px-8 py-4 rounded-xl hover:bg-gray-800 transition-colors shadow-xl">
                Learn About Installation →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 08 FAQ ── */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#0B0F0E] mb-4">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-3">
            {[
              ['What package sizes are available?', 'We offer On-Grid packages in 5kW, 10kW and 15kW. Hybrid packages in 3.5kW, 5kW and 10kW. Off-Grid packages in 3kW and 5kW.'],
              ['Are the prices shown final?', 'Package prices shown are reference prices based on standard configurations. The final quotation is confirmed after reviewing your property and site conditions.'],
              ['Is installation included?', 'Yes. Installation is included as part of every standard solar package. Specific installation conditions are confirmed during the quotation stage.'],
              ['Can I pay in installments?', 'Yes. Installment options are available. Contact us to discuss available payment plan terms.'],
              ['Do you serve Rawalpindi and Islamabad?', 'Yes. Rawalpindi and Islamabad are our primary service areas.'],
            ].map(([q, a], i) => (
              <details key={i} className="group bg-[#F5F6F1] rounded-2xl cursor-pointer overflow-hidden border border-gray-100">
                <summary className="flex items-center justify-between p-5 font-bold text-[#0B0F0E] list-none select-none text-sm">
                  {q}
                  <svg className="w-5 h-5 text-[#B8D83D] shrink-0 ml-4 group-open:rotate-180 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
                </summary>
                <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed">{a}</div>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/faq" className="text-[#B8D83D] font-bold hover:underline">View all FAQ →</Link>
          </div>
        </div>
      </section>

      {/* ── 09 FINAL CTA ── */}
      <section className="relative py-32 bg-[#0B0F0E] overflow-hidden">
        <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1920&q=80" alt="Solar rooftop" className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0F0E] to-transparent"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
            Let&apos;s Find the Right Solar Package for Your Property.
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Browse packages, calculate your requirement or contact us directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solar-packages" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">
              Browse All Packages
            </Link>
            <Link href="/get-quote" className="border border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-[#0B0F0E] transition-colors">
              Build My Solar Plan
            </Link>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="py-20 bg-[#F5F6F1]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#0B0F0E] mb-4">Contact Solar Panel</h2>
          <p className="text-gray-500 mb-10">Rawalpindi & Islamabad — Call, WhatsApp or Email</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a href="tel:03125634911" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
              <div className="font-bold text-[#0B0F0E] mb-1">Phone</div>
              <div className="text-[#B8D83D] font-bold">03125634911</div>
            </a>
            <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
              <div className="font-bold text-[#0B0F0E] mb-1">WhatsApp</div>
              <div className="text-[#25D366] font-bold">03125634911</div>
            </a>
            <a href="mailto:rajashahnawaz680@gmail.com" className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-all">
              <div className="font-bold text-[#0B0F0E] mb-1">Email</div>
              <div className="text-[#B8D83D] font-bold text-sm">rajashahnawaz680@gmail.com</div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
