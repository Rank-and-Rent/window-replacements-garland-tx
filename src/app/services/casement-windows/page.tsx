import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casement Windows Installation Garland TX | Maximum Ventilation & Views",
  description: "Professional casement window installation in Garland, Texas. Crank-out design for unobstructed views and superior ventilation. Most energy-efficient window style. Andersen, Pella & Jeld-Wen. Call 972-734-3158.",
  keywords: "casement windows Garland TX, crank windows, energy efficient windows, contemporary windows, modern window replacement Garland",
};

export default function CasementWindows() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Casement Windows
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Unobstructed views, maximum ventilation, and the tightest seal available.
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
                The Most Energy-Efficient Window Design
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Casement windows swing outward on hinges like a door, operated by a simple crank mechanism. This 
                elegant design delivers several performance advantages that make casements the top choice for 
                energy-conscious Garland homeowners. When closed, the sash presses firmly against the frame, creating 
                an airtight compression seal that vertical-sliding windows simply cannot match.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The outward-opening design allows you to position the entire sash perpendicular to prevailing breezes, 
                effectively channeling air into your home. This ventilation efficiency means you can capture cooling 
                winds on pleasant evenings, reducing air conditioning usage during Garland&apos;s spring and fall months. 
                With no center rail obstructing the view, casement windows also provide expansive, uninterrupted sight 
                lines—perfect for showcasing backyard landscapes or garden views.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern casement windows incorporate multi-point locking systems where several locking points engage 
                simultaneously around the frame perimeter. Beyond security benefits, this mechanism pulls the sash 
                tightly against weather-stripping at multiple locations, virtually eliminating air infiltration. 
                Independent testing consistently shows casement windows achieving the lowest air leakage rates of 
                any operable window style.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Casement Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Superior Energy Efficiency:</strong> Compression seal provides tightest closure of any window type</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Maximum Ventilation:</strong> 100% of the opening can be used for airflow, not just 50%</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Unobstructed Views:</strong> No center rail or meeting rails blocking your sightline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Easy Operation:</strong> Smooth crank mechanism requires minimal effort</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Effortless Cleaning:</strong> Both sides accessible from inside when opened</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Contemporary Aesthetic:</strong> Clean lines complement modern architecture</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Design Considerations */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Design & Placement Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-4">Ideal Locations</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Kitchen Sinks</h4>
                    <p className="text-navy-700 text-sm">
                      Crank operation means you don&apos;t need to reach over the sink. Open while cooking to 
                      exhaust heat and odors. Wide opening aids in passing dishes or herbs from a kitchen garden.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Hard-to-Reach Areas</h4>
                    <p className="text-navy-700 text-sm">
                      Above countertops, behind furniture, or in high installations, the crank handle makes 
                      operation easy from any position without stretching or straining.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Room Corners</h4>
                    <p className="text-navy-700 text-sm">
                      Pair left and right-hinged casements in corners to create 90-degree ventilation that 
                      captures cross-breezes from multiple directions simultaneously.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Scenic Views</h4>
                    <p className="text-navy-700 text-sm">
                      No vertical center rail means uninterrupted sightlines to gardens, landscapes, or 
                      architectural features you want to showcase.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-4">Important Planning Notes</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Exterior Clearance</h4>
                    <p className="text-navy-700 text-sm">
                      Casements swing outward, so avoid locations where window wells, decks, porches, or 
                      landscaping would obstruct the arc of travel. Plan for 90-degree opening clearance.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Hinge Side Selection</h4>
                    <p className="text-navy-700 text-sm">
                      Choose which side hinges based on prevailing winds and interior room layout. Having 
                      wind catch the open sash creates maximum ventilation; hinge away from walkways.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Screen Placement</h4>
                    <p className="text-navy-700 text-sm">
                      Screens install on the interior since the sash opens outward. This protects screens 
                      from weather damage but means they&apos;re visible from inside. Consider color carefully.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Size Limitations</h4>
                    <p className="text-navy-700 text-sm">
                      Larger casements can be heavy when opened. Most manufacturers recommend maximum sash 
                      widths of 36-42 inches for comfortable operation and hardware longevity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hardware & Operation */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-navy-900 p-8 rounded-sm">
              <h2 className="font-serif text-2xl text-cream-100 mb-6">
                Operating Mechanisms
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Standard Crank Operators</h3>
                  <p className="text-cream-200 text-sm">
                    The classic fold-away crank handle provides smooth, geared operation with mechanical 
                    advantage. Modern operators feature nested arm designs that tuck neatly into the sash 
                    when closed. Stainless steel or zinc-plated hardware resists corrosion in humid climates.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Multi-Point Locks</h3>
                  <p className="text-cream-200 text-sm">
                    Premium casements lock at 2-4 points around the frame perimeter. Turning the handle engages 
                    all locks simultaneously, pulling the sash tight against weather-stripping. This creates the 
                    superior seal casements are known for while providing enhanced security.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Push-Out Options</h3>
                  <p className="text-cream-200 text-sm">
                    Some contemporary designs eliminate the crank entirely, using a simple push-out mechanism 
                    with friction hinges that hold the sash at any position. This minimalist approach suits 
                    modern architecture but requires more strength to operate.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Frame Materials Compared
              </h2>
              <div className="space-y-4">
                <div className="bg-white border-2 border-navy-200 p-5">
                  <h3 className="font-semibold text-navy-900 mb-2">Vinyl (PVC)</h3>
                  <p className="text-navy-700 text-sm mb-2">
                    Most popular choice for its low maintenance, excellent insulation value, and affordable 
                    pricing. Quality vinyl won&apos;t fade, peel, or require painting. Multi-chamber extrusions 
                    provide strength and thermal efficiency.
                  </p>
                  <p className="text-gold-600 text-xs"><strong>Best for:</strong> Budget-conscious projects, low maintenance</p>
                </div>
                <div className="bg-white border-2 border-navy-200 p-5">
                  <h3 className="font-semibold text-navy-900 mb-2">Fiberglass Composite</h3>
                  <p className="text-navy-700 text-sm mb-2">
                    Andersen&apos;s Fibrex® and similar composites combine wood fiber with polymers for 
                    superior strength and dimensional stability. Won&apos;t expand or contract with temperature 
                    changes. Can be painted or stained like wood.
                  </p>
                  <p className="text-gold-600 text-xs"><strong>Best for:</strong> Premium performance, custom colors</p>
                </div>
                <div className="bg-white border-2 border-navy-200 p-5">
                  <h3 className="font-semibold text-navy-900 mb-2">Aluminum-Clad Wood</h3>
                  <p className="text-navy-700 text-sm mb-2">
                    Wood interior offers warmth and traditional appeal, while aluminum exterior provides 
                    weather protection without maintenance. Most expensive option but delivers unmatched 
                    aesthetics and can be custom-finished.
                  </p>
                  <p className="text-gold-600 text-xs"><strong>Best for:</strong> Historic homes, luxury projects</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Showcase */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Premium Casement Window Brands
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Andersen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The 400 Series casement represents the gold standard with Fibrex® composite frames that 
                  outperform vinyl in strength and energy efficiency. Dual-pane glass with low-E4® coating 
                  delivers exceptional thermal performance. Available in numerous exterior colors and 
                  interior finishes.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy-600">Energy Rating:</span>
                    <span className="font-semibold text-navy-900">Excellent</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Warranty:</span>
                    <span className="font-semibold text-navy-900">20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Price Range:</span>
                    <span className="font-semibold text-navy-900">$$$</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Pella</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Pella&apos;s 250 Series casement offers premium features at mid-range pricing. 
                  EnduraClad® exteriors resist UV damage in Texas sun. Optional between-the-glass blinds 
                  eliminate dust collection. Integrated rolscreen system keeps screens hidden when not needed.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy-600">Energy Rating:</span>
                    <span className="font-semibold text-navy-900">Very Good</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Warranty:</span>
                    <span className="font-semibold text-navy-900">Lifetime</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Price Range:</span>
                    <span className="font-semibold text-navy-900">$$</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Jeld-Wen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The Premium series casement delivers solid performance with value pricing. Multi-chamber 
                  vinyl frames provide good insulation. Heavy-duty hardware and multi-point locks ensure 
                  years of reliable operation. An excellent choice for whole-house projects.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-navy-600">Energy Rating:</span>
                    <span className="font-semibold text-navy-900">Good</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Warranty:</span>
                    <span className="font-semibold text-navy-900">20 years</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Price Range:</span>
                    <span className="font-semibold text-navy-900">$</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Energy Performance */}
          <div className="bg-navy-900 p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-8 text-center">
              Energy Performance Data
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-5xl font-bold text-gold-400 mb-2">0.20</div>
                <div className="text-cream-200 text-sm">Air Leakage (cfm/ft²)</div>
                <div className="text-cream-200 text-xs mt-2">Industry-leading airtightness</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gold-400 mb-2">25%</div>
                <div className="text-cream-200 text-sm">Energy Cost Reduction</div>
                <div className="text-cream-200 text-xs mt-2">vs. standard double-hung</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-gold-400 mb-2">0.28</div>
                <div className="text-cream-200 text-sm">U-Factor Rating</div>
                <div className="text-cream-200 text-xs mt-2">Excellent insulation value</div>
              </div>
            </div>
            <p className="text-cream-200 text-sm text-center max-w-3xl mx-auto">
              These figures represent premium casement windows with low-E glass and argon fills. 
              The compression seal design inherently provides better performance than vertical-sliding 
              windows, making casements the smartest choice for energy-conscious homeowners.
            </p>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can casement windows be opened during rain?</h3>
                <p className="text-navy-700 text-sm">
                  Generally no—rain would enter through the open window. However, some homeowners pair casements 
                  with operable awnings above, which can stay open during light rain. The superior seal of closed 
                  casements means you don&apos;t worry about water intrusion when they&apos;re shut, even in severe storms.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are casement windows safe for upper floors?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, but consider limiting opening angles for child safety. Many manufacturers offer restrictors 
                  that prevent the sash from opening beyond 90 degrees. The multi-point locks are very secure, making 
                  casements difficult to force open from outside—actually safer than many vertical-sliding styles.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How long does casement window hardware last?</h3>
                <p className="text-navy-700 text-sm">
                  Quality cranking mechanisms should operate smoothly for 20-30 years with minimal maintenance. 
                  Occasional lubrication of the operator arm and hinge points extends lifespan. If a crank eventually 
                  fails, it&apos;s usually a straightforward and inexpensive repair—the window frame itself remains sound.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can I add window air conditioners to casement windows?</h3>
                <p className="text-navy-700 text-sm">
                  Standard window AC units are designed for vertical-sliding windows and won&apos;t work with casements. 
                  However, portable air conditioners with exhaust hoses can be adapted to casement openings using 
                  plexiglass panels. For permanent cooling, consider mini-split systems instead.
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
            Experience the Casement Difference
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Discover why casement windows deliver unmatched energy efficiency and ventilation control. 
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

