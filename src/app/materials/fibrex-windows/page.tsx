import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fibrex Window Replacement Garland TX | Andersen's Premium Composite",
  description: "Professional Fibrex window replacement in Garland, TX. Andersen's premium composite material combining wood-like beauty with advanced durability. Call 972-734-3158.",
  keywords: "Fibrex windows Garland TX, Andersen Fibrex windows, composite windows, wood-like windows",
};

export default function FibrexWindows() {
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
            <li className="text-navy-900 font-medium">Fibrex Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/window-types/fibrex-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Fibrex Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Andersen&apos;s premium composite material combining wood-like beauty with advanced durability.
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
                The Ultimate in Window Frame Technology
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Fibrex is Andersen&apos;s proprietary composite material that combines the best qualities 
                of wood and vinyl into a superior window frame. Made from a blend of reclaimed wood fiber 
                and thermoplastic polymer, Fibrex offers the authentic appearance and warmth of wood with 
                the low-maintenance benefits and durability of modern composites.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                This innovative material resists warping, rotting, and insect damage while maintaining 
                dimensional stability in Garland&apos;s variable climate. Fibrex windows never need 
                painting or staining—the color is integrated throughout the material, so scratches 
                and dings don&apos;t show. The material&apos;s superior insulation properties provide 
                excellent energy efficiency for Garland homes.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Andersen&apos;s Fibrex construction features fusion-welded corners that are stronger than 
                mechanical fasteners, ensuring windows maintain their structural integrity for decades. 
                The material accepts authentic wood stains and finishes, allowing customization to match 
                any architectural style in Garland.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Fibrex Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Wood-Like Beauty:</strong> Authentic appearance and warmth</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Low Maintenance:</strong> Never needs painting or staining</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Superior Durability:</strong> Resists warping, rotting, and insects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Energy Efficient:</strong> Excellent insulation properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Color Integrated:</strong> Scratches don&apos;t show</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Andersen Exclusive:</strong> Premium quality and warranty</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Fibrex in Garland */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Why Fibrex Performs Well in North Texas
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Composite Strength</h3>
                <p className="mb-4">
                  Andersen&apos;s Fibrex material is twice as strong as vinyl and resists the cyclical thermal expansion that causes seal failure in cheaper composite frames. For Garland homes facing 100-degree-plus summers and the occasional ice-storm winter, that stability translates into windows that hold their geometry, their seals, and their finish for decades.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Sustainability Story</h3>
                <p>
                  Fibrex is roughly 40 percent reclaimed wood fiber by weight, much of it sourced from Andersen&apos;s own manufacturing waste stream. For environmentally minded Garland homeowners, that means a window frame with materially lower embodied carbon than aluminum, plus the low-maintenance benefits of a synthetic.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Color Stability</h3>
                <p className="mb-4">
                  Fibrex frames are color-through, meaning the pigment runs all the way through the material rather than sitting on the surface. Scratches and minor abrasions don&apos;t show, and the color stays stable over decades of UV exposure on west-facing Garland elevations.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Andersen-Exclusive Warranty</h3>
                <p>
                  Andersen&apos;s 100 Series, 400 Series Woodwright, and Renewal by Andersen lines all use Fibrex with manufacturer-backed warranties that cover frame integrity and finish performance. The transferable warranty stays with the home through ownership changes.
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
                <h3 className="font-semibold text-navy-900 mb-2">What is Fibrex material?</h3>
                <p className="text-navy-700 text-sm">
                  Fibrex is Andersen&apos;s proprietary composite material made from reclaimed wood fiber 
                  and thermoplastic polymer. It combines the authentic appearance of wood with the 
                  low-maintenance benefits and durability of modern composites.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Do Fibrex windows require maintenance?</h3>
                <p className="text-navy-700 text-sm">
                  No, Fibrex windows never need painting or staining. The color is integrated throughout 
                  the material, so scratches and dings don&apos;t show. Occasional cleaning with soap 
                  and water is all that&apos;s needed.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are Fibrex windows energy efficient?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, Fibrex material provides excellent insulation properties, contributing to superior 
                  energy efficiency. Combined with Andersen&apos;s advanced glass packages, Fibrex windows 
                  help reduce heating and cooling costs in Garland homes.
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
            Experience the Fibrex Difference
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on Fibrex window replacement in Garland, TX.
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
