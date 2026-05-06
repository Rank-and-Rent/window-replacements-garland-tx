import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wood Window Replacement Garland TX | Traditional Beauty & Superior Insulation",
  description: "Professional wood window replacement in Garland, TX. Traditional wood windows with natural beauty and superior insulation. Timeless character and craftsmanship. Call 972-734-3158.",
  keywords: "wood windows Garland TX, wood replacement windows, traditional wood windows, natural wood windows",
};

export default function WoodWindows() {
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
            <li className="text-navy-900 font-medium">Wood Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/window-types/wood-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Wood Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Traditional wood windows with natural beauty and superior insulation.
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
                Timeless Character and Craftsmanship
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Wood windows represent the traditional standard of excellence in window construction, 
                offering unmatched natural beauty, superior insulation properties, and timeless 
                character that complements Garland&apos;s diverse architectural heritage. Real wood 
                provides the warmth and authenticity that synthetic materials simply cannot replicate.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Wood&apos;s natural cellular structure creates superior insulation properties, making 
                wood windows among the most energy-efficient options available. The material&apos;s 
                ability to be shaped, carved, and finished allows for unlimited customization, enabling 
                windows that perfectly match historic homes or create distinctive character in new 
                construction.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Modern wood windows feature advanced treatments and finishes that protect against 
                moisture, UV damage, and insects while maintaining wood&apos;s natural beauty. With 
                proper maintenance, quality wood windows can last for generations, making them a 
                long-term investment for Garland homeowners who value craftsmanship and tradition.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Wood Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Natural Beauty:</strong> Unmatched warmth and authenticity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Superior Insulation:</strong> Natural cellular structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Unlimited Customization:</strong> Can be shaped and finished</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Historic Authenticity:</strong> Perfect for period homes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Repairable:</strong> Can be refinished and repaired</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Long Lasting:</strong> Can last generations with care</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Wood in Garland */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Wood Windows in Garland: When They Make Sense
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Historic and Heritage Restorations</h3>
                <p className="mb-4">
                  Real wood windows are the right pick for the older homes around Heritage Crossing, the early-twentieth-century properties along the original downtown grid, and the architectural-restoration projects where authenticity matters more than maintenance reduction. Andersen Woodwright, Marvin Signature, and Pella Reserve all build true wood windows with the divided-lite proportions and frame depths that period homes need.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Custom Stain-Grade Interiors</h3>
                <p>
                  Many Garland custom homes feature stained wood trim, ceiling beams, or built-ins that demand wood window interiors to read correctly. Pella, Marvin, and JELD-WEN offer pine, fir, mahogany, and oak interiors that can be field-stained to match existing millwork.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Maintenance Realities</h3>
                <p className="mb-4">
                  Real wood exterior surfaces need refinishing every 3 to 5 years in Garland&apos;s sun and humidity to prevent moisture damage and finish failure. Homeowners considering wood need to be honest with themselves about that maintenance cycle. For most Garland homes, wood-clad (wood interior, aluminum or fiberglass exterior) is the better long-term choice.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Protection Strategies</h3>
                <p>
                  Where wood windows are the right call, we install with deep overhangs or covered porches whenever possible to protect exterior surfaces, and we specify factory-applied AuraLast or similar wood-preservation treatments that materially extend service life in Texas conditions.
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
                <h3 className="font-semibold text-navy-900 mb-2">Do wood windows require a lot of maintenance?</h3>
                <p className="text-navy-700 text-sm">
                  Wood windows require periodic maintenance including exterior refinishing every 3-5 
                  years and interior refinishing every 7-10 years. However, modern treatments and 
                  finishes significantly extend maintenance intervals compared to traditional wood windows.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are wood windows energy efficient?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, wood&apos;s natural cellular structure provides superior insulation properties, 
                  making wood windows among the most energy-efficient options. Combined with modern 
                  glass packages, wood windows provide excellent energy performance for Garland homes.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are wood windows suitable for Garland&apos;s climate?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, modern wood windows feature advanced treatments that protect against moisture, 
                  UV damage, and temperature extremes. With proper maintenance, wood windows perform 
                  excellently in Garland&apos;s hot summers and cool winters.
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
            Experience the Wood Difference
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on wood window replacement in Garland, TX.
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
