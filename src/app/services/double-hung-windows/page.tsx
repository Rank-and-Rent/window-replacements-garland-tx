import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Double-Hung Windows Installation Garland TX | Window Replacement Service",
  description: "Expert double-hung window installation in Garland, Texas. Classic design with modern efficiency. Both sashes tilt for easy cleaning. Energy-efficient options from Andersen, Pella & Jeld-Wen. Call 972-734-3158.",
  keywords: "double-hung windows Garland TX, replacement windows Garland, tilt-in windows, energy efficient windows, Andersen double-hung, Pella windows",
};

export default function DoubleHungWindows() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Double-Hung Windows
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Timeless elegance meets modern performance. The most versatile window style for Garland homes.
          </p>
          <a href="#contact" className="btn-primary">
            Get Free Estimate
          </a>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                The Classic Choice for Texas Homes
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Double-hung windows have defined American architecture for over two centuries, and for good reason. 
                Their signature dual-operable sashes provide unmatched ventilation control, allowing you to open 
                both the top and bottom sections independently. This creates a natural air flow pattern that draws 
                cool air in from the bottom while warm air escapes through the top—a feature particularly valuable 
                during Garland&apos;s spring and fall months.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                What makes today&apos;s double-hung windows exceptional is how they blend traditional aesthetics with 
                cutting-edge technology. Modern iterations feature advanced weather-stripping, insulated glass packages, 
                and low-E coatings that dramatically reduce heat transfer—keeping your home comfortable year-round 
                while lowering energy bills. The tilt-in sash design means you can clean the exterior glass from 
                inside your home, a practical advantage for second-story installations.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Key Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Superior Ventilation Control:</strong> Adjust top and bottom sashes independently for optimal air circulation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Easy Maintenance:</strong> Both sashes tilt inward for convenient cleaning from inside</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Efficiency:</strong> Modern weather-stripping and insulated glass reduce energy costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Timeless Style:</strong> Complements traditional, colonial, and craftsman architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Childproof Options:</strong> Lock top sash and open bottom for safe ventilation</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Technical Excellence Section */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Built for Garland&apos;s Climate
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Weather Resistance</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Texas storms demand superior construction. Our double-hung windows feature multi-chamber vinyl 
                  frames or composite materials that won&apos;t warp, rot, or corrode. Heavy-duty weather-stripping 
                  at all four sides creates an airtight seal against wind and rain.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Heat Protection</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Summer temperatures regularly exceed 95°F in Garland. Our low-E glass coatings reflect infrared 
                  heat while allowing visible light through, keeping interiors bright without the greenhouse effect. 
                  Argon gas fills between panes provide additional insulation.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Durability</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Quality double-hung windows should last 20-30 years with minimal maintenance. We install only 
                  premium brands with fusion-welded corners, stainless steel hardware, and comprehensive warranties 
                  that protect your investment for decades.
                </p>
              </div>
            </div>
          </div>

          {/* Brand Options */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Premium Brand Partners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-3">Andersen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The 400 Series and A-Series double-hung windows set the industry standard. Andersen&apos;s 
                  Fibrex® composite material is twice as strong as vinyl and remarkably energy efficient. 
                  Their patented tilt-wash feature and endless customization options make them ideal for 
                  discerning homeowners.
                </p>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-3">Pella</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Pella&apos;s 250 Series offers exceptional value with professional-grade performance. 
                  Their exclusive EnduraClad® exterior resists fading and chalking in harsh Texas sun. 
                  Easy-Slide rollers ensure smooth operation for years, while their hidden screen system 
                  maintains clean sightlines.
                </p>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-3">Jeld-Wen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The V-2500 and Premium series deliver outstanding performance at competitive prices. 
                  Jeld-Wen&apos;s AuraLast® wood protection technology prevents rot and decay, making their 
                  wood-clad options viable in humid climates. Excellent warranties back every installation.
                </p>
              </div>
            </div>
          </div>

          {/* Installation Process */}
          <div className="bg-navy-900 p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-8 text-center">
              Our Installation Process
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-start mb-6">
                  <div className="bg-gold-500 text-navy-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-semibold mb-2">Precise Measurement</h3>
                    <p className="text-cream-200 text-sm">
                      We measure each opening three times—width, height, and diagonal—to ensure perfect fit. 
                      Even slight variations can impact performance, so accuracy is paramount.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="bg-gold-500 text-navy-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-semibold mb-2">Careful Removal</h3>
                    <p className="text-cream-200 text-sm">
                      Old windows are removed with attention to surrounding trim and siding. We protect your 
                      interior finishes and identify any water damage or structural issues before proceeding.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold-500 text-navy-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-semibold mb-2">Opening Preparation</h3>
                    <p className="text-cream-200 text-sm">
                      Rough openings are squared, leveled, and shimmed as needed. Damaged wood is replaced, 
                      and all surfaces are cleaned to ensure proper adhesion of flashing materials.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start mb-6">
                  <div className="bg-gold-500 text-navy-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-semibold mb-2">Professional Installation</h3>
                    <p className="text-cream-200 text-sm">
                      Windows are set in a bed of sealant, leveled perfectly, and secured according to 
                      manufacturer specifications. This is where experience matters most—proper installation 
                      prevents future problems.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-6">
                  <div className="bg-gold-500 text-navy-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    5
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-semibold mb-2">Weatherproofing</h3>
                    <p className="text-cream-200 text-sm">
                      Premium flashing tape is applied around the entire frame, then overlapped with house 
                      wrap or building paper. This layered approach channels water away from your home&apos;s structure.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gold-500 text-navy-900 font-bold rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 mr-4">
                    6
                  </div>
                  <div>
                    <h3 className="text-cream-100 font-semibold mb-2">Finishing Touches</h3>
                    <p className="text-cream-200 text-sm">
                      Interior and exterior trim is reinstalled or replaced, joints are caulked with 
                      high-performance sealants, and hardware is adjusted for smooth operation. Every detail matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How long does double-hung window installation take?</h3>
                <p className="text-navy-700 text-sm">
                  Most single windows can be replaced in 45-60 minutes. A typical home with 10-15 windows 
                  usually takes one to two days, depending on size and any structural repairs needed.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are double-hung windows more expensive than single-hung?</h3>
                <p className="text-navy-700 text-sm">
                  Double-hung windows typically cost 10-20% more than comparable single-hung models due to 
                  the additional operating mechanism. However, the increased functionality, easier cleaning, 
                  and better ventilation control make them worth the investment for most homeowners.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">What maintenance do double-hung windows require?</h3>
                <p className="text-navy-700 text-sm">
                  Vinyl and composite double-hung windows need minimal maintenance—just periodic cleaning and 
                  lubrication of tracks. Check weather-stripping annually and clean drainage holes at the bottom 
                  of the frame. Wood-clad options may need occasional refinishing of exterior surfaces.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can I replace just the sashes instead of the entire window?</h3>
                <p className="text-navy-700 text-sm">
                  Sash replacement kits exist for certain situations, but full-frame replacement is almost always 
                  the better choice. You gain improved energy efficiency, updated weather-stripping, and eliminate 
                  hidden problems in the old frame. The modest cost difference delivers significantly better long-term performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="bg-navy-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-semibold text-cream-100 mb-6">
            Ready to Upgrade Your Windows?
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Get a free, no-obligation estimate for double-hung window installation. 
            Our Garland team is ready to answer your questions and schedule a consultation.
          </p>
          <a href="tel:972-734-3158" className="btn-primary inline-block">
            Call 972-734-3158 Now
          </a>
        </div>
      </section>

      <CallToAction />
      <Footer />
    </main>
  );
}

