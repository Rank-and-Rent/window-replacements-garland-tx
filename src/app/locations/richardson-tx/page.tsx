import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Richardson TX | Professional Installation",
  description: "Expert window replacement in Richardson, Texas. Serving Cityline, Canyon Creek, Palisades, and all Richardson neighborhoods. Premium Andersen, Pella & Jeld-Wen windows. Call 972-734-3158.",
  keywords: "window replacement Richardson TX, Richardson windows, Canyon Creek windows, Cityline window installation",
};

export default function RichardsonWindowReplacement() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-richardson-tx-2.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Richardson, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Premium window installation services for Richardson homes from your trusted local experts.
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
                Richardson&apos;s Trusted Window Replacement Service
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Richardson represents the perfect blend of established suburban neighborhoods and dynamic urban development. 
                From the mature trees and mid-century architecture of Canyon Creek to the contemporary mixed-use development 
                of CityLine, Richardson homes showcase diverse styles that each require thoughtful window solutions. Our 
                team serves Richardson homeowners with the same care and expertise we bring to our Garland neighbors, 
                understanding the specific challenges of this vibrant Dallas suburb.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Richardson&apos;s excellent school districts and convenient Central Expressway access have made it one of the 
                metroplex&apos;s most desirable communities. Homes here range from well-maintained 1960s-70s ranch styles in 
                neighborhoods like Palisades and Buckingham to newer construction in master-planned developments. Many 
                Richardson homeowners are replacing original single-pane windows with modern energy-efficient units that 
                dramatically reduce cooling costs during Texas summers while maintaining the architectural character that 
                makes these neighborhoods special.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                As Richardson continues evolving with transit-oriented development and urban renewal projects, window 
                replacement becomes an essential component of home maintenance and value preservation. Whether you&apos;re 
                updating a traditional Buckingham home near UTD, renovating in historic Northrich, or maintaining a newer 
                property near Galatyn Park, we bring appropriate expertise and quality products to every Richardson installation.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Richardson Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Rapid Response:</strong> Quick service from nearby Garland to all Richardson neighborhoods</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Energy Savings:</strong> Reduce cooling costs with proper glass selection for Texas heat</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Neighborhood Knowledge:</strong> Experience with Richardson architectural styles from every era</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Property Value:</strong> Quality installations that enhance Richardson&apos;s competitive real estate market</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Professional Service:</strong> Experienced installation teams with decades of combined expertise</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Richardson Neighborhoods */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Serving All Richardson Communities
            </h2>
            <div className="grid md:grid-cols-3 gap-8 mb-6">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Central Richardson</h3>
                <ul className="text-navy-700 text-sm space-y-1">
                  <li>• Canyon Creek</li>
                  <li>• Palisades</li>
                  <li>• Buckingham</li>
                  <li>• Reservation</li>
                  <li>• Northrich</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">West Richardson</h3>
                <ul className="text-navy-700 text-sm space-y-1">
                  <li>• Breckinridge Point</li>
                  <li>• Spring Valley</li>
                  <li>• Cottonwood Valley</li>
                  <li>• Greenway Parks</li>
                  <li>• Estates at Forest Creek</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">East Richardson</h3>
                <ul className="text-navy-700 text-sm space-y-1">
                  <li>• CityLine</li>
                  <li>• Galatyn Park Area</li>
                  <li>• UTD Neighborhoods</li>
                  <li>• Richardson Heights</li>
                  <li>• Arapaho/Coit Area</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Richardson-Specific Content */}
          <div className="mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Richardson Window Challenges We Solve
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Mid-Century Home Updates</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Many Richardson neighborhoods feature homes built in the 1960s-70s with large picture windows and 
                  aluminum-frame sliders characteristic of that era. While these designs embraced indoor-outdoor living, 
                  the original windows often leak air and transfer heat inefficiently. We specialize in replacing these 
                  vintage units with modern equivalents that maintain the architectural proportions while delivering 
                  contemporary performance. Energy savings of 20-30% are common when upgrading from single-pane aluminum 
                  to vinyl or composite windows with low-E glass.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">DART Corridor Noise Reduction</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Richardson&apos;s excellent transit access is a major community asset, but homes near DART lines—particularly 
                  around CityLine, Galatyn Park, and Bush Turnpike stations—experience regular train noise. Laminated 
                  glass windows with acoustic interlayers can reduce sound transmission significantly while maintaining 
                  energy efficiency and views. We&apos;ll assess your specific noise exposure and recommend appropriate 
                  solutions, from basic dual-pane upgrades to specialized acoustic packages for properties with direct 
                  line-of-sight to tracks.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">HOA Compliance & Approval</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Many Richardson neighborhoods have active homeowners associations with specific requirements for exterior 
                  modifications including window replacements. We&apos;re experienced in working within these guidelines, 
                  helping you select window colors and styles that meet HOA standards while achieving your performance 
                  goals. We can provide specifications and product literature to support your architectural review 
                  application, streamlining the approval process so your project moves forward smoothly.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
                <h3 className="font-serif text-xl text-navy-900 mb-3">Tree-Lined Street Considerations</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Richardson&apos;s mature neighborhoods feature substantial tree canopy that provides valuable shade but also 
                  creates moisture concerns. Humidity from irrigation and tree transpiration can lead to condensation 
                  issues with improperly specified windows. We recommend appropriate glass packages and frame materials 
                  that resist moisture-related problems while maximizing the energy benefits of natural shade. Proper 
                  installation with comprehensive weather sealing is essential in these established, well-landscaped 
                  neighborhoods.
                </p>
              </div>
            </div>
          </div>

          {/* Service Commitment */}
          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Serving Our Richardson Neighbors
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Richardson and Garland share more than a border—we share community values of quality, integrity, and 
              neighborhood pride. When you choose us for your Richardson window replacement, you&apos;re working with a 
              local company that understands North Texas living and stands behind every installation. We&apos;re here for 
              the long term, ready to serve your window needs today and in the future.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows/double-hung-windows" className="btn-primary">
                Explore Window Options
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

