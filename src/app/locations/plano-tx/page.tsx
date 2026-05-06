import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Plano TX | Expert Installation Services",
  description: "Window replacement in Plano, TX. Crews running up Hwy 75 from Garland for West Plano, Legacy, and East Plano jobs. Andersen, Pella, JELD-WEN, Marvin replacements with hail-rated glass.",
  keywords: "window replacement Plano TX, Plano windows, West Plano windows, Legacy window installation",
};

export default function PlanoWindowReplacement() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-plano-tx-3.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Plano, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Premium window installation for Plano&apos;s diverse neighborhoods and architectural styles.
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
                Plano&apos;s Window Replacement Experts
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Plano stands as one of North Texas&apos;s premier communities, combining excellent schools, thriving corporate 
                headquarters, and well-maintained neighborhoods that span decades of architectural evolution. From the 
                established oak-lined streets of Old Town to the master-planned luxury of West Plano and the dynamic 
                mixed-use developments in Legacy, Plano homes represent substantial investments that deserve quality 
                window solutions. Our team brings the expertise and premium products Plano homeowners expect.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Plano&apos;s real estate market consistently ranks among Texas&apos;s strongest, with home values reflecting the 
                community&apos;s desirability. This makes window replacement a strategic investment—quality installations 
                not only reduce energy costs and improve comfort but also enhance property values in a competitive market. 
                Whether you&apos;re upgrading original windows in a 1980s two-story in Parker Road Estates or maintaining a 
                newer custom home in Willow Bend, we understand the standards Plano homeowners require.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The diversity of Plano architecture—from ranch-style homes in older East Plano neighborhoods to grand 
                two-story estates in Shepton Hills and contemporary designs in The Colony at Frisco—requires versatile 
                window expertise. We&apos;ve worked throughout Plano&apos;s varied neighborhoods, understanding how to match window 
                styles to architectural context while delivering the energy efficiency and performance that North Texas 
                climate demands.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Plano Homeowner Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Market Knowledge:</strong> Understanding Plano real estate and architectural standards</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Premium Brands:</strong> Andersen, Pella, Jeld-Wen suited to Plano&apos;s quality expectations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Efficiency:</strong> Dramatic cooling cost reductions with proper glass selection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">HOA Expertise:</strong> Navigating architectural review requirements smoothly</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Value Protection:</strong> Quality installations that preserve Plano property values</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Plano Areas */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Serving All Plano Neighborhoods
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">West Plano</h3>
                <ul className="text-navy-700 text-sm space-y-1">
                  <li>• Willow Bend</li>
                  <li>• Shepton Hills</li>
                  <li>• Los Rios</li>
                  <li>• Chapel Creek</li>
                  <li>• Preserve at Stonebridge Ranch</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Central Plano</h3>
                <ul className="text-navy-700 text-sm space-y-1">
                  <li>• Legacy</li>
                  <li>• Park Forest</li>
                  <li>• Schimelpfenig</li>
                  <li>• Saddlebrook Farms</li>
                  <li>• Deerfield</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">East Plano</h3>
                <ul className="text-navy-700 text-sm space-y-1">
                  <li>• Old Town</li>
                  <li>• Parker Road Estates</li>
                  <li>• Douglass Community</li>
                  <li>• Carpenter Park</li>
                  <li>• Gleneagles</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Plano Services */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Plano-Specific Window Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Large Two-Story Installations</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Plano is known for spacious two-story homes with impressive façades featuring multiple window styles 
                  and sizes. Second-story window replacement requires specialized equipment, experienced crews, and 
                  careful planning to protect landscaping and property. We bring appropriate resources to every project, 
                  whether you&apos;re replacing 15 windows or 40, ensuring efficient installation that minimizes disruption 
                  to your daily routine.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Custom Window Matching</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Many Plano homes feature custom window configurations—arched transoms, specialty shapes in gables, 
                  or unique sizes that enhance architectural character. We work with manufacturers to replicate existing 
                  designs or upgrade with complementary styles that maintain your home&apos;s distinctive appearance. This 
                  attention to architectural detail preserves the curb appeal that makes Plano neighborhoods so attractive.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Golf Course & Lake View Properties</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Homes backing to golf courses or overlooking community lakes deserve windows that showcase these premium 
                  views. Large picture windows, sliding glass doors, and bay windows require careful selection to balance 
                  expansive glass with energy efficiency. We&apos;ll recommend low-E coatings and glass packages that maintain 
                  crystal-clear views while blocking solar heat—essential for south and west exposures common in Plano lots.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Smart Home Integration</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Plano&apos;s tech-savvy homeowners increasingly want window treatments and shading integrated with smart 
                  home systems. While we specialize in window replacement rather than automation, we work closely with 
                  your home technology professionals to ensure new windows accommodate motorized blinds, sensors, and 
                  other smart features. Proper planning during replacement ensures seamless integration with your home&apos;s 
                  connected systems.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Ready to Enhance Your Plano Home?
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Experience the difference that quality window replacement makes in comfort, energy efficiency, and home 
              value. Schedule your free consultation and discover why discerning Plano homeowners trust us with their 
              window replacement projects.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows/double-hung-windows" className="btn-primary">
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

