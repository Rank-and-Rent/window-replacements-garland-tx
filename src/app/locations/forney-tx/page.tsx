import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Forney TX | Expert Installation Services",
  description: "Professional window replacement in Forney, Texas. Growing community, quality service, energy-efficient windows. Call 972-734-3158.",
  keywords: "window replacement Forney TX, Forney windows, window installation Forney",
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
            Quality window solutions for Forney&apos;s growing community east of Dallas.
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
                Serving Forney&apos;s Growth with Excellence
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Forney is experiencing remarkable growth as Dallas expands eastward. New master-planned communities blend 
                with established neighborhoods, creating diverse housing stock that ranges from historic homes near downtown 
                to modern construction in developments throughout the city. This growth creates demand for quality window 
                services—both replacements in older homes and upgrades in newer construction where homeowners want better 
                performance than builder-grade options provide.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We serve Forney homeowners who value quality workmanship and honest service. Whether you&apos;re replacing 
                original windows in an established home or upgrading newer construction, we bring appropriate expertise 
                and premium products that deliver long-term value. Forney&apos;s more rural setting means homes face additional 
                dust and weather exposure—factors we address through proper product selection and comprehensive installation.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Forney Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Growing Community Service:</strong> Supporting Forney&apos;s expansion with quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Savings:</strong> Reduce costs in Forney&apos;s climate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Fair Pricing:</strong> Honest rates without sacrificing quality</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Reliable Service:</strong> Professional installation teams</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Ready to Enhance Your Forney Home?
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Join Forney homeowners who trust us for window replacement that delivers lasting value. Schedule your 
              free consultation today.
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

