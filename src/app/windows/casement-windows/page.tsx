import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casement Window Replacement Garland TX | Maximum Ventilation",
  description: "Casement windows for Heritage Crossing historic and Naaman Forest established homes. Multi-point lock seals against I-635 corridor noise, crank-out airflow on mild Lake Ray Hubbard mornings.",
  keywords: "casement windows Garland TX, crank windows, energy efficient windows, window replacement Garland",
};

export default function CasementWindows() {
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
            <li className="text-navy-900 font-medium">Casement Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/windows/casement-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Casement Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Maximum ventilation, unobstructed views, and the tightest seal available.
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
                The Most Energy-Efficient Window Design
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Casement windows swing outward on hinges like a door, operated by a simple crank mechanism. 
                This elegant design delivers several performance advantages that make casements the top choice 
                for energy-conscious Garland homeowners. When closed, the sash presses firmly against the frame, 
                creating an airtight compression seal that vertical-sliding windows simply cannot match.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The outward-opening design allows you to position the entire sash perpendicular to prevailing 
                breezes, effectively channeling air into your home. This ventilation efficiency means you can 
                capture cooling winds on pleasant evenings, reducing air conditioning usage during Garland&apos;s 
                spring and fall months.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Modern casement windows incorporate multi-point locking systems where several locking points 
                engage simultaneously around the frame perimeter. Beyond security benefits, this mechanism 
                pulls the sash tightly against weather-stripping at multiple locations, virtually eliminating 
                air infiltration.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Casement Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Superior Energy Efficiency:</strong> Compression seal provides tightest closure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Maximum Ventilation:</strong> 100% of opening available for airflow</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Unobstructed Views:</strong> No center rail blocking your sightline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Easy Operation:</strong> Smooth crank mechanism requires minimal effort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Effortless Cleaning:</strong> Both sides accessible from inside when opened</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Modern Aesthetic:</strong> Clean lines complement contemporary architecture</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Casement Use Cases */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Where Casements Solve Real Garland Problems
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Kitchens Over Sinks</h3>
                <p className="mb-4">
                  Reaching across a wide farmhouse sink to lift a heavy double-hung sash is a daily annoyance in many older Garland kitchens. A casement with its single crank turns easily from the front edge of the counter, and the full-frame opening provides far more ventilation than the half-opening of a double-hung. We install casements over sinks in Spring Park, Eastern Hills, and Camelot kitchens almost every week.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Tight Side-Yard Walls</h3>
                <p>
                  Garland zero-lot-line and tight-setback homes often have side-yard walls where a window opens close to a fence or neighboring wall. Casements that crank toward the back of the lot let homeowners take full advantage of the opening without interfering with the side yard.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Energy-Critical West Walls</h3>
                <p className="mb-4">
                  Casement windows&apos; compression-seal design produces the tightest air seal of any operable window style, making them the right choice on west-facing walls where energy performance matters most. Andersen, Pella, and Marvin all rate their casements with the lowest air-infiltration numbers in their lineups.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Tall, Narrow Openings</h3>
                <p>
                  Many newer Garland custom homes have tall, narrow accent windows next to fireplaces, in stairwells, or beside front entries. Casements work beautifully in these tall verticals, where double-hungs would feel awkwardly proportioned.
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
                <h3 className="font-semibold text-navy-900 mb-2">Can casement windows be installed in windy areas?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, but orientation matters. Install casement windows so they open away from prevailing 
                  winds to prevent wind from catching the open sash.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are casement windows more expensive than double-hung?</h3>
                <p className="text-navy-700 text-sm">
                  Casement windows typically cost slightly more due to their complex hardware. However, their 
                  superior energy efficiency often offsets the price difference through lower utility bills.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Where are casement windows ideal?</h3>
                <p className="text-navy-700 text-sm">
                  Casement windows excel above kitchen sinks, in hard-to-reach areas, and wherever maximum 
                  ventilation or unobstructed views are desired.
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
            Experience the Casement Difference
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on casement window replacement in Garland, TX.
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
