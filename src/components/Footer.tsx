import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div>
            <div className="text-2xl font-bold text-white mb-6 tracking-tight">Solar KCKY</div>
            <p className="text-sm mb-6 leading-relaxed">
              Providing professional solar installation services for residential and commercial customers in Islamabad and Rawalpindi. Cash and installment options available.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/solar-installation-islamabad" className="hover:text-emerald-400 transition">Solar in Islamabad</Link></li>
              <li><Link href="/solar-installation-rawalpindi" className="hover:text-emerald-400 transition">Solar in Rawalpindi</Link></li>
              <li><Link href="/solar-on-installments" className="hover:text-emerald-400 transition">Solar on Installments</Link></li>
              <li><Link href="/get-quote" className="hover:text-emerald-400 transition">Request Free Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Systems</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/5kw-solar-system" className="hover:text-emerald-400 transition">5kW System</Link></li>
              <li><Link href="/10kw-solar-system" className="hover:text-emerald-400 transition">10kW System</Link></li>
              <li><Link href="/15kw-solar-system" className="hover:text-emerald-400 transition">15kW System</Link></li>
              <li><Link href="/hybrid-solar-system" className="hover:text-emerald-400 transition">Hybrid System</Link></li>
              <li><Link href="/on-grid-solar-system" className="hover:text-emerald-400 transition">On-Grid System</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company & Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-emerald-400 transition">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-emerald-400 transition">Contact Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-emerald-400 transition">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-emerald-400 transition">Terms & Conditions</Link></li>
              <li><Link href="/refund-cancellation" className="hover:text-emerald-400 transition">Refund & Cancellation</Link></li>
              <li><Link href="/installment-terms" className="hover:text-emerald-400 transition">Installment Terms</Link></li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-900 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Solar KCKY. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex gap-4">
             {/* Social links placeholder if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
