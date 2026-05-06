import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Balch Springs TX | Garland-Based Crews",
  description: "Window replacement in Balch Springs, TX. Garland-based crews serving Dallas County&apos;s southeastern suburbs. Andersen, Pella, JELD-WEN, Marvin. Call 972-734-3158.",
  keywords: "window replacement Balch Springs TX, Balch Springs windows, southeast Dallas County windows",
};

export default function BalchSpringsWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-balch-springs-tx.png')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Balch Springs, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Window replacement for Balch Springs&apos; mid-century ranches, post-war bungalows, and newer infill homes.
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
                Balch Springs Window Replacement Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Balch Springs sits in southeastern Dallas County, where most homes were built between the 1950s and the 1980s on standard suburban lots. The dominant housing types are mid-century ranches with low-slope roofs and original aluminum-framed sliders, plus 1970s and 1980s tract homes that came with builder-grade single-pane glass. Both eras need a thoughtful replacement approach today, because the original windows are responsible for a significant share of summer heat gain, drafts in winter, and the road-noise transmission from Hwy 175 and I-635.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We replace windows in Balch Springs nearly every week. Our standard products for this market are JELD-WEN Premium Vinyl, Andersen 400 Series, Pella Lifestyle, and Marvin Elevate, each paired with the right Low-E glass package to manage North Texas heat. Many Balch Springs homes have non-standard rough-opening sizes left over from the original aluminum frames, and we handle those custom openings without forcing homeowners into smaller replacement units that change the elevation&apos;s look.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Honest, written quotes that include all flashing, foam, caulk, and disposal — no upcharges sprung on installation day. We work cleanly inside the home, vacuum the work area when we finish, and stand behind both the manufacturer warranty and our own labor warranty.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Balch Springs Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Honest Written Quotes:</strong> All flashing, foam, caulk, and disposal included up front</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Savings:</strong> Replacing 1970s singles cuts cooling costs 25-35 percent on south and west walls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Garland Crew:</strong> Same crews from estimate through punch-list, no subcontractor handoffs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Highway Noise Reduction:</strong> Laminated glass packages for homes near I-635 and Hwy 175</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              The Balch Springs Replacement Conversation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                The biggest reason Balch Springs homeowners call is rising power bills. A 1970s aluminum slider with single glazing has a U-factor four to five times worse than a modern dual-pane Low-E unit. The cooling savings after replacement are noticeable on the very first Oncor bill in July or August.
              </p>
              <p>
                The second-most-common driver is highway noise. Homes near I-635, I-30, or Hwy 175 deal with steady traffic noise that older windows simply do nothing to block. Laminated glass with an acoustic interlayer drops perceived noise dramatically, and the upgrade premium is small relative to the comfort improvement.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Quality Windows, Honest Service
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Get your free in-person estimate. Our Garland-based crew has spent years working in Balch Springs, and we&apos;ll give you straight answers on product, scheduling, and price.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows/sliding-windows" className="btn-primary">
                View Sliding Windows
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
