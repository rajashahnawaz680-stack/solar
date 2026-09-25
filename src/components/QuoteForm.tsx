'use client';
import { useState } from 'react';

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    systemSize: '',
    otherSize: '',
    paymentPreference: '',
    location: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const FORM_SUBMISSION_ENDPOINT = "";
    
    if (!FORM_SUBMISSION_ENDPOINT) {
      setStatus('error');
      return;
    }
    
    setStatus('success');
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50 border-l-4 border-emerald-500 p-8 rounded-md text-center">
        <h3 className="text-2xl font-bold text-emerald-900 mb-4">Request Received</h3>
        <p className="text-emerald-800">Your quotation request has been submitted successfully. Our team will contact you shortly.</p>
      </div>
    );
  }

  if (status === 'error') {
    return (
      <div className="bg-zinc-50 border border-zinc-200 p-8 rounded-md text-center">
        <h3 className="text-xl font-bold text-zinc-900 mb-4">Submission Unavailable</h3>
        <p className="text-zinc-600 mb-6">We couldn&apos;t submit your request right now. Please contact us directly.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="https://wa.me/03125634911?text=Hello,%20I%20need%20a%20quote" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-6 py-3 rounded-md font-bold hover:bg-[#20b858] transition">
            Chat on WhatsApp
          </a>
          <a href="tel:03125634911" className="bg-zinc-900 text-white px-6 py-3 rounded-md font-bold hover:bg-zinc-800 transition">
            Call 0312 5634911
          </a>
          <a href="mailto:rajashahawaz680@gmail.com" className="bg-zinc-200 text-zinc-900 px-6 py-3 rounded-md font-bold hover:bg-zinc-300 transition">
            Email Us
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-xl border border-zinc-200 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* 1. Name */}
        <div className="md:col-span-1">
          <label htmlFor="name" className="block text-sm font-bold text-zinc-900 mb-2">Full Name *</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
        </div>

        {/* 2. Phone */}
        <div className="md:col-span-1">
          <label htmlFor="phone" className="block text-sm font-bold text-zinc-900 mb-2">Phone Number *</label>
          <input type="tel" id="phone" name="phone" required placeholder="0312XXXXXXX" pattern="^03\d{9}$" title="Please enter a valid Pakistani phone number starting with 03" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
        </div>

        {/* 3. Email */}
        <div className="md:col-span-1">
          <label htmlFor="email" className="block text-sm font-bold text-zinc-900 mb-2">Email Address *</label>
          <input type="email" id="email" name="email" required placeholder="your@email.com" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
        </div>

        {/* 6. Location */}
        <div className="md:col-span-1">
          <label htmlFor="location" className="block text-sm font-bold text-zinc-900 mb-2">Your Location *</label>
          <input type="text" id="location" name="location" required placeholder="Enter your city, area or location (e.g. Islamabad, G-11)" value={formData.location} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" />
        </div>

        {/* 4. Solar System Size */}
        <div className="md:col-span-1">
          <label htmlFor="systemSize" className="block text-sm font-bold text-zinc-900 mb-2">How Many kW Do You Need? *</label>
          <select id="systemSize" name="systemSize" required value={formData.systemSize} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
            <option value="" disabled>Select an option</option>
            <option value="Not Sure">Not Sure</option>
            <option value="3kW">3kW</option>
            <option value="5kW">5kW</option>
            <option value="7kW">7kW</option>
            <option value="10kW">10kW</option>
            <option value="15kW">15kW</option>
            <option value="20kW+">20kW+</option>
            <option value="Other">Other</option>
          </select>
          {formData.systemSize === 'Other' && (
            <input type="text" name="otherSize" placeholder="Enter system size" value={formData.otherSize} onChange={handleChange} className="mt-3 w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none" required />
          )}
        </div>

        {/* 5. Payment Preference */}
        <div className="md:col-span-1">
          <label htmlFor="paymentPreference" className="block text-sm font-bold text-zinc-900 mb-2">Payment Preference *</label>
          <select id="paymentPreference" name="paymentPreference" required value={formData.paymentPreference} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none bg-white">
            <option value="" disabled>Select an option</option>
            <option value="Cash / Upfront">Cash / Upfront</option>
            <option value="Installments">Installments</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>

        {/* 7. Solar Issue / Message */}
        <div className="md:col-span-2">
          <label htmlFor="message" className="block text-sm font-bold text-zinc-900 mb-2">Tell Us About Your Solar Requirement</label>
          <textarea id="message" name="message" rows={4} placeholder="Tell us about your electricity bill, solar requirement, current solar issue, backup requirement, or any question you have." value={formData.message} onChange={handleChange} className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none resize-none"></textarea>
          <p className="mt-2 text-xs text-zinc-500">
            Examples: High electricity bill, Need backup, Want a new solar system, Existing solar system issue, Need help choosing system size, Interested in installments
          </p>
        </div>
      </div>

      <div className="mt-8 flex justify-center">
        <button type="submit" disabled={status === 'submitting'} className="bg-emerald-600 text-white font-bold px-10 py-4 rounded-md hover:bg-emerald-700 transition disabled:opacity-70 disabled:cursor-not-allowed">
          {status === 'submitting' ? 'Submitting...' : 'Request My Quote'}
        </button>
      </div>
    </form>
  );
}
