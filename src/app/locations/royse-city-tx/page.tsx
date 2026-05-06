import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Royse City TX | Verandah & Hayfield Specialists",
  description: "Window replacement in Royse City, TX. Specialists serving Verandah, Hayfield, Waterscape, and the new master-planned communities along I-30. Call 972-734-3158.",
  keywords: "window replacement Royse City TX, Verandah windows, Hayfield windows, Waterscape windows",
};

export default function RoyseCityWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-royse-city-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Royse City, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Window replacement for Royse City&apos;s master-planned communities and the older neighborhoods around the original townsite.
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
                Trusted Royse City Window Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Royse City has expanded rapidly along the I-30 corridor, with master-planned subdivisions like Verandah, Hayfield, Waterscape, Waterscape Estates, and The Crossing adding new homes alongside the older housing stock around the original townsite. Most of the newer homes have builder-grade vinyl windows from the 2010s and early 2020s, and many are now showing the typical signs of mid-life issues: foggy IGUs, sticky balances, and chalky frame finishes after years of west-facing exposure.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The older neighborhoods near downtown Royse City carry a different challenge. Original wood double-hungs and aluminum sliders from the 1960s through the 1980s often need full replacement, with rough openings that have settled out of square and brick veneer that requires careful exterior trim work. We specify Andersen 400, Pella Lifestyle, JELD-WEN Premium Vinyl, and Marvin Elevate for these projects, with the right grid patterns and proportions to match each era of construction.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Royse City is squarely in the spring storm corridor, and laminated and impact-rated glass packages are an increasingly common request. We help homeowners weigh the upgrade premium against typical Rockwall County deductibles for a smart long-term decision.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-royse-city-tx.jpg"
                alt="Royse City window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Master-Planned Expertise</h3>
              <p className="text-navy-700">
                Daily work in Verandah, Hayfield, and Waterscape, with HOA submittals handled before installation day.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Storm-Ready Glass</h3>
              <p className="text-navy-700">
                Laminated and impact-rated packages tuned for the I-30 spring storm corridor that crosses Royse City.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Older-Home Specialists</h3>
              <p className="text-navy-700">
                Careful replacement in the older homes near downtown Royse City, with brick-veneer trim work done right.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Royse City Replacement Drivers
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                The biggest reason Royse City homeowners call is summer power bills. Builder-grade glass from a decade ago typically runs a high solar heat gain coefficient, which the AC has to fight all afternoon. Switching to Andersen SmartSun, Pella AdvancedComfort, or Marvin Low-E366 packages produces a measurable difference on the next billing cycle.
              </p>
              <p>
                The second-most-common driver is preparing the home for sale. With Royse City home values continuing to climb, homeowners are investing in the visible upgrades that show up on inspection reports and listing photos. New windows hit both targets and reliably recoup a strong share of the cost in resale value.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Garland Service Up I-30 to Royse City
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              Our crews drive Royse City weekly. Free in-person estimates, written quotes, and a labor warranty that backs the manufacturer warranty.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/brands/jeld-wen-windows-doors" className="btn-primary">
                Browse JELD-WEN Windows
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
