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
              Solar KCKY
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
