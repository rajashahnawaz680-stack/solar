'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function QuotePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '',
    city: '', area: '', propType: 'Residential',
    bill: '', units: '',
    system: 'Not Sure', payment: 'Cash / Upfront',
    reqs: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const nextStep = () => {
    setError('');
    if (step === 1) {
      if (!formData.name || !formData.phone || !formData.email) return setError("Please fill all fields.");
    }
    if (step === 2) {
      if (!formData.city || !formData.area) return setError("Please enter your location.");
    }
    if (step === 3) {
      if (!formData.bill) return setError("Please enter your monthly bill.");
    }
    setStep(s => Math.min(6, s + 1));
  };

  const prevStep = () => setStep(s => Math.max(1, s - 1));

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-slate-50 pt-28 pb-24 flex items-center justify-center">
        <div className="max-w-md w-full mx-auto p-8 bg-white rounded-3xl shadow-2xl text-center border border-slate-100">
           <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
           </div>
           <h2 className="text-3xl font-extrabold text-[#0B0F0E] mb-4">Request Received!</h2>
           <p className="text-slate-600 mb-8">Thank you {formData.name}. Our team is reviewing your requirements and will contact you shortly to discuss your custom solar solution.</p>
           <Link href="/" className="block w-full bg-[#0B0F0E] text-white font-bold py-4 rounded-xl hover:bg-[#183C32] transition-colors mb-4">
             Return Home
           </Link>
           <a href="https://wa.me/923125634911" className="block w-full bg-[#25D366] text-white font-bold py-4 rounded-xl hover:bg-[#20b858] transition-colors flex justify-center items-center">
             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
             Chat With SUNORA ENERGY
           </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-slate-50 pt-28 pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#0B0F0E] mb-4 tracking-tight">Get Your Free Solar Quote</h1>
          <p className="text-lg text-slate-600">Provide your details below for a professional assessment.</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10 flex justify-between relative">
           <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-200 -z-10 -translate-y-1/2"></div>
           <div className="absolute top-1/2 left-0 h-1 bg-[#B8D83D] -z-10 -translate-y-1/2 transition-all duration-300" style={{ width: `${((step - 1) / 5) * 100}%` }}></div>
           {[1,2,3,4,5,6].map(s => (
             <div key={s} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${s <= step ? 'bg-[#B8D83D] text-[#0B0F0E]' : 'bg-slate-200 text-slate-400'}`}>
               {s}
             </div>
           ))}
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
           {error && <div className="mb-6 p-4 bg-red-50 text-red-600 rounded-lg text-sm font-bold border border-red-100">{error}</div>}
           
           <form onSubmit={submit}>
             {/* Step 1 */}
             {step === 1 && (
               <div className="space-y-6 animate-fade-in">
                 <h3 className="text-2xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-100 pb-4">1. Personal Information</h3>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                   <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="Enter your name" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition-all" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Phone Number</label>
                   <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="0312XXXXXXX" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition-all" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                   <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="your@email.com" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition-all" />
                 </div>
               </div>
             )}

             {/* Step 2 */}
             {step === 2 && (
               <div className="space-y-6 animate-fade-in">
                 <h3 className="text-2xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-100 pb-4">2. Location & Property</h3>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">City</label>
                   <input type="text" value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} placeholder="e.g. Islamabad" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition-all" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Area / Sector</label>
                   <input type="text" value={formData.area} onChange={e => setFormData({...formData, area: e.target.value})} placeholder="e.g. DHA Phase 2" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition-all" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Property Type</label>
                   <select value={formData.propType} onChange={e => setFormData({...formData, propType: e.target.value})} className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition-all">
                     <option>Residential (Home)</option>
                     <option>Commercial (Business)</option>
                   </select>
                 </div>
               </div>
             )}

             {/* Step 3 */}
             {step === 3 && (
               <div className="space-y-6 animate-fade-in">
                 <h3 className="text-2xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-100 pb-4">3. Energy Consumption</h3>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Average Monthly Electricity Bill (PKR)</label>
                   <input type="number" value={formData.bill} onChange={e => setFormData({...formData, bill: e.target.value})} placeholder="e.g. 25000" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition-all" />
                 </div>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Average Monthly Units (Optional)</label>
                   <input type="number" value={formData.units} onChange={e => setFormData({...formData, units: e.target.value})} placeholder="e.g. 450" className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition-all" />
                 </div>
               </div>
             )}

             {/* Step 4 */}
             {step === 4 && (
               <div className="space-y-6 animate-fade-in">
                 <h3 className="text-2xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-100 pb-4">4. System Requirements</h3>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-4">Preferred System Size</label>
                   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {['Not Sure', '3kW', '5kW', '10kW', '15kW', 'Custom'].map(opt => (
                         <div key={opt} onClick={() => setFormData({...formData, system: opt})} className={`p-4 rounded-xl text-center cursor-pointer border-2 transition-all ${formData.system === opt ? 'border-[#B8D83D] bg-amber-50 text-amber-700 font-bold shadow-md' : 'border-slate-200 hover:border-amber-200 text-slate-600'}`}>
                           {opt}
                         </div>
                      ))}
                   </div>
                 </div>
               </div>
             )}

             {/* Step 5 */}
             {step === 5 && (
               <div className="space-y-6 animate-fade-in">
                 <h3 className="text-2xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-100 pb-4">5. Payment Preference</h3>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-4">How do you prefer to pay?</label>
                   <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {['Cash / Upfront', 'Installments', 'Not Sure'].map(opt => (
                         <div key={opt} onClick={() => setFormData({...formData, payment: opt})} className={`p-4 rounded-xl text-center cursor-pointer border-2 transition-all ${formData.payment === opt ? 'border-[#B8D83D] bg-amber-50 text-amber-700 font-bold shadow-md' : 'border-slate-200 hover:border-amber-200 text-slate-600'}`}>
                           {opt}
                         </div>
                      ))}
                   </div>
                 </div>
               </div>
             )}

             {/* Step 6 */}
             {step === 6 && (
               <div className="space-y-6 animate-fade-in">
                 <h3 className="text-2xl font-bold text-[#0B0F0E] mb-6 border-b border-slate-100 pb-4">6. Additional Information</h3>
                 <div>
                   <label className="block text-sm font-bold text-slate-700 mb-2">Any specific requirements? (Optional)</label>
                   <textarea rows={4} value={formData.reqs} onChange={e => setFormData({...formData, reqs: e.target.value})} placeholder="e.g. I need hybrid inverters..." className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-amber-400 outline-none transition-all"></textarea>
                 </div>
                 
                 <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex items-start mt-6">
                    <svg className="w-6 h-6 text-slate-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    <p className="text-xs text-slate-500">Your information is strictly confidential. By clicking Request My Solar Quote, you allow SUNORA ENERGY to contact you regarding your solar requirements.</p>
                 </div>
               </div>
             )}

             {/* Form Controls */}
             <div className="flex justify-between mt-10 pt-6 border-t border-slate-100">
               {step > 1 ? (
                 <button type="button" onClick={prevStep} className="px-6 py-3 rounded-xl font-bold text-slate-500 hover:bg-slate-100 transition-colors">
                   Back
                 </button>
               ) : <div></div>}
               
               {step < 6 ? (
                 <button type="button" onClick={nextStep} className="bg-[#0B0F0E] text-white font-bold px-8 py-3 rounded-xl hover:bg-[#183C32] transition-colors shadow-md">
                   Next Step
                 </button>
               ) : (
                 <button type="submit" className="bg-[#B8D83D] text-[#0B0F0E] font-extrabold px-8 py-3 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-lg">
                   Request My Solar Quote
                 </button>
               )}
             </div>
           </form>
        </div>

      </div>
    </main>
  );
}
