'use client';
import { useState } from 'react';

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      alert("Thank you! Your quotation request has been submitted successfully.");
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg border border-zinc-100 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Full Name *</label>
          <input required type="text" className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="John Doe" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Phone Number *</label>
          <input required type="tel" className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="0300 1234567" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">WhatsApp Number *</label>
          <input required type="tel" className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="0300 1234567" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">City *</label>
          <select required className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
            <option value="">Select City</option>
            <option value="Islamabad">Islamabad</option>
            <option value="Rawalpindi">Rawalpindi</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Area / Sector *</label>
          <input required type="text" className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="e.g., F-8, Bahria Town" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Property Type *</label>
          <select required className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
            <option value="">Select Type</option>
            <option value="Home">Home / Residential</option>
            <option value="Commercial">Commercial / Business</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Average Monthly Electricity Bill (PKR) *</label>
          <input required type="text" className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="e.g., 25000" />
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Required System Size *</label>
          <select required className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
            <option value="">Select Size</option>
            <option value="5kW">5kW</option>
            <option value="10kW">10kW</option>
            <option value="15kW">15kW</option>
            <option value="Other">Other</option>
            <option value="Not Sure">Not Sure (Need Recommendation)</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Payment Preference *</label>
          <select required className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
            <option value="">Select Option</option>
            <option value="Cash">Cash (Upfront)</option>
            <option value="Installments">Installments</option>
            <option value="Not Sure">Not Sure Yet</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Electricity Bill Upload (Optional)</label>
          <input type="file" className="w-full px-4 py-2.5 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:bg-emerald-50 file:text-emerald-700 hover:file:bg-emerald-100" />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-zinc-700 mb-2">Additional Message (Optional)</label>
          <textarea rows={4} className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Any specific requirements or questions?"></textarea>
        </div>
      </div>
      <div className="mt-8">
        <button disabled={isSubmitting} type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 rounded-md hover:bg-emerald-700 transition disabled:opacity-70 disabled:cursor-not-allowed">
          {isSubmitting ? "Submitting..." : "Get Your Free Solar Quote"}
        </button>
      </div>
    </form>
  );
}
