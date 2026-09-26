import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0B0F0E] text-slate-300 pt-20 pb-10 border-t border-[#183C32]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Column 1: Company */}
          <div className="lg:col-span-1">
            <Link href="/" className="text-2xl font-extrabold text-white tracking-tight flex items-center mb-6">
               <svg className="w-8 h-8 text-[#9dbf2c] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
               Solar Panel
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Premium solar engineering and installation services for residential and commercial properties across Islamabad and Rawalpindi.
            </p>
          </div>

          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Solar Solutions</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/solar-installation-islamabad" className="hover:text-[#B8D83D] transition-colors">Residential Solar</Link></li>
              <li><Link href="/solar-installation-rawalpindi" className="hover:text-[#B8D83D] transition-colors">Commercial Solar</Link></li>
              <li><Link href="/on-grid-solar-system" className="hover:text-[#B8D83D] transition-colors">On-Grid Systems</Link></li>
              <li><Link href="/hybrid-solar-system" className="hover:text-[#B8D83D] transition-colors">Hybrid Systems</Link></li>
              <li><Link href="/solar-on-installments" className="hover:text-[#B8D83D] transition-colors">Battery Storage</Link></li>
            </ul>
          </div>

          {/* Column 3: Systems */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Solar Systems</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/5kw-solar-system" className="hover:text-[#B8D83D] transition-colors">5kW System</Link></li>
              <li><Link href="/10kw-solar-system" className="hover:text-[#B8D83D] transition-colors">10kW System</Link></li>
              <li><Link href="/15kw-solar-system" className="hover:text-[#B8D83D] transition-colors">15kW System</Link></li>
              <li><Link href="/get-quote" className="hover:text-[#B8D83D] transition-colors">Custom Size</Link></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/about" className="hover:text-[#B8D83D] transition-colors">About & Process</Link></li>
              <li><Link href="/projects" className="hover:text-[#B8D83D] transition-colors">Featured Projects</Link></li>
              <li><Link href="/solar-installation-islamabad" className="hover:text-[#B8D83D] transition-colors">Locations</Link></li>
              <li><Link href="/faq" className="hover:text-[#B8D83D] transition-colors">FAQ</Link></li>
              <li><Link href="/blog" className="hover:text-[#B8D83D] transition-colors">Knowledge Center</Link></li>
              <li><Link href="/contact" className="hover:text-[#B8D83D] transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wider uppercase text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#9dbf2c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <a href="tel:03125634911" className="hover:text-[#B8D83D] transition-colors">03125634911</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#9dbf2c] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <a href="mailto:rajashahawaz680@gmail.com" className="hover:text-[#B8D83D] transition-colors break-all">rajashahawaz680@gmail.com</a>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-[#25D366] flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="hover:text-[#B8D83D] transition-colors">WhatsApp Us</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#183C32] flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Solar Panel. All rights reserved.</p>
          <div className="flex gap-6">
             <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
             <Link href="/terms-and-conditions" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
