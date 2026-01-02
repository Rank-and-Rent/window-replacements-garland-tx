import Link from 'next/link';

export default function Brands() {
  return (
    <section id="brands" className="py-16 lg:py-20 bg-cream-100">
      <div className="px-6 lg:px-12">
        {/* Brand Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-12 lg:gap-20 max-w-6xl mx-auto">
          {/* Andersen */}
          <Link href="/brands/andersen-windows-doors" className="text-center hover:opacity-80 transition-opacity">
            <div
              className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif", fontStyle: "italic" }}
            >
              Andersen
            </div>
            <p className="text-navy-500 text-xs uppercase tracking-widest mt-1">
              Windows & Doors
            </p>
          </Link>

          {/* Pella */}
          <Link href="/brands/pella-windows-doors" className="text-center hover:opacity-80 transition-opacity">
            <div
              className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              PELLA
            </div>
            <p className="text-navy-500 text-xs uppercase tracking-widest mt-1">
              Windows & Doors
            </p>
          </Link>

          {/* Jeld-Wen */}
          <Link href="/brands/jeld-wen-windows-doors" className="text-center hover:opacity-80 transition-opacity">
            <div
              className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              JELD-WEN
            </div>
            <p className="text-navy-500 text-xs uppercase tracking-widest mt-1">
              Windows & Doors
            </p>
          </Link>

          {/* Marvin */}
          <Link href="/brands/marvin-windows-doors" className="text-center hover:opacity-80 transition-opacity">
            <div
              className="text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight"
              style={{ fontFamily: "Georgia, serif" }}
            >
              MARVIN
            </div>
            <p className="text-navy-500 text-xs uppercase tracking-widest mt-1">
              Windows & Doors
            </p>
          </Link>
        </div>
      </div>
    </section>
  );
}
