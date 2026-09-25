/* eslint-disable */
'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Dropdown states
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [systemsOpen, setSystemsOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setSystemsOpen(false);
  }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' : 'bg-slate-900 py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-amber-400 rounded-lg flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300 shadow-lg">
              <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <span className="text-2xl font-extrabold text-white tracking-tight">Solar <span className="text-amber-400">KCKY</span></span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">Home</Link>
            
            {/* Solutions Dropdown */}
            <div className="relative" onMouseEnter={() => setSolutionsOpen(true)} onMouseLeave={() => setSolutionsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors py-2">
                Solar Solutions
                <svg className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`absolute top-full left-0 w-56 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-200 ${solutionsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="py-2">
                  <Link href="/solar-installation-islamabad" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium">Residential</Link>
                  <Link href="/solar-installation-rawalpindi" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium">Commercial</Link>
                  <Link href="/on-grid-solar-system" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium">On-Grid</Link>
                  <Link href="/hybrid-solar-system" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium">Hybrid</Link>
                  <Link href="/solar-on-installments" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium">Battery Storage</Link>
                </div>
              </div>
            </div>

            {/* Systems Dropdown */}
            <div className="relative" onMouseEnter={() => setSystemsOpen(true)} onMouseLeave={() => setSystemsOpen(false)}>
              <button className="flex items-center gap-1 text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors py-2">
                Solar Systems
                <svg className={`w-4 h-4 transition-transform duration-200 ${systemsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </button>
              <div className={`absolute top-full left-0 w-48 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden transition-all duration-200 ${systemsOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                <div className="py-2">
                  <Link href="/5kw-solar-system" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium">5kW System</Link>
                  <Link href="/10kw-solar-system" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium">10kW System</Link>
                  <Link href="/15kw-solar-system" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium">15kW System</Link>
                  <Link href="/get-quote" className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-slate-50 hover:text-amber-500 font-medium border-t border-slate-100 mt-1">Custom System</Link>
                </div>
              </div>
            </div>

            <Link href="/#projects" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">Projects</Link>
            <Link href="/solar-installation-islamabad" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">Locations</Link>
            <Link href="/about" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">About</Link>
            <Link href="/contact" className="text-sm font-medium text-slate-200 hover:text-amber-400 transition-colors">Contact</Link>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-bold text-slate-200 hover:text-[#25D366] transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp
            </a>
            <Link href="/get-quote" className="bg-amber-400 hover:bg-amber-500 text-slate-900 text-sm font-bold py-2.5 px-6 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-slate-200 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-slate-900 border-t border-slate-800 transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 max-h-[80vh] overflow-y-auto visible' : 'max-h-0 opacity-0 invisible'}`}>
        <div className="px-4 py-6 space-y-4">
          <Link href="/" className="block text-slate-200 font-medium py-2">Home</Link>
          
          <div className="space-y-2">
            <div className="text-amber-400 font-bold text-sm tracking-wider uppercase mb-1">Solar Solutions</div>
            <Link href="/solar-installation-islamabad" className="block text-slate-300 pl-4 py-1.5 text-sm">Residential</Link>
            <Link href="/solar-installation-rawalpindi" className="block text-slate-300 pl-4 py-1.5 text-sm">Commercial</Link>
            <Link href="/on-grid-solar-system" className="block text-slate-300 pl-4 py-1.5 text-sm">On-Grid</Link>
            <Link href="/hybrid-solar-system" className="block text-slate-300 pl-4 py-1.5 text-sm">Hybrid</Link>
            <Link href="/solar-on-installments" className="block text-slate-300 pl-4 py-1.5 text-sm">Battery Storage</Link>
          </div>

          <div className="space-y-2">
            <div className="text-amber-400 font-bold text-sm tracking-wider uppercase mb-1 mt-4">Solar Systems</div>
            <Link href="/5kw-solar-system" className="block text-slate-300 pl-4 py-1.5 text-sm">5kW System</Link>
            <Link href="/10kw-solar-system" className="block text-slate-300 pl-4 py-1.5 text-sm">10kW System</Link>
            <Link href="/15kw-solar-system" className="block text-slate-300 pl-4 py-1.5 text-sm">15kW System</Link>
            <Link href="/get-quote" className="block text-slate-300 pl-4 py-1.5 text-sm">Custom System</Link>
          </div>

          <Link href="/#projects" className="block text-slate-200 font-medium py-2 mt-4 border-t border-slate-800">Projects</Link>
          <Link href="/solar-installation-islamabad" className="block text-slate-200 font-medium py-2">Locations</Link>
          <Link href="/about" className="block text-slate-200 font-medium py-2">About</Link>
          <Link href="/contact" className="block text-slate-200 font-medium py-2">Contact</Link>
          
          <div className="pt-6 flex flex-col gap-3">
            <Link href="/get-quote" className="w-full bg-amber-400 text-slate-900 text-center font-bold py-3 rounded-lg shadow-md">
              Get Free Quote
            </Link>
            <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white text-center font-bold py-3 rounded-lg shadow-md flex items-center justify-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
