import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fiberglass Window Replacement Garland TX | Ultimate Strength & Insulation",
  description: "Professional fiberglass window replacement in Garland, TX. Ultimate strength and insulation with authentic wood-like appearance. Maximum durability and energy efficiency. Call 972-734-3158.",
  keywords: "fiberglass windows Garland TX, fiberglass replacement windows, durable windows, energy efficient fiberglass windows",
};

export default function FiberglassWindows() {
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
            <li className="text-navy-900 font-medium">Fiberglass Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/window-types/fiberglass-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Fiberglass Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Ultimate strength and insulation with authentic wood-like appearance.
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
                Maximum Durability and Energy Efficiency
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Fiberglass windows represent the pinnacle of window frame technology, offering 
                exceptional strength, superior insulation, and authentic wood-like aesthetics. 
                Made from pultruded fiberglass—glass fibers embedded in resin—these windows provide 
                strength comparable to steel while maintaining the appearance and warmth of wood.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Fiberglass has an extremely low coefficient of thermal expansion, meaning it expands 
                and contracts minimally with temperature changes. This dimensional stability creates 
                a perfect seal with the glass, preventing air infiltration and maximizing energy 
                efficiency. In Garland&apos;s hot summers and cool winters, this stability translates 
                to consistent performance and lower utility bills.
              </p>
              <p className="text-navy-700 leading-relaxed">
                The material&apos;s exceptional strength enables thinner frame profiles that maximize 
                glass area while maintaining structural integrity. Fiberglass windows resist warping, 
                rotting, and insect damage while accepting authentic wood stains and finishes. The 
                material never needs painting—the color is integrated throughout, ensuring lasting 
                appearance with minimal maintenance.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Fiberglass Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Ultimate Strength:</strong> Comparable to steel</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Superior Insulation:</strong> Lowest thermal expansion</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Wood-Like Appearance:</strong> Accepts authentic stains</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Dimensional Stability:</strong> Perfect seal with glass</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Low Maintenance:</strong> Never needs painting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Long Lasting:</strong> 50+ year lifespan</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fiberglass Performance */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Why Fiberglass Performs So Well in Garland Heat
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Thermal Stability</h3>
                <p className="mb-4">
                  Fiberglass expands and contracts at almost exactly the same rate as the glass it holds, which is why fiberglass windows simply don&apos;t develop the seal-failure issues that vinyl can in extreme heat cycles. In Garland, where summer surface temperatures on west-facing frames can hit 150&deg;F and then drop 80 degrees overnight in a winter cold front, that thermal compatibility translates directly into longer IGU life.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Strength-to-Weight Ratio</h3>
                <p>
                  Fiberglass is structurally stronger than vinyl and lighter than aluminum, which lets manufacturers build narrower frame profiles without sacrificing rigidity. The result is windows with more glass area and cleaner sightlines, particularly in tall and wide openings on newer Garland custom builds.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Paintability and Color Options</h3>
                <p className="mb-4">
                  Unlike vinyl, fiberglass can be field-painted with regular exterior paint, which means homeowners can refresh the exterior color in 15 or 20 years without replacing the windows. Pella, Marvin, and JELD-WEN all offer factory-applied finishes in dozens of colors, and the painted fiberglass holds up beautifully on west-facing exposures.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Warranty and Service Life</h3>
                <p>
                  Premium fiberglass windows typically carry strong frame warranties alongside 20-year IGU coverage. Real-world service life on properly installed fiberglass windows in Garland regularly exceeds 30 years.
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
                <h3 className="font-semibold text-navy-900 mb-2">Why are fiberglass windows so energy efficient?</h3>
                <p className="text-navy-700 text-sm">
                  Fiberglass has an extremely low coefficient of thermal expansion, meaning it expands 
                  and contracts minimally with temperature changes. This creates a perfect seal with 
                  the glass, preventing air infiltration and maximizing energy efficiency in Garland&apos;s 
                  variable climate.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Do fiberglass windows look like wood?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, fiberglass windows accept authentic wood stains and finishes, providing the 
                  appearance and warmth of wood while offering superior durability and low maintenance. 
                  The material can be finished to match any architectural style in Garland.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How strong are fiberglass windows?</h3>
                <p className="text-navy-700 text-sm">
                  Fiberglass windows provide strength comparable to steel while maintaining the 
                  appearance of wood. This exceptional strength enables thinner frame profiles that 
                  maximize glass area while maintaining structural integrity.
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
            Experience the Fiberglass Difference
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on fiberglass window replacement in Garland, TX.
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
