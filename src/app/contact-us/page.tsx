import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Top Solar Installation Company',
  description: 'Learn more about Contact Us and get the best solar solutions in Islamabad and Rawalpindi.',
};

export default function Page() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-6">Contact Us</h1>
      <p className="text-lg">
        This is the foundation page for Contact Us. Here we will add detailed information, pricing, 
        and options specific to this service. 
      </p>
      <div className="mt-8">
        <a href="/get-free-quote" className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition">
          Get a Free Quote
        </a>
      </div>
    </main>
  );
}
