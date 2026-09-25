/* eslint-disable */
import Link from 'next/link';

export const metadata = {
  title: 'Solar Installation Rawalpindi | Commercial & Residential Solar KCKY',
  description: 'Expert solar installations across Rawalpindi. Premium on-grid, hybrid, and battery storage solutions for homes and businesses.'
};

export default function RawalpindiPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative w-full h-[60vh] flex items-center justify-center overflow-hidden bg-slate-900">
        <img src="https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=1920&q=80" alt="Solar Installation Rawalpindi" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
           <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">Solar Installation <span className="text-amber-400">Rawalpindi</span></h1>
           <p className="text-xl md:text-2xl text-slate-300 mb-10">High-yield solar deployments engineered for Rawalpindi's dense commercial and residential properties.</p>
           <Link href="/get-quote" className="inline-block bg-amber-400 text-slate-900 font-bold px-10 py-4 rounded-xl hover:bg-amber-500 transition-colors shadow-xl text-lg">
             Request Rawalpindi Quote
           </Link>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
             <h2 className="text-3xl font-bold text-slate-900 mb-4 border-b border-slate-100 pb-4">Reliable Power for Rawalpindi</h2>
             <p className="text-slate-600 text-lg leading-relaxed">
               Rawalpindi's dense urban layout and commercial activity demand highly efficient space-utilization for solar deployments. Solar KCKY specializes in custom racking and optimized hybrid setups to ensure businesses and homes in Rawalpindi maintain power continuity and drastically reduce energy expenses.
             </p>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-amber-400 transition-colors">
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Hybrid Focus</h3>
                   <p className="text-slate-600 mb-4">Given local grid conditions, our 10kW and 15kW Hybrid Systems with battery backups are highly recommended for uninterrupted power.</p>
                   <Link href="/hybrid-solar-system" className="text-amber-500 font-bold hover:text-amber-600">Explore Hybrid Systems &rarr;</Link>
                </div>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:border-amber-400 transition-colors">
                   <h3 className="text-xl font-bold text-slate-900 mb-3">Commercial Installations</h3>
                   <p className="text-slate-600 mb-4">Protect your business margins against rising tariffs with heavy-duty commercial solar deployments tailored for factory or shop roofs.</p>
                   <Link href="/get-quote" className="text-amber-500 font-bold hover:text-amber-600">Get Commercial Quote &rarr;</Link>
                </div>
             </div>

             <div className="mt-16">
               <h3 className="text-2xl font-bold text-slate-900 mb-6">Local Service Areas</h3>
               <div className="flex flex-wrap gap-3">
                 {['Saddar', 'Bahria Town Rawalpindi', 'Satellite Town', 'Peshawar Road', 'Chaklala', 'Westridge', 'Gulzar-e-Quaid'].map(area => (
                    <span key={area} className="bg-white border border-slate-200 text-slate-600 px-4 py-2 rounded-full text-sm font-medium">{area}</span>
                 ))}
               </div>
             </div>
          </div>
          <div className="lg:col-span-1">
             <div className="bg-slate-900 rounded-3xl p-8 sticky top-32 shadow-2xl border border-slate-800 text-center">
                <h3 className="text-2xl font-bold text-white mb-4">Local Assessment</h3>
                <p className="text-slate-300 mb-8">Schedule a professional site assessment for your Rawalpindi property.</p>
                <Link href="/get-quote" className="block w-full bg-amber-400 text-slate-900 font-bold py-4 rounded-xl hover:bg-amber-500 transition-colors mb-4">
                  Get Free Estimate
                </Link>
             </div>
          </div>
        </div>
      </section>
    </main>
  );
}
