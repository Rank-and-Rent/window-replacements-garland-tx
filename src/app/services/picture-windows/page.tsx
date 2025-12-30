import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Picture Windows Installation Garland TX | Expansive Views & Natural Light",
  description: "Professional picture window installation in Garland, Texas. Non-operable fixed glass for maximum views and light. Energy-efficient, low maintenance, architectural focal points. Andersen, Pella & Jeld-Wen. Call 972-734-3158.",
  keywords: "picture windows Garland TX, fixed windows, large windows, floor to ceiling windows, architectural windows Garland",
};

export default function PictureWindows() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Picture Windows
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Frame your views like living artwork. Flood your home with natural light through expansive fixed glass.
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
                Uninterrupted Views, Uncompromised Performance
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Picture windows are fixed glass units that don&apos;t open—and that simplicity is their strength. 
                Without the mechanical complexity of operable components, picture windows achieve the tightest seals, 
                best energy efficiency, and lowest maintenance requirements of any window style. They transform walls 
                into transparent portals, connecting interior spaces with outdoor landscapes, gardens, or architectural 
                features you want to showcase.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The absence of sashes, rails, and hardware means nothing interrupts your view. Picture windows can 
                be manufactured in sizes that would be impractical for operable styles—spanning eight, ten, even 
                twelve feet in width or height. This scale creates dramatic architectural statements, floods rooms 
                with natural light, and establishes seamless visual connections between indoor and outdoor living 
                spaces. For Garland homes with attractive backyard landscapes, picture windows become the star feature.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern picture windows incorporate the same advanced glass technology as operable styles: low-E 
                coatings, argon or krypton gas fills, and multiple panes that deliver exceptional thermal performance. 
                Because the glass is permanently sealed into the frame without moving parts, these systems actually 
                outperform operable windows in energy testing. The fixed installation also means no air leakage 
                through operating mechanisms—picture windows approach the thermal performance of solid insulated walls.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Picture Window Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Maximum Views:</strong> No sashes, rails, or hardware interrupting sightlines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Superior Energy Efficiency:</strong> Fixed seals outperform any operable window</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Zero Maintenance:</strong> No operating mechanisms to lubricate or adjust</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Expansive Sizes:</strong> Available in dimensions impossible for operable styles</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Natural Light:</strong> Floods interior spaces, reducing artificial lighting needs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Cost Efficiency:</strong> Less expensive per square foot than operable windows</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Enhanced Security:</strong> Can&apos;t be opened from outside—absolute barrier</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Design Applications */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Strategic Design Applications
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-4">Living Spaces</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Living Rooms with Views</h4>
                    <p className="text-navy-700 text-sm">
                      Large picture windows become the focal point, showcasing gardens, pools, or landscapes. 
                      Flank with operable casements or double-hung windows for ventilation while maintaining 
                      the expansive center view uninterrupted.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Two-Story Entryways</h4>
                    <p className="text-navy-700 text-sm">
                      Floor-to-ceiling picture windows in entryways create dramatic first impressions while 
                      flooding the space with natural light. Combine with sidelights and transoms for 
                      architectural interest without compromising the view.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Home Offices</h4>
                    <p className="text-navy-700 text-sm">
                      Picture windows provide inspiring views and abundant natural light—proven to enhance 
                      productivity and well-being. Position desks perpendicular to windows to avoid screen 
                      glare while maintaining visual connection to outdoors.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Dining Rooms</h4>
                    <p className="text-navy-700 text-sm">
                      Frame outdoor dining areas, patios, or gardens. The connection between indoor and outdoor 
                      living spaces enhances entertaining. Natural light eliminates the need for artificial 
                      lighting during daytime meals.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-4">Creative Combinations</h3>
                <div className="space-y-3">
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Center Picture + Flanking Operable</h4>
                    <p className="text-navy-700 text-sm">
                      Most popular combination: large center picture window flanked by operable double-hung or 
                      casement windows. Maintains expansive views while providing ventilation control on both sides.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Picture + Awning Combination</h4>
                    <p className="text-navy-700 text-sm">
                      Large picture window with awning units above or below. The picture provides views and light 
                      while awnings handle ventilation. Particularly effective in kitchens where you want views 
                      without losing counter space to operable windows.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Multiple Picture Window Banks</h4>
                    <p className="text-navy-700 text-sm">
                      Series of picture windows spanning entire walls create gallery-like experiences. Narrow 
                      mullions between units provide structural support while maintaining the flow of views. 
                      Common in contemporary architecture.
                    </p>
                  </div>
                  <div className="border-l-4 border-gold-500 pl-4">
                    <h4 className="font-semibold text-navy-900 text-sm mb-1">Corner Picture Windows</h4>
                    <p className="text-navy-700 text-sm">
                      Picture windows meeting at 90-degree corners create seamless visual flow between two walls. 
                      Structural post in corner supports loads while glass wraps around, providing panoramic views. 
                      Stunning in homes with multiple scenic exposures.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Size and Specifications */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-navy-900 p-8 rounded-sm">
              <h2 className="font-serif text-2xl text-cream-100 mb-6">
                Size Capabilities
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Standard Sizes</h3>
                  <p className="text-cream-200 text-sm mb-2">
                    Most manufacturers stock picture windows from 24 x 24 inches up to 72 x 72 inches in standard 
                    sizes. These require no custom fabrication and ship quickly. Standard sizes offer the best value 
                    for budget-conscious projects while providing ample glass area for views and light.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Custom Sizes</h3>
                  <p className="text-cream-200 text-sm mb-2">
                    Custom picture windows can reach 10-12 feet in width or height, limited primarily by structural 
                    considerations and transportation logistics. Very large units may require on-site assembly or 
                    special handling equipment. Lead times extend to 6-10 weeks for custom fabrication.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Structural Requirements</h3>
                  <p className="text-cream-200 text-sm mb-2">
                    Large picture windows require proper header sizing to support the wall load above. Glass itself 
                    is heavy—a 6 x 6 foot double-pane unit weighs 200+ pounds. Work with qualified installers who 
                    understand structural requirements and local building codes.
                  </p>
                </div>
                <div>
                  <h3 className="text-cream-100 font-semibold mb-2">Glass Thickness</h3>
                  <p className="text-cream-200 text-sm mb-2">
                    Larger picture windows require thicker glass to resist wind loads and prevent deflection. 
                    Standard residential glass is 3mm thick; large units may use 5-6mm glass. Laminated glass 
                    provides additional strength and impact resistance for Texas storm conditions.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Energy Performance
              </h2>
              <div className="space-y-4">
                <div className="bg-white border-2 border-navy-200 p-5">
                  <h3 className="font-semibold text-navy-900 mb-2">Glass Technology Options</h3>
                  <p className="text-navy-700 text-sm mb-3">
                    Picture windows can accommodate any glass package available for operable windows. Low-E coatings 
                    are essential for Texas climates—they block up to 70% of solar heat while allowing visible light 
                    through. Triple-pane systems deliver even better insulation for extreme energy efficiency.
                  </p>
                </div>
                <div className="bg-white border-2 border-navy-200 p-5">
                  <h3 className="font-semibold text-navy-900 mb-2">Gas Fills</h3>
                  <p className="text-navy-700 text-sm mb-3">
                    Argon gas between panes reduces heat transfer compared to air. Krypton provides even better 
                    insulation in narrower spaces but costs more. For large picture windows, the energy savings 
                    from premium gas fills pay back quickly through reduced cooling costs.
                  </p>
                </div>
                <div className="bg-white border-2 border-navy-200 p-5">
                  <h3 className="font-semibold text-navy-900 mb-2">U-Factor Achievement</h3>
                  <p className="text-navy-700 text-sm mb-3">
                    Quality picture windows with low-E glass and argon fills achieve U-factors of 0.25-0.28—
                    excellent thermal performance that qualifies for utility rebates. This is 15-20% better than 
                    comparable operable windows because fixed seals eliminate air infiltration pathways.
                  </p>
                </div>
                <div className="bg-white border-2 border-navy-200 p-5">
                  <h3 className="font-semibold text-navy-900 mb-2">Solar Heat Gain Control</h3>
                  <p className="text-navy-700 text-sm mb-3">
                    Large picture windows facing south or west can create greenhouse effects without proper glass 
                    selection. Low-E coatings with low solar heat gain coefficients (SHGC below 0.30) block heat 
                    while preserving views and light—critical for comfort in Garland&apos;s climate.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Showcase */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Premium Picture Window Brands
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Andersen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The 400 Series picture window features Fibrex® composite frames that won&apos;t warp or bow even in 
                  large sizes. Low-E4® glass package delivers industry-leading energy performance. Available in 
                  unlimited custom sizes with numerous finish options. Backed by Andersen&apos;s comprehensive warranty.
                </p>
                <div className="space-y-2 text-sm border-t-2 border-navy-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-navy-600">Max Size:</span>
                    <span className="font-semibold text-navy-900">144" x 144"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">U-Factor:</span>
                    <span className="font-semibold text-navy-900">0.25</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Price:</span>
                    <span className="font-semibold text-navy-900">Premium</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Pella</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Pella&apos;s 250 Series picture windows provide excellent performance at mid-range pricing. 
                  EnduraClad® exteriors resist fading and weathering. AdvancedComfort™ low-E glass technology 
                  blocks heat while maintaining crystal-clear views. Ideal for large installations where value matters.
                </p>
                <div className="space-y-2 text-sm border-t-2 border-navy-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-navy-600">Max Size:</span>
                    <span className="font-semibold text-navy-900">120" x 120"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">U-Factor:</span>
                    <span className="font-semibold text-navy-900">0.27</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Price:</span>
                    <span className="font-semibold text-navy-900">Mid-Range</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 border-t-4 border-gold-500">
                <h3 className="font-serif text-2xl text-navy-900 mb-4">Jeld-Wen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The Premium series picture window delivers solid performance at accessible pricing. Multi-chamber 
                  vinyl frames provide good insulation and structural integrity. Available in popular standard sizes 
                  with quick ship times. Great value for whole-house projects or rental properties.
                </p>
                <div className="space-y-2 text-sm border-t-2 border-navy-200 pt-4">
                  <div className="flex justify-between">
                    <span className="text-navy-600">Max Size:</span>
                    <span className="font-semibold text-navy-900">96" x 96"</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">U-Factor:</span>
                    <span className="font-semibold text-navy-900">0.28</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-navy-600">Price:</span>
                    <span className="font-semibold text-navy-900">Value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Installation & Maintenance */}
          <div className="bg-navy-900 p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-8 text-center">
              Installation & Long-Term Care
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-cream-100 font-serif text-xl mb-4">Professional Installation Requirements</h3>
                <div className="space-y-4 text-cream-200 text-sm">
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Structural Assessment</h4>
                    <p>
                      Large picture windows may require structural modifications including upgraded headers or 
                      support posts. We assess wall framing, calculate loads, and ensure installations meet or 
                      exceed building codes. This structural work is non-negotiable for safety and performance.
                    </p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Weather Barrier Integration</h4>
                    <p>
                      Proper flashing and weather barrier integration is critical for large openings. We use 
                      premium flexible flashing materials that seal around the entire frame perimeter and integrate 
                      with house wrap or building paper in a shingled fashion that channels water away from your home.
                    </p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Interior and Exterior Finishing</h4>
                    <p>
                      Large windows require careful trim work to achieve professional appearance. Interior casings 
                      hide shimming and adjustment gaps while providing architectural detail. Exterior trim protects 
                      the installation from weather while complementing your home&apos;s style.
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-cream-100 font-serif text-xl mb-4">Minimal Maintenance Required</h3>
                <div className="space-y-4 text-cream-200 text-sm">
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Cleaning Large Glass</h4>
                    <p>
                      Large picture windows require ladder work for exterior cleaning unless you hire professional 
                      window cleaners. Inside cleaning is straightforward with standard glass cleaner. Many homeowners 
                      schedule professional cleaning 2-3 times annually for picture windows.
                    </p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Frame Maintenance</h4>
                    <p>
                      Vinyl and composite frames require only occasional washing with mild soap and water. No painting, 
                      staining, or refinishing needed—ever. Check caulk joints annually and refresh as needed to 
                      maintain weather-tight seals.
                    </p>
                  </div>
                  <div className="border-l-2 border-gold-500 pl-4">
                    <h4 className="text-cream-100 font-semibold mb-1">Seal Integrity</h4>
                    <p>
                      Monitor glass edges for condensation between panes—this indicates seal failure requiring glass 
                      replacement. Quality windows should maintain sealed units for 20+ years. Most manufacturers 
                      warranty glass seals separately from frame components.
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
                <h3 className="font-semibold text-navy-900 mb-2">Do I need ventilation if I install large picture windows?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, picture windows don&apos;t provide ventilation. Most installations pair picture windows with 
                  operable units on the sides or above/below. This combination delivers expansive views plus practical 
                  airflow control. Plan for at least 4-8% of floor area in operable windows for adequate ventilation.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Will large picture windows fade my furniture?</h3>
                <p className="text-navy-700 text-sm">
                  UV-blocking low-E glass reduces fading by 75% compared to clear glass. For maximum protection, 
                  specify glass packages that block 99% of UV rays while maintaining visible light transmission. 
                  Window films or treatments can provide additional protection for valuable furnishings and artwork.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Are picture windows more expensive than operable windows?</h3>
                <p className="text-navy-700 text-sm">
                  Per square foot, picture windows typically cost 20-30% less than comparable operable styles because 
                  they lack mechanical components. However, very large custom sizes require specialized manufacturing 
                  that can offset this advantage. Overall, picture windows deliver excellent value—especially when 
                  you factor in zero maintenance costs over their lifetime.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Can picture windows meet egress code requirements?</h3>
                <p className="text-navy-700 text-sm">
                  No. Building codes require bedrooms to have operable egress windows for emergency escape. Picture 
                  windows work beautifully in living rooms, dining rooms, offices, and hallways, but don&apos;t count toward 
                  egress requirements. Plan your window configurations accordingly during design and permitting.
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
            Transform Your Space with Light
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Discover how picture windows can dramatically enhance your home&apos;s beauty and comfort. 
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

