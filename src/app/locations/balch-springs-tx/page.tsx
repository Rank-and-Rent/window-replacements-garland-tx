import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Balch Springs TX | Quality Installation",
  description: "Professional window replacement in Balch Springs, Texas. Affordable, energy-efficient solutions. Quality service. Call 972-734-3158.",
  keywords: "window replacement Balch Springs TX, Balch Springs windows, affordable windows",
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
            Quality window solutions at honest prices for Balch Springs homeowners.
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
                Balch Springs Window Replacement
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Balch Springs homeowners deserve quality window replacement at honest prices. We serve this Dallas County 
                community with the same integrity and professionalism we bring to all our service areas. Whether you&apos;re 
                replacing aging windows to reduce energy bills or upgrading for improved comfort and security, we offer 
                solutions that fit your needs and budget without cutting corners on quality or service.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Our proximity in Garland means quick response for estimates and efficient installation that respects your 
                time. We work with homeowners to identify cost-effective window solutions that deliver measurable benefits—
                lower energy costs, quieter interiors, and improved home appearance. Balch Springs families appreciate our 
                straightforward approach and commitment to value.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Balch Springs Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Fair Pricing:</strong> Quality windows at honest rates</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Savings:</strong> Reduce monthly utility bills</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Local Service:</strong> Nearby Garland-based company</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Quality Windows, Honest Service
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Get your free estimate today and discover how affordable quality window replacement can be.
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

