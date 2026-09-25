'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setIsError(false);

    // FORM_SUBMISSION_ENDPOINT Placeholder
    const FORM_SUBMISSION_ENDPOINT = ""; // e.g., "/api/submit-quote"
    
    try {
      if (FORM_SUBMISSION_ENDPOINT) {
        const formData = new FormData(e.target as HTMLFormElement);
        const res = await fetch(FORM_SUBMISSION_ENDPOINT, {
          method: 'POST',
          body: formData,
        });
        if (!res.ok) throw new Error("Submission failed");
      } else {
        // Simulate network request if no endpoint
        await new Promise(resolve => setTimeout(resolve, 1500));
      }
      setIsSuccess(true);
    } catch {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-10 rounded-xl shadow-lg border border-emerald-100 flex flex-col items-center text-center max-w-3xl mx-auto">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-3xl font-bold text-zinc-900 mb-4">Thank you. Your quote request has been received.</h3>
        <p className="text-zinc-600 text-lg mb-8 max-w-lg">Our team will review your property details and electricity usage, and contact you shortly with a customized solar quotation.</p>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="/" className="bg-zinc-900 text-white font-bold px-8 py-4 rounded-md hover:bg-zinc-800 transition">
            Return Home
          </Link>
          <a href="https://wa.me/03125634911" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
            Chat on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 rounded-xl shadow-lg border border-zinc-100 max-w-4xl mx-auto w-full">
      {isError && (
        <div className="bg-red-50 text-red-700 p-6 rounded-md mb-8 flex flex-col items-center text-center">
          <p className="font-semibold mb-4">We couldn&apos;t submit your request right now. Please try again or contact us on WhatsApp.</p>
          <div className="flex gap-4">
            <button type="button" onClick={() => setIsError(false)} className="bg-red-600 text-white font-bold px-6 py-2 rounded-md hover:bg-red-700 transition">
              Try Again
            </button>
            <a href="https://wa.me/03125634911" className="bg-zinc-900 text-white font-bold px-6 py-2 rounded-md hover:bg-zinc-800 transition">
              Chat on WhatsApp
            </a>
          </div>
        </div>
      )}

      {/* SECTION 1 */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-100 pb-3">1. Your Contact Details</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Full Name *</label>
            <input required name="fullName" type="text" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Enter your full name" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Phone Number *</label>
            <input required name="phone" type="tel" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="0300 1234567" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">WhatsApp Number (Optional)</label>
            <input name="whatsapp" type="tel" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="0300 1234567" />
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Email Address (Optional)</label>
            <input name="email" type="email" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="you@example.com" />
          </div>
        </div>
      </div>

      {/* SECTION 2 */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-100 pb-3">2. Your Location</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">City *</label>
            <select required name="city" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
              <option value="">Select City</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Rawalpindi">Rawalpindi</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Area / Sector *</label>
            <input required name="area" type="text" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="e.g., F-8, Bahria Town" />
          </div>
        </div>
      </div>

      {/* SECTION 3 */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-100 pb-3">3. Property Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Property Type *</label>
            <select required name="propertyType" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
              <option value="">Select Type</option>
              <option value="Home">Home</option>
              <option value="Commercial">Commercial</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">Monthly Electricity Bill (PKR) *</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <span className="text-zinc-500">PKR</span>
              </div>
              <input required name="billAmount" type="number" className="w-full pl-14 pr-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="e.g., 25000" />
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 4 */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-100 pb-3">4. Solar Requirement</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">System Size (Optional)</label>
            <select name="systemSize" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
              <option value="Not Sure">Not Sure</option>
              <option value="5kW">5kW</option>
              <option value="10kW">10kW</option>
              <option value="15kW">15kW</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-zinc-700 mb-2">System Type (Optional)</label>
            <select name="systemType" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
              <option value="Not Sure">Not Sure</option>
              <option value="On-Grid">On-Grid</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
        </div>
      </div>

      {/* SECTION 5 */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-100 pb-3">5. Payment Preference</h3>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">How would you prefer to pay? *</label>
          <select required name="paymentPreference" className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition bg-white">
            <option value="">Select Option</option>
            <option value="Cash / Upfront">Cash / Upfront</option>
            <option value="Installments">Installments</option>
            <option value="Not Sure">Not Sure</option>
          </select>
        </div>
      </div>

      {/* SECTION 6 */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-100 pb-3">6. Upload Electricity Bill</h3>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Upload your recent bill for a more accurate quote (Optional)</label>
          <div className="flex items-center justify-center w-full">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-zinc-300 border-dashed rounded-lg cursor-pointer bg-zinc-50 hover:bg-zinc-100 transition">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <svg className="w-8 h-8 mb-3 text-zinc-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/></svg>
                <p className="mb-2 text-sm text-zinc-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                <p className="text-xs text-zinc-500">PDF, JPG, JPEG, PNG (Max 5MB)</p>
              </div>
              <input type="file" name="billDocument" className="hidden" accept=".pdf,.jpg,.jpeg,.png" />
            </label>
          </div>
        </div>
      </div>

      {/* SECTION 7 */}
      <div className="mb-10">
        <h3 className="text-xl font-bold text-zinc-900 mb-6 border-b border-zinc-100 pb-3">7. Additional Information</h3>
        <div>
          <label className="block text-sm font-medium text-zinc-700 mb-2">Message (Optional)</label>
          <textarea name="message" rows={4} className="w-full px-4 py-3 text-base rounded-md border border-zinc-300 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition" placeholder="Any specific requirements, questions, or details about your roof?"></textarea>
        </div>
      </div>

      <div className="mb-8">
        <button disabled={isSubmitting} type="submit" className="w-full bg-emerald-600 text-white font-bold py-4 text-lg rounded-md hover:bg-emerald-700 transition disabled:opacity-70 disabled:cursor-not-allowed shadow-md">
          {isSubmitting ? "Submitting Request..." : "Start My Quote"}
        </button>
      </div>

      <div className="text-center text-sm text-zinc-500">
        By submitting this form, you agree that we may use the information provided to respond to your solar quotation request. <Link href="/privacy-policy" className="underline hover:text-zinc-800">Privacy Policy</Link>.
      </div>
    </form>
  );
}
