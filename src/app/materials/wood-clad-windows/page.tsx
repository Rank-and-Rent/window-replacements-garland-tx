import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood Clad Window Replacement Garland TX | Authentic Wood with Modern Protection",
  description: "Wood-clad windows for Lake Ray Hubbard custom builds and Naaman Forest premium homes. True wood interior, factory-finished aluminum or fiberglass exterior shrugs off Garland UV and hail.",
  keywords: "wood clad windows Garland TX, clad windows, wood windows with aluminum exterior, traditional wood windows",
};

export default function WoodCladWindows() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/materials" className="hover:text-gold-500">Materials</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Wood Clad Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/window-types/wood-clad-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Wood Clad Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Authentic wood interiors with weather-resistant exterior protection.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Traditional Beauty Meets Modern Durability
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Wood clad windows offer the perfect solution for Garland homeowners who want the 
                authentic warmth and beauty of wood interiors combined with the low-maintenance 
                benefits of modern exterior protection. These windows feature real wood on the 
                interior side—where you can see and appreciate it—while the exterior is protected 
                by a durable cladding material, typically aluminum or vinyl.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The interior wood surface provides the natural beauty, warmth, and superior 
                insulation properties that only real wood can offer. You can stain or paint 
                the interior to match your home&apos;s decor, creating a custom look that 
                complements Garland&apos;s diverse architectural styles.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The exterior cladding protects the wood from Garland&apos;s weather extremes, 
                UV exposure, and moisture, eliminating the need for exterior maintenance. This 
                dual-material approach gives you the best of both worlds: authentic wood beauty 
                inside with modern durability outside.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Wood Clad Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Authentic Wood Interior:</strong> Natural beauty and warmth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Weather Protection:</strong> Durable exterior cladding</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Low Exterior Maintenance:</strong> No exterior painting needed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Superior Insulation:</strong> Wood&apos;s natural properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Customizable:</strong> Interior can be stained or painted</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Traditional Appeal:</strong> Perfect for historic homes</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Wood Clad in Garland */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Wood Clad: The Best of Both Worlds for Garland Custom Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Why It&apos;s the Right Pick for Most Garland Custom Homes</h3>
                <p className="mb-4">
                  Wood-clad windows give a Garland custom home the warmth and authenticity of real wood interiors paired with the no-maintenance, weatherproof exterior of factory-finished aluminum or fiberglass cladding. For Firewheel, Camelot, Naaman Forest, and the lakefront custom enclaves, wood-clad is the dominant pick because it solves the real-world maintenance problem without sacrificing the architectural intent.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Cladding Options Compared</h3>
                <p>
                  Aluminum cladding (Marvin, Pella) holds its powder-coated finish for decades and resists every kind of weather Garland can throw at it. Fiberglass cladding (some Pella and Marvin lines) is paintable and slightly less prone to dents. Both eliminate the 3-to-5-year refinishing cycle that pure wood demands.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Stain-Grade Interior Flexibility</h3>
                <p className="mb-4">
                  Pine, douglas fir, mahogany, and oak interiors are all available across the major brands. Marvin Signature Ultimate and Pella Reserve both offer exotic species and factory-stained finishes that arrive ready to install — no field finishing required. For Garland homeowners with stained millwork or built-ins, that color matching is a serious value.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Premium Performance Glass</h3>
                <p>
                  Wood-clad windows are typically paired with the strongest Low-E glass packages in each manufacturer&apos;s lineup, including triple-pane options for the most demanding exposures. The combination delivers excellent thermal performance for west-facing Garland walls and hard north-wind exposure during winter cold fronts.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">What is wood clad construction?</h3>
                <p className="text-navy-700 text-sm">
                  Wood clad windows feature real wood on the interior side where you can see and 
                  appreciate it, while the exterior is protected by a durable cladding material 
                  (typically aluminum or vinyl) that eliminates exterior maintenance.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Do wood clad windows require maintenance?</h3>
                <p className="text-navy-700 text-sm">
                  The exterior requires no maintenance thanks to the protective cladding. The interior 
                  wood may need periodic refinishing (typically every 5-7 years) depending on exposure 
                  to sunlight and wear, but this is much less frequent than traditional wood windows.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are wood clad windows suitable for historic homes?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, wood clad windows are perfect for historic Garland homes. They provide the 
                  authentic wood appearance required for historic preservation while offering modern 
                  energy efficiency and low-maintenance exteriors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-semibold text-cream-100 mb-6">
            Experience the Wood Clad Difference
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on wood clad window replacement in Garland, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
            </Link>
            <a href="tel:972-734-3158" className="btn-outline-light">
              Call 972-734-3158
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
