export default function Home() {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full bg-zinc-50 py-20 px-6 md:px-12 flex flex-col items-center text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 max-w-4xl leading-tight mb-6">
          Premium Solar Installation in <span className="text-green-600">Islamabad & Rawalpindi</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mb-8">
          Reliable solar systems, professional installation, and flexible installment plans for your home or business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/get-free-quote" className="bg-green-600 text-white font-semibold px-8 py-3 rounded-md hover:bg-green-700 transition text-lg">
            Get Your Free Solar Quote
          </a>
          <a href="#" className="border border-green-600 text-green-600 font-semibold px-8 py-3 rounded-md hover:bg-green-50 transition text-lg flex items-center justify-center gap-2">
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* Services/Info Placeholder */}
      <section className="w-full max-w-5xl py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3 text-zinc-900">Expert Installation</h3>
          <p className="text-zinc-600">Professional technical survey and safe installation by experienced partners.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3 text-zinc-900">Installment Plans</h3>
          <p className="text-zinc-600">Affordable monthly installments to help you switch to solar without the heavy upfront cost.</p>
        </div>
        <div className="p-6 bg-white border rounded-lg shadow-sm">
          <h3 className="text-xl font-bold mb-3 text-zinc-900">Local Service</h3>
          <p className="text-zinc-600">Dedicated support exclusively for residents of Islamabad and Rawalpindi.</p>
        </div>
      </section>
    </div>
  );
}
