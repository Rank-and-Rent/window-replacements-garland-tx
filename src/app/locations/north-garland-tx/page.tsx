import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement North Garland TX | Firewheel & Camelot Specialists",
  description: "Professional window replacement throughout North Garland, TX. Serving Firewheel, Camelot, Naaman Forest, and Heatherwood. Andersen, Pella & JELD-WEN. Call 972-734-3158.",
  keywords: "window replacement North Garland TX, Firewheel windows, Camelot windows, Naaman Forest windows",
};

export default function NorthGarlandWindowReplacement() {
  return (
    <main>
      <Header />

      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-north-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in North Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Premium window installation for Firewheel, Camelot, Naaman Forest, Heatherwood, and the master-planned communities north of Campbell Road.
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
                Specialists in North Garland&apos;s Master-Planned Homes
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                North Garland is dominated by the master-planned subdivisions that grew up around Firewheel Town Center, Naaman Forest High School, and President George Bush Turnpike. Most homes in this part of the city were built between the late 1990s and the mid-2010s, which means they typically came with builder-grade vinyl windows that are now 15 to 25 years old. The seal failure, foggy glass, and chalky frame discoloration we see in Firewheel, Camelot, Highlands at Firewheel, Heatherwood, and the Naaman Forest neighborhoods are textbook examples of original-construction windows reaching the end of their service life.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                These two-story homes often feature dramatic foyer windows, second-story Palladians, transom-topped picture units, and west-facing master suites that catch the brunt of the late-afternoon Texas sun. We routinely upgrade these openings with Pella Lifestyle, Andersen 400 Series, and JELD-WEN Siteline products specified with Low-E366 glass to manage solar heat gain without darkening the room. For homeowners along Lake Ray Hubbard at the eastern edge of North Garland, we add laminated glass for sound damping against boat traffic and lakefront wind.
              </p>
              <p className="text-navy-700 leading-relaxed">
                Most North Garland subdivisions have active HOAs with architectural committees that govern grid patterns, exterior frame colors, and trim profiles. We handle the paperwork directly, submitting samples and product datasheets so your committee can approve the change before our crew schedules the install.
              </p>
            </div>

            <div>
              <img
                src="/locations/window-replacement-north-garland-tx.jpg"
                alt="North Garland window replacement"
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">Two-Story Specialty Glass</h3>
              <p className="text-navy-700">
                Foyer Palladians, transom assemblies, and second-story specialty shapes built to match the original architectural intent of your North Garland home.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">HOA Coordination</h3>
              <p className="text-navy-700">
                Pre-installation submittals to Firewheel, Camelot, and Heatherwood architectural committees. We sweat the small details so the committee approves the first time.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-serif text-xl font-semibold text-navy-900 mb-4">West-Facing Heat Control</h3>
              <p className="text-navy-700">
                Andersen SmartSun and Pella AdvancedComfort Low-E packages tuned for North Garland&apos;s long west exposures and brutal July afternoons.
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              What North Garland Homes Need Most
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-navy-700 text-sm leading-relaxed">
              <p>
                The biggest issue we find in 15-to-25-year-old North Garland homes is failed insulating glass. The original vinyl frame is often still serviceable, but the IGU spacer has failed, leaving condensation between the panes. Full-frame replacement is usually the right call because the failed seals are typically just the most visible problem; the weatherstripping, balances, and locks have all aged at the same rate.
              </p>
              <p>
                The second-most-common request is hail-resilient glass after the May and June storm cells that track up Hwy 78 and over Lake Ray Hubbard. Laminated and impact-rated glass options from Andersen and Pella turn what used to be an automatic insurance claim into a non-event. We help homeowners weigh the upgrade premium against typical Garland-area homeowner deductibles.
              </p>
            </div>
          </div>

          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Local Crew, Same-Week Estimates
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              We&apos;re based right here in Garland and run jobs in North Garland subdivisions every week. Call for a free, in-person estimate, and we&apos;ll measure your openings, talk through brand options, and put a written quote in your hands within days.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/brands/andersen-windows-doors" className="btn-primary">
                Browse Andersen Windows
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
