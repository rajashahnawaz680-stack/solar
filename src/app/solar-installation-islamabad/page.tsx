/* eslint-disable */
import Link from 'next/link';

export const metadata = {
  title: 'Solar Installation Islamabad | Residential & Commercial SUNORA ENERGY',
  description: 'Premium solar installation services in Islamabad. Custom on-grid and hybrid solutions for DHA, Bahria Town, and all major sectors.'
};

export default function IslamabadPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-[#0B0F0E]">
        <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1920&q=80" alt="Solar Installation Islamabad" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
           <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Solar Installation <span className="text-[#B8D83D]">Islamabad</span></h1>
           <p className="text-xl md:text-2xl text-slate-300 mb-10">Engineered solar solutions optimized for the capital's residential sectors and commercial hubs.</p>
           <Link href="/get-quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl text-lg">
             Request Islamabad Quote
           </Link>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
             <h2 className="text-3xl font-bold text-[#0B0F0E] mb-4 border-b border-slate-100 pb-4">Capitalizing on Islamabad's Solar Potential</h2>
             <p className="text-slate-600 text-lg leading-relaxed">
               Islamabad enjoys excellent year-round sun exposure, making it highly lucrative for both residential and commercial solar deployments. Whether you are in DHA, Bahria Town, or the central G and F sectors, SUNORA ENERGY provides robust on-grid and hybrid architectures to slash your monthly utility bills.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                   <h3 className="text-xl font-bold text-[#0B0F0E] mb-3">Residential Solar</h3>
                   <p className="text-slate-600 mb-4">Perfect for villas and homes across Islamabad. Popular choices include 5kW and 10kW Hybrid systems to combat load shedding.</p>
                   <Link href="/5kw-solar-system" className="text-[#9dbf2c] font-bold hover:text-amber-600">View 5kW Option &rarr;</Link>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
                   <h3 className="text-xl font-bold text-[#0B0F0E] mb-3">Commercial Solar</h3>
                   <p className="text-slate-600 mb-4">Designed for Blue Area offices and industrial zones. Large-scale On-Grid systems for maximum daytime ROI.</p>
                   <Link href="/15kw-solar-system" className="text-[#9dbf2c] font-bold hover:text-amber-600">View Commercial Options &rarr;</Link>
                </div>
             </div>

             <div className="mt-16">
               <h3 className="text-2xl font-bold text-[#0B0F0E] mb-6">Local Service Areas</h3>
               <div className="flex flex-wrap gap-3">
                 {['DHA Islamabad', 'Bahria Town', 'F-Sectors', 'G-Sectors', 'E-Sectors', 'I-Sectors', 'Bani Gala', 'Chak Shahzad'].map(area => (
                    <span key={area} className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm font-medium">{area}</span>
                 ))}
               </div>
             </div>
          </div>
          <div className="lg:col-span-1">
             <div className="bg-[#0B0F0E] rounded-3xl p-8 sticky top-32 shadow-2xl border border-[#183C32] text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Local Assessment</h3>
                <p className="text-slate-300 mb-8">Schedule a professional site assessment for your Islamabad property.</p>
                <Link href="/get-quote" className="block w-full bg-[#B8D83D] text-[#0B0F0E] font-bold py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors mb-4">
                  Get Free Estimate
                </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
