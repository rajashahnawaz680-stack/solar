'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm border-b border-zinc-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-extrabold text-zinc-900 tracking-tight">
              [Business Name]
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className="text-zinc-600 hover:text-emerald-600 font-medium transition">Home</Link>
            
            {/* Simple dropdown simulation for desktop */}
            <div className="relative group">
              <button className="text-zinc-600 hover:text-emerald-600 font-medium transition inline-flex items-center">
                Locations <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-zinc-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/solar-installation-islamabad" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Islamabad</Link>
                <Link href="/solar-installation-rawalpindi" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Rawalpindi</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-zinc-600 hover:text-emerald-600 font-medium transition inline-flex items-center">
                Systems <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white border border-zinc-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/5kw-solar-system" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">5kW System</Link>
                <Link href="/10kw-solar-system" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">10kW System</Link>
                <Link href="/15kw-solar-system" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">15kW System</Link>
                <Link href="/hybrid-solar-system" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Hybrid System</Link>
                <Link href="/on-grid-solar-system" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">On-Grid System</Link>
              </div>
            </div>

            <div className="relative group">
              <button className="text-zinc-600 hover:text-emerald-600 font-medium transition inline-flex items-center">
                Pricing <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white border border-zinc-100 shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/solar-system-price-islamabad" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Prices in Islamabad</Link>
                <Link href="/solar-system-price-rawalpindi" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Prices in Rawalpindi</Link>
                <Link href="/solar-on-installments" className="block px-4 py-3 text-sm text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Installment Options</Link>
              </div>
            </div>

            <Link href="/about" className="text-zinc-600 hover:text-emerald-600 font-medium transition">About</Link>
            <Link href="/contact" className="text-zinc-600 hover:text-emerald-600 font-medium transition">Contact</Link>
          </nav>

          {/* CTAs */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="https://wa.me/[WHATSAPP_NUMBER]" className="text-zinc-600 hover:text-emerald-600 font-medium flex items-center transition">
              <svg className="w-5 h-5 mr-2 text-emerald-500" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
            <Link href="/get-quote" className="bg-emerald-600 text-white px-5 py-2.5 rounded-md font-bold hover:bg-emerald-700 transition">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-zinc-600 hover:text-emerald-600 focus:outline-none p-2">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-zinc-100 max-h-[80vh] overflow-y-auto pb-6">
          <div className="px-4 pt-4 pb-3 space-y-1">
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-900 hover:bg-zinc-50">Home</Link>
            
            <div className="px-3 py-2 text-sm font-bold text-zinc-400 uppercase tracking-wider mt-4">Locations</div>
            <Link href="/solar-installation-islamabad" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Islamabad</Link>
            <Link href="/solar-installation-rawalpindi" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Rawalpindi</Link>

            <div className="px-3 py-2 text-sm font-bold text-zinc-400 uppercase tracking-wider mt-4">Systems</div>
            <Link href="/5kw-solar-system" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">5kW System</Link>
            <Link href="/10kw-solar-system" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">10kW System</Link>
            <Link href="/15kw-solar-system" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">15kW System</Link>
            <Link href="/hybrid-solar-system" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Hybrid System</Link>
            <Link href="/on-grid-solar-system" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">On-Grid System</Link>

            <div className="px-3 py-2 text-sm font-bold text-zinc-400 uppercase tracking-wider mt-4">Pricing & Installments</div>
            <Link href="/solar-system-price-islamabad" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Prices in Islamabad</Link>
            <Link href="/solar-system-price-rawalpindi" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Prices in Rawalpindi</Link>
            <Link href="/solar-on-installments" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Solar on Installments</Link>

            <div className="px-3 py-2 text-sm font-bold text-zinc-400 uppercase tracking-wider mt-4">Company</div>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">About</Link>
            <Link href="/contact" onClick={() => setIsMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-700 hover:bg-zinc-50 hover:text-emerald-600">Contact</Link>
            
            <div className="mt-6 px-3 pb-4">
              <Link href="/get-quote" onClick={() => setIsMenuOpen(false)} className="block w-full text-center bg-emerald-600 text-white px-5 py-3 rounded-md font-bold hover:bg-emerald-700 transition">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
