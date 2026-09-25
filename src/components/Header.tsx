'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on ESC
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full bg-white border-b border-zinc-100 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center gap-2">
              {/* Existing Logo Placeholder */}
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-bold text-xl text-zinc-900 tracking-tight">[Business Name]</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8">
            <Link href="/" className="text-zinc-600 hover:text-emerald-600 font-medium transition text-sm">Home</Link>
            
            {/* Solar Installation Dropdown */}
            <div className="relative group">
              <button className="text-zinc-600 group-hover:text-emerald-600 font-medium transition text-sm flex items-center gap-1 py-8">
                Solar Installation
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg border border-zinc-100 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/solar-installation-islamabad" className="block px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-emerald-600">Islamabad</Link>
                <Link href="/solar-installation-rawalpindi" className="block px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-emerald-600">Rawalpindi</Link>
              </div>
            </div>

            {/* Solar Systems Dropdown */}
            <div className="relative group">
              <button className="text-zinc-600 group-hover:text-emerald-600 font-medium transition text-sm flex items-center gap-1 py-8">
                Solar Systems
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg border border-zinc-100 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/5kw-solar-system" className="block px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-emerald-600">5kW System</Link>
                <Link href="/10kw-solar-system" className="block px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-emerald-600">10kW System</Link>
                <Link href="/15kw-solar-system" className="block px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-emerald-600">15kW System</Link>
                <Link href="/hybrid-solar-system" className="block px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-emerald-600">Hybrid System</Link>
                <Link href="/on-grid-solar-system" className="block px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-emerald-600">On-Grid System</Link>
              </div>
            </div>

            {/* Solar Prices Dropdown */}
            <div className="relative group">
              <button className="text-zinc-600 group-hover:text-emerald-600 font-medium transition text-sm flex items-center gap-1 py-8">
                Solar Prices
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <div className="absolute top-full left-0 w-64 bg-white shadow-lg border border-zinc-100 rounded-b-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link href="/solar-system-price-islamabad" className="block px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-emerald-600">Islamabad System Price</Link>
                <Link href="/solar-system-price-rawalpindi" className="block px-4 py-3 text-sm text-zinc-600 hover:bg-zinc-50 hover:text-emerald-600">Rawalpindi System Price</Link>
              </div>
            </div>

            <Link href="/solar-on-installments" className="text-zinc-600 hover:text-emerald-600 font-medium transition text-sm">Installments</Link>
            <Link href="/about" className="text-zinc-600 hover:text-emerald-600 font-medium transition text-sm">About</Link>
            <Link href="/contact" className="text-zinc-600 hover:text-emerald-600 font-medium transition text-sm">Contact</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-4">
            <a href="https://wa.me/[WHATSAPP_NUMBER]" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
            <Link href="/get-quote" className="bg-emerald-600 text-white px-5 py-2.5 rounded-md font-semibold hover:bg-emerald-700 transition shadow-sm text-sm">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="xl:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-zinc-600 hover:text-emerald-600 p-2"
              aria-label="Open menu"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[100] xl:hidden bg-zinc-900/50 backdrop-blur-sm transition-opacity" onClick={closeMenu}>
          <div 
            ref={menuRef}
            className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-xl flex flex-col h-full animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-6 border-b border-zinc-100">
              <span className="font-bold text-xl text-zinc-900">[Business Name]</span>
              <button onClick={closeMenu} className="text-zinc-500 hover:text-zinc-900 p-2" aria-label="Close menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto py-4 px-6 flex flex-col gap-4">
              <Link href="/" onClick={closeMenu} className="text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50">Home</Link>
              
              <div className="py-2 border-b border-zinc-50">
                <p className="text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Installation Areas</p>
                <div className="flex flex-col gap-3 pl-4">
                  <Link href="/solar-installation-islamabad" onClick={closeMenu} className="text-zinc-700">Islamabad</Link>
                  <Link href="/solar-installation-rawalpindi" onClick={closeMenu} className="text-zinc-700">Rawalpindi</Link>
                </div>
              </div>

              <div className="py-2 border-b border-zinc-50">
                <p className="text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Solar Systems</p>
                <div className="flex flex-col gap-3 pl-4">
                  <Link href="/5kw-solar-system" onClick={closeMenu} className="text-zinc-700">5kW System</Link>
                  <Link href="/10kw-solar-system" onClick={closeMenu} className="text-zinc-700">10kW System</Link>
                  <Link href="/15kw-solar-system" onClick={closeMenu} className="text-zinc-700">15kW System</Link>
                  <Link href="/hybrid-solar-system" onClick={closeMenu} className="text-zinc-700">Hybrid System</Link>
                  <Link href="/on-grid-solar-system" onClick={closeMenu} className="text-zinc-700">On-Grid System</Link>
                </div>
              </div>

              <div className="py-2 border-b border-zinc-50">
                <p className="text-sm font-semibold text-zinc-400 mb-2 uppercase tracking-wider">Pricing</p>
                <div className="flex flex-col gap-3 pl-4">
                  <Link href="/solar-system-price-islamabad" onClick={closeMenu} className="text-zinc-700">Islamabad Prices</Link>
                  <Link href="/solar-system-price-rawalpindi" onClick={closeMenu} className="text-zinc-700">Rawalpindi Prices</Link>
                </div>
              </div>

              <Link href="/solar-on-installments" onClick={closeMenu} className="text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50">Installments</Link>
              <Link href="/about" onClick={closeMenu} className="text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50">About</Link>
              <Link href="/contact" onClick={closeMenu} className="text-lg font-medium text-zinc-900 py-2 border-b border-zinc-50">Contact</Link>
            </div>

            <div className="p-6 border-t border-zinc-100 flex flex-col gap-3">
              <Link href="/get-quote" onClick={closeMenu} className="w-full bg-emerald-600 text-white py-3 rounded-md font-semibold text-center hover:bg-emerald-700 transition shadow-sm">
                Get Free Quote
              </Link>
              <a href="https://wa.me/[WHATSAPP_NUMBER]" onClick={closeMenu} target="_blank" rel="noopener noreferrer" className="w-full border border-emerald-600 text-emerald-600 py-3 rounded-md font-semibold text-center hover:bg-emerald-50 transition">
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
