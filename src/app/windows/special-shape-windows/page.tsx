import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Shape Window Replacement Garland TX | Custom Geometric Windows",
  description: "Custom-shape windows for Heritage Crossing historic facades, Bradfield Estates transoms, and Firewheel custom builds. Arched, half-round, octagon, eyebrow. Field-templated to existing openings.",
  keywords: "special shape windows Garland TX, arched windows, circular windows, custom windows Garland",
};

export default function SpecialShapeWindows() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/windows" className="hover:text-gold-500">Windows</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Special Shape Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/windows/special-shape-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Special Shape Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Custom arched, circular, and geometric windows for distinctive architecture.
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
                Architectural Windows That Make a Statement
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Special shape windows include any non-rectangular design: arched tops, full circles, 
                half-rounds, ovals, octagons, triangles, and custom geometric shapes. These architectural 
                windows add character and distinction to Garland homes, turning ordinary exteriors into 
                memorable facades.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                From elegant arched windows above entries to circular accent windows in gables, special 
                shapes create visual interest and break up the monotony of standard rectangular openings. 
                They are particularly popular in master baths, stairwells, and as transoms above doors 
                and other windows.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Premium manufacturers like Andersen, Pella, JELD-WEN, and Marvin offer extensive 
                custom shape capabilities. Whether matching existing windows in older Garland homes or 
                creating dramatic new architectural features, we can source and install virtually any 
                shape imaginable.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Available Shapes</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Half-Round:</strong> Classic arched top with straight bottom</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Full Circle:</strong> Complete round windows for dramatic accent</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Oval:</strong> Elegant elliptical shapes for unique applications</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Octagon:</strong> Eight-sided classic for traditional homes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Triangle:</strong> Peak-top windows for gables and A-frames</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Custom:</strong> Virtually any geometric shape available</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Specialty Shapes in Garland Homes */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Specialty Shapes Around Garland Neighborhoods
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Two-Story Foyer Palladians</h3>
                <p className="mb-4">
                  Newer Firewheel, Camelot, and Naaman Forest custom homes routinely feature Palladian-style assemblies above the front entry, with a half-round on top of a tall rectangular fixed unit. We measure every dimension carefully and order the unit factory-mulled so the geometry stays correct.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Eyebrow and Quarter-Round Accents</h3>
                <p>
                  Many 1990s and 2000s Garland custom builds use eyebrow or quarter-round windows as architectural accents on gable ends. Replacement units need to match the original radius, mullion pattern, and frame depth to read correctly from the curb.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Octagons in Stairwells and Baths</h3>
                <p className="mb-4">
                  Octagonal accent windows appear regularly in stairwell walls and primary-bath water-closet rooms across Garland subdivisions. Their compact shape provides daylight and architectural interest without demanding privacy treatment.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Trapezoids on Vaulted Ceilings</h3>
                <p>
                  Vaulted-ceiling great rooms often feature trapezoidal windows that follow the roof slope. We work with Andersen, Pella, JELD-WEN, and Marvin custom programs to fabricate replacement units that match the exact angle of the existing opening.
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
                <h3 className="font-semibold text-navy-900 mb-2">Can special shape windows be operable?</h3>
                <p className="text-navy-700 text-sm">
                  Most special shape windows are fixed, but some shapes like half-rounds with straight 
                  bottoms can incorporate operable lower sections.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How long do custom windows take to manufacture?</h3>
                <p className="text-navy-700 text-sm">
                  Lead times for special shape windows are typically 4-8 weeks depending on the 
                  manufacturer and complexity of the design.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can you match existing special shape windows?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, we can precisely measure and replicate existing special shape windows, ensuring 
                  new units match your home&apos;s existing architecture perfectly.
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
            Create Your Custom Look
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on special shape window replacement in Garland, TX.
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
