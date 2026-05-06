import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Fate TX | Williamsburg & Woodcreek Specialists",
  description: "Window replacement in Fate, TX. Serving Williamsburg, Woodcreek, and Monterra subdivisions. Andersen, Pella, JELD-WEN, Marvin. Call 972-734-3158.",
  keywords: "window replacement Fate TX, Williamsburg windows, Woodcreek Fate windows",
};

export default function FateWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-fate-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Fate, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Replacement windows for Fate&apos;s fast-growing master-planned communities along I-30.
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
                Fate&apos;s New-Build Window Replacement Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Fate has been one of the fastest-growing small towns in North Texas, and the housing stock reflects it. Subdivisions like Williamsburg, Woodcreek, Monterra, and the newer phases off Hwy 66 and FM 552 are dominated by builder-grade vinyl windows installed during the 2010s and early 2020s. Many of these homes are now reaching the age where the cheapest builder-tier units are starting to show seal failure, balance issues, lock alignment problems, and chalky frame discoloration on the south and west elevations.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We replace those builder windows with mid-tier and premium products that will last the rest of the home&apos;s service life: Andersen 400 Series, Pella Lifestyle and Impervia, JELD-WEN Premium Vinyl, and Marvin Elevate. Each option carries a real manufacturer warranty, comes with proper insulating glass packages tuned for North Texas heat, and uses fusion-welded corners and reinforced meeting rails that you simply don&apos;t get in builder-grade product.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Fate is along the I-30 storm corridor, which means hail-resilient glass is a regular conversation. We help homeowners weigh laminated and impact-rated upgrades against typical Rockwall County deductibles, and we coordinate with HOAs in the master-planned communities so any change in grid pattern or frame color gets approved before installation.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-fate-tx.jpg"
                alt="Fate window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Builder-Window Upgrades</h3>
              <p className="text-navy-700">
                Replacing 2010s builder-grade vinyl with mid-tier and premium products that hold their seals and finish for decades.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Hail Resilience</h3>
              <p className="text-navy-700">
                Laminated and impact-rated glass packages that turn hail strikes into non-events along the I-30 storm corridor.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">HOA Coordination</h3>
              <p className="text-navy-700">
                Pre-installation submittals to Williamsburg, Woodcreek, and Monterra architectural committees with product datasheets and color samples.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              What We See on Fate Replacement Jobs
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                The most common request is upgrading the western elevation. Late-afternoon Texas sun hits these subdivisions hard, and the original builder glass often runs a high solar heat gain coefficient. Switching to Andersen SmartSun or Pella AdvancedComfort glass cuts the heat gain dramatically and quiets the AC.
              </p>
              <p>
                The second-most-common driver is failed weep systems. Builder-grade windows installed quickly during the construction boom sometimes have weep holes that drain into the wall cavity rather than to the exterior, eventually causing rot. We diagnose this on every estimate and address it during full-frame replacement.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Garland-Based Service Up I-30 to Fate
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              We work in Fate every week. Same crews, same trucks, same Garland-based accountability from the first phone call through the final walkthrough.
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
