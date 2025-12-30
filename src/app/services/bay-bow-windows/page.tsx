import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bay & Bow Windows Installation Garland TX | Add Space & Elegance",
  description: "Professional bay and bow window installation in Garland, Texas. Projecting designs add square footage and architectural interest. Multiple panes create panoramic views. Andersen, Pella & Jeld-Wen. Call 972-734-3158.",
  keywords: "bay windows Garland TX, bow windows, projecting windows, panoramic windows, architectural windows Garland Texas",
};

export default function BayBowWindows() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Bay & Bow Windows
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Expand your living space and elevate your home&apos;s architecture with panoramic projecting windows.
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
                Architectural Distinction That Adds Living Space
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Bay and bow windows project outward from your home&apos;s exterior wall, creating interior space that 
                didn&apos;t exist before. This projection—typically 12-24 inches—transforms flat walls into dimensional 
                architectural features while adding functional square footage. The multi-angled or curved configuration 
                provides panoramic views impossible with flat windows, capturing light from multiple directions throughout 
                the day.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Bay windows feature three panels arranged in an angular projection, usually with a large center picture 
                window flanked by operable double-hung or casement windows angled at 30 or 45 degrees. This classic 
                configuration has defined elegant architecture for centuries, offering a perfect balance of views, 
                ventilation, and traditional aesthetic appeal. The created nook becomes ideal for window seats, reading 
                spaces, or display areas that enhance room functionality.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Bow windows create a gentler, curved projection using four, five, or six window units arranged in a 
                sweeping arc. This continuous curve delivers even more panoramic viewing angles and typically projects 
                further than bay windows, creating larger interior spaces. The graceful form suits both traditional and 
                contemporary architecture, adding sculptural interest to facades while flooding interiors with natural 
                light from dawn to dusk.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Key Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Added Square Footage:</strong> Physically expands interior space without home additions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Panoramic Views:</strong> Multi-angled panels capture vistas from multiple directions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Architectural Impact:</strong> Dramatic exterior and interior visual statement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Natural Light:</strong> Captures sunlight throughout the day from changing angles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Increased Home Value:</strong> Premium feature that significantly boosts resale appeal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Functional Niches:</strong> Creates window seats, display areas, or reading nooks</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bay vs Bow Comparison */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Bay vs. Bow: Understanding the Difference
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Bay Windows</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Configuration</h4>
                    <p className="text-navy-700 text-sm">
                      Three windows in angular arrangement. Center panel is typically a large picture window flanked 
                      by operable double-hung or casement units angled at 30° or 45°. The sharp angles create 
                      defined geometry.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Projection Depth</h4>
                    <p className="text-navy-700 text-sm">
                      Usually projects 12-18 inches from the wall. The angular design creates a distinct nook 
                      without excessive exterior projection that might conflict with walkways or landscaping.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Architectural Style</h4>
                    <p className="text-navy-700 text-sm">
                      Classic traditional appeal. Suits Victorian, colonial, craftsman, and ranch homes. The 
                      defined angles and proportions follow centuries of architectural precedent.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Best Applications</h4>
                    <p className="text-navy-700 text-sm">
                      Living rooms, dining rooms, breakfast nooks. Creates ideal window seat opportunities. 
                      Works well above kitchen sinks with shorter versions called garden windows.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Price Point</h4>
                    <p className="text-navy-700 text-sm">
                      Generally less expensive than comparable bow windows due to simpler construction with fewer 
                      panels. Faster installation time reduces labor costs.
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Bow Windows</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Configuration</h4>
                    <p className="text-navy-700 text-sm">
                      Four, five, or six windows arranged in continuous curve. Most panels are fixed with one or 
                      two operable units for ventilation. The smooth arc creates graceful, flowing sightlines.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Projection Depth</h4>
                    <p className="text-navy-700 text-sm">
                      Typically projects 18-24 inches, creating more interior space than bay windows. The greater 
                      projection allows for deeper window seats or built-in storage beneath.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Architectural Style</h4>
                    <p className="text-navy-700 text-sm">
                      Softer, more romantic aesthetic. Works with traditional, transitional, and contemporary 
                      styles. The curved form creates sculptural exterior interest and elegant interior presence.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Best Applications</h4>
                    <p className="text-navy-700 text-sm">
                      Living rooms with scenic views, master bedrooms, formal dining rooms. The wider span suits 
                      larger rooms where the window becomes the central architectural feature.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy-900 mb-2 text-sm">Price Point</h4>
                    <p className="text-navy-700 text-sm">
                      Premium pricing due to more complex construction with additional panels and curved head and 
                      seat boards. Higher installation labor costs reflect technical complexity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Considerations */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Structural Requirements
              </h2>
              <div className="space-y-4">
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2">Foundation Support</h3>
                  <p className="text-cream-200 text-sm">
                    Bay and bow windows are heavy—500 to 1000+ pounds when fully glazed. They require either cantilevered 
                    support from structural framing above or dedicated support below via brackets, knee braces, or 
                    foundation extensions. Your installer must assess load-bearing capacity and implement proper support.
                  </p>
                </div>
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2">Header Sizing</h3>
                  <p className="text-cream-200 text-sm">
                    The wall opening for a bay or bow window is larger than the actual unit width. Proper header sizing 
                    distributes the roof load around this opening. Most installations require engineered headers—doubled 
                    or tripled 2x10s or 2x12s, or engineered lumber products specified by local building codes.
                  </p>
                </div>
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2">Roof Integration</h3>
                  <p className="text-cream-200 text-sm">
                    The projecting window requires a roof above it. This can be an integrated metal or fiberglass roof 
                    (included with most units) or a custom-built shingled roof matching your home. Proper flashing where 
                    the bay roof meets your house wall is critical for preventing water intrusion.
                  </p>
                </div>
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2">Cable Support Systems</h3>
                  <p className="text-cream-200 text-sm">
                    Many bay and bow windows use steel cable support systems that transfer weight to the house structure 
                    above the unit. These cables run from the top of the bay through the interior, attaching to structural 
                    framing in the attic. Proper installation and tensioning is essential for long-term performance.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Design Options & Customization
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Angle Selection (Bay Windows)</h3>
                  <p className="text-navy-700 text-sm">
                    30-degree angles create wider, more dramatic projection. 45-degree angles provide balanced 
                    proportions that suit most homes. Some manufacturers offer custom angles for unique architectural 
                    requirements. The angle affects both exterior appearance and interior nook depth.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Number of Lites (Bow Windows)</h3>
                  <p className="text-navy-700 text-sm">
                    Four-lite bows suit smaller installations (5-7 feet wide). Five-lite configurations offer the 
                    most balanced proportions for 7-9 foot spans. Six-lite bows create grand statements in large 
                    rooms with 9-12 foot openings. More lites increase both visual interest and cost.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Interior Finishing</h3>
                  <p className="text-navy-700 text-sm">
                    The seat board (bottom) can be finished with hardwood to match flooring, painted to match trim, 
                    or upholstered for built-in cushioned seating. Side panels and head trim are typically wood that 
                    can be stained or painted. These finishes dramatically impact the final aesthetic.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Roof Styles</h3>
                  <p className="text-navy-700 text-sm">
                    Standard metal roofs come in white, brown, or copper finishes. Shingle roofs match your home but 
                    require periodic maintenance. Copper roofs develop beautiful patina over time and last 50+ years. 
                    The roof choice affects both appearance and long-term maintenance requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Options */}
          <div className="bg-navy-900 p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-8 text-center">
              Premium Bay & Bow Window Manufacturers
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-2xl text-cream-100 mb-4">Andersen</h3>
                <p className="text-cream-200 text-sm leading-relaxed mb-4">
                  Andersen&apos;s 400 Series bay and bow windows represent the pinnacle of American window manufacturing. 
                  Fibrex® composite construction ensures dimensional stability—critical for multi-panel configurations. 
                  Custom options include unlimited sizes, angles, and finish combinations. Integrated cable support 
                  systems simplify installation while providing rock-solid support.
                </p>
                <div className="space-y-2 text-xs text-cream-200 border-t border-navy-700 pt-4">
                  <p className="flex justify-between">
                    <span>Bay Configurations:</span>
                    <span className="text-gold-400">30° or 45° angles</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Bow Options:</span>
                    <span className="text-gold-400">4, 5, or 6 lites</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Warranty:</span>
                    <span className="text-gold-400">20 years</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-cream-100 mb-4">Pella</h3>
                <p className="text-cream-200 text-sm leading-relaxed mb-4">
                  Pella&apos;s bay and bow windows deliver excellent value with refined engineering. The 250 Series 
                  offers numerous configuration options at mid-range pricing. EnduraClad® exteriors require zero 
                  maintenance. Optional between-the-glass blinds eliminate dusting while preserving clean sightlines. 
                  Comprehensive installation instructions support contractor success.
                </p>
                <div className="space-y-2 text-xs text-cream-200 border-t border-navy-700 pt-4">
                  <p className="flex justify-between">
                    <span>Bay Configurations:</span>
                    <span className="text-gold-400">30°, 45° angles</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Bow Options:</span>
                    <span className="text-gold-400">4 or 5 lites</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Warranty:</span>
                    <span className="text-gold-400">Limited Lifetime</span>
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-2xl text-cream-100 mb-4">Jeld-Wen</h3>
                <p className="text-cream-200 text-sm leading-relaxed mb-4">
                  Jeld-Wen&apos;s bay and bow windows provide solid performance at accessible pricing. Standard 
                  configurations ship quickly for common applications. Multi-chamber vinyl frames deliver good 
                  insulation and structural integrity. While lacking the customization options of premium brands, 
                  Jeld-Wen offers excellent value for straightforward installations.
                </p>
                <div className="space-y-2 text-xs text-cream-200 border-t border-navy-700 pt-4">
                  <p className="flex justify-between">
                    <span>Bay Configurations:</span>
                    <span className="text-gold-400">45° angles</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Bow Options:</span>
                    <span className="text-gold-400">4 or 5 lites</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Warranty:</span>
                    <span className="text-gold-400">20 years</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Installation Process */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Professional Installation Process
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border-2 border-navy-200 p-6">
                <div className="bg-gold-500 text-navy-900 font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">1</div>
                <h3 className="font-semibold text-navy-900 mb-2">Site Assessment</h3>
                <p className="text-navy-700 text-sm">
                  We evaluate structural requirements, measure precisely, and identify any modifications needed 
                  before ordering. This includes assessing exterior clearances, interior space, and integration 
                  with existing architecture.
                </p>
              </div>
              <div className="bg-white border-2 border-navy-200 p-6">
                <div className="bg-gold-500 text-navy-900 font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">2</div>
                <h3 className="font-semibold text-navy-900 mb-2">Structural Preparation</h3>
                <p className="text-navy-700 text-sm">
                  Temporary support walls stabilize the area while we remove the existing window and frame the 
                  larger opening. Header installation and structural reinforcement ensure code compliance and 
                  long-term integrity.
                </p>
              </div>
              <div className="bg-white border-2 border-navy-200 p-6">
                <div className="bg-gold-500 text-navy-900 font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">3</div>
                <h3 className="font-semibold text-navy-900 mb-2">Support Installation</h3>
                <p className="text-navy-700 text-sm">
                  Brackets, cables, or knee braces are installed according to manufacturer specifications and 
                  engineering requirements. Proper support is non-negotiable—this is what ensures your bay or 
                  bow window remains stable for decades.
                </p>
              </div>
              <div className="bg-white border-2 border-navy-200 p-6">
                <div className="bg-gold-500 text-navy-900 font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">4</div>
                <h3 className="font-semibold text-navy-900 mb-2">Window Positioning</h3>
                <p className="text-navy-700 text-sm">
                  The assembled unit is carefully lifted into place and secured to support systems. Level and 
                  plumb adjustments ensure proper operation and weather-tightness. This step requires multiple 
                  technicians due to unit weight and complexity.
                </p>
              </div>
              <div className="bg-white border-2 border-navy-200 p-6">
                <div className="bg-gold-500 text-navy-900 font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">5</div>
                <h3 className="font-semibold text-navy-900 mb-2">Weather Sealing</h3>
                <p className="text-navy-700 text-sm">
                  Comprehensive flashing around the entire perimeter channels water away from vulnerable areas. 
                  The bay roof integrates with house siding using step flashing and counter flashing for 
                  watertight performance.
                </p>
              </div>
              <div className="bg-white border-2 border-navy-200 p-6">
                <div className="bg-gold-500 text-navy-900 font-bold w-10 h-10 rounded-full flex items-center justify-center mb-4">6</div>
                <h3 className="font-semibold text-navy-900 mb-2">Interior & Exterior Finishing</h3>
                <p className="text-navy-700 text-sm">
                  Seat boards, side panels, and trim are finished according to your specifications. Exterior 
                  trim integrates seamlessly with existing siding. Final caulking, painting, and detailing 
                  complete the transformation.
                </p>
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
                <h3 className="font-semibold text-navy-900 mb-2">How much does bay or bow window installation cost?</h3>
                <p className="text-navy-700 text-sm">
                  Bay windows typically range from $3,000-$8,000 installed, while bow windows cost $3,500-$10,000+ 
                  depending on size, brand, and complexity. Structural modifications, custom finishes, and premium 
                  materials increase costs. The investment adds significant value—bay and bow windows return 70-80% 
                  of cost at resale while dramatically enhancing curb appeal and living space.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How long does installation take?</h3>
                <p className="text-navy-700 text-sm">
                  Bay and bow window installation typically requires 1-3 days depending on structural modifications 
                  needed. Simple replacements in existing bay openings may complete in one day. New installations 
                  requiring framing modifications and structural work take 2-3 days. We protect your home throughout 
                  the process and never leave openings exposed overnight.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Do bay and bow windows leak more than flat windows?</h3>
                <p className="text-navy-700 text-sm">
                  When properly installed with comprehensive flashing systems, bay and bow windows are just as 
                  watertight as flat windows. The key is professional installation that integrates the bay roof with 
                  house siding using proper flashing techniques. We use premium materials and proven methods that 
                  ensure leak-free performance even in severe Texas storms.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can I add a window seat?</h3>
                <p className="text-navy-700 text-sm">
                  Absolutely. Window seats are one of the main attractions of bay and bow windows. We can build custom 
                  seats with storage below, add cushions for comfortable reading nooks, or simply finish the seat board 
                  beautifully for display space. The depth of projection determines how functional the seat will be—
                  deeper bows create more comfortable seating than shallow bays.
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
            Transform Your Home with Projecting Windows
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Discover how bay or bow windows can expand your living space and elevate your home&apos;s architecture. 
            Schedule a free design consultation today.
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

