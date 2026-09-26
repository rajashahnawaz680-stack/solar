'use client';
import { useState } from 'react';

export default function GetAQuote() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-soft flex items-center justify-center p-4">
        <div className="bg-white max-w-md w-full rounded-2xl shadow-lg p-10 text-center border border-borderC">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600 text-4xl">✓</div>
          <h2 className="text-3xl font-extrabold text-mainText mb-4">Request Sent</h2>
          <p className="text-subText mb-8">Thank you for requesting a quote. Our team will contact you shortly with your personalized solar recommendation.</p>
          <a href="https://wa.me/92325634911" className="block w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-secondary transition-colors">
            Follow up on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-soft py-20">
      <div className="max-w-3xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-mainText mb-4">Get Your Free Solar Quote</h1>
          <p className="text-subText text-lg">Provide your details and electricity usage so we can design the right solution for you.</p>
        </div>
        
        <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="bg-white rounded-2xl shadow-sm border border-borderC p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-sm font-bold text-mainText mb-2">Full Name</label>
              <input required type="text" className="w-full bg-soft border border-borderC rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-sm font-bold text-mainText mb-2">Phone</label>
              <input required type="tel" className="w-full bg-soft border border-borderC rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-sm font-bold text-mainText mb-2">WhatsApp</label>
              <input type="tel" className="w-full bg-soft border border-borderC rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-sm font-bold text-mainText mb-2">Location</label>
              <select required className="w-full bg-soft border border-borderC rounded-lg px-4 py-3 focus:outline-none focus:border-gold">
                <option value="Islamabad">Islamabad</option>
                <option value="Rawalpindi">Rawalpindi</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-mainText mb-2">Property Type</label>
              <select className="w-full bg-soft border border-borderC rounded-lg px-4 py-3 focus:outline-none focus:border-gold">
                <option>Residential Home</option>
                <option>Commercial Office</option>
                <option>Industrial</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-mainText mb-2">Monthly Electricity Bill (Rs.)</label>
              <input required type="number" placeholder="e.g. 25000" className="w-full bg-soft border border-borderC rounded-lg px-4 py-3 focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label className="block text-sm font-bold text-mainText mb-2">Interested Solution</label>
              <select className="w-full bg-soft border border-borderC rounded-lg px-4 py-3 focus:outline-none focus:border-gold">
                <option>Not Sure - Please Advise</option>
                <option>On-Grid Solar</option>
                <option>Hybrid Solar</option>
                <option>Off-Grid Solar</option>
                <option>Commercial Solar</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-bold text-mainText mb-2">Current Problem</label>
              <select className="w-full bg-soft border border-borderC rounded-lg px-4 py-3 focus:outline-none focus:border-gold">
                <option>High Electricity Bills</option>
                <option>Frequent Power Outages</option>
                <option>Both</option>
              </select>
            </div>
          </div>
          
          <div className="mb-8">
            <label className="block text-sm font-bold text-mainText mb-2">Additional Message</label>
            <textarea rows={4} className="w-full bg-soft border border-borderC rounded-lg px-4 py-3 focus:outline-none focus:border-gold"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-gold text-primary font-bold py-4 rounded-xl hover:bg-yellow-500 transition-colors text-lg">
            Get My Free Quote →
          </button>
        </form>
      </div>
    </div>
  );
}
