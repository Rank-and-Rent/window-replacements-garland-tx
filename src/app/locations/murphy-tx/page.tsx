import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Murphy TX | Premium Installation Services",
  description: "Professional window replacement in Murphy, Texas. Quality service for all Murphy neighborhoods. Energy-efficient windows. Call 972-734-3158.",
  keywords: "window replacement Murphy TX, Murphy windows, window installation Murphy",
};

export default function MurphyWindowReplacement() {
  return (
    <main>
      <Header />
      
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/windows/double-hung-windows-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Murphy, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Premium window solutions for Murphy&apos;s distinctive community.
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
                Murphy&apos;s Window Replacement Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Murphy represents the best of Collin County living—excellent schools, well-maintained neighborhoods, 
                and a strong sense of community. Murphy homeowners invest in their properties, understanding that 
                quality improvements enhance both comfort and value. Window replacement ranks among the most impactful 
                upgrades, delivering energy savings, noise reduction, and improved curb appeal that matters in Murphy&apos;s 
                competitive real estate market.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We serve Murphy&apos;s diverse architectural styles, from established homes in older sections to newer luxury 
                construction. Our expertise with brands like Andersen, Pella, and Jeld-Wen ensures we match appropriate 
                products to your home&apos;s character and your performance expectations. Murphy families appreciate our 
                professional approach—efficient installations that minimize disruption while delivering exceptional results.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Murphy Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Quality Focus:</strong> Premium products and professional installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Efficiency:</strong> Substantial utility bill reductions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Property Value:</strong> Installations that enhance resale appeal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Community Service:</strong> Local expertise for Collin County</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Ready to Upgrade Your Murphy Home?
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Experience the difference that quality window replacement makes. Schedule your free consultation today.
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

