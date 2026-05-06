import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement McKinney TX | Historic Downtown & Stonebridge",
  description: "Window replacement in McKinney, TX. Specialists serving the Historic District, Stonebridge Ranch, Craig Ranch, and Tucker Hill. Call 972-734-3158.",
  keywords: "window replacement McKinney TX, Historic McKinney windows, Stonebridge Ranch windows, Craig Ranch windows",
};

export default function McKinneyWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-mckinney-tx-2.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in McKinney, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Window replacement for McKinney&apos;s Historic District, Stonebridge Ranch, Craig Ranch, and Tucker Hill.
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
                McKinney&apos;s Era-Spanning Window Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                McKinney has the most architecturally varied housing stock of any Collin County city. The Historic District around the courthouse square features Victorian, Craftsman, and Colonial Revival homes with original wood double-hungs that often need preservation-appropriate replacement. Just north and east, Stonebridge Ranch and Eldorado are dominated by 1990s-era brick traditional builds. Craig Ranch and Adriatica add 2000s and 2010s master-planned product. Tucker Hill, La Cima, and the Trinity Falls offer custom-home territory with specialty shapes and clad-wood originals.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We bring matched expertise to each era. Historic-District homes call for divided-lite double-hungs with simulated divided-lite spacers, often in Andersen 400 Woodwright or Marvin Elevate. Stonebridge and Eldorado homes typically take Pella Lifestyle and JELD-WEN Siteline products at the right price point. Tucker Hill and Trinity Falls custom homes warrant the upper-tier Pella Reserve, Andersen A-Series, and Marvin Signature lines, with stain-grade interiors and specialty shapes built to factory shop drawings.
              </p>
              <p className="text-navy-700 leading-relaxed">
                We handle architectural-committee submittals up front for every HOA in McKinney that requires them, and we coordinate with the City of McKinney&apos;s Historic Preservation department when projects fall inside the historic district&apos;s overlay.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">McKinney Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Historic-Appropriate Products:</strong> Divided-lite double-hungs that meet preservation standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">HOA Coordination:</strong> Stonebridge Ranch, Craig Ranch, Adriatica architectural-committee submittals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Custom-Tier Service:</strong> Andersen A-Series, Pella Reserve, Marvin Signature for Tucker Hill and Trinity Falls</span>
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
              The McKinney Replacement Conversation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                Historic McKinney homeowners care most about exterior appearance from the street. Sticking profiles, grid patterns, and frame depths all matter. We bring product samples from multiple manufacturers so you can compare side-by-side before committing.
              </p>
              <p>
                Stonebridge Ranch and Craig Ranch homeowners typically prioritize energy efficiency and seal-failure remediation. Many original builder IGUs are well past their service life, and the cooling-cost improvement after replacement is immediately visible on the next billing cycle.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Serving McKinney with Expertise
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              From the Historic District to the newest Trinity Falls phase, our Garland-based crews bring the right expertise to every McKinney home. Call us for a free in-person estimate.
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
