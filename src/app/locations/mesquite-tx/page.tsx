import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Mesquite TX | Professional Installation",
  description: "Expert window replacement in Mesquite, Texas. Serving all Mesquite neighborhoods with premium Andersen, Pella & Jeld-Wen windows. Energy-efficient solutions. Call 972-734-3158.",
  keywords: "window replacement Mesquite TX, Mesquite windows, window installation Mesquite Texas",
};

export default function MesquiteWindowReplacement() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-garland-tx-2.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Mesquite, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Quality window installation for Mesquite homeowners from your local Garland-based experts.
          </p>
          <a href="tel:972-734-3158" className="btn-primary">
            Call 972-734-3158
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Serving Mesquite with Excellence
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Mesquite&apos;s rich history and diverse neighborhoods—from the established homes near Town East Mall to newer 
                developments in the western part of the city—present unique window replacement opportunities. As Garland&apos;s 
                neighbor to the west, we&apos;ve served countless Mesquite homeowners who value quality workmanship and honest 
                pricing. The short drive between our communities means rapid response times and personalized service that 
                treats your home with the respect it deserves.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Mesquite homes built from the 1960s through today reflect changing architectural preferences and construction 
                standards. Many original windows in older neighborhoods have reached the end of their service life, with 
                deteriorating seals, difficult operation, and poor energy performance. Upgrading to modern vinyl or composite 
                windows with low-E glass dramatically improves comfort while reducing cooling costs—savings that matter to 
                budget-conscious homeowners throughout Mesquite.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                We understand Mesquite&apos;s community character—hardworking families who take pride in their homes and expect 
                contractors to deliver value without cutting corners. Our approach combines quality products from Andersen, 
                Pella, and Jeld-Wen with meticulous installation practices that ensure long-term performance. When you choose 
                us, you&apos;re working with neighbors who stand behind their work and remain available for service long after 
                installation completes.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Mesquite Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Local Proximity:</strong> Quick service from nearby Garland—we&apos;re practically neighbors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Honest Pricing:</strong> Competitive rates without sacrificing quality or service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Savings:</strong> Reduce cooling costs with proper window selection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Community Values:</strong> Local company committed to serving East Dallas County</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Long-Term Support:</strong> We&apos;re here when you need service or questions answered</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mesquite Services */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Window Solutions for Mesquite Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Replacing Original 1960s-80s Windows</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Many Mesquite neighborhoods feature homes from this era with aluminum-frame windows that have reached 
                  end of life. We specialize in full-frame replacement that addresses structural issues while upgrading 
                  to energy-efficient vinyl or composite systems. The transformation in comfort and appearance is dramatic—
                  homeowners consistently report quieter interiors and significantly lower energy bills.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Storm-Ready Window Systems</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  North Texas storms can be severe, with high winds and hail that test window durability. We recommend 
                  impact-resistant glass options and properly rated windows that withstand weather extremes. Quality 
                  installation with comprehensive flashing systems ensures water stays outside where it belongs, even 
                  during intense thunderstorms that are common in Mesquite springs and summers.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Energy Efficiency on a Budget</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  We work with homeowners to identify the most cost-effective window solutions that deliver measurable 
                  energy savings. Sometimes that means prioritizing south and west-facing windows where solar heat gain 
                  is most problematic. We&apos;ll help you develop a phased replacement strategy if budget constraints 
                  don&apos;t allow whole-house upgrades immediately—addressing the most impactful areas first.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Rental Property Window Service</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Property managers and landlords in Mesquite appreciate our efficient service and durable product 
                  selection that minimizes maintenance calls. We understand the balance between cost-effectiveness and 
                  quality that rental properties require. Quick turnaround times minimize vacancy, while quality 
                  installations reduce future problems that affect tenant satisfaction and retention.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Your Mesquite Window Replacement Solution
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Experience the difference that local expertise and quality products make. Schedule your free estimate 
              today and discover why Mesquite homeowners trust us with their window replacement needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows/double-hung-windows" className="btn-primary">
                Explore Window Options
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

