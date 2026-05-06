import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Murphy TX | Maxwell Creek & Rolling Ridge",
  description: "Window replacement in Murphy, TX. Specialists serving Maxwell Creek, Rolling Ridge, and the master-planned communities along FM 544. Call 972-734-3158.",
  keywords: "window replacement Murphy TX, Maxwell Creek windows, Rolling Ridge windows, Murphy window installation",
};

export default function MurphyWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-murphy-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Murphy, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Window replacement for Murphy&apos;s master-planned subdivisions and the established neighborhoods along FM 544.
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
                Murphy&apos;s Master-Planned Window Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Murphy is one of the smaller cities in southwestern Collin County, but its housing stock is squarely in the master-planned 1990s-through-2000s wave. Our crews regularly work in Maxwell Creek, Rolling Ridge, North Murphy, Murphy Trails, Aviano, and the larger custom-home pockets along Murphy Road. The dominant original window product is builder-grade vinyl, and many of these units are now reaching the 20-to-25-year mark where seal failure, balance issues, and chalky frame finishes are the norm.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We replace those builder windows with mid-tier and premium products that hold up over decades: Andersen 400 Series and A-Series, Pella Lifestyle and Reserve, Marvin Elevate, and JELD-WEN Siteline. Each comes with the right Low-E glass package for the home&apos;s exposure, and we coordinate with HOA architectural committees in Maxwell Creek and the surrounding subdivisions so the install schedule isn&apos;t held up by paperwork.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Murphy is in the Collin County hail corridor, and laminated and impact-rated glass packages are an increasingly common request after recent storms. We help homeowners weigh upgraded glass against typical Murphy-area homeowner deductibles for a long-term decision that holds up.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Murphy Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Mid- and Premium-Tier Brands:</strong> Andersen, Pella, Marvin, JELD-WEN with proven North Texas track records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">HOA Submittals Handled:</strong> Maxwell Creek and Rolling Ridge architectural-committee paperwork done in advance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Savings:</strong> Low-E366 glass cuts cooling costs 25-35 percent on west and south elevations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Storm-Ready Glass:</strong> Laminated and impact-rated options for Collin County hail season</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              The Murphy Replacement Conversation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                Most Murphy calls we get fall into one of two buckets: foggy or condensation-filled IGUs that have failed across an entire elevation, or comfort-and-cost concerns about western master suites and great rooms that get hammered by afternoon sun. Both have clean, well-understood fixes with the right product specification.
              </p>
              <p>
                The third recurring topic is appearance. Murphy homes were built with intentional architectural detail, and homeowners want to maintain that look from the curb. We bring product samples, frame profiles, and grid-pattern overlays to every estimate so you can compare the options side by side.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Ready to Upgrade Your Murphy Home?
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Free in-person estimates, written quotes that include all flashing and disposal, and a labor warranty backing the manufacturer warranty. Call us, and we&apos;ll be on your driveway within days.
            </p>
            <a href="tel:972-734-3158" className="btn-primary">
              Call 972-734-3158
            </a>
          </div>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}
