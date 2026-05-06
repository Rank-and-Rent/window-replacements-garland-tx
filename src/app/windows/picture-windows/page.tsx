import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Picture Window Replacement Garland TX | Maximum Light & Views",
  description: "Picture windows for Lake Ray Hubbard waterfront and Firewheel greenbelt views. Fixed glass with the tightest U-factor, hail-rated laminated options for the Hwy 78 storm corridor. Marvin, Andersen.",
  keywords: "picture windows Garland TX, fixed windows, large windows, window replacement Garland",
};

export default function PictureWindows() {
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
            <li className="text-navy-900 font-medium">Picture Windows</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/windows/picture-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Picture Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Frame your views with large, unobstructed expanses of glass.
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
                Maximum Light, Unobstructed Views
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Picture windows are fixed, non-operable windows designed to maximize natural light and 
                frame exterior views like living artwork. Without operating hardware or meeting rails, 
                picture windows offer the largest possible glass area for any given opening.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                For Garland homes with beautiful backyard landscaping, mature trees, or scenic vistas, 
                picture windows create a direct visual connection to the outdoors. They flood interiors 
                with daylight, making rooms feel larger and more inviting while potentially reducing 
                the need for artificial lighting during daytime hours.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Because picture windows have no moving parts, they achieve the best possible energy 
                efficiency ratings. The sealed unit eliminates potential air infiltration paths, making 
                them excellent choices for energy-conscious homeowners concerned about Garland&apos;s hot summers.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Picture Window Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Maximum Glass Area:</strong> No hardware or rails to obstruct views</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Best Energy Efficiency:</strong> Sealed units with no moving parts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Natural Lighting:</strong> Flood interiors with daylight</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Low Maintenance:</strong> No hardware to maintain or adjust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Design Flexibility:</strong> Available in custom shapes and sizes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Value Pricing:</strong> Simpler construction keeps costs down</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Picture Window Use Cases */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Where Picture Windows Shine in Garland Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Lake Ray Hubbard Frontage</h3>
                <p className="mb-4">
                  Garland homes with views of Lake Ray Hubbard or its inlet creeks deserve windows that showcase the water without unnecessary mullions chopping up the view. Large fixed picture units can span 6 to 8 feet wide with proper structural support, framing the lake like a piece of art.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">Two-Story Foyer Drama</h3>
                <p>
                  Newer Firewheel and Naaman Forest custom homes often feature two-story foyers with stacked picture windows that flood the entry with daylight. Replacement units need to match the original architectural intent in proportion and grid pattern, and we order these from Andersen and Pella with simulated divided lites where the original used true divided lites.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Mid-Century Living Rooms</h3>
                <p className="mb-4">
                  Many 1960s and 1970s Garland ranches feature wide horizontal picture windows in the main living room, often flanked by tall double-hungs or sliders. We replace these as a single mulled unit with a fixed center and operable flankers, preserving the architectural proportions while bringing modern Low-E performance to the entire opening.
                </p>
                <h3 className="font-semibold text-navy-900 mb-3">West-Facing Heat Control</h3>
                <p>
                  Picture windows on west elevations need the strongest solar-control glass package because they don&apos;t open for ventilation. SunDefense and SmartSun coatings cut solar heat gain by 50 percent or more compared to standard Low-E, which is the difference between a usable room and one nobody sits in during July.
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
                <h3 className="font-semibold text-navy-900 mb-2">Can picture windows be combined with operable windows?</h3>
                <p className="text-navy-700 text-sm">
                  Absolutely. Picture windows are often flanked by casement or awning windows to add 
                  ventilation while maintaining the dramatic center view.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How large can picture windows be?</h3>
                <p className="text-navy-700 text-sm">
                  Picture windows can be quite large, with some manufacturers offering units up to 8 feet 
                  wide or more. Structural support and handling limitations determine maximum sizes.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are picture windows energy efficient in Texas heat?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, with proper Low-E glass and coatings. Modern picture windows block significant UV 
                  and infrared radiation while allowing visible light through.
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
            Frame Your Perfect View
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on picture window replacement in Garland, TX.
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
