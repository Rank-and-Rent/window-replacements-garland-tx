import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Door Replacement Garland TX | Unique Door Solutions",
  description: "Professional custom door replacement in Garland, TX. Fully customized doors designed to your specifications. Unique sizes, styles, and features. Call 972-734-3158.",
  keywords: "custom doors Garland TX, unique doors, oversized doors, specialty doors, door replacement Garland",
};

export default function CustomDoorPage() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/doors" className="hover:text-gold-500">Doors</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Custom Doors</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/doors/custom-doors-garland-tx.webp')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Custom Door Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            When standard doors do not fit your vision, custom solutions deliver exactly what you need.
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
                Your Vision, Our Craftsmanship
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Plenty of Garland homes have door openings that simply don&apos;t match what&apos;s sitting on a stocking-distributor pallet. The mid-century ranches in Eastern Hills, the custom builds along Lake Ray Hubbard, and the older homes around Heritage Crossing all have at least a few openings sized to whoever was building doors back in 1962. When the original door wears out, the choice is to shrink the opening to a stock size and patch the brick, or order a real custom door built to the exact rough-opening dimensions. We help homeowners pick the right path for the architecture and the budget.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Premium manufacturers like Marvin, Andersen, JELD-WEN, and Pella all build to custom specifications, with options for oversized heights, non-standard widths, dual sidelite assemblies, transoms, arched tops, and custom species or stain matches. We work with their architectural-grade product lines for Garland homes that need entry doors built to match the architectural intent of the original house, with full multi-point locks, three-point compression weatherstripping, and impact-rated glass packages where the home faces I-635, I-30, or Hwy 78 noise.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Custom doors aren&apos;t just for high-end homes. We replace a lot of plain stock doors in Garland with mid-tier custom units that fit oversized 8-foot openings, accommodate full-lite glass to brighten dark foyers, or include security upgrades that builder-grade hardware never offered. The premium over a stock door is usually smaller than homeowners expect once everything is priced together.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Custom Options</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Non-Standard Sizes:</strong> Oversized, undersized, or unusual dimensions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Unique Shapes:</strong> Arched tops, angled cuts, curved panels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Special Materials:</strong> Exotic woods, custom finishes, unique hardware</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Custom Glass:</strong> Decorative, textured, or art glass options</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Historic Matching:</strong> Replicate original designs for older homes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">ADA Compliance:</strong> Wider openings and accessible hardware</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Custom Door Options */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              What Custom Means in Practice
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Oversized Entry Doors</h3>
                <p className="mb-4">
                  8-foot tall doors are increasingly common on newer Garland custom homes. We order these direct from Marvin, Andersen, and JELD-WEN architectural lines with the proper compression weatherstripping and three-point locks needed to keep a tall slab from warping over time.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Sidelite and Transom Assemblies</h3>
                <p>
                  Many older Garland homes have entry walls that combine a door, sidelites, and a transom into one mulled assembly. When the time comes to replace, we order the entire unit factory-mulled so the joint geometry stays tight and weatherstripping carries through correctly.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Wood Species and Stains</h3>
                <p className="mb-4">
                  Mahogany, knotty alder, white oak, and walnut are all available in custom door programs. We send physical stain samples to homeowners ahead of order so the finish matches existing trim and millwork inside the home.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Glass and Privacy</h3>
                <p>
                  Decorative leaded glass, art glass, frosted, reeded, and laminated impact-rated glass are all available. For Garland homeowners on busier streets, laminated acoustic glass quiets the entry noticeably while still allowing daylight into the foyer.
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
                <h3 className="font-semibold text-navy-900 mb-2">How long do custom doors take to manufacture?</h3>
                <p className="text-navy-700 text-sm">
                  Custom door lead times typically range from 6-12 weeks depending on complexity, 
                  manufacturer, and current demand. We provide accurate timelines during consultation.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are custom doors more expensive?</h3>
                <p className="text-navy-700 text-sm">
                  Custom doors do cost more than standard sizes, but the premium varies based on 
                  specific requirements. Many custom options are more affordable than expected.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can you match my existing doors?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, we can closely match existing doors in historic Garland homes, replicating 
                  dimensions, profiles, and even glass patterns when needed.
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
            Create Your Perfect Door
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on custom door solutions in Garland, TX.
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
