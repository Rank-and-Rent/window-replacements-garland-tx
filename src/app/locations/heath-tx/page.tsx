import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Heath TX | Lake Ray Hubbard Custom Homes",
  description: "Premium window replacement in Heath, TX. Custom-home specialists serving Lake Ray Hubbard properties. Andersen A-Series, Pella Reserve, Marvin Signature. Call 972-734-3158.",
  keywords: "window replacement Heath TX, Heath custom home windows, Lake Ray Hubbard windows",
};

export default function HeathWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-heath-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Heath, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Custom-home window specialists for Heath&apos;s Lake Ray Hubbard estates and large-acreage residences.
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
                Heath Custom Homes Deserve Custom Windows
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Heath is one of the most exclusive lakefront communities in the eastern metroplex. Most homes here are custom builds set on substantial Lake Ray Hubbard lots, with elevations dominated by tall picture windows, wraparound covered porches, two-story great rooms, and master suites positioned to take advantage of lake views. The original windows on these homes were rarely builder-grade. They were spec&apos;d as part of the architecture, often clad-wood or fiberglass with custom grids, mulled assemblies, and specialty shapes that need careful re-creation when the time comes for replacement.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We specialize in custom-tier windows for Heath homes: Andersen A-Series, Pella Reserve and Architect Series, Marvin Signature Ultimate, and JELD-WEN Custom Wood. Every project starts with a measure visit, sketches of unusual mulls and arches, and a written specification that goes back to the manufacturer for direct review. The homes here often need impact-rated glass on the lake elevation for wind-driven debris, plus solar-control Low-E packages tuned to manage afternoon glare reflecting off the water.
              </p>
              <p className="text-navy-700 leading-relaxed">
                We coordinate with the Heath HOA where applicable and pull City of Heath permits when openings change size. Our crews work cleanly inside high-end interiors, protecting hardwood floors, plaster trim, and custom millwork at every step.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-heath-tx.jpg"
                alt="Heath window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Custom-Tier Brands</h3>
              <p className="text-navy-700">
                Andersen A-Series, Pella Reserve, Marvin Signature, and JELD-WEN Custom Wood, with stain-grade interiors and authentic divided lites.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Lake-Facing Glass</h3>
              <p className="text-navy-700">
                Solar-control Low-E and laminated glass packages tuned for the heat, glare, and wind exposure of Lake Ray Hubbard frontage.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">High-End Interior Care</h3>
              <p className="text-navy-700">
                Floor protection, dust containment, and meticulous trim repair on stained millwork, plaster, and hardwoods.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              The Heath Window Replacement Conversation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                Heath homeowners almost always ask about three things: how the new windows will look from the outside compared to the originals, how the manufacturer&apos;s warranty handles seal failure on a custom unit, and how long lead times will be for specialty shapes. We bring full datasheets, side-by-side frame samples, and current factory lead times to every estimate so you can make an informed decision.
              </p>
              <p>
                The other Heath-specific issue is wind and water performance. Lake-facing elevations see sustained gusts during spring thunderstorm activity, plus wind-driven rain that finds any weakness in flashing or weep design. We specify Performance Grade ratings appropriate for waterfront exposure and install with two-stage flashing details that exceed minimum code requirements.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Lake-Area Service From a Garland Crew
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              We&apos;re based in Garland and run jobs around Lake Ray Hubbard daily. That means quick estimate visits, predictable scheduling, and the kind of follow-through Heath homeowners expect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/brands/marvin-windows-doors" className="btn-primary">
                Explore Marvin Windows
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
