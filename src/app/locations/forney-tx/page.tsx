import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Forney TX | Devonshire & Windmill Farms",
  description: "Window replacement in Forney, TX. Specialists serving Devonshire, Windmill Farms, Travis Ranch, and surrounding Kaufman County subdivisions. Call 972-734-3158.",
  keywords: "window replacement Forney TX, Devonshire windows, Windmill Farms windows, Travis Ranch windows",
};

export default function ForneyWindowReplacement() {
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
            Window Replacement in Forney, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Window replacement for Forney&apos;s established neighborhoods and the master-planned communities along Hwy 80.
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
                Forney Window Replacement, Done Right
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Forney has changed dramatically over the last fifteen years, with master-planned subdivisions like Devonshire, Windmill Farms, Travis Ranch, Diamond Creek, and Gateway Parks adding thousands of new homes alongside the older housing stock around the original downtown grid. That gives our crews two distinct kinds of Forney jobs: builder-grade vinyl replacement on homes built in the 2000s and 2010s that are now showing IGU seal failure, and full-scope replacement on the older ranches and bungalows where original wood and aluminum windows have run out of life.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We bring premium products to every Forney project: Andersen 400 Series and A-Series, Pella Lifestyle and Reserve, JELD-WEN Premium Vinyl and Siteline, and Marvin Elevate. Each is paired with the right glass package for North Texas heat and the regular hail activity that crosses Kaufman County in spring. Laminated and impact-rated glass options are increasingly common requests after the storms that have tracked through Forney over the last several years.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Forney&apos;s more open landscape means more wind-driven dust on west-facing elevations, plus higher solar exposure than denser inner-ring suburbs. We specify weatherstripping and glass packages that hold up under those conditions, and we coordinate with HOA architectural committees in Devonshire, Windmill Farms, and Travis Ranch so your install proceeds without delay.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Forney Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Master-Planned Expertise:</strong> Daily work in Devonshire, Windmill Farms, and Travis Ranch</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Savings:</strong> Low-E366 glass cuts cooling costs 25-35 percent on west elevations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Hail-Resilient Options:</strong> Laminated and impact-rated glass for Kaufman County storm season</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">In-Person Estimates:</strong> Every opening measured in person, every quote written, no surprises</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              The Forney Replacement Window Conversation
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                Most Forney homeowners we visit have one of two main concerns. The first is high summer power bills driven by single-pane originals or low-spec builder vinyl. Modern dual-pane Low-E units cut solar heat gain dramatically, especially on west and south elevations, and the AC system runs noticeably less.
              </p>
              <p>
                The second concern is hail and storm damage. Spring weather rolling east along Hwy 80 has produced multiple insurance-grade events in Forney over the last decade. Laminated glass and impact-rated frames don&apos;t just protect the home; they often change the deductible math for ongoing coverage. We walk homeowners through both options on every estimate.
              </p>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Ready to Enhance Your Forney Home?
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Call us for a free in-person estimate. Our Garland-based crews work in Forney every week, with reliable scheduling and the kind of follow-through that earns long-term referrals.
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
