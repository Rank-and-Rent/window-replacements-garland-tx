import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sliding Windows Installation Garland TX | Easy-Glide Operation",
  description: "Professional sliding window installation in Garland, Texas. Horizontal gliding sashes with smooth rollers. Space-saving design for patios and modern homes. Andersen, Pella & Jeld-Wen. Call 972-734-3158.",
  keywords: "sliding windows Garland TX, gliding windows, patio windows, horizontal windows, slider windows Garland Texas",
};

export default function SlidingWindows() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600585154526-990dced4db0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Sliding Windows
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Effortless horizontal operation with contemporary style. Perfect for wide openings and modern architecture.
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
                Horizontal Elegance Meets Practical Function
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Sliding windows—also called gliding windows or sliders—operate by moving horizontally along tracks, 
                with one or both sashes operable. This straightforward mechanism makes them ideal for wide openings 
                where vertical-sliding windows would be impractically tall. The horizontal orientation naturally 
                suits ranch-style homes, contemporary architecture, and anywhere you want to emphasize width over height.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Unlike casement or awning styles that swing outward, sliding windows operate within their frame 
                footprint. This space-saving characteristic makes them perfect above kitchen sinks, along walkways, 
                near patios, or anywhere exterior clearance is limited. You don&apos;t need to worry about landscaping 
                or furniture placement interfering with window operation. The smooth roller system ensures effortless 
                opening even with large, heavy sashes spanning five or six feet.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern sliding windows have evolved significantly from older aluminum-frame models that developed 
                poor reputations for air leakage. Today&apos;s premium vinyl and composite sliders incorporate advanced 
                weather-stripping, interlocking meeting rails, and precision-engineered tracks that deliver energy 
                efficiency approaching that of double-hung windows. The key is choosing quality products from 
                reputable manufacturers who understand the engineering required for proper seal and thermal performance.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Why Choose Sliders</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Space Efficiency:</strong> No exterior or interior clearance needed for operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Wide Openings:</strong> Ideal for expansive views without mullions breaking up glass</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Easy Operation:</strong> Smooth gliding action requires minimal effort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Contemporary Aesthetic:</strong> Horizontal lines complement modern design</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Simple Maintenance:</strong> Fewer moving parts than vertical-sliding styles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Accessible Cleaning:</strong> Both sides reachable from inside when opened</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Configuration Options */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Sliding Window Configurations
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Two-Panel (XO or OX)</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Most common configuration with one fixed panel and one operable slider. Choose left or right 
                  operation based on room layout and furniture placement. The fixed panel provides structural 
                  stability while the operating panel delivers ventilation. Typically 50% of the window opens.
                </p>
                <p className="text-gold-600 text-xs"><strong>Best for:</strong> Standard room applications, budget-conscious projects</p>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Three-Panel (XOX)</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Center panel is fixed for structural integrity, with operable sliders on both sides. Creates 
                  expansive openings while maintaining energy efficiency. The fixed center can be wider than 
                  operating panels, emphasizing views. Provides balanced ventilation from either side.
                </p>
                <p className="text-gold-600 text-xs"><strong>Best for:</strong> Wide wall openings, living rooms with views</p>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Two-Panel (OO)</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Both panels slide, allowing maximum ventilation—up to 50% of total window area. The panels 
                  overlap in the center when closed. More expensive than single-slider configurations but provides 
                  superior airflow control. Both panels must be properly maintained for optimal performance.
                </p>
                <p className="text-gold-600 text-xs"><strong>Best for:</strong> Maximum ventilation needs, sunrooms</p>
              </div>
            </div>
          </div>

          {/* Technical Features */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Engineering Excellence
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Precision Roller Systems</h3>
                  <p className="text-navy-700 text-sm">
                    Premium sliders use stainless steel or nylon rollers with sealed bearings that glide smoothly 
                    for decades. Ball-bearing systems distribute sash weight evenly, preventing binding or difficult 
                    operation. Quality rollers are adjustable, allowing technicians to fine-tune performance during 
                    installation and over the window&apos;s lifetime.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Interlocking Meeting Rails</h3>
                  <p className="text-navy-700 text-sm">
                    Where the two sashes meet, advanced designs employ interlocking profiles that create multiple 
                    seal points. When locked, these rails compress together, virtually eliminating air infiltration. 
                    This engineering detail separates quality sliders from budget models that simply butt together.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Multi-Chamber Frames</h3>
                  <p className="text-navy-700 text-sm">
                    Vinyl frames incorporate multiple internal chambers that trap dead air space, providing 
                    excellent thermal insulation. These chambers also add structural rigidity, preventing frame 
                    flex that could compromise seals. Look for frames with at least three chambers for optimal 
                    performance in Texas climates.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Lift-Out Sashes</h3>
                  <p className="text-navy-700 text-sm">
                    Many sliding windows feature removable sashes for deep cleaning or glass replacement. After 
                    lifting the security lock, the sash lifts out of the track system. This serviceability extends 
                    window life and makes maintenance significantly easier than permanently-installed configurations.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h2 className="font-serif text-2xl text-cream-100 mb-6">
                Performance Specifications
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Energy Efficiency</h3>
                  <p className="text-cream-200 text-sm mb-3">
                    Quality sliding windows with low-E glass and argon fills achieve U-factors of 0.28-0.32, 
                    meeting or exceeding ENERGY STAR requirements for the South-Central climate zone. While not 
                    quite matching casement compression seals, modern sliders perform admirably when properly 
                    installed and maintained.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Air Infiltration</h3>
                  <p className="text-cream-200 text-sm mb-3">
                    Premium sliders test at 0.3 cubic feet per minute per square foot or less—excellent performance 
                    that minimizes drafts and energy loss. The key is proper installation with accurate alignment 
                    and adjustment of the roller system. Even slight misalignment can compromise these numbers.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Water Resistance</h3>
                  <p className="text-cream-200 text-sm mb-3">
                    The horizontal orientation means rain runs down the glass rather than pooling against seals. 
                    Weep systems at the bottom of the frame channel any water that enters the track system back 
                    outside. Proper flashing during installation is critical for long-term water-tightness.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Wind Load Ratings</h3>
                  <p className="text-cream-200 text-sm mb-3">
                    Sliding windows typically handle wind loads of 130+ mph when properly specified and installed—
                    more than adequate for Garland&apos;s climate. Larger units may require reinforced frames or 
                    additional structural support depending on exposure and local building codes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Comparison */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Top Sliding Window Brands
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-3">Andersen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The 400 Series gliding window features Fibrex® composite construction that won&apos;t sag or distort 
                  over time—critical for maintaining proper roller alignment. Dual-pane glass with low-E4® SmartSun™ 
                  coating blocks heat while preserving views. Stainless steel rollers and track ensure decades of 
                  smooth operation.
                </p>
                <div className="border-t-2 border-navy-200 pt-4 space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-navy-600">Air Infiltration:</span>
                    <span className="text-navy-900 font-semibold">0.2 cfm/ft²</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-navy-600">Warranty:</span>
                    <span className="text-navy-900 font-semibold">20 years</span>
                  </p>
                </div>
              </div>
              <div className="bg-white border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-3">Pella</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The 250 Series sliding window delivers excellent value with professional-grade components. 
                  Easy-Slide™ roller system provides effortless operation even on large units. Optional 
                  between-the-glass blinds maintain clean sightlines while eliminating dusting. EnduraClad® 
                  exteriors resist fading in harsh Texas sunlight.
                </p>
                <div className="border-t-2 border-navy-200 pt-4 space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-navy-600">Air Infiltration:</span>
                    <span className="text-navy-900 font-semibold">0.3 cfm/ft²</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-navy-600">Warranty:</span>
                    <span className="text-navy-900 font-semibold">Limited Lifetime</span>
                  </p>
                </div>
              </div>
              <div className="bg-white border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-3">Jeld-Wen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The V-2500 Series slider offers outstanding performance-to-price ratio. Multi-chamber vinyl 
                  extrusions provide strength and insulation. Brass rollers resist corrosion in humid environments. 
                  Lift-out sashes simplify cleaning and maintenance. An excellent choice for whole-house replacement 
                  projects on realistic budgets.
                </p>
                <div className="border-t-2 border-navy-200 pt-4 space-y-2 text-sm">
                  <p className="flex justify-between">
                    <span className="text-navy-600">Air Infiltration:</span>
                    <span className="text-navy-900 font-semibold">0.3 cfm/ft²</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-navy-600">Warranty:</span>
                    <span className="text-navy-900 font-semibold">20 years</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Installation & Maintenance */}
          <div className="bg-navy-900 p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-8 text-center">
              Installation & Ongoing Care
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-cream-100 font-serif text-xl mb-4">Critical Installation Steps</h3>
                <div className="space-y-4 text-cream-200 text-sm">
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Level and Plumb</h4>
                    <p>
                      Sliding windows are unforgiving of poor installation. If the frame isn&apos;t perfectly level, 
                      the sash will roll to one side or bind in the tracks. Careful shimming and adjustment during 
                      installation ensures smooth operation for years.
                    </p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Proper Flashing</h4>
                    <p>
                      Water management is critical. Sill flashing must extend under the frame and lap over exterior 
                      cladding. Head and jamb flashing integrates with house wrap or building paper. We use 
                      flexible flashing tape that seals around fasteners and accommodates building movement.
                    </p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Roller Adjustment</h4>
                    <p>
                      After installation, rollers must be adjusted so the sash glides smoothly while maintaining 
                      proper compression against weather-stripping. Too tight causes binding; too loose allows air 
                      infiltration. This adjustment is part of our standard installation process.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-cream-100 font-serif text-xl mb-4">Maintenance Requirements</h3>
                <div className="space-y-4 text-cream-200 text-sm">
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Track Cleaning</h4>
                    <p>
                      Clean tracks twice annually using a vacuum and damp cloth. Remove dirt, leaves, and debris 
                      that can interfere with roller operation. Pay special attention to weep holes that must 
                      remain clear for proper drainage.
                    </p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Roller Lubrication</h4>
                    <p>
                      Apply silicone-based lubricant to rollers and tracks annually. Avoid petroleum-based products 
                      that attract dirt. If operation becomes difficult, check for debris in tracks before assuming 
                      roller failure—most issues are maintenance-related, not mechanical failure.
                    </p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Weather-stripping Inspection</h4>
                    <p>
                      Check the pile weather-stripping along the interlocking rails annually. This material 
                      compresses to seal gaps but can wear over time. Replacement weather-stripping is available 
                      from manufacturers and can be installed by handy homeowners or our service team.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are sliding windows less energy-efficient than other styles?</h3>
                <p className="text-navy-700 text-sm">
                  Quality sliding windows from reputable manufacturers approach the energy efficiency of double-hung 
                  windows and surpass older single-hung models. While they don&apos;t match casement compression seals, 
                  modern interlocking meeting rails and precision weather-stripping deliver excellent performance. 
                  The key is buying quality products and ensuring proper installation.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can sliding windows be repaired if the rollers fail?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, roller replacement is straightforward for quality windows with lift-out sashes. The sash is 
                  removed, old rollers are unscrewed, and new ones are installed. Manufacturers stock replacement parts 
                  for decades after production. This serviceability is one reason to invest in quality brands—you know 
                  parts will be available 15-20 years from now.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How wide can sliding windows be?</h3>
                <p className="text-navy-700 text-sm">
                  Sliding windows can span 8-12 feet depending on configuration and manufacturer. Three-panel designs 
                  with fixed center lights commonly reach 10-12 feet. Beyond these widths, consider multiple window 
                  units or patio doors. Very wide sliders may require reinforced sashes or special rollers to handle 
                  the weight while maintaining smooth operation.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are sliding windows secure?</h3>
                <p className="text-navy-700 text-sm">
                  Modern sliding windows include substantial locking mechanisms at the meeting rail. Many feature 
                  multi-point locks or secondary security latches. For additional security, install sliding window 
                  locks or security bars in the track that prevent the sash from being forced open. Properly secured 
                  sliding windows are as safe as any operable window style.
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
            Discover Effortless Operation
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Experience how modern sliding windows combine contemporary style with practical functionality. 
            Schedule your free consultation today.
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

