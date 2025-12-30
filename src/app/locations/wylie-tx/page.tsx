import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Wylie TX | Expert Window Installation Services",
  description: "Professional window replacement in Wylie, Texas. Serving all Wylie neighborhoods with premium windows. Energy-efficient solutions for growing families. Call 972-734-3158.",
  keywords: "window replacement Wylie TX, Wylie windows, window installation Wylie Texas",
};

export default function WylieWindowReplacement() {
  return (
    <main>
      <Header />
      
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600573472591-ee6c563aaec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Wylie, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Quality window solutions for Wylie&apos;s family-friendly neighborhoods and growing community.
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
                Window Excellence for Wylie Families
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Wylie has transformed from small-town charm to one of North Texas&apos;s fastest-growing communities while 
                maintaining the friendly character that makes it special. The combination of highly-rated schools, new 
                master-planned developments, and established neighborhoods creates a dynamic real estate market where 
                homeowners invest in quality improvements. Window replacement ranks among the most impactful upgrades—
                delivering energy savings, improved comfort, and enhanced curb appeal that matters in Wylie&apos;s competitive 
                housing market.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Wylie&apos;s architectural landscape spans from historic downtown homes to sprawling new construction in 
                developments like Waterscape and Inspiration. This diversity requires versatile window expertise—understanding 
                both the preservation needs of older properties and the performance expectations of modern builds. As a 
                Garland-based company serving Collin and Dallas Counties, we bring appropriate experience to every Wylie 
                project, whether you&apos;re maintaining a vintage home near the downtown square or upgrading builder-grade 
                windows in a newer subdivision.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Wylie families appreciate contractors who respect their time and property. Our efficient installation 
                processes minimize disruption to busy household schedules, while meticulous attention to detail ensures 
                results that exceed expectations. We treat your Wylie home with the same care we&apos;d bring to our own, 
                understanding that window replacement is a significant investment in your family&apos;s comfort and your 
                property&apos;s value.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Why Wylie Families Choose Us</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Family-Focused Service:</strong> Respectful of busy schedules and family routines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Efficiency:</strong> Reduce utility bills with proper window selection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Local Expertise:</strong> Understanding Wylie&apos;s neighborhoods and architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Quality Products:</strong> Premium brands that perform in North Texas climate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Long-Term Value:</strong> Installations that enhance property value and marketability</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Wylie Window Services
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">New Construction Window Upgrades</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Many Wylie homeowners in newer developments discover that builder-grade windows don&apos;t meet their 
                  performance expectations. We upgrade vinyl windows to premium brands with better hardware, improved 
                  energy efficiency, and enhanced durability. Even relatively new windows can be cost-effectively replaced 
                  if they&apos;re underperforming—the energy savings and comfort improvements justify the investment.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Historic Downtown Preservation</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Downtown Wylie&apos;s historic homes require sensitive approaches that honor architectural character while 
                  incorporating modern performance. We work within preservation guidelines when applicable, specifying 
                  windows that match historic profiles and details. The result preserves Wylie&apos;s heritage while solving 
                  practical problems like high energy bills and difficult operation that plague original windows.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Growing Family Needs</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Wylie&apos;s excellent schools attract growing families who need homes that work for their lifestyles. 
                  Energy-efficient windows reduce utility bills—savings that matter when raising children. Improved noise 
                  reduction creates quieter bedrooms. Easy-clean features save time on maintenance. We help Wylie families 
                  select windows that support their daily lives while fitting within household budgets.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Master-Planned Community Standards</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Developments like Waterscape have architectural standards that window replacements must meet. We navigate 
                  these requirements smoothly, ensuring your project receives HOA approval without delays. Our experience 
                  with Wylie&apos;s various community standards means we know what&apos;s acceptable and can guide you toward 
                  compliant selections that also meet your aesthetic and performance goals.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Ready to Enhance Your Wylie Home?
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Join your Wylie neighbors who trust us for quality window replacement that delivers lasting value. 
              Schedule your free consultation and discover the difference professional service makes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/services/double-hung-windows" className="btn-primary">
                View Window Styles
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

