import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Awning Windows Installation Garland TX | Rain-Friendly Ventilation",
  description: "Expert awning window installation in Garland, Texas. Top-hinged design allows ventilation even during rain. Perfect for bathrooms and basements. Andersen, Pella & Jeld-Wen options. Call 972-734-3158.",
  keywords: "awning windows Garland TX, bathroom windows, basement windows, rain windows, hopper windows, ventilation windows Garland",
};

export default function AwningWindows() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Awning Windows
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Ventilate your home even during Texas rain. The practical solution for bathrooms and tight spaces.
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
                Ventilation That Works in Any Weather
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Awning windows are hinged at the top and open outward from the bottom, creating a protective 
                awning over the opening. This ingenious design solves a common challenge in Garland&apos;s climate: 
                maintaining ventilation during the frequent afternoon thunderstorms that characterize Texas weather 
                patterns. When positioned correctly, the open sash sheds rain away from your interior while allowing 
                fresh air to circulate.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The outward tilt creates negative pressure inside the home, effectively drawing stale air upward 
                and out through the opening. This makes awning windows particularly effective in bathrooms, where 
                moisture control is critical, and in basements, where they can be placed high on walls to vent humid 
                air without compromising privacy. The crank operation—identical to casement windows—ensures smooth 
                function even in hard-to-reach installations above tubs or behind fixtures.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Like their casement cousins, awning windows employ compression seals that create exceptional 
                airtightness when closed. Multi-point locking systems pull the sash firmly against weather-stripping, 
                delivering energy efficiency that rivals fixed windows while maintaining operational flexibility. 
                This combination of weather protection, ventilation capability, and thermal performance makes awning 
                windows an intelligent choice for specific applications throughout your home.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Key Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Rain Protection:</strong> Open during light rain without water entering your home</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Privacy Ventilation:</strong> Ideal for bathrooms—mount high for airflow with privacy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Efficient:</strong> Compression seal rivals fixed windows when closed</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Moisture Control:</strong> Excellent for naturally ventilating humid spaces</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Basement Applications:</strong> Perfect for egress windows with rain protection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Stack Combinations:</strong> Combine with fixed or picture windows for dramatic effect</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Application Guide */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Where Awning Windows Excel
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="border-2 border-navy-200 p-5">
                <h3 className="font-serif text-lg text-navy-900 mb-3">Bathrooms</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Mount above eye level for privacy while showering. Vent moisture without creating drafts. 
                  Open during rain without worry. Frosted or obscured glass maintains privacy while admitting natural light.
                </p>
              </div>
              <div className="border-2 border-navy-200 p-5">
                <h3 className="font-serif text-lg text-navy-900 mb-3">Basements</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Install at the top of foundation walls for egress code compliance. The outward opening won&apos;t 
                  interfere with interior space. Protected from water entry even in foundation wells during storms.
                </p>
              </div>
              <div className="border-2 border-navy-200 p-5">
                <h3 className="font-serif text-lg text-navy-900 mb-3">Above Doors</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Transom awning windows add ventilation and light above entry doors without compromising security. 
                  Can remain open overnight safely. Controls heat buildup in entryways during summer.
                </p>
              </div>
              <div className="border-2 border-navy-200 p-5">
                <h3 className="font-serif text-lg text-navy-900 mb-3">Kitchens</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Stack above large picture windows for ventilation without sacrificing view. Exhaust cooking 
                  heat and odors efficiently. Crank operation works over counters and sinks where reaching would be difficult.
                </p>
              </div>
            </div>
          </div>

          {/* Design Combinations */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Creative Design Combinations
              </h2>
              <div className="space-y-6">
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2 text-lg">Picture Window + Awning Top</h3>
                  <p className="text-cream-200 text-sm mb-3">
                    Large fixed picture window provides unobstructed views and maximum light. Awning window 
                    mounted above adds ventilation capability without interrupting sightlines. This combination 
                    delivers the best of both worlds—expansive glass and practical airflow control.
                  </p>
                  <p className="text-gold-400 text-xs">Popular for living rooms with scenic views</p>
                </div>
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2 text-lg">Awning Over Fixed Transom</h3>
                  <p className="text-cream-200 text-sm mb-3">
                    Operational awning at top with decorative fixed transom below. The fixed section can feature 
                    architectural glass patterns or colored glass without compromising the ventilation function above. 
                    Common in craftsman and traditional architecture.
                  </p>
                  <p className="text-gold-400 text-xs">Adds character to bedrooms and dining rooms</p>
                </div>
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2 text-lg">Multiple Awning Stack</h3>
                  <p className="text-cream-200 text-sm mb-3">
                    Two or three awning windows stacked vertically create a dramatic contemporary look while 
                    providing excellent ventilation control. Each operates independently, allowing precise airflow 
                    adjustment. Works beautifully on tall walls or in two-story spaces.
                  </p>
                  <p className="text-gold-400 text-xs">Modern aesthetic for contemporary homes</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Technical Specifications
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Size Ranges</h3>
                  <p className="text-navy-700 text-sm mb-2">
                    Awning windows typically range from 24-48 inches wide and 16-36 inches tall. Larger sizes 
                    become heavy when opened and may require reinforced hardware. Most manufacturers recommend 
                    maximum sash area of 12-14 square feet.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Opening Angles</h3>
                  <p className="text-navy-700 text-sm mb-2">
                    Standard awning windows open to approximately 45 degrees from vertical. This angle provides 
                    optimal rain protection while allowing substantial airflow. Some models offer limiters to 
                    restrict opening for safety or clearance concerns.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Screen Placement</h3>
                  <p className="text-navy-700 text-sm mb-2">
                    Like casements, awning windows require interior screens since the sash opens outward. 
                    Half-screens are available that cover only the lower portion, allowing you to open the window 
                    partially without screen interference.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Hardware Durability</h3>
                  <p className="text-navy-700 text-sm mb-2">
                    Quality crank mechanisms feature stainless steel or zinc-plated components that resist corrosion 
                    in humid environments like bathrooms. Expect 20-25 years of smooth operation with occasional 
                    lubrication of moving parts.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Options */}
          <div className="bg-navy-900 p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-8 text-center">
              Awning Window Manufacturers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-2xl text-cream-100 mb-4">Andersen</h3>
                <p className="text-cream-200 text-sm leading-relaxed mb-4">
                  The 400 Series awning features Fibrex® composite frames with exceptional strength-to-weight ratio. 
                  Low-E4® glass package delivers outstanding energy performance. Available in numerous sizes including 
                  specialty shapes. Hardware operates smoothly even with large, heavy sashes.
                </p>
                <div className="space-y-2 text-xs text-cream-200">
                  <div className="flex justify-between border-b border-navy-700 pb-1">
                    <span>Frame Material:</span>
                    <span className="text-gold-400">Fibrex® Composite</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-700 pb-1">
                    <span>Warranty:</span>
                    <span className="text-gold-400">20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price Point:</span>
                    <span className="text-gold-400">Premium</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-cream-100 mb-4">Pella</h3>
                <p className="text-cream-200 text-sm leading-relaxed mb-4">
                  Pella&apos;s 250 Series awning windows offer excellent mid-range value. EnduraClad® exteriors 
                  withstand harsh weather without maintenance. Optional between-the-glass blinds eliminate dusting. 
                  Smooth crank operation and multi-point locks provide years of trouble-free performance.
                </p>
                <div className="space-y-2 text-xs text-cream-200">
                  <div className="flex justify-between border-b border-navy-700 pb-1">
                    <span>Frame Material:</span>
                    <span className="text-gold-400">Vinyl or Wood-Clad</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-700 pb-1">
                    <span>Warranty:</span>
                    <span className="text-gold-400">Limited Lifetime</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price Point:</span>
                    <span className="text-gold-400">Mid-Range</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-cream-100 mb-4">Jeld-Wen</h3>
                <p className="text-cream-200 text-sm leading-relaxed mb-4">
                  The Premium series awning provides solid performance at accessible pricing. Multi-chamber vinyl 
                  frames deliver good insulation. Heavy-duty hardware stands up to frequent use in bathrooms and 
                  other high-traffic applications. Great choice for builder-grade projects or rental properties.
                </p>
                <div className="space-y-2 text-xs text-cream-200">
                  <div className="flex justify-between border-b border-navy-700 pb-1">
                    <span>Frame Material:</span>
                    <span className="text-gold-400">Vinyl</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-700 pb-1">
                    <span>Warranty:</span>
                    <span className="text-gold-400">20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Price Point:</span>
                    <span className="text-gold-400">Value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Considerations */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-sm">
              <h2 className="font-serif text-2xl text-navy-900 mb-6">Installation Planning</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-sm">Exterior Clearance</h3>
                  <p className="text-navy-700 text-sm">
                    Ensure adequate clearance below the window for the sash to open fully. Verify no landscaping, 
                    utility boxes, or architectural features will obstruct the outward swing. Plan for approximately 
                    18-24 inches of clearance depending on window size.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-sm">Water Management</h3>
                  <p className="text-navy-700 text-sm">
                    While awning windows shed rain effectively, they&apos;re not designed to be left open in heavy 
                    downpours. Consider overhang depth above the window. Proper flashing installation is critical—water 
                    must be directed away from the hinge at the top.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-sm">Code Compliance</h3>
                  <p className="text-navy-700 text-sm">
                    Basement egress windows must meet minimum opening size requirements (typically 5.7 square feet of 
                    clear opening). Verify awning windows can achieve this before finalizing specifications. Some 
                    jurisdictions have specific requirements for emergency escape windows.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-sm">
              <h2 className="font-serif text-2xl text-navy-900 mb-6">Maintenance Tips</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-sm">Regular Lubrication</h3>
                  <p className="text-navy-700 text-sm">
                    Apply silicone-based lubricant to crank mechanism gears and hinge points annually. This prevents 
                    binding and extends hardware life, especially in bathroom environments where moisture can cause 
                    corrosion over time.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-sm">Drainage Maintenance</h3>
                  <p className="text-navy-700 text-sm">
                    Clean weep holes at the bottom of the frame twice yearly to ensure proper drainage. Remove debris 
                    and verify water flows freely. Blocked weep holes can lead to water accumulation and frame damage.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2 text-sm">Weather-stripping Check</h3>
                  <p className="text-navy-700 text-sm">
                    Inspect compression seals annually for wear or damage. The weather-stripping around the sash 
                    perimeter is what creates the airtight seal when closed. Most seals last 15-20 years but may 
                    need earlier replacement in high-use applications.
                  </p>
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
                <h3 className="font-semibold text-navy-900 mb-2">Can I leave awning windows open during heavy rain?</h3>
                <p className="text-navy-700 text-sm">
                  Awning windows handle light to moderate rain well, but heavy downpours with wind can drive water 
                  past the sash edges. They&apos;re excellent for maintaining ventilation during typical Texas afternoon 
                  showers, but close them during severe thunderstorms. The key advantage is flexibility—you can keep 
                  them open much longer than other window styles.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are awning windows more expensive than double-hung?</h3>
                <p className="text-navy-700 text-sm">
                  Awning windows typically cost slightly more than comparable double-hung windows due to the crank 
                  mechanism and hinge hardware. Expect to pay 10-15% more. However, their superior energy efficiency 
                  and unique ventilation capabilities often justify the modest premium, especially in bathrooms and 
                  basements where their advantages are most pronounced.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can awning windows be used as egress windows?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, if they meet code requirements for minimum opening size (typically 5.7 square feet) and 
                  maximum sill height from the floor (usually 44 inches). The outward-opening design actually makes 
                  them excellent egress windows—easy to open quickly in emergencies and the opening won&apos;t be blocked 
                  by interior furniture.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How do I clean awning windows?</h3>
                <p className="text-navy-700 text-sm">
                  Open the window fully and clean both sides from inside—much easier than double-hung windows. 
                  The exterior surface becomes accessible when the sash swings out. For high installations, use an 
                  extension pole with a squeegee attachment. This convenience makes awning windows particularly 
                  practical for second-story bathrooms.
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
            Smart Ventilation for Texas Weather
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Discover how awning windows can solve your moisture and ventilation challenges. 
            Get a free estimate tailored to your home&apos;s specific needs.
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

