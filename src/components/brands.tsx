import Link from 'next/link';

export default function Brands() {
  return (
    <section id="brands" className="py-16 lg:py-20 bg-cream-100">
      <div className="px-6 lg:px-12">
        {/* Brand Logos Row */}
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Andersen */}
          <Link href="/brands/andersen-windows-doors" className="hover:opacity-80 transition-opacity">
            <img
              src="/andersen-windows-and-doors-garland-tx-logo.png"
              alt="Andersen Windows & Doors"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Pella */}
          <Link href="/brands/pella-windows-doors" className="hover:opacity-80 transition-opacity">
            <img
              src="/pella-windows-and-doors-garland-tx-logo.png"
              alt="Pella Windows & Doors"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Jeld-Wen */}
          <Link href="/brands/jeld-wen-windows-doors" className="hover:opacity-80 transition-opacity">
            <img
              src="/jeld-wen-windows-and-doors-garland-tx-logo.png"
              alt="Jeld-Wen Windows & Doors"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>

          {/* Marvin */}
          <Link href="/brands/marvin-windows-doors" className="hover:opacity-80 transition-opacity">
            <img
              src="/marvin-windows-and-doors-garland-tx-logo.png"
              alt="Marvin Windows & Doors"
              className="h-16 lg:h-20 w-auto"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
