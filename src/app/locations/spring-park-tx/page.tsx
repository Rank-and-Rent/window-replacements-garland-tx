import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Spring Park Garland TX | Mid-Century Specialists",
  description: "Window replacement in Spring Park, Garland TX. Specialists in mid-century ranch homes with steel-frame and aluminum single-pane originals. Andersen, Pella, JELD-WEN. Call 972-734-3158.",
  keywords: "window replacement Spring Park Garland TX, Spring Park windows, mid-century window replacement Garland",
};

export default function SpringParkWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-spring-park-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Spring Park, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Replacement windows tailored to the mid-century ranches of Spring Park and the surrounding Garland neighborhoods.
          </p>
          <a href="tel:972-734-3158" className="btn-primary">
            Call 972-734-3158
          </a>
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Mid-Century Window Expertise in Spring Park
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Spring Park sits in the heart of established Garland, where most homes were built between the late 1950s and early 1970s. The defining housing stock here is the long, low-slung Texas ranch with original aluminum single-pane sliders and double-hungs, plus the occasional steel-frame casement on the north side of the house. After fifty-plus years, those windows are simply done. The frames have oxidized, the glazing putty has cracked, the rollers and balances have worn out, and the single panes are responsible for an enormous share of the energy lost in summer.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We replace windows in Spring Park homes nearly every week, which means our crews already know the quirks: out-of-square openings settled over decades, brick veneer that requires careful exterior trim work, and the occasional load-bearing header that needs sister-framing before a new unit goes in. We specify Andersen 400 Series, JELD-WEN Premium Vinyl, and Pella Lifestyle products in proportions that match a mid-century ranch, with grid patterns and frame profiles that look right on these homes.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Our installs include full perimeter foam-and-caulk, new flashing, and re-insulated wall cavities where we find missing or settled batt insulation around the original openings. The result is a Spring Park ranch that feels like a different house in July.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-spring-park-tx.jpg"
                alt="Spring Park window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Ranch-Era Proportions</h3>
              <p className="text-navy-700">
                Wide horizontal sliders, short triple-stack picture-and-flanker assemblies, and the proportions that look right on a 1960s Texas ranch.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Brick &amp; Stucco Detailing</h3>
              <p className="text-navy-700">
                Careful exterior trim work, color-matched aluminum capping, and weatherproof flashing that respects original brick veneer.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Real Energy Savings</h3>
              <p className="text-navy-700">
                Replacing 1960s aluminum singles with modern Low-E double-pane glass typically cuts cooling costs 25-35 percent in Spring Park homes.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Spring Park&apos;s Most Common Replacement Triggers
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                The most common call we get from Spring Park is about windows that no longer open. Decades of paint, dust, and wear have seized aluminum sliders and locked old double-hungs. Combined with single-pane glass that radiates summer heat right into the living room, the homeowner is ready for an overhaul. Modern dual-pane Low-E units glide smoothly, latch securely, and stop the heat at the glass instead of letting it pour into the AC return.
              </p>
              <p>
                The second-most-common trigger in Spring Park is preparing a long-held family home for sale or a refinance appraisal. New windows are one of the few exterior improvements that show up on every inspection report and almost always pay back a meaningful share of cost in resale value. We work with homeowners on phased replacement when budget calls for it, prioritizing the worst-performing elevations first.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Spring Park Service With Garland Roots
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              We&apos;re a Garland-based company, not a national lead aggregator. Same crews, same trucks, same accountability from estimate through punch-list. Call us for a free, no-pressure measurement and quote.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows/double-hung-windows" className="btn-primary">
                Explore Window Styles
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
