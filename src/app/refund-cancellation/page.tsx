import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Cancellation | [Business Name]',
  description: 'Learn more about Refund Cancellation and get the best solar solutions in Islamabad and Rawalpindi.',
};

export default function Page() {
  return (
    <main className="min-h-[60vh] py-20 px-6 md:px-12 flex flex-col items-center justify-center bg-zinc-50">
      <h1 className="text-4xl font-bold mb-4 text-zinc-900 text-center">Refund Cancellation</h1>
      <p className="text-lg text-zinc-600 text-center max-w-2xl mb-8">
        This is a placeholder page for Refund Cancellation. Detailed content, pricing, and options will be added here soon.
      </p>
      <a href="/get-quote" className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition shadow-sm">
        Get a Free Quote
      </a>
    </main>
  );
}
