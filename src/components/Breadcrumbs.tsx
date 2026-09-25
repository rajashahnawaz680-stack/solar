import Link from 'next/link';

export default function Breadcrumbs({ items }: { items: { label: string, href: string }[] }) {
  const schemaList = items.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.label,
    "item": `https://[DOMAIN]${item.href}`
  }));
  
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": schemaList
  };

  return (
    <nav className="flex text-sm text-zinc-500 mb-6 justify-center" aria-label="Breadcrumb">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <ol className="inline-flex items-center space-x-1 md:space-x-3">
        <li className="inline-flex items-center">
          <Link href="/" className="inline-flex items-center hover:text-emerald-400 transition">
            Home
          </Link>
        </li>
        {items.map((item, i) => (
          <li key={i}>
            <div className="flex items-center">
              <svg className="w-3 h-3 mx-1 text-zinc-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
              </svg>
              <Link href={item.href} className="ml-1 text-zinc-300 hover:text-emerald-400 transition md:ml-2">
                {item.label}
              </Link>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
