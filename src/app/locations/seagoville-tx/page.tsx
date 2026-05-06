import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Seagoville TX | Garland-Based Installers",
  description: "Window replacement in Seagoville, TX. Garland-based crews serving southern Dallas County. Andersen, Pella, Marvin, and JELD-WEN options. Call 972-734-3158.",
  keywords: "window replacement Seagoville TX, Seagoville window installation, Seagoville windows",
};

export default function SeagovilleWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-seagoville-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Seagoville, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Replacement windows for Seagoville&apos;s mix of post-war bungalows, 1970s ranches, and newer infill construction.
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
                Seagoville&apos;s Trusted Replacement Window Crew
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Seagoville covers a wide stretch of southern Dallas County, with housing stock that ranges from 1940s and 1950s bungalows along the original downtown grid to 1970s and 1980s ranches in the residential additions east of S Hwy 175, plus a growing share of newer infill homes built on larger Seagoville lots. Each era has its own window challenges. The post-war homes still carry original wood double-hungs that have been painted shut, the ranch-era homes have aluminum sliders with failed weatherstripping, and the newer builds came with builder-grade vinyl that&apos;s now reaching the IGU-failure threshold.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Our Garland crews drive down 635 to Seagoville every week, and we treat the trip like any other Garland-area job. That means in-person measurement on every opening, accurate quotes that include all flashing, foam, caulk, and disposal, and brand-name products from Andersen, Pella, Marvin, and JELD-WEN that come with real manufacturer warranties. We don&apos;t install no-name imports, and we don&apos;t pad orders with screen and lock upgrades you don&apos;t need.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Seagoville lots tend to be larger than typical infill, which often means more windows per home. We help homeowners phase replacement when the whole-house total runs higher than budget, prioritizing the south- and west-facing elevations that drive cooling costs.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-seagoville-tx.jpg"
                alt="Seagoville window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Bungalow-Era Restoration</h3>
              <p className="text-navy-700">
                Tilt-in double-hungs with cottage grids and historically appropriate proportions for Seagoville&apos;s older neighborhoods.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Ranch &amp; Slider Replacement</h3>
              <p className="text-navy-700">
                Wide horizontal sliders and gliders sized to match 1970s-era openings without changing the rough-opening dimensions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Phased Whole-House Plans</h3>
              <p className="text-navy-700">
                Multi-stage replacement plans for larger Seagoville homes, prioritizing west-facing and the worst-performing units first.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Why Seagoville Homeowners Replace Their Windows
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                The biggest drivers are summer cooling costs and storm damage. Seagoville sits along the same Hwy 175 storm corridor as much of southeastern Dallas County, and the spring hail and wind that rolls through routinely takes out older single-pane and aging vinyl windows. Many Seagoville homeowners turn to laminated or impact-rated glass after a hail event for long-term peace of mind.
              </p>
              <p>
                The second driver is air sealing. Original double-hungs that no longer close fully, and aluminum sliders whose weatherstripping has crumbled, make HVAC systems run longer than they should. Modern dual-pane Low-E units with multi-point locks and continuous weatherstripping deliver an immediately noticeable comfort improvement, especially on the kitchen and dining-room walls that face the afternoon sun.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Easy to Reach From Garland
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              We&apos;re a Garland-based replacement-window company that has been serving Seagoville for years. Call us for a free in-person estimate, and we&apos;ll bring product samples to your kitchen table.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/brands/pella-windows-doors" className="btn-primary">
                Browse Pella Windows
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
