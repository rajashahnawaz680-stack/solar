'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Calculator() {
  const [bill, setBill] = useState(25000);
  
  const estimatedSize = Math.max(3, Math.round(bill / 5000));
  const estimatedGeneration = estimatedSize * 120;
  
  return (
    <div className="min-h-screen bg-soft py-20">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-mainText mb-4">Calculate Your Solar Requirement</h1>
          <p className="text-subText">Get an estimate of the system size you need based on your monthly bill.</p>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-borderC p-8 mb-8">
          <div className="mb-8">
            <label className="block text-sm font-bold text-mainText mb-4">Monthly Electricity Bill: Rs. {bill.toLocaleString()}</label>
            <input type="range" min="10000" max="200000" step="5000" value={bill} onChange={e => setBill(Number(e.target.value))} className="w-full accent-gold" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 bg-primary text-white p-8 rounded-xl text-center">
            <div>
              <div className="text-sm text-gray-400 mb-1">Estimated System Size</div>
              <div className="text-3xl font-extrabold text-gold">{estimatedSize} kW</div>
            </div>
            <div>
              <div className="text-sm text-gray-400 mb-1">Estimated Monthly Generation</div>
              <div className="text-3xl font-extrabold text-gold">{estimatedGeneration} Units</div>
            </div>
          </div>
          <p className="text-xs text-center text-subText mt-4">Estimated only — final system sizing and quotation require a proper assessment.</p>
        </div>
        
        <div className="text-center">
          <Link href="/get-a-quote" className="inline-block bg-gold text-primary font-bold px-10 py-4 rounded-xl hover:bg-yellow-500 transition-colors">
            Get My Detailed Quote →
          </Link>
        </div>
      </div>
    </div>
  );
}
