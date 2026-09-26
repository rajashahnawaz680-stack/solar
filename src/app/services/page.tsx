import Link from 'next/link';

export const metadata = {
  title: 'Solar Services — Solar Panel Rawalpindi & Islamabad',
  description: 'Solar services including on-grid, hybrid, off-grid, battery, installation, consultation, net billing and maintenance in Rawalpindi and Islamabad.',
};

const services = [
  { title: 'On-Grid Solar', desc: 'Grid-connected rooftop solar systems with net metering capability for homes and businesses.', href: '/solar-solutions/on-grid', img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=600&q=80' },
  { title: 'Hybrid Solar', desc: 'Solar + battery backup systems designed for properties experiencing frequent load shedding.', href: '/solar-solutions/hybrid', img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=600&q=80' },
  { title: 'Off-Grid Solar', desc: 'Energy-independent captive solar systems for specialized requirements.', href: '/services/battery-storage', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=600&q=80' },
  { title: 'Battery Storage', desc: 'Solar battery backup solutions for reliable power continuity during outages.', href: '/services/battery-storage', img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=600&q=80' },
  { title: 'Solar Installation', desc: 'Professional six-step solar installation process from site assessment to handover.', href: '/solar-installation', img: 'https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=600&q=80' },
  { title: 'Solar Consultation', desc: 'Discuss your electricity requirements and get a customized solar recommendation.', href: '/get-quote', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80' },
  { title: 'Net Metering Assistance', desc: 'Guidance and documentation support for net metering registration with the utility.', href: '/get-quote', img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=600&q=80' },
  { title: 'After-Sales Support', desc: 'Ongoing support and maintenance assistance for installed solar systems.', href: '/services/solar-repair-maintenance', img: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=600&q=80' },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      <div className="bg-[#0B0F0E] pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Our Solar Services</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">From consultation and design to installation and after-sales support — complete solar services for Rawalpindi and Islamabad.</p>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {services.map(s => (
            <Link key={s.title} href={s.href} className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 overflow-hidden group">
              <div className="h-40 overflow-hidden">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-[#0B0F0E] mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-3">{s.desc}</p>
                <span className="text-[#B8D83D] text-xs font-bold">Learn more →</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="bg-[#0B0F0E] rounded-3xl p-10 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-4">Not Sure Where to Start?</h2>
          <p className="text-gray-400 mb-8">Tell us about your property and requirements — we will guide you.</p>
          <Link href="/get-quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors">
            Start My Solar Journey
          </Link>
        </div>
      </div>
    </main>
  );
}
