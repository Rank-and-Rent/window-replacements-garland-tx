import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Allen TX | Twin Creeks & Watters Crossing",
  description: "Window replacement in Allen, TX. Specialists serving Twin Creeks, Watters Crossing, Starcreek, and Allen&apos;s premium subdivisions. Call 972-734-3158.",
  keywords: "window replacement Allen TX, Twin Creeks windows, Watters Crossing windows, Starcreek windows",
};

export default function AllenWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-allen-tx-2.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Allen, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Premium window replacement for Twin Creeks, Watters Crossing, Starcreek, and Allen&apos;s established subdivisions.
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
                Allen&apos;s Premium Window Replacement Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Allen has long been one of the most sought-after suburbs in Collin County, and the housing stock reflects it. Our crews work in Twin Creeks, Watters Crossing, Starcreek, Cottonwood Bend, Cottonwood Creek, Suncreek, Allen Heights, and the larger custom-home pockets along Stacy Road and Bethany Drive. Most Allen homes were built between the late 1990s and the late 2010s, which means original builder windows are now reaching the age where seal failure, balance issues, and chalky frame finishes are the norm rather than the exception.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Allen homeowners typically expect mid-tier and premium-tier replacement products: Andersen 400 Series and A-Series, Pella Lifestyle and Reserve, Marvin Elevate and Signature, and JELD-WEN Siteline. Each is paired with the right Low-E glass package for the home&apos;s exposure, with attention to grid patterns and frame colors that match HOA architectural-committee requirements. We handle those submittals directly so the install schedule isn&apos;t held up by paperwork.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Allen is along the same spring storm corridor as much of Collin County, and laminated and impact-rated glass options are increasingly part of the conversation. We help homeowners weigh the upgrade premium against typical Allen-area homeowner deductibles for a smart long-term decision.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Allen Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Mid- and Premium-Tier Brands:</strong> Andersen, Pella, Marvin, JELD-WEN with proven North Texas track records</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">HOA Submittals Handled:</strong> Twin Creeks, Watters Crossing, and Starcreek architectural-committee paperwork done in advance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Resale Value Protection:</strong> Quality installations that show up on inspection reports and listing photos</span>
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
              Why Allen Homeowners Replace Their Windows
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                Many Allen homes are entering their 20-year mark, and that&apos;s the typical end-of-life threshold for builder-grade insulating glass. Foggy panes, condensation between the glass, and balances that no longer hold the sash up are the most common complaints we hear on first calls.
              </p>
              <p>
                The second-most-common driver is comfort on west-facing master suites and great rooms. Allen subdivisions are oriented along east-west grids that put a lot of glass facing into the worst of the afternoon sun. Andersen SmartSun and Pella AdvancedComfort glass packages cut solar heat gain dramatically, quieting the AC and making those rooms genuinely usable in July.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Excellence for Allen Homes
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Free in-person estimates, written quotes, and a labor warranty backing the manufacturer warranty. Call us, and we&apos;ll be on your driveway within days.
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
