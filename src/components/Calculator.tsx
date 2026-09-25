'use client';
import { useState } from 'react';

export default function Calculator() {
  const [bill, setBill] = useState('');
  const [type, setType] = useState('Residential');
  const [city, setCity] = useState('');
  const [units, setUnits] = useState('');
  const [result, setResult] = useState<null | { size: string, note: string }>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const billNum = parseInt(bill);
    let est = '5kW';
    if (billNum > 30000) est = '10kW';
    if (billNum > 60000) est = '15kW';
    if (billNum > 100000) est = 'Custom System (20kW+)';
    
    setResult({
      size: est,
      note: "Final system sizing requires a professional on-site assessment."
    });
  };

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div className="bg-slate-900 p-8 text-center relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
             </div>
             <h2 className="text-3xl font-extrabold text-white mb-2 relative z-10">Explore Your Solar Potential</h2>
             <p className="text-slate-300 relative z-10">Get a quick estimate of the solar system size suitable for your property.</p>
          </div>
          <div className="p-8 md:p-10">
            <form onSubmit={calculate} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Electricity Bill (PKR)</label>
                  <input type="number" required value={bill} onChange={e => setBill(e.target.value)} placeholder="e.g. 25000" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-shadow bg-slate-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Property Type</label>
                  <select value={type} onChange={e => setType(e.target.value)} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-shadow bg-slate-50">
                    <option>Residential</option>
                    <option>Commercial</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">City</label>
                  <input type="text" required value={city} onChange={e => setCity(e.target.value)} placeholder="e.g. Islamabad" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-shadow bg-slate-50" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 mb-2">Monthly Units (Optional)</label>
                  <input type="number" value={units} onChange={e => setUnits(e.target.value)} placeholder="e.g. 400" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition-shadow bg-slate-50" />
                </div>
              </div>
              <div className="pt-4 text-center">
                <button type="submit" className="bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg w-full md:w-auto">
                  Calculate My Solar Estimate
                </button>
              </div>
            </form>
            
            {result && (
              <div className="mt-8 p-6 bg-amber-50 border border-amber-200 rounded-xl text-center animate-fade-in">
                <h4 className="text-slate-600 text-sm font-bold uppercase tracking-wide mb-1">Estimated System Size</h4>
                <div className="text-4xl font-extrabold text-amber-600 mb-3">{result.size}</div>
                <p className="text-slate-500 text-sm">{result.note}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
