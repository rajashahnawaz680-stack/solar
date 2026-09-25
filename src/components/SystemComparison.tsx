import Link from 'next/link';

export default function SystemComparison() {
  return (
    <div className="w-full overflow-x-auto shadow-sm rounded-lg border border-zinc-200">
      <table className="w-full text-left text-zinc-600">
        <thead className="bg-zinc-100 text-zinc-800 uppercase text-xs font-semibold">
          <tr>
            <th className="px-6 py-4 rounded-tl-lg">System</th>
            <th className="px-6 py-4">General Use</th>
            <th className="px-6 py-4">Battery Config</th>
            <th className="px-6 py-4">Payment Options</th>
            <th className="px-6 py-4 rounded-tr-lg">Quote</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-200 bg-white text-sm md:text-base">
          <tr className="hover:bg-zinc-50 transition">
            <td className="px-6 py-4 font-bold text-zinc-900"><Link href="/5kw-solar-system" className="hover:text-emerald-600">5kW System</Link></td>
            <td className="px-6 py-4">Moderate usage</td>
            <td className="px-6 py-4">Depends on configuration</td>
            <td className="px-6 py-4">Cash / Installments</td>
            <td className="px-6 py-4"><Link href="/get-quote" className="text-emerald-600 font-semibold hover:underline">Get Quote</Link></td>
          </tr>
          <tr className="hover:bg-zinc-50 transition">
            <td className="px-6 py-4 font-bold text-zinc-900"><Link href="/10kw-solar-system" className="hover:text-emerald-600">10kW System</Link></td>
            <td className="px-6 py-4">Higher usage / Standard home</td>
            <td className="px-6 py-4">Depends on configuration</td>
            <td className="px-6 py-4">Cash / Installments</td>
            <td className="px-6 py-4"><Link href="/get-quote" className="text-emerald-600 font-semibold hover:underline">Get Quote</Link></td>
          </tr>
          <tr className="hover:bg-zinc-50 transition">
            <td className="px-6 py-4 font-bold text-zinc-900"><Link href="/15kw-solar-system" className="hover:text-emerald-600">15kW System</Link></td>
            <td className="px-6 py-4">Large residential / Commercial</td>
            <td className="px-6 py-4">Depends on configuration</td>
            <td className="px-6 py-4">Cash / Installments</td>
            <td className="px-6 py-4"><Link href="/get-quote" className="text-emerald-600 font-semibold hover:underline">Get Quote</Link></td>
          </tr>
          <tr className="hover:bg-zinc-50 transition">
            <td className="px-6 py-4 font-bold text-zinc-900"><Link href="/hybrid-solar-system" className="hover:text-emerald-600">Hybrid System</Link></td>
            <td className="px-6 py-4">Sites with grid outages</td>
            <td className="px-6 py-4">Supported</td>
            <td className="px-6 py-4">Cash / Installments</td>
            <td className="px-6 py-4"><Link href="/get-quote" className="text-emerald-600 font-semibold hover:underline">Get Quote</Link></td>
          </tr>
          <tr className="hover:bg-zinc-50 transition">
            <td className="px-6 py-4 font-bold text-zinc-900"><Link href="/on-grid-solar-system" className="hover:text-emerald-600">On-Grid System</Link></td>
            <td className="px-6 py-4">Reliable grid access (Net-Metering)</td>
            <td className="px-6 py-4">Generally without batteries</td>
            <td className="px-6 py-4">Cash / Installments</td>
            <td className="px-6 py-4"><Link href="/get-quote" className="text-emerald-600 font-semibold hover:underline">Get Quote</Link></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
