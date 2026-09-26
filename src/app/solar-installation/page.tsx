import Link from 'next/link';

export const metadata = {
  title: 'Professional Solar Installation — Solar Panel Rawalpindi & Islamabad',
  description: 'Learn about the professional solar installation process. Site assessment, planning, equipment, installation, testing and handover.',
};

const steps = [
  { num: '01', title: 'Site & Requirement Assessment', desc: 'Our team evaluates your roof structure, orientation, shading conditions, electrical load and grid connection to determine the best installation approach for your property.', img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80' },
  { num: '02', title: 'System Planning', desc: 'Based on the assessment, we design the panel layout, inverter placement, cable routing and protection setup specific to your property.', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80' },
  { num: '03', title: 'Equipment & Material Preparation', desc: 'All required components — solar panels, inverter, mounting structure, cables, breakers and accessories — are arranged and verified before installation begins.', img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80' },
  { num: '04', title: 'Solar Installation', desc: 'Our installation team mounts the panels on the approved structure, runs cable routes, installs the inverter, and connects all system components according to the design plan.', img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=800&q=80' },
  { num: '05', title: 'System Configuration', desc: 'The inverter, monitoring system and protection devices are configured. For hybrid systems, battery management is set up. For on-grid systems, net metering configuration is initiated.', img: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80' },
  { num: '06', title: 'Testing & Handover', desc: 'Full system testing is conducted to verify solar generation, battery operation (where applicable), protection functionality and monitoring. The system is then handed over with a walkthrough for the customer.', img: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&w=800&q=80' },
];

export default function SolarInstallationPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      <section className="relative bg-[#0B0F0E] pt-24 overflow-hidden min-h-[500px] flex items-end">
        <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1920&q=80" alt="Solar installation" className="absolute inset-0 w-full h-full object-cover opacity-35 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E] to-transparent"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-4 pb-20 w-full">
          <span className="inline-block bg-[#183C32] text-[#B8D83D] text-xs font-bold px-4 py-1.5 rounded-full tracking-widest uppercase mb-6">Installation Process</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Professional Solar Installation</h1>
          <p className="text-xl text-gray-300 max-w-2xl mb-8">A transparent, professional six-step installation process from site assessment through to system handover.</p>
          <div className="bg-amber-50/10 border border-amber-300/20 rounded-xl px-6 py-3 inline-block">
            <p className="text-amber-200 text-sm font-semibold">Installation included according to the selected package. Confirm specific conditions during the quotation stage.</p>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-20">
        <div className="space-y-16 mb-20">
          {steps.map((step, i) => (
            <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
              <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="text-8xl font-extrabold text-gray-100 leading-none mb-4">{step.num}</div>
                <h2 className="text-2xl font-extrabold text-[#0B0F0E] mb-4">{step.title}</h2>
                <p className="text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
              <div className={`rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <img src={step.img} alt={step.title} className="w-full h-64 object-cover" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-12 flex items-start gap-4">
          <svg className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          <div>
            <p className="text-amber-800 font-bold text-sm mb-1">Installation Note</p>
            <p className="text-amber-700 text-sm">Installation is included as part of the selected solar package. If any specific installation requirement exists for your property, it will be discussed and confirmed during the quotation stage. No separate installation charge is applied without prior disclosure.</p>
          </div>
        </div>

        <div className="bg-[#0B0F0E] rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Move Forward?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Browse our packages or tell us your requirements and we will start the process.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/solar-packages" className="bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors">
              View Solar Packages
            </Link>
            <Link href="/get-quote" className="border border-white text-white font-bold px-10 py-4 rounded-xl hover:bg-white hover:text-[#0B0F0E] transition-colors">
              Build My Solar Plan
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
