import Link from 'next/link';

export const metadata = {
  title: 'Contact — Solar Panel Rawalpindi & Islamabad',
  description: 'Contact Solar Panel for solar consultation, quotation and installation in Rawalpindi and Islamabad.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F5F6F1]">
      <div className="bg-[#0B0F0E] pt-32 pb-20 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Contact Solar Panel</h1>
        <p className="text-gray-400 text-lg max-w-xl mx-auto">Reach us directly for solar consultation, quotation or any question about our services.</p>
      </div>
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <a href="tel:03125634911" className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 bg-[#B8D83D]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#B8D83D] transition-colors">
              <svg className="w-7 h-7 text-[#183C32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <h3 className="font-bold text-[#0B0F0E] text-lg mb-1">Call</h3>
            <p className="text-gray-600 font-semibold">03125634911</p>
          </a>
          <a href="https://wa.me/923125634911" target="_blank" rel="noopener noreferrer" className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 bg-[#25D366]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#25D366] transition-colors">
              <svg className="w-7 h-7 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
            </div>
            <h3 className="font-bold text-[#0B0F0E] text-lg mb-1">WhatsApp</h3>
            <p className="text-gray-600 font-semibold">03125634911</p>
          </a>
          <a href="mailto:rajashahnawaz680@gmail.com" className="bg-white p-8 rounded-2xl shadow-md border border-gray-100 text-center hover:shadow-xl hover:-translate-y-1 transition-all group">
            <div className="w-14 h-14 bg-[#B8D83D]/10 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-[#B8D83D] transition-colors">
              <svg className="w-7 h-7 text-[#183C32]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <h3 className="font-bold text-[#0B0F0E] text-lg mb-1">Email</h3>
            <p className="text-gray-600 font-semibold text-sm break-all">rajashahnawaz680@gmail.com</p>
          </a>
        </div>
        <div className="bg-[#0B0F0E] rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">Ready to Explore Solar?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">Answer a few quick questions and we will contact you with a customized solar plan.</p>
          <Link href="/get-quote" className="inline-block bg-[#B8D83D] text-[#0B0F0E] font-bold px-10 py-4 rounded-xl hover:bg-[#9dbf2c] transition-colors shadow-xl">
            Build My Solar Plan
          </Link>
        </div>
      </div>
    </main>
  );
}
