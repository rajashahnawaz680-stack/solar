import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';

export const metadata: Metadata = {
  title: "Contact Us | Solar Company Islamabad & Rawalpindi",
  description: "Get in touch for solar installation inquiries, quotes, or questions in Islamabad and Rawalpindi.",
  alternates: { canonical: '/contact' }
};

export default function ContactPage() {
  return (
    <div className="w-full bg-white pb-24">
      {/* Hero Section */}
      <section className="w-full bg-zinc-950 py-20 px-4 text-center border-b-4 border-emerald-600">
        <div className="max-w-4xl mx-auto">
          <Breadcrumbs items={[{ label: 'Contact Us', href: '/contact' }]} />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">Contact Us</h1>
          <p className="text-xl text-zinc-300 max-w-2xl mx-auto">
            We are here to help with your solar installation requirements.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Methods */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-zinc-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Phone</h3>
              <p className="text-zinc-600 mb-6">Call us directly to discuss your requirements.</p>
              <a href="tel:03125634911" className="bg-zinc-900 text-white font-bold w-full py-3 rounded-md hover:bg-zinc-800 transition">
                0312 5634911
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-zinc-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#dcf8c6] text-[#25D366] rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">WhatsApp</h3>
              <p className="text-zinc-600 mb-6">Send us a message for quick responses.</p>
              <a href="https://wa.me/03125634911" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold w-full py-3 rounded-md hover:bg-[#20b858] transition">
                Chat on WhatsApp
              </a>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-zinc-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-2">Email</h3>
              <p className="text-zinc-600 mb-6">Send us an email with your query.</p>
              <a href="mailto:rajashahawaz680@gmail.com" className="bg-zinc-100 text-zinc-900 font-bold w-full py-3 rounded-md hover:bg-zinc-200 transition">
                Email Us
              </a>
            </div>
          </div>

          {/* Right Column: Have a Question Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg border border-zinc-100">
              <h2 className="text-3xl font-bold text-zinc-900 mb-4">Have a Question?</h2>
              <p className="text-lg text-zinc-600 mb-8">
                Have a question about solar installation, system size, pricing, batteries, installments, or your existing solar system? Send us your question and our team can get back to you.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-zinc-900 mb-2">Name *</label>
                    <input type="text" id="name" name="name" required placeholder="Enter your name" className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-zinc-900 mb-2">Phone *</label>
                    <input type="tel" id="phone" name="phone" required placeholder="0312XXXXXXX" className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-zinc-900 mb-2">Email *</label>
                    <input type="email" id="email" name="email" required placeholder="your@email.com" className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                  <div>
                    <label htmlFor="location" className="block text-sm font-bold text-zinc-900 mb-2">Location *</label>
                    <input type="text" id="location" name="location" required placeholder="Enter your city, area or location" className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 outline-none" />
                  </div>
                </div>

                <div>
                  <label htmlFor="question" className="block text-sm font-bold text-zinc-900 mb-2">Your Question *</label>
                  <textarea id="question" name="question" required rows={5} placeholder="Type your question here..." className="w-full px-4 py-3 rounded-md border border-zinc-300 focus:ring-2 focus:ring-emerald-500 outline-none resize-y"></textarea>
                </div>

                <div>
                  <button type="button" className="bg-emerald-600 text-white font-bold px-8 py-4 rounded-md hover:bg-emerald-700 transition w-full sm:w-auto">
                    Send Your Question
                  </button>
                </div>
              </form>
              
              <div className="mt-8 pt-8 border-t border-zinc-100 flex flex-col sm:flex-row items-center gap-4">
                <a href="https://wa.me/03125634911" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-md hover:bg-[#20b858] transition w-full sm:w-auto text-center">
                  Chat on WhatsApp
                </a>
                <a href="tel:03125634911" className="bg-zinc-900 text-white font-bold px-6 py-3 rounded-md hover:bg-zinc-800 transition w-full sm:w-auto text-center">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
