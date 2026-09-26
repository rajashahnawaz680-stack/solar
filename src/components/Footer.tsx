import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F0E] text-slate-400 pt-20 pb-16 border-t border-[#183C32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-8 h-8 bg-[#B8D83D] rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-[#0B0F0E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <span className="text-white font-extrabold text-xl">Solar Panel</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">Professional solar consultation and installation for homes and businesses in Rawalpindi and Islamabad.</p>
            <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-bold text-[#25D366] hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Solutions</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/solar-solutions/residential" className="hover:text-[#B8D83D] transition-colors">Residential Solar</Link></li>
              <li><Link href="/solar-solutions/commercial" className="hover:text-[#B8D83D] transition-colors">Commercial Solar</Link></li>
              <li><Link href="/solar-solutions/hybrid" className="hover:text-[#B8D83D] transition-colors">Hybrid Solar</Link></li>
              <li><Link href="/services/battery-storage" className="hover:text-[#B8D83D] transition-colors">Battery Storage</Link></li>
              <li><Link href="/get-quote" className="hover:text-[#B8D83D] transition-colors">Solar Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Explore</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/how-it-works" className="hover:text-[#B8D83D] transition-colors">How It Works</Link></li>
              <li><Link href="/#why-solar" className="hover:text-[#B8D83D] transition-colors">Why Solar</Link></li>
              <li><Link href="/#payment" className="hover:text-[#B8D83D] transition-colors">Payment Options</Link></li>
              <li><Link href="/faq" className="hover:text-[#B8D83D] transition-colors">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-[#B8D83D] transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="tel:03125634911" className="flex items-center gap-3 hover:text-[#B8D83D] transition-colors">
                <svg className="w-5 h-5 text-[#B8D83D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                03125634911
              </a></li>
              <li><a href="mailto:rajashahnawaz680@gmail.com" className="flex items-start gap-3 hover:text-[#B8D83D] transition-colors">
                <svg className="w-5 h-5 text-[#B8D83D] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                rajashahnawaz680@gmail.com
              </a></li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-[#B8D83D] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                Rawalpindi & Islamabad
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-[#183C32] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>&copy; {new Date().getFullYear()} Solar Panel. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
