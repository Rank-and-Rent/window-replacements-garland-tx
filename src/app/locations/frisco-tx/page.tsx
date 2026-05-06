import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Frisco TX | Stonebriar, Starwood & Phillips Creek",
  description: "Window replacement in Frisco, TX. Specialists serving Stonebriar, Starwood, Phillips Creek Ranch, and Frisco&apos;s premium master-planned communities. Call 972-734-3158.",
  keywords: "window replacement Frisco TX, Stonebriar windows, Starwood windows, Phillips Creek Ranch windows",
};

export default function FriscoWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-frisco-tx-2.webp')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Frisco, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Window replacement for Frisco&apos;s premium master-planned communities and custom-home enclaves.
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
                Frisco&apos;s Premium Window Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Frisco set the template for North Texas master-planned community development. Our crews work in Stonebriar, Starwood, Phillips Creek Ranch, The Trails, Newman Village, Hollyhock, Lone Star Ranch, and the custom-home enclaves north of Main Street. The dominant housing era is the 1990s through the 2010s, which means original builder windows are now anywhere from ten to thirty years old. Many homes are entering the failed-IGU window where seal failure becomes apparent on a meaningful share of the units, especially on west and south elevations that took the brunt of the sun.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Frisco homeowners typically expect mid-tier and premium-tier replacement products that match the home&apos;s original architecture: Pella Lifestyle and Reserve, Andersen 400 and A-Series, Marvin Elevate and Signature, JELD-WEN Siteline. Each is paired with the right Low-E glass package for the home&apos;s exposure. We handle HOA architectural-committee submittals up front so the install schedule isn&apos;t held up by paperwork from Stonebriar, Starwood, or Phillips Creek Ranch boards.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Frisco is squarely in the spring storm corridor, and laminated and impact-rated glass packages are an increasingly common request after recent hail events. We help homeowners weigh upgraded glass against typical Collin County deductibles for a long-term decision that holds up.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Frisco Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Premium-Tier Products:</strong> Pella Reserve, Andersen A-Series, Marvin Signature on demand</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">HOA Submittals Handled:</strong> Stonebriar, Starwood, Phillips Creek Ranch architectural-committee paperwork done in advance</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Resale Value Protection:</strong> Quality installs that show up on inspection and listing photos</span>
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
              The Frisco Replacement Conversation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                Frisco homeowners almost always ask about appearance from the curb. The original architectural intent of these homes was set by master builders, and homeowners want to maintain or improve that look. We bring full datasheets, frame samples, and grid-pattern overlays to every estimate so you can see how a replacement product will read from the street.
              </p>
              <p>
                The other recurring conversation is about specialty shapes. Frisco homes routinely feature foyer Palladians, two-story arched units, and mulled assemblies that need careful re-creation. We document each unit with photos and rough-opening measurements, then verify the factory&apos;s shop drawings before fabrication starts.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Premium Service for Frisco Homes
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
