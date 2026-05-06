import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Sunnyvale TX | Acreage & Custom Home Service",
  description: "Window replacement in Sunnyvale, TX. Garland-based crews serving Sunnyvale&apos;s acreage estates and custom homes. Andersen, Pella, Marvin, JELD-WEN. Call 972-734-3158.",
  keywords: "window replacement Sunnyvale TX, Sunnyvale acreage windows, custom home windows Sunnyvale",
};

export default function SunnyvaleWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-sunnyvale-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Sunnyvale, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Replacement windows for Sunnyvale&apos;s acreage estates, custom homes, and the older properties along Long Creek and Tripp Road.
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
                Sunnyvale&apos;s Custom and Acreage Window Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Sunnyvale has held onto its rural feel even as the metroplex has grown around it. Most homes in Sunnyvale sit on large lots ranging from one acre to ten or more, with custom architecture across nearly every era from 1960s ranches along Town East Boulevard to modern-farmhouse builds on Tripp Road and Beltline. The original windows on these properties are rarely uniform. Our crews routinely measure homes with twenty to fifty units across multiple eras of construction, with specialty shapes, mulled assemblies, and custom grids that need careful re-creation.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We bring the right products to every Sunnyvale job: Andersen 400 Series and A-Series, Pella Lifestyle and Reserve, Marvin Elevate and Signature Ultimate, and JELD-WEN Premium Vinyl and Siteline. Larger Sunnyvale homes often warrant the upper-tier clad-wood and fiberglass options, with extended jambs to suit thicker exterior walls and stain-grade interiors that match existing trim packages. We document every existing condition, photograph every rough opening, and confirm factory lead times before we accept a deposit.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Sunnyvale lots typically have wide sun exposure on multiple elevations because of the open landscape. We specify glass packages that handle that exposure: low solar heat gain coefficients on west and south, balanced visible-light transmittance to keep interiors bright, and laminated options where wind-driven debris is a concern.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Sunnyvale Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Acreage-Friendly Scheduling:</strong> Long days on site to complete large estates efficiently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Custom-Tier Products:</strong> Andersen A-Series, Pella Reserve, Marvin Signature, JELD-WEN Custom Wood</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Open-Exposure Glass:</strong> Solar-control packages for Sunnyvale&apos;s wide western horizons</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Whole-House Quotes:</strong> Twenty to fifty windows measured and priced in a single visit</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              The Sunnyvale Replacement Conversation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                Sunnyvale homeowners almost always have multiple eras of windows in the same house, often because additions and renovations were added over time. We help homeowners decide whether to harmonize the entire elevation with one product or replace selectively in a way that respects the original architecture and budget.
              </p>
              <p>
                The other recurring conversation is about glass for the open-pasture views many Sunnyvale homes enjoy. Picture windows and large fixed assemblies need glass packages that hold up under wind load, manage solar heat gain, and keep glare in check during summer afternoons.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Sunnyvale Service With Garland Roots
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Local, in-person estimates and a Garland-based crew that has been working in Sunnyvale for years. Call us, and we&apos;ll be on your driveway within days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/brands/marvin-windows-doors" className="btn-primary">
                Browse Marvin Windows
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
