import Link from 'next/link';

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <section className="w-full bg-zinc-50 py-24 md:py-32 px-4 sm:px-6 lg:px-8 border-b border-zinc-100">
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <span className="text-emerald-600 font-semibold tracking-wide uppercase text-sm mb-4">
            Serving Islamabad & Rawalpindi
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-zinc-900 max-w-4xl leading-tight mb-6">
            Switch to Solar Power with <span className="text-emerald-600">Confidence</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mb-10 leading-relaxed">
            Professional solar installation for your home or business. Choose from upfront cash payments or flexible monthly installment plans tailored for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link href="/get-quote" className="bg-emerald-600 text-white font-semibold px-8 py-4 rounded-md hover:bg-emerald-700 transition shadow-sm text-lg w-full sm:w-auto text-center">
              Get Your Free Solar Quote
            </Link>
            <a href="https://wa.me/[WHATSAPP_NUMBER]" target="_blank" rel="noopener noreferrer" className="border-2 border-zinc-200 text-zinc-700 font-semibold px-8 py-4 rounded-md hover:border-emerald-600 hover:text-emerald-600 hover:bg-emerald-50 transition text-lg flex items-center justify-center gap-2 w-full sm:w-auto">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Trust & Services Placeholder */}
      <section className="w-full py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-zinc-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">We provide end-to-end solar solutions with transparency and professionalism.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-zinc-50 rounded-xl border border-zinc-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Expert Installation</h3>
              <p className="text-zinc-600">Professional technical survey and safe installation by highly experienced partners.</p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-xl border border-zinc-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Installment Plans</h3>
              <p className="text-zinc-600">Affordable monthly installments to help you switch to solar without the heavy upfront cost.</p>
            </div>
            <div className="p-8 bg-zinc-50 rounded-xl border border-zinc-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-zinc-900">Local Service</h3>
              <p className="text-zinc-600">Dedicated, fast, and reliable support exclusively for residents of Islamabad and Rawalpindi.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
