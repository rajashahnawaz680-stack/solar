import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-600 rounded flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-bold text-xl text-white tracking-tight">[Business Name]</span>
            </div>
            <p className="text-zinc-400 max-w-sm leading-relaxed">
              Premium solar installation company serving residential and commercial clients across Islamabad and Rawalpindi. We provide reliable energy solutions with flexible installment plans.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <a href="tel:[PHONE_NUMBER]" className="flex items-center gap-3 text-white hover:text-emerald-500 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                [PHONE_NUMBER]
              </a>
              <a href="mailto:[BUSINESS_EMAIL]" className="flex items-center gap-3 text-white hover:text-emerald-500 transition">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                [BUSINESS_EMAIL]
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Quick Links</h4>
            <Link href="/" className="hover:text-emerald-500 transition">Home</Link>
            <Link href="/about" className="hover:text-emerald-500 transition">About Us</Link>
            <Link href="/solar-on-installments" className="hover:text-emerald-500 transition">Installment Plans</Link>
            <Link href="/contact" className="hover:text-emerald-500 transition">Contact</Link>
            <Link href="/get-quote" className="hover:text-emerald-500 transition">Get a Free Quote</Link>
          </div>

          {/* Service Areas */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Service Areas</h4>
            <Link href="/solar-installation-islamabad" className="hover:text-emerald-500 transition">Islamabad</Link>
            <Link href="/solar-installation-rawalpindi" className="hover:text-emerald-500 transition">Rawalpindi</Link>
            <Link href="/solar-system-price-islamabad" className="hover:text-emerald-500 transition">Prices in Islamabad</Link>
            <Link href="/solar-system-price-rawalpindi" className="hover:text-emerald-500 transition">Prices in Rawalpindi</Link>
          </div>

          {/* Solar Systems */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold mb-2">Solar Systems</h4>
            <Link href="/5kw-solar-system" className="hover:text-emerald-500 transition">5kW System</Link>
            <Link href="/10kw-solar-system" className="hover:text-emerald-500 transition">10kW System</Link>
            <Link href="/15kw-solar-system" className="hover:text-emerald-500 transition">15kW System</Link>
            <Link href="/hybrid-solar-system" className="hover:text-emerald-500 transition">Hybrid Systems</Link>
            <Link href="/on-grid-solar-system" className="hover:text-emerald-500 transition">On-Grid Systems</Link>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-500">
          <p>&copy; {new Date().getFullYear()} [Business Name]. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition">Terms & Conditions</Link>
            <Link href="/refund-cancellation" className="hover:text-white transition">Refund / Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
