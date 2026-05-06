import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awning Window Replacement Garland TX | Rain-Proof Ventilation",
  description: "Professional awning window replacement in Garland, TX. Top-hinged design for ventilation during rain. Perfect for bathrooms and basements. Call 972-734-3158.",
  keywords: "awning windows Garland TX, rain ventilation windows, bathroom windows, window replacement Garland",
};

export default function AwningWindows() {
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
            <li className="text-navy-900 font-medium">Awning Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/windows/awning-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Awning Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Fresh air even during Texas rainstorms with top-hinged convenience.
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
                Ventilation Rain or Shine
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Awning windows are hinged at the top and swing outward from the bottom, creating a natural 
                awning effect that deflects rain while allowing fresh air to enter. This unique design makes 
                them perfect for bathrooms, kitchens, and basements where ventilation is needed regardless 
                of weather conditions.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                In Garland, where afternoon thunderstorms are common during summer months, awning windows let 
                you maintain ventilation without worrying about rain entering your home. The outward-opening 
                sash acts as a shield, directing water away from the opening.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Like casement windows, awning windows feature a compression seal design that provides 
                excellent energy efficiency. The crank mechanism pulls the sash tightly against weatherstripping 
                when closed, minimizing air infiltration and maximizing your HVAC efficiency.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Awning Window Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Rain-Proof Ventilation:</strong> Keep windows open during light rain</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Privacy-Friendly:</strong> Higher placement maintains privacy while ventilating</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Excellent Seal:</strong> Compression-style closure for energy efficiency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Basement-Perfect:</strong> Ideal for below-grade installations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Easy Operation:</strong> Simple crank mechanism for smooth control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Stackable:</strong> Can be combined with picture windows for drama</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Where Awnings Work in Garland Homes */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Where Awning Windows Work Best in a Garland Home
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Above and Below Picture Windows</h3>
                <p className="mb-4">
                  The most common awning-window application we install in Garland is as a transom or operable accent above a large fixed picture window. The picture unit captures the view, the awning above it provides ventilation, and the rain-proof design means homeowners can leave the awning cracked open during a typical North Texas afternoon thunderstorm without worrying about water intrusion.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Bathrooms and Powder Rooms</h3>
                <p>
                  Awnings sit higher in the wall than typical sliders or double-hungs, which provides natural privacy in bathrooms while still letting steam and humidity escape. The compression-seal design also locks tight against the standing humidity that bathrooms generate.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Kitchens Above Countertops</h3>
                <p className="mb-4">
                  Reaching across a deep countertop to operate a double-hung sash gets old quickly. Awning windows with crank operation are easy to open from the front edge of the counter, and the rain-deflecting geometry means they can stay open during a quick storm while a dish dries.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Stairwell and Hallway Walls</h3>
                <p>
                  Many older Garland ranches have narrow stairwell or hallway openings that need ventilation but are too small or oddly placed for double-hungs. Awnings fit beautifully in these spots and operate easily even in awkward locations.
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
                <h3 className="font-semibold text-navy-900 mb-2">Where are awning windows commonly installed?</h3>
                <p className="text-navy-700 text-sm">
                  Bathrooms, kitchens above countertops, basements, and above or below picture windows are 
                  popular locations. They work well anywhere privacy and rain protection are priorities.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can awning windows be combined with other window types?</h3>
                <p className="text-navy-700 text-sm">
                  Absolutely. Awning windows are often paired with large picture windows to add ventilation 
                  to an otherwise fixed installation.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How do awning windows handle heavy rain?</h3>
                <p className="text-navy-700 text-sm">
                  In light to moderate rain, awning windows effectively deflect water. During heavy storms, 
                  we recommend closing them to prevent water intrusion.
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
            Ready for Fresh Air, Rain or Shine?
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on awning window replacement in Garland, TX.
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
