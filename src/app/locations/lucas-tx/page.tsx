import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Lucas TX | Acreage & Custom Home Specialists",
  description: "Window replacement in Lucas, TX. Custom and large-acreage home specialists serving the Collin County area. Andersen, Pella, Marvin custom orders. Call 972-734-3158.",
  keywords: "window replacement Lucas TX, Lucas custom home windows, acreage home windows",
};

export default function LucasWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-lucas-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Lucas, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Acreage and custom-home window specialists for Lucas, Brockdale, and the surrounding Collin County estates.
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
                Custom Windows Built for Lucas Estates
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Lucas has a different feel than the neighborhoods just south of it. Most homes here sit on one to five acres, with custom architecture that ranges from Hill-Country traditional to modern farmhouse to French country. Original windows on these estates were typically clad-wood or fiberglass at the higher end, with specialty shapes, mulled assemblies, transoms, and authentic divided lites. When the time comes to replace them, like-for-like specification matters. The wrong frame depth, the wrong grid pattern, or the wrong sticking profile can change how the entire elevation reads from the road.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We bring custom-tier expertise to every Lucas project. Andersen A-Series, Pella Reserve and Architect Series, Marvin Signature Ultimate, and JELD-WEN Custom Wood are all available with stain-grade interiors, extended jambs for thicker exterior walls, simulated divided lites with internal spacers, and specialty shapes that match the original architect&apos;s intent. We measure every opening, document every existing condition, and coordinate factory lead times so you know what to expect.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Our crews work cleanly inside high-end interiors. We protect floors, contain dust, repair plaster and stained trim back to its original condition, and walk the punch-list with you before we leave the property.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-lucas-tx.jpg"
                alt="Lucas window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Specialty Shapes</h3>
              <p className="text-navy-700">
                Trapezoids, eyebrows, half-rounds, and arched units that re-create the original Lucas architectural lines.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Acreage-Friendly Scheduling</h3>
              <p className="text-navy-700">
                Long days on site to complete acreage homes efficiently, with material staging that respects driveways, landscaping, and gates.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">High-End Finish Care</h3>
              <p className="text-navy-700">
                Stain-grade interiors finished in the field, color-matched exteriors, and trim work that respects custom millwork.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              Common Lucas Window Replacement Drivers
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                The biggest driver in Lucas is failed insulating glass. Even higher-end clad-wood windows from the early 2000s eventually see seal failure, and on a home with thirty or forty units, the cost of swapping individual sashes adds up. Whole-elevation replacement with a current premium product is often the better long-term value, and it allows for upgraded glass packages tuned to the home&apos;s exposure.
              </p>
              <p>
                The second is renovation paired with energy upgrades. Lucas estates are often updated for resale or for the next chapter of family use, and new windows are central to that work. We coordinate with general contractors, architects, and interior designers when the project calls for it, sequencing window delivery to match the broader construction schedule.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Lucas Service From a Garland Crew
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              We&apos;re based in Garland and have spent years working in Lucas, Allen, McKinney, and the surrounding communities. Call us for a free in-person measure and quote, and we&apos;ll bring product samples to the property.
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
