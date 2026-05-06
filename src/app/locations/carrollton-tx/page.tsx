import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Carrollton TX | Old Town & Castle Hills",
  description: "Window replacement in Carrollton, TX. Specialists serving Old Town, Castle Hills, Indian Creek, Hebron, and the Trinity Mills corridor. Call 972-734-3158.",
  keywords: "window replacement Carrollton TX, Old Town Carrollton windows, Castle Hills windows, Indian Creek windows",
};

export default function CarrolltonWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-carrollton-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Carrollton, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Window replacement for Old Town Carrollton, Castle Hills, Indian Creek, Hebron, and the Trinity Mills corridor.
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
                Carrollton&apos;s Era-Spanning Window Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Carrollton sits at the crossroads of Dallas, Denton, and Collin counties, and its housing stock is one of the most varied in the metroplex. Old Town Carrollton features post-war bungalows and 1950s ranches with original wood double-hungs. The 1970s and 1980s tract neighborhoods around Trinity Mills carry aluminum sliders and builder vinyl. Indian Creek and Castle Hills represent the master-planned wave from the 1990s and 2000s, while Hebron and the newer subdivisions north of George Bush Turnpike are filled with builder-grade vinyl from the late 2000s and 2010s. Each era needs a different replacement approach.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We bring matched expertise to every Carrollton job. For Old Town, that often means historically appropriate divided-lite double-hungs from Andersen 400 or Marvin Elevate. For 1970s and 1980s ranches, it&apos;s vinyl gliders and double-hungs sized to the original openings. For Castle Hills and Indian Creek, it&apos;s premium-tier Pella Lifestyle and Andersen A-Series products that match HOA grid and color requirements. We handle architectural-committee submittals so the install doesn&apos;t get held up.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Carrollton homes near the Trinity Mills, I-35E, and President George Bush corridors deal with steady highway noise. We specify laminated glass packages with acoustic interlayers when sound transmission is a concern, and the perceived quiet improvement is dramatic.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-carrollton-tx.jpg"
                alt="Carrollton window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Premium Brands</h3>
              <p className="text-navy-700">
                Andersen 400 and A-Series, Pella Lifestyle and Reserve, JELD-WEN Siteline, Marvin Elevate, all backed by comprehensive manufacturer warranties.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">HOA Coordination</h3>
              <p className="text-navy-700">
                Pre-installation submittals to Castle Hills, Indian Creek, and Hebron architectural committees. Approved before we schedule the install.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Highway Noise Solutions</h3>
              <p className="text-navy-700">
                Laminated acoustic-interlayer glass for homes near Trinity Mills, I-35E, and George Bush Turnpike that materially cuts traffic noise.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              The Carrollton Replacement Conversation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                The most common driver in Carrollton is failed insulating glass. Builder-grade IGUs from the 1990s and 2000s typically have a 15-to-25-year service life, and we&apos;re right in the middle of that wave now. Foggy glass, condensation between the panes, and visible spacer failure are the hallmarks.
              </p>
              <p>
                The second-most-common is curb-appeal upgrade. Carrollton&apos;s real-estate values continue to climb, and homeowners are investing in the visible improvements that show up on listing photos and inspection reports. New windows hit both targets and reliably recoup a strong share of the investment in resale value.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Garland-Based Service to Every Carrollton ZIP
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              Free in-person estimates, written quotes that include all flashing and disposal, and a labor warranty that backs the manufacturer warranty. Call us, and we&apos;ll be on your driveway within days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/brands/andersen-windows-doors" className="btn-primary">
                Browse Andersen
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
