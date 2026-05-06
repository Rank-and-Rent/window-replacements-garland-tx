import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Garland TX | Expert Installation Services",
  description: "Professional window replacement throughout Garland, TX. Serving Firewheel, Camelot, North Garland, Duck Creek, and Lake Ray Hubbard neighborhoods. Andersen, Pella & JELD-WEN windows. Call 972-734-3158",
  keywords: "window replacement Garland TX, Garland window installation, Garland windows, Firewheel windows, North Garland windows",
};

export default function GarlandWindowReplacement() {
  return (
    <main>
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Premium window installation for Firewheel, Camelot, Duck Creek, North Garland, and every neighborhood in between.
          </p>
          <a href="tel:972-734-3158" className="btn-primary">
            Call 972-734-3158
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Garland&apos;s Trusted Window Replacement Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Garland is one of the most architecturally varied cities in Dallas County. From the 1950s and 1960s ranch homes that line Walnut Street, Buckingham Road, and the original neighborhoods around Heritage Crossing, to the master-planned subdivisions surrounding Firewheel Town Center, the housing stock here demands a contractor who understands every era. Our crews replace windows daily across Camelot, Eastern Hills, Oakridge, Club Hill, Naaman Forest, Bradfield Estates, Heatherwood, Liberty Grove, Hillside Village, and the lakefront communities along Lake Ray Hubbard. We know which 1970s tract homes still have original aluminum-framed single panes leaking conditioned air, and which Firewheel-era homes need stronger laminated glass on their second-story west elevations.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Garland&apos;s North Texas climate is unforgiving on windows. Summer highs routinely sit above 100&deg;F for weeks at a time, UV exposure cooks south- and west-facing glass, and the spring storm season brings the kind of wind, rain, and hail that exposes every weak seal. We specify Andersen, Pella, JELD-WEN, and Marvin replacement windows with Low-E coatings calibrated for this climate, argon-filled IGUs, reinforced meeting rails, and impact-rated options for homeowners who want hail resilience. Every install includes new flashing, foam-and-caulk perimeter sealing, and verification that the rough opening is square before the new unit goes in.
              </p>
              <p className="text-navy-700 leading-relaxed">
                We&apos;re a Garland-based crew, not a national call center routing leads. Estimates are free, in-person, and we measure every opening rather than relying on customer-supplied dimensions. That precision is what allows us to honor brand warranties and stand behind a labor warranty of our own.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-garland-tx.jpg"
                alt="Garland window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Services */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Premium Brands</h3>
              <p className="text-navy-700">
                Andersen 400 and A-Series, Pella Reserve and Lifestyle, Marvin Elevate and Essential, JELD-WEN Siteline and Premium Vinyl backed by full manufacturer warranties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Expert Installation</h3>
              <p className="text-navy-700">
                Factory-trained Garland installers, proper flashing details for North Texas wind-driven rain, and exact-fit measurements taken from the rough opening every time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Energy Efficiency</h3>
              <p className="text-navy-700">
                Low-E366 and SunDefense glass packages cut summer heat gain on Oncor bills and qualify many Garland homes for utility rebates and federal energy credits.
              </p>
            </div>
          </div>

          {/* Neighborhoods */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Garland Neighborhoods We Serve Daily
            </h2>
            <div className="grid md:grid-cols-3 gap-8 text-navy-700">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">North Garland</h3>
                <p className="text-sm leading-relaxed">
                  Firewheel, Camelot, Naaman Forest, Heatherwood, and the master-planned subdivisions north of Campbell Road. Larger newer homes with two-story foyers, transom windows, and west-facing master suites that benefit most from solar-control glass.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Central &amp; Downtown</h3>
                <p className="text-sm leading-relaxed">
                  Heritage Crossing, Embree Park, the historic downtown grid, Eastern Hills, and Club Hill. Mid-century ranches and post-war bungalows where original wood and aluminum windows have run their course. We handle non-standard openings here every week.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">South &amp; East Garland</h3>
                <p className="text-sm leading-relaxed">
                  South Garland, Hillside Village, Bradfield Estates, Oakridge, Liberty Grove, and Duck Creek. Tract homes from the 1970s and 1980s, plus the lakefront properties facing Lake Ray Hubbard with high humidity exposure that demands solid weatherstripping.
                </p>
              </div>
            </div>
          </div>

          {/* Local Knowledge */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
              <h3 className="font-serif text-xl text-navy-900 mb-3">Storm and Hail Performance</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                Garland sits in one of the more active hail corridors in North Texas, with multiple notable storms in the last decade tracking right over the city. Modern laminated and impact-resistant glass packages from Andersen, Pella, and Marvin survive the kind of wind-driven debris that destroys older single-pane units. We help homeowners weigh upgraded glass against insurance deductibles for a smart long-term decision.
              </p>
            </div>
            <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
              <h3 className="font-serif text-xl text-navy-900 mb-3">Cooling Costs and Oncor Bills</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                A 1970s aluminum slider with single glazing can have a U-factor four to five times worse than a modern dual-pane Low-E unit. For Garland homes with original windows, replacement typically cuts summer cooling costs 20-35 percent, often paying back the upgrade within seven to twelve years before factoring in comfort and noise reduction along Hwy 78, I-635, and I-30.
              </p>
            </div>
            <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
              <h3 className="font-serif text-xl text-navy-900 mb-3">Hard-Water and Sun-Bleached Frames</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                Garland&apos;s water supply runs hard, leaving spotting on glass that&apos;s irrigated by sprinklers. Pair that with relentless Texas sun, and white vinyl frames installed two decades ago often look chalky and yellowed today. Modern co-extruded vinyl and Fibrex composite frames hold their color far better, and clad-wood lines from Marvin and Pella offer factory finishes engineered for UV exposure.
              </p>
            </div>
            <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
              <h3 className="font-serif text-xl text-navy-900 mb-3">Garland Permits and HOAs</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                The City of Garland requires a permit for window replacement when openings change size or structural framing is touched. We pull permits when needed and coordinate with HOA architectural committees in Firewheel, Camelot, and the lakefront communities so that grid patterns, exterior colors, and trim profiles match neighborhood standards before installation day.
              </p>
            </div>
          </div>

          {/* Service Area */}
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Local, Garland-Based, and Easy to Reach
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              We live and work in Garland, with daily routes through every ZIP code from 75040 to 75044. That means same-week estimates, fast service callbacks, and a crew that already knows your neighborhood&apos;s housing stock. Call us, and we&apos;ll be on your driveway within days, not weeks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows/double-hung-windows" className="btn-primary">
                View Window Styles
              </Link>
              <a href="tel:972-734-3158" className="btn-primary">
                Call 972-734-3158
              </a>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}
