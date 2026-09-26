
// VERIFIED PACKAGE DATA — sourced and adjusted from reference pricing
export interface PackageSpec {
  id: string;
  size: string;
  type: 'On-Grid' | 'Hybrid' | 'Off-Grid';
  price: number;          // Rs.
  priceLabel: string;
  panels: string;
  inverter: string;
  battery?: string;
  mounting: string;
  protection: string;
  installation: string;
  netMetering?: string;
  bestFor: string;
  img: string;
}

export const PACKAGES: PackageSpec[] = [
  // ── ON-GRID ──────────────────────────────────────────────────────────────
  {
    id: '5kw-on-grid',
    size: '5kW',
    type: 'On-Grid',
    price: 732000,
    priceLabel: 'Rs. 7,32,000',
    panels: '8 × 605–615W A-Grade Solar Modules',
    inverter: '1 × 10kW On-Grid Inverter',
    battery: undefined,
    mounting: 'Gauge 14–16 PV Mounting Structure, Galvanized Iron',
    protection: 'AC & DC Cables, Breakers, Manual Disconnect Kit',
    installation: 'Earthing, Boring & After-Installation Support',
    netMetering: 'Net Metering File included',
    bestFor: 'Homes with monthly bills of Rs. 15,000–25,000',
    img: 'https://images.unsplash.com/photo-1509391366360-51590d6350f5?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '10kw-on-grid',
    size: '10kW',
    type: 'On-Grid',
    price: 943000,
    priceLabel: 'Rs. 9,43,000',
    panels: '16 × 605–615W A-Grade Solar Modules',
    inverter: '1 × 10kW On-Grid Inverter',
    battery: undefined,
    mounting: 'Gauge 14–16 PV Mounting Structure, Galvanized Iron',
    protection: 'AC & DC Cables, Breakers, Manual Disconnect Kit',
    installation: 'Earthing, Boring & After-Installation Support',
    netMetering: 'Net Metering File included',
    bestFor: 'Larger homes or small offices with bills above Rs. 25,000',
    img: 'https://images.unsplash.com/photo-1548614606-52b4451f994b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '15kw-on-grid',
    size: '15kW',
    type: 'On-Grid',
    price: 1197500,
    priceLabel: 'Rs. 11,97,500',
    panels: '24 × 605–615W A-Grade Solar Modules',
    inverter: '1 × 15kW On-Grid Inverter',
    battery: undefined,
    mounting: 'Gauge 14–16 PV Mounting Structure, Galvanized Iron',
    protection: 'AC & DC Cables, Breakers, Manual Disconnect Kit',
    installation: 'Earthing, Boring & After-Installation Support',
    netMetering: 'Net Metering File included',
    bestFor: 'Commercial properties or large homes with high electricity usage',
    img: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=800&q=80',
  },
  // ── HYBRID ───────────────────────────────────────────────────────────────
  {
    id: '3-5kw-hybrid',
    size: '3.5kW',
    type: 'Hybrid',
    price: 663000,
    priceLabel: 'Rs. 6,63,000',
    panels: '6 × 585–615W Tier 1 Solar Modules',
    inverter: '1 × 4.5kW Hybrid Inverter (24V)',
    battery: '2 × 230Ah (12V) Tall Tubular Batteries — Included',
    mounting: 'L-2 Frames Mounting Structure',
    protection: 'DC Wire, AC & DC Breakers, Box & accessories',
    installation: 'Installation, Load Balancing & After-Sales Services',
    bestFor: 'Small homes needing backup during load shedding',
    img: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5kw-hybrid',
    size: '5kW',
    type: 'Hybrid',
    price: 1090000,
    priceLabel: 'Rs. 10,90,000',
    panels: '9 × 585–615W Tier 1 Solar Modules',
    inverter: '1 × 6kW Hybrid Inverter',
    battery: '4 × Tall Tubular Batteries — Included',
    mounting: 'L-2 Frames Mounting Structure',
    protection: 'AC & DC Cables, Breakers, SPDs & accessories',
    installation: 'Installation & After-Sales Services',
    bestFor: 'Medium-sized homes requiring reliable backup power',
    img: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '10kw-hybrid',
    size: '10kW',
    type: 'Hybrid',
    price: 1552000,
    priceLabel: 'Rs. 15,52,000',
    panels: '17 × 585–615W Tier 1 Solar Modules',
    inverter: '1 × 8kW Hybrid Inverter',
    battery: '4 × Tall Tubular Batteries — Included',
    mounting: 'L-2 Frames Mounting Structure',
    protection: 'AC & DC Cables, Breakers, SPDs & accessories',
    installation: 'Installation & After-Sales Services',
    bestFor: 'Larger homes and offices that need high backup capacity',
    img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=80',
  },
  // ── OFF-GRID / CAPTIVE ───────────────────────────────────────────────────
  {
    id: '3kw-off-grid',
    size: '3kW',
    type: 'Off-Grid',
    price: 498000,
    priceLabel: 'Rs. 4,98,000',
    panels: '5 × 605W Tier 1 Solar Modules',
    inverter: '1 × 5kW Inverter',
    battery: undefined,
    mounting: 'L-2 Frames Mounting Structure',
    protection: 'DC Wire, AC & DC Breakers, Box & accessories',
    installation: 'Installation, After-Sales Services, Earthing & Boring',
    bestFor: 'Properties with energy independence requirements',
    img: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: '5kw-off-grid',
    size: '5kW',
    type: 'Off-Grid',
    price: 557500,
    priceLabel: 'Rs. 5,57,500',
    panels: '8 × 605W Tier 1 Solar Modules',
    inverter: '1 × 6.5kW Hybrid Inverter',
    battery: undefined,
    mounting: 'L-2 Frames Mounting Structure',
    protection: 'AC & DC Cables, Breakers, SPDs & accessories',
    installation: 'Installation, After-Sales Services, Earthing & Boring',
    bestFor: 'Medium-sized captive/off-grid solar requirements',
    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=800&q=80',
  },
];
