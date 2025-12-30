import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Single-Hung Windows Installation Garland TX | Cost-Effective Replacement",
  description: "Professional single-hung window installation in Garland, Texas. Economical, durable, and energy-efficient. Fixed upper sash for enhanced security. Andersen, Pella & Jeld-Wen options. Call 972-734-3158.",
  keywords: "single-hung windows Garland TX, affordable windows, vinyl windows Garland, budget window replacement, energy efficient windows Texas",
};

export default function SingleHungWindows() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600573472591-ee6c563aaec3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-32">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Single-Hung Windows
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Smart simplicity with proven performance. The economical choice without compromise.
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
                Proven Performance at the Right Price
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Single-hung windows represent smart engineering: one movable lower sash paired with a fixed upper 
                pane. This streamlined design eliminates unnecessary complexity while delivering reliable ventilation 
                and exceptional value. For Garland homeowners seeking quality window replacement on a practical budget, 
                single-hung windows offer an ideal solution that doesn&apos;t sacrifice performance or longevity.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                The fixed upper sash actually provides advantages beyond cost savings. With fewer moving parts, 
                there&apos;s less maintenance required over the window&apos;s lifetime. The stationary design creates 
                a tighter seal against weather infiltration, which translates to better energy efficiency. Many 
                homeowners also appreciate the added security—the upper sash can&apos;t be opened from outside, 
                providing peace of mind for ground-floor installations.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Today&apos;s single-hung windows bear little resemblance to older models. Modern manufacturing 
                techniques deliver precision-welded frames, advanced weather-stripping, and multi-pane insulated 
                glass systems that match the thermal performance of more expensive styles. When installed correctly, 
                a quality single-hung window will serve your home beautifully for 20-25 years.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Why Choose Single-Hung</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Budget-Friendly:</strong> 15-25% lower cost than double-hung windows with similar features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Low Maintenance:</strong> Fewer moving parts mean less that can wear out or need adjustment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Enhanced Security:</strong> Fixed upper sash can&apos;t be accessed from outside</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Efficient:</strong> Stationary top sash creates excellent weather seal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Reliable Operation:</strong> Simple mechanics ensure smooth function for decades</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Ideal Applications Section */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Perfect for These Spaces
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Bedrooms</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Single-hung windows excel in bedrooms where you mainly need basic ventilation rather than 
                  complex airflow control. The lower operating cost allows you to upgrade multiple rooms 
                  simultaneously. The fixed upper sash also provides better security for first-floor bedrooms.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Home Offices</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  The clean, simple lines of single-hung windows complement professional spaces without distraction. 
                  Their superior seal minimizes outside noise—valuable for video calls or focused work. Energy 
                  efficiency keeps climate control costs down when running computers and equipment.
                </p>
              </div>
              <div>
                <h3 className="font-serif text-xl text-navy-900 mb-3">Rental Properties</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Property managers appreciate single-hung windows for their durability and minimal maintenance 
                  requirements. The straightforward operation reduces tenant service calls. When multiplied across 
                  multiple units, the cost savings become substantial while still delivering modern performance.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Features */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Engineering That Matters
              </h2>
              <div className="space-y-4">
                <div className="border-l-4 border-gold-500 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-1">Fusion-Welded Frames</h3>
                  <p className="text-navy-700 text-sm">
                    Corner joints are thermally welded rather than mechanically fastened, creating a seamless, 
                    weather-tight seal that won&apos;t separate over time. This manufacturing technique dramatically 
                    improves structural integrity and thermal performance.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-1">Constant Force Balance System</h3>
                  <p className="text-navy-700 text-sm">
                    Premium single-hung windows use spiral balances that maintain consistent tension throughout 
                    the sash travel. The lower sash stays where you position it—no creeping down on hot days 
                    or struggling to open in cold weather.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-1">Multi-Point Locking</h3>
                  <p className="text-navy-700 text-sm">
                    Modern single-hung windows lock at multiple points along the meeting rail, pulling the 
                    sashes tightly together. This enhanced security feature also improves energy efficiency 
                    by eliminating air infiltration gaps.
                  </p>
                </div>
                <div className="border-l-4 border-gold-500 pl-4">
                  <h3 className="font-semibold text-navy-900 mb-1">Sloped Sill Design</h3>
                  <p className="text-navy-700 text-sm">
                    The sill incorporates drainage channels and weep holes that direct water away from your 
                    home. Even during severe Texas thunderstorms, water can&apos;t pool against the frame or 
                    infiltrate into wall cavities.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Glass Options</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="text-cream-100 font-semibold mb-2">Standard Double-Pane</h4>
                  <p className="text-cream-200 text-sm mb-2">
                    Two panes of glass with air space between provide basic insulation. Suitable for mild 
                    climates but may not be sufficient for Garland&apos;s temperature extremes.
                  </p>
                  <p className="text-gold-400 text-sm">Starting point for budget-conscious projects</p>
                </div>
                <div>
                  <h4 className="text-cream-100 font-semibold mb-2">Low-E Double-Pane</h4>
                  <p className="text-cream-200 text-sm mb-2">
                    Invisible metallic coating reflects infrared heat while allowing visible light through. 
                    Reduces cooling costs by up to 30% during summer. This is our recommended minimum for Texas homes.
                  </p>
                  <p className="text-gold-400 text-sm">Best value for most homeowners</p>
                </div>
                <div>
                  <h4 className="text-cream-100 font-semibold mb-2">Low-E with Argon Gas</h4>
                  <p className="text-cream-200 text-sm mb-2">
                    Argon gas between panes provides better insulation than air. Combined with low-E coating, 
                    this package delivers maximum energy efficiency and qualifies for utility rebates in many areas.
                  </p>
                  <p className="text-gold-400 text-sm">Premium performance with proven ROI</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand Comparison */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Our Single-Hung Window Partners
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-3">Andersen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The 100 Series single-hung window combines Andersen&apos;s legendary quality with accessible 
                  pricing. Fibrex® composite frames resist warping in Texas heat. Limited lifetime warranty 
                  covers glass, frame, and hardware. Available in seven standard colors plus custom options.
                </p>
                <div className="text-sm text-navy-600 space-y-1">
                  <p><strong>Best for:</strong> Homeowners prioritizing brand reputation</p>
                  <p><strong>Warranty:</strong> Limited lifetime</p>
                </div>
              </div>
              <div className="bg-white border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-3">Pella</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  Pella&apos;s 150 Series delivers exceptional value through efficient manufacturing without 
                  cutting corners on performance. EnduraClad® exteriors resist fading. Between-the-glass blinds 
                  available for maintenance-free light control. Excellent warranties back every installation.
                </p>
                <div className="text-sm text-navy-600 space-y-1">
                  <p><strong>Best for:</strong> Value-focused projects</p>
                  <p><strong>Warranty:</strong> Limited lifetime on vinyl</p>
                </div>
              </div>
              <div className="bg-white border-2 border-navy-200 p-6">
                <h3 className="font-serif text-2xl text-navy-900 mb-3">Jeld-Wen</h3>
                <p className="text-navy-700 text-sm leading-relaxed mb-4">
                  The V-2500 Series represents outstanding bang-for-buck. Multi-chamber frame design provides 
                  structural strength and thermal performance that rivals more expensive brands. CleanCare™ 
                  technology makes vinyl surfaces resist dirt and grime buildup.
                </p>
                <div className="text-sm text-navy-600 space-y-1">
                  <p><strong>Best for:</strong> Whole-house replacements</p>
                  <p><strong>Warranty:</strong> 20-year limited</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Analysis */}
          <div className="bg-navy-900 p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-8 text-center">
              Investment & Returns
            </h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h3 className="text-cream-100 font-serif text-xl mb-4">Typical Costs</h3>
                <div className="space-y-3 text-cream-200 text-sm">
                  <div className="flex justify-between border-b border-navy-700 pb-2">
                    <span>Standard vinyl single-hung (per window):</span>
                    <span className="text-gold-400 font-semibold">$300-450</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-700 pb-2">
                    <span>Premium vinyl with low-E glass:</span>
                    <span className="text-gold-400 font-semibold">$450-600</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-700 pb-2">
                    <span>Composite frames (Andersen):</span>
                    <span className="text-gold-400 font-semibold">$600-800</span>
                  </div>
                  <div className="flex justify-between border-b border-navy-700 pb-2">
                    <span>Professional installation (per window):</span>
                    <span className="text-gold-400 font-semibold">$150-250</span>
                  </div>
                </div>
                <p className="text-cream-200 text-xs mt-4 italic">
                  Prices vary based on size, glass options, and site conditions. Request a free estimate 
                  for accurate pricing on your specific project.
                </p>
              </div>
              <div>
                <h3 className="text-cream-100 font-serif text-xl mb-4">Return on Investment</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gold-400 font-semibold mb-1">Energy Savings</p>
                    <p className="text-cream-200 text-sm">
                      Replacing old single-pane windows with modern single-hung models typically reduces 
                      heating and cooling costs by 12-15%. For the average Garland home, that&apos;s $150-300 
                      annually in savings.
                    </p>
                  </div>
                  <div>
                    <p className="text-gold-400 font-semibold mb-1">Resale Value</p>
                    <p className="text-cream-200 text-sm">
                      Window replacement ranks among the top home improvements for ROI. You can expect to 
                      recoup 70-75% of installation costs when selling, plus homes with new windows typically 
                      sell faster than those with old, inefficient units.
                    </p>
                  </div>
                  <div>
                    <p className="text-gold-400 font-semibold mb-1">Comfort & Quality of Life</p>
                    <p className="text-cream-200 text-sm">
                      Beyond measurable returns, new windows eliminate drafts, reduce outside noise, and make 
                      your home more comfortable year-round. These quality-of-life improvements are valuable 
                      even if you never plan to sell.
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
                <h3 className="font-semibold text-navy-900 mb-2">Can I mix single-hung and double-hung windows in my home?</h3>
                <p className="text-navy-700 text-sm">
                  Absolutely. Many homeowners install double-hung windows in frequently-used spaces like kitchens 
                  and living rooms where the extra ventilation control matters, then choose single-hung for bedrooms 
                  and other areas. This strategic approach maximizes value without compromising functionality where it counts.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How do I clean the outside of a single-hung window on the second floor?</h3>
                <p className="text-navy-700 text-sm">
                  Most modern single-hung windows feature a tilt-in lower sash that allows you to clean the exterior 
                  glass from inside your home. Some budget models don&apos;t include this feature, so ask about it if 
                  easy cleaning is important to you. It&apos;s worth paying slightly more for the convenience.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Will single-hung windows work with my existing trim?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, in most cases. We can install new windows using either full-frame replacement (removing 
                  everything to the rough opening) or insert replacement (fitting new windows into existing frames). 
                  Your installer will recommend the best approach based on your home&apos;s condition and your goals.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How long will installation take?</h3>
                <p className="text-navy-700 text-sm">
                  Single-hung windows are among the quickest to install—typically 30-45 minutes per window for 
                  standard sizes. A whole-house project with 12-15 windows usually completes in one to two days. 
                  We work efficiently while maintaining meticulous attention to detail at every step.
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
            Quality Windows at the Right Price
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Discover how single-hung windows can upgrade your home without breaking your budget. 
            Schedule a free consultation and get an honest, detailed estimate.
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

