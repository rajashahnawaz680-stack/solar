import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'On Grid Solar System | Top Solar Installation Company',
  description: 'Learn more about On Grid Solar System and get the best solar solutions in Islamabad and Rawalpindi.',
};

export default function Page() {
  return (
    <main className="min-h-screen p-8 md:p-24">
      <h1 className="text-4xl font-bold mb-6">On Grid Solar System</h1>
      <p className="text-lg">
        This is the foundation page for On Grid Solar System. Here we will add detailed information, pricing, 
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
