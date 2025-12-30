import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Shape Windows Installation Garland TX | Custom Architectural Windows",
  description: "Professional specialty window installation in Garland, Texas. Arched, circle, trapezoid, triangle, and custom shapes. Unique architectural statements. Andersen, Pella & Jeld-Wen. Call 972-734-3158.",
  keywords: "specialty windows Garland TX, arched windows, circle windows, custom windows, architectural windows, geometric windows Garland",
};

export default function SpecialShapeWindows() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Special Shape Windows
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Express your architectural vision with custom geometric designs that make your home extraordinary.
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
                Where Architecture Becomes Art
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Special shape windows break free from rectangular constraints, allowing you to incorporate architectural 
                features that define your home&apos;s character. From elegant arches that soften rooflines to dramatic 
                geometric forms that create focal points, specialty windows transform standard homes into distinctive 
                residences. These custom configurations solve design challenges while adding visual interest that elevates 
                your home&apos;s architectural presence.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The beauty of specialty windows lies in their versatility. Arched transoms above entry doors create 
                welcoming first impressions. Octagonal windows add Victorian charm to gables and dormers. Triangular 
                windows fill awkward peaked spaces in vaulted ceilings. Circle windows—sometimes called oculus or 
                porthole windows—create striking focal points on facades. Each shape serves both functional and aesthetic 
                purposes, admitting natural light while making bold architectural statements.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern manufacturing technology makes custom shapes more accessible than ever. Computer-controlled cutting 
                systems precisely fabricate frames in virtually any configuration you can imagine. Advanced sealant 
                technology ensures even complex curves and angles achieve the same energy efficiency and weather resistance 
                as standard rectangular windows. The result: you can realize your architectural vision without compromising 
                performance or breaking the bank.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Why Choose Special Shapes</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Architectural Distinction:</strong> Creates unique character impossible with standard windows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Problem Solving:</strong> Fills difficult spaces like peaked gables or curved walls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Light Admission:</strong> Brings natural light to areas standard windows can&apos;t reach</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Curb Appeal:</strong> Dramatically enhances exterior visual interest and home value</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Style Expression:</strong> Reflects your taste and architectural preferences</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Versatile Integration:</strong> Combines with standard windows for balanced designs</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Popular Shapes */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Popular Special Shape Options
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Arched Windows</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-3">
                  Curved tops soften architectural lines while maintaining classical proportions. Full round arches 
                  create dramatic statements; segmented arches offer subtle elegance. Eyebrow arches add gentle curves. 
                  Perfect above doors, standard windows, or as standalone features.
                </p>
                <p className="text-gold-600 text-xs"><strong>Best for:</strong> Traditional, Mediterranean, Tuscan styles</p>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Circle Windows</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-3">
                  Full circles create bold focal points on facades or gable ends. Also called oculus or porthole windows. 
                  Available in fixed or operable configurations. Sizes range from small accents (18-24 inches) to 
                  dramatic statements (5-6 feet diameter).
                </p>
                <p className="text-gold-600 text-xs"><strong>Best for:</strong> Contemporary, nautical, eclectic designs</p>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Triangle Windows</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-3">
                  Fills peaked gable spaces in vaulted ceilings or A-frame designs. Can be equilateral, right-angled, 
                  or custom proportions. Often combined with rectangular windows below for balanced light distribution 
                  in cathedral ceilings.
                </p>
                <p className="text-gold-600 text-xs"><strong>Best for:</strong> Modern, A-frame, mountain architecture</p>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Trapezoid Windows</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-3">
                  Four-sided shape with non-parallel top and bottom. Follows rooflines or creates contemporary geometric 
                  interest. Particularly useful in modern designs where standard rectangles feel too conventional. Can be 
                  oriented in any direction.
                </p>
                <p className="text-gold-600 text-xs"><strong>Best for:</strong> Contemporary, modern, unconventional homes</p>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Octagon Windows</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-3">
                  Eight-sided geometric shape adds Victorian charm or contemporary interest. Excellent for accenting 
                  gables, dormers, or creating focal points. Can be oriented with flat side up or pointed up for 
                  different visual effects. Available in various sizes.
                </p>
                <p className="text-gold-600 text-xs"><strong>Best for:</strong> Victorian, Queen Anne, eclectic styles</p>
              </div>
              <div className="border-2 border-navy-200 p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Half-Round & Quarter-Round</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-3">
                  Semicircular or quarter-circle shapes typically used above doors or standard windows. Also called 
                  fan lights or radius windows. Can include decorative grilles in sunburst or spoke patterns. Creates 
                  elegant traditional character.
                </p>
                <p className="text-gold-600 text-xs"><strong>Best for:</strong> Colonial, Federal, Georgian architecture</p>
              </div>
            </div>
          </div>

          {/* Design Applications */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Strategic Placement
              </h2>
              <div className="space-y-4">
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2">Entry Accents</h3>
                  <p className="text-cream-200 text-sm">
                    Arched or half-round transoms above front doors create inviting first impressions while admitting 
                    natural light into entryways. Sidelights in custom shapes add sophistication. This combination 
                    establishes your home&apos;s architectural character from the curb.
                  </p>
                </div>
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2">Gable Features</h3>
                  <p className="text-cream-200 text-sm">
                    Triangular, circular, or custom-shaped windows in gable ends prevent wasted space while adding 
                    exterior visual interest. These windows become focal points that define your home&apos;s facade, 
                    particularly effective in two-story designs where the gable is prominent.
                  </p>
                </div>
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2">Cathedral Ceiling Light</h3>
                  <p className="text-cream-200 text-sm">
                    Triangular or arched windows at the peak of vaulted ceilings flood tall spaces with natural light 
                    from above. Often combined with standard windows at normal height for balanced illumination. The 
                    dramatic vertical scale creates breathtaking interior spaces.
                  </p>
                </div>
                <div className="bg-navy-900 p-6 rounded-sm">
                  <h3 className="text-cream-100 font-semibold mb-2">Stairwell Illumination</h3>
                  <p className="text-cream-200 text-sm">
                    Specialty windows in stairwells provide natural light while creating visual interest in spaces that 
                    often feel dark and closed. Tall narrow shapes or cascading arrangements follow the stair angle, 
                    turning functional areas into architectural features.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Design Combinations
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Arch Over Standard</h3>
                  <p className="text-navy-700 text-sm">
                    Arched transom above standard double-hung or casement windows creates elegant traditional 
                    composition. The arch softens the rectangular form while adding height and light. This timeless 
                    combination suits virtually any architectural style.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Triangle with Flanking Rectangles</h3>
                  <p className="text-navy-700 text-sm">
                    Central triangular window in vaulted ceiling flanked by tall rectangular windows creates balanced 
                    composition that follows the roofline. Provides abundant light while emphasizing ceiling height. 
                    Popular in great rooms and master bedrooms.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Circle with Sidelights</h3>
                  <p className="text-navy-700 text-sm">
                    Central circular window flanked by narrow vertical rectangles creates contemporary focal point. 
                    The geometric contrast adds visual interest while maintaining symmetry. Effective on modern facades 
                    or as unique interior partition features.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Multiple Specialty Arrangement</h3>
                  <p className="text-navy-700 text-sm">
                    Series of identical specialty shapes—octagons, diamonds, or custom forms—arranged in patterns 
                    creates rhythm and visual interest. Particularly effective in contemporary architecture where 
                    repetition of geometric elements defines the design language.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Considerations */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Important Technical Considerations
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-4">Operable vs. Fixed</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Fixed Configurations</h4>
                    <p className="text-navy-700 text-sm">
                      Most specialty shapes are manufactured as fixed units—they don&apos;t open. This simplifies 
                      manufacturing, reduces cost, and ensures optimal energy efficiency. Fixed units work perfectly 
                      for most applications where ventilation isn&apos;t required.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Operable Options</h4>
                    <p className="text-navy-700 text-sm">
                      Some shapes—particularly circles and certain arches—can be manufactured as operable casement 
                      or awning units. These cost significantly more due to complex hardware requirements. Useful 
                      when specialty windows are your only ventilation source in a space.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Combination Approach</h4>
                    <p className="text-navy-700 text-sm">
                      Often the best solution pairs fixed specialty shapes with nearby operable standard windows. 
                      You get the visual impact of custom shapes at reasonable cost while maintaining practical 
                      ventilation capability. This balanced approach optimizes both aesthetics and function.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-4">Customization & Pricing</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Standard Shapes</h4>
                    <p className="text-navy-700 text-sm">
                      Common shapes in standard sizes (quarter-rounds, half-rounds, circles up to 48", triangles) 
                      are often stocked or quick-ship items. These offer the best value—typically only 10-30% more 
                      than comparable rectangular windows. Lead times of 2-4 weeks.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Custom Configurations</h4>
                    <p className="text-navy-700 text-sm">
                      Unique sizes or uncommon shapes require custom fabrication. Expect to pay 30-60% more than 
                      standard windows of similar area. Lead times extend to 6-10 weeks. The investment delivers 
                      truly distinctive features impossible to achieve any other way.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Design Services</h4>
                    <p className="text-navy-700 text-sm">
                      We provide design consultation to ensure specialty windows complement your home&apos;s architecture 
                      and meet structural requirements. CAD drawings show how proposed shapes will look. This planning 
                      phase is crucial for achieving satisfying results with custom windows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Glass & Energy Options */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-navy-900 p-8 rounded-sm">
              <h2 className="font-serif text-2xl text-cream-100 mb-6">
                Glass Technology
              </h2>
              <div className="space-y-5">
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Low-E Coatings</h3>
                  <p className="text-cream-200 text-sm">
                    Essential for Texas climate, low-E coatings block heat while allowing light transmission. Specialty 
                    shapes can accommodate all the same glass packages as standard windows—don&apos;t sacrifice energy 
                    efficiency for aesthetics. Argon fills provide additional insulation value.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Decorative Glass</h3>
                  <p className="text-cream-200 text-sm">
                    Specialty windows are perfect candidates for decorative glass treatments. Beveled glass adds 
                    sparkle and refraction. Textured or obscured glass provides privacy while admitting light. 
                    Stained glass creates custom artwork. These options enhance the unique character of specialty shapes.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Grille Patterns</h3>
                  <p className="text-cream-200 text-sm">
                    Decorative grilles—muntins that divide the glass into smaller panes—add traditional character or 
                    geometric interest. Arched windows often feature sunburst patterns. Circles may have spoke designs. 
                    Available in between-glass, surface-applied, or true divided lite configurations.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Installation Requirements
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Structural Support</h3>
                  <p className="text-navy-700 text-sm">
                    Non-rectangular openings require careful header sizing and structural analysis. Arched openings 
                    may need reinforced headers to support the span. Large specialty shapes can be surprisingly heavy—
                    proper support is essential for long-term performance.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Precision Framing</h3>
                  <p className="text-navy-700 text-sm">
                    The rough opening must precisely match the window shape—there&apos;s no standard framing approach 
                    for custom configurations. Experienced installers use templates provided by manufacturers to ensure 
                    accurate openings that accommodate the specialty unit properly.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Weather Sealing</h3>
                  <p className="text-navy-700 text-sm">
                    Curves and angles require flexible flashing materials that conform to the shape while providing 
                    watertight seals. We use premium self-adhering flashing tapes that stretch around curves and seal 
                    reliably at angle transitions. Proper flashing is critical for specialty shapes.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4 bg-white p-4">
                  <h3 className="font-semibold text-navy-900 mb-2">Custom Trim</h3>
                  <p className="text-navy-700 text-sm">
                    Interior and exterior trim for specialty shapes often requires custom milling or special techniques. 
                    Arched casings may need to be steam-bent or built up from multiple pieces. This custom work adds to 
                    installation time and cost but is necessary for professional finished appearance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Capabilities */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Manufacturer Specialty Shape Capabilities
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-t-4 border-gold-500 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Andersen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Industry-leading specialty shape options with virtually unlimited customization. Offers over 40 
                  standard specialty shapes plus true custom capabilities. Fibrex® composite frames handle complex 
                  curves without warping. Most comprehensive selection for architectural window needs.
                </p>
                <div className="border-t-2 border-navy-200 pt-4 space-y-2 text-sm">
                  <p><strong className="text-navy-900">Standard Shapes:</strong> 40+ options</p>
                  <p><strong className="text-navy-900">Custom Capability:</strong> Unlimited</p>
                  <p><strong className="text-navy-900">Lead Time:</strong> 6-10 weeks</p>
                </div>
              </div>
              <div className="bg-white border-t-4 border-gold-500 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Pella</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Excellent selection of common specialty shapes with good customization options. Specialty shapes 
                  available in both wood-clad and vinyl frame options. Strong technical support helps specify proper 
                  sizes and configurations. Good value for standard specialty applications.
                </p>
                <div className="border-t-2 border-navy-200 pt-4 space-y-2 text-sm">
                  <p><strong className="text-navy-900">Standard Shapes:</strong> 25+ options</p>
                  <p><strong className="text-navy-900">Custom Capability:</strong> Extensive</p>
                  <p><strong className="text-navy-900">Lead Time:</strong> 4-8 weeks</p>
                </div>
              </div>
              <div className="bg-white border-t-4 border-gold-500 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Jeld-Wen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Focuses on most popular specialty shapes—arches, half-rounds, circles, triangles—in standard sizes. 
                  Limited custom capabilities but excellent value for common applications. Quick-ship standard sizes 
                  reduce project timelines. Best for straightforward specialty needs.
                </p>
                <div className="border-t-2 border-navy-200 pt-4 space-y-2 text-sm">
                  <p><strong className="text-navy-900">Standard Shapes:</strong> 15+ options</p>
                  <p><strong className="text-navy-900">Custom Capability:</strong> Limited</p>
                  <p><strong className="text-navy-900">Lead Time:</strong> 2-6 weeks</p>
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
                <h3 className="font-semibold text-navy-900 mb-2">Are specialty windows more expensive?</h3>
                <p className="text-navy-700 text-sm">
                  Standard specialty shapes in common sizes cost 10-30% more than comparable rectangular windows—a 
                  modest premium for the architectural impact. Truly custom configurations may cost 40-60% more due 
                  to one-off fabrication. The investment enhances curb appeal and home value significantly, often 
                  returning 75-85% of cost at resale.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can specialty windows be as energy-efficient as standard windows?</h3>
                <p className="text-navy-700 text-sm">
                  Yes. Fixed specialty shapes often achieve better energy efficiency than operable standard windows 
                  because they have no moving parts to create air leakage pathways. They can incorporate the same 
                  low-E glass, argon fills, and advanced coatings as any standard window. Don&apos;t compromise performance 
                  for aesthetics—modern specialty windows deliver both.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How do I clean specialty windows in hard-to-reach locations?</h3>
                <p className="text-navy-700 text-sm">
                  Many specialty windows are installed in high locations like gables or cathedral ceilings. Interior 
                  cleaning is straightforward with extension poles and squeegee attachments. Exterior cleaning typically 
                  requires ladders or professional window cleaning services. Plan for professional cleaning 1-2 times 
                  annually for high installations.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can I replace an existing specialty window with a different shape?</h3>
                <p className="text-navy-700 text-sm">
                  Changing from one specialty shape to another requires reframing the rough opening—essentially the 
                  same scope as a new installation. You can replace an existing specialty window with the same shape 
                  more easily if the opening dimensions work. We can assess your specific situation and recommend the 
                  most practical approach during consultation.
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
            Bring Your Architectural Vision to Life
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Let&apos;s discuss how specialty windows can transform your home&apos;s character and solve your unique design challenges. 
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

