import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Allen TX | Premium Installation Services",
  description: "Expert window replacement in Allen, Texas. Serving all Allen neighborhoods with premium windows. Top-rated service. Call 972-734-3158.",
  keywords: "window replacement Allen TX, Allen windows, Collin County windows",
};

export default function AllenWindowReplacement() {
  return (
    <main>
      <Header />
      
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-allen-tx-2.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Allen, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Premium window solutions for Allen&apos;s thriving Collin County community.
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
                Allen&apos;s Window Replacement Experts
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Allen represents North Texas excellence—highly-rated schools, thriving economy, and well-maintained 
                neighborhoods that make it one of the metroplex&apos;s most desirable communities. Allen homes reflect this 
                quality standard, from established neighborhoods to newer luxury developments. Window replacement in Allen 
                requires understanding the community&apos;s expectations for quality and the architectural diversity that 
                spans decades of construction.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We serve Allen homeowners who appreciate premium products and professional service. Whether you&apos;re near 
                the Village at Allen, in Twin Creeks, or elsewhere in this thriving community, we bring appropriate 
                expertise and quality brands like Andersen and Pella that match Allen&apos;s standards. Our installations 
                enhance energy efficiency, reduce noise, and improve curb appeal—benefits that protect Allen&apos;s strong 
                property values.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Allen Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Premium Quality:</strong> Products matching Allen standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Professional Service:</strong> Installation excellence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Property Value:</strong> Quality that protects resale value</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Excellence for Allen Homes
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Experience window replacement that meets Allen&apos;s high standards. Schedule your consultation today.
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

