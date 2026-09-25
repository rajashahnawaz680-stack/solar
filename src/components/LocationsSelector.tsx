/* eslint-disable */
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function LocationsSelector() {
  const [activeTab, setActiveTab] = useState<'isb' | 'rwp'>('isb');

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Abstract Map Element */}
      <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
         <div className="w-[800px] h-[800px] border-[1px] border-amber-400/30 rounded-full absolute mix-blend-overlay"></div>
         <div className="w-[600px] h-[600px] border-[1px] border-amber-400/20 rounded-full absolute mix-blend-overlay"></div>
         <div className="w-[400px] h-[400px] border-[1px] border-amber-400/10 rounded-full absolute mix-blend-overlay"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Solar Installation Across Islamabad & Rawalpindi</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12">Explore solar solutions and local service information for your area.</p>
          
          {/* Tabs */}
          <div className="inline-flex bg-slate-800 p-2 rounded-2xl shadow-xl border border-slate-700">
             <button 
               onClick={() => setActiveTab('isb')}
               className={`px-8 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-wider ${activeTab === 'isb' ? 'bg-amber-400 text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
             >
               Islamabad
             </button>
             <button 
               onClick={() => setActiveTab('rwp')}
               className={`px-8 py-4 rounded-xl font-bold transition-all text-sm uppercase tracking-wider ${activeTab === 'rwp' ? 'bg-amber-400 text-slate-900 shadow-lg' : 'text-slate-400 hover:text-white hover:bg-slate-700'}`}
             >
               Rawalpindi
             </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="bg-slate-800 border border-slate-700 rounded-3xl overflow-hidden shadow-2xl">
          {activeTab === 'isb' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 animate-fade-in">
               <div className="p-10 lg:p-16 flex flex-col justify-center">
                 <h3 className="text-3xl font-extrabold text-white mb-6">Islamabad Solar Solutions</h3>
                 <p className="text-slate-300 mb-8 leading-relaxed">
                   Optimized for the capital's sprawling residential sectors and Blue Area commercial hubs. We deploy robust systems capable of utilizing available roof space effectively to combat grid instability.
                 </p>
                 <ul className="space-y-4 mb-10">
                   <li className="flex items-center text-slate-200"><svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Residential Solar (DHA, Bahria, Sectors)</li>
                   <li className="flex items-center text-slate-200"><svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Commercial Solar Architecture</li>
                   <li className="flex items-center text-slate-200"><svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>High-Yield On-Grid Systems</li>
                   <li className="flex items-center text-slate-200"><svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Heavy-Duty Hybrid Setups</li>
                 </ul>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <Link href="/solar-installation-islamabad" className="bg-slate-700 text-white border border-slate-600 font-bold px-8 py-4 rounded-xl hover:bg-slate-600 transition-colors text-center">
                     Explore Islamabad &rarr;
                   </Link>
                   <Link href="/get-quote" className="bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-amber-500 transition-colors text-center shadow-lg">
                     Request Local Quote
                   </Link>
                 </div>
               </div>
               <div className="relative h-64 lg:h-auto">
                 <img src="https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=1000&q=80" alt="Islamabad Solar" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-transparent"></div>
               </div>
            </div>
          )}

          {activeTab === 'rwp' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 animate-fade-in">
               <div className="p-10 lg:p-16 flex flex-col justify-center">
                 <h3 className="text-3xl font-extrabold text-white mb-6">Rawalpindi Solar Solutions</h3>
                 <p className="text-slate-300 mb-8 leading-relaxed">
                   Engineered for Rawalpindi's dense commercial corridors and residential zones. We specialize in space-efficient hybrid architectures that provide maximum uninterrupted power.
                 </p>
                 <ul className="space-y-4 mb-10">
                   <li className="flex items-center text-slate-200"><svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Dense Residential Installations</li>
                   <li className="flex items-center text-slate-200"><svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Commercial Rooftop Arrays</li>
                   <li className="flex items-center text-slate-200"><svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>Battery-Backed Hybrid Systems</li>
                   <li className="flex items-center text-slate-200"><svg className="w-5 h-5 text-amber-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>On-Grid Solutions for Shops</li>
                 </ul>
                 <div className="flex flex-col sm:flex-row gap-4">
                   <Link href="/solar-installation-rawalpindi" className="bg-slate-700 text-white border border-slate-600 font-bold px-8 py-4 rounded-xl hover:bg-slate-600 transition-colors text-center">
                     Explore Rawalpindi &rarr;
                   </Link>
                   <Link href="/get-quote" className="bg-amber-400 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-amber-500 transition-colors text-center shadow-lg">
                     Request Local Quote
                   </Link>
                 </div>
               </div>
               <div className="relative h-64 lg:h-auto">
                 <img src="https://images.unsplash.com/photo-1508514177221-188b1c77eca2?auto=format&fit=crop&w=1000&q=80" alt="Rawalpindi Solar" className="absolute inset-0 w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-r from-slate-800 to-transparent"></div>
               </div>
            </div>
          )}
        </div>

        {/* Small Strip */}
        <div className="mt-8 text-center text-slate-400 text-sm flex items-center justify-center">
           <svg className="w-4 h-4 mr-2 text-amber-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>
           Serving residential and commercial customers across the twin cities, subject to service availability.
        </div>
      </div>
    </section>
  );
}
