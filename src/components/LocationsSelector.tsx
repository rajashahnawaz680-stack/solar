'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LocationsSelector() {
  const [activeTab, setActiveTab] = useState<'isb' | 'rwp'>('isb');

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Solar Installation Across Islamabad & Rawalpindi</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">Explore solar solutions and local service information for your area.</p>
          
          <div className="inline-flex bg-slate-800 p-2 rounded-2xl shadow-xl border border-slate-700">
             <button 
               onClick={() => setActiveTab('isb')}
               className={`px-10 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-wider ${activeTab === 'isb' ? 'bg-amber-400 text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
             >
               Islamabad
             </button>
             <button 
               onClick={() => setActiveTab('rwp')}
               className={`px-10 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-wider ${activeTab === 'rwp' ? 'bg-amber-400 text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
             >
               Rawalpindi
             </button>
          </div>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            <div className="p-12 flex flex-col justify-center">
              <h3 className="text-4xl font-bold text-white mb-6">
                {activeTab === 'isb' ? 'Islamabad Solar Solutions' : 'Rawalpindi Solar Solutions'}
              </h3>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                {activeTab === 'isb' 
                  ? 'Professional solar engineering and installation services designed specifically for residential and commercial properties across the capital territory.'
                  : 'Reliable, high-efficiency solar systems engineered for the unique structural and energy demands of properties across Rawalpindi.'}
              </p>
              
              <ul className="space-y-4 mb-10 text-slate-300 font-medium">
                <li className="flex items-center"><svg className="w-5 h-5 text-amber-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Residential Solar</li>
                <li className="flex items-center"><svg className="w-5 h-5 text-amber-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Commercial Solar</li>
                <li className="flex items-center"><svg className="w-5 h-5 text-amber-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> On-Grid Solar</li>
                <li className="flex items-center"><svg className="w-5 h-5 text-amber-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg> Hybrid Solar</li>
              </ul>
              
              <div className="flex flex-col sm:flex-row gap-4">
                 <Link href={activeTab === 'isb' ? '/solar-installation-islamabad' : '/solar-installation-rawalpindi'} className="bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-amber-500 transition-colors shadow-lg text-center">
                   Explore {activeTab === 'isb' ? 'Islamabad' : 'Rawalpindi'} &rarr;
                 </Link>
                 <Link href="/get-quote" className="bg-slate-700 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-600 border border-slate-600 transition-colors text-center">
                   Request Local Quote
                 </Link>
              </div>
            </div>

            <div className="relative h-96 lg:h-auto">
               <img 
                 src={activeTab === 'isb' ? 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=1200&q=80' : 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80'} 
                 alt={activeTab === 'isb' ? 'Islamabad Solar Installation' : 'Rawalpindi Solar Installation'}
                 className="absolute inset-0 w-full h-full object-cover"
               />
               <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-transparent"></div>
            </div>

          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
           <span>Islamabad</span>
           <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
           <span>Rawalpindi</span>
           <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
           <span>Residential</span>
           <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
           <span>Commercial</span>
           <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
           <span>On-Grid</span>
           <span className="w-1 h-1 bg-slate-700 rounded-full"></span>
           <span>Hybrid</span>
        </div>

      </div>
    </section>
  );
}
