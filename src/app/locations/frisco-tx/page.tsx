import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Frisco TX | Premium Installation Services",
  description: "Expert window replacement in Frisco, Texas. Master-planned communities, luxury homes, premium windows. Top service. Call 972-734-3158.",
  keywords: "window replacement Frisco TX, Frisco windows, luxury windows Frisco",
};

export default function FriscoWindowReplacement() {
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
            Window Replacement in Frisco, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Premium window solutions for Frisco&apos;s luxury master-planned communities.
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
                Frisco&apos;s Window Replacement Experts
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Frisco represents the pinnacle of North Texas master-planned community development. From Stonebriar to 
                Starwood, Phillips Creek Ranch to The Gates of Prosper, Frisco neighborhoods set standards for quality 
                that extend to every home improvement. Window replacement in Frisco requires understanding these elevated 
                expectations—premium products, meticulous installation, and service that respects your time and property.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We serve Frisco&apos;s discerning homeowners with brands like Andersen and Pella that match community standards. 
                Whether you&apos;re in an established neighborhood or new luxury development, our installations deliver the 
                performance and aesthetics that protect Frisco&apos;s exceptional property values. From custom window 
                configurations to energy-efficient glass packages, we bring expertise worthy of Frisco&apos;s premium real 
                estate market.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Frisco Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Luxury Standards:</strong> Premium products and service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">HOA Compliance:</strong> Meeting community standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Property Value:</strong> Protecting premium investments</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Premium Service for Frisco Homes
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Experience window replacement that meets Frisco&apos;s high standards. Schedule your consultation today.
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

