import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import BrandLogos from "@/components/brand-logos";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Dallas TX | Expert Installation Near You",
  description: "Window replacement in Dallas, TX. Garland-based crews crossing I-635 daily for Highland Park, University Park, Lakewood, and Oak Cliff jobs. Andersen, Pella, JELD-WEN, Marvin.",
  keywords: "window replacement Dallas TX, Dallas window installation, Dallas windows, Highland Park windows, University Park windows",
};

export default function DallasWindowReplacement() {
  return (
    <main>
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-dallas-tx-2.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Dallas, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Serving Dallas homeowners with premium window installation services from your trusted Garland-based experts.
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
                Expert Window Services Throughout Dallas
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Dallas homeowners face unique challenges when it comes to window performance. The urban heat island 
                effect intensifies summer temperatures throughout downtown, Uptown, and dense residential neighborhoods 
                like Highland Park and University Park. Historic districts from Oak Cliff to Lakewood require window 
                solutions that honor architectural heritage while delivering modern energy efficiency. Our Garland-based 
                team understands these Dallas-specific needs and brings decades of experience serving the metroplex&apos;s 
                diverse neighborhoods.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                From the elegant estates of Preston Hollow to the charming bungalows of Junius Heights, Dallas homes 
                span architectural styles from 1920s Tudor and Colonial Revival to sleek contemporary designs in the 
                Arts District. We&apos;ve replaced windows in virtually every Dallas neighborhood, working with historic 
                preservation guidelines when required and customizing solutions to complement each home&apos;s unique 
                character. Whether you&apos;re renovating a Craftsman in Kessler Park or upgrading energy efficiency 
                in a Lake Highlands ranch, we bring appropriate expertise to every project.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Dallas&apos;s premium real estate market demands window installations that enhance property value while 
                solving practical problems. Reducing traffic noise in high-density areas, controlling glare on 
                expansive south-facing glass, and maintaining curb appeal in established neighborhoods—these challenges 
                require thoughtful window selection and meticulous installation. We partner with homeowners to specify 
                solutions that address their specific concerns while respecting the architectural context of Dallas&apos;s 
                distinctive communities.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Why Dallas Homeowners Choose Us</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Local Expertise:</strong> Serving Dallas and Garland for years with deep knowledge of local architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Historic Preservation:</strong> Experience with Dallas historic district requirements and guidelines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Urban Solutions:</strong> Noise reduction and energy efficiency for city living challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Premium Brands:</strong> Andersen, Pella, and Jeld-Wen windows suited to Dallas climate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Value Protection:</strong> Quality installations that enhance Dallas property values</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Brand Logos */}
          <div className="mt-12 bg-navy-900 p-8 rounded-sm">
            <h3 className="font-serif text-2xl text-cream-100 mb-6 text-center">
              Premium Window Brands for Dallas Homes
            </h3>
            <BrandLogos size="md" className="justify-center" />
          </div>

          {/* Dallas Neighborhoods */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Serving Dallas Neighborhoods
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Central Dallas</h3>
                <ul className="text-navy-700 text-sm space-y-1">
                  <li>• Downtown</li>
                  <li>• Uptown</li>
                  <li>• Arts District</li>
                  <li>• Deep Ellum</li>
                  <li>• Victory Park</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">North Dallas</h3>
                <ul className="text-navy-700 text-sm space-y-1">
                  <li>• Preston Hollow</li>
                  <li>• Highland Park</li>
                  <li>• University Park</li>
                  <li>• Lake Highlands</li>
                  <li>• White Rock Lake</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Historic Districts</h3>
                <ul className="text-navy-700 text-sm space-y-1">
                  <li>• Oak Cliff</li>
                  <li>• Lakewood</li>
                  <li>• Kessler Park</li>
                  <li>• Junius Heights</li>
                  <li>• M Streets</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dallas-Specific Services */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
              <h3 className="font-serif text-xl text-navy-900 mb-3">Historic Home Window Replacement</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                Dallas&apos;s historic districts require specialized approaches that balance preservation standards with 
                modern performance. We work within local guidelines to specify windows that match historic profiles 
                while incorporating energy-efficient glass technology. From Swiss Avenue estates to Bishop Arts bungalows, 
                we respect architectural integrity while solving practical problems like drafts and high energy bills.
              </p>
            </div>
            <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
              <h3 className="font-serif text-xl text-navy-900 mb-3">Urban Noise Reduction</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                Living near Central Expressway, Woodall Rodgers, or busy urban corridors means dealing with constant 
                traffic noise. Laminated glass windows with specialized acoustic interlayers can reduce sound transmission 
                by 30-40%, creating peaceful interiors even in high-traffic areas. We&apos;ll assess your specific noise 
                challenges and recommend appropriate solutions for Dallas urban living.
              </p>
            </div>
            <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
              <h3 className="font-serif text-xl text-navy-900 mb-3">High-Rise & Condo Window Service</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                Dallas high-rises and condominiums present unique challenges: crane access, building management coordination, 
                and standardized specifications. We have experience working with Dallas condo associations and building 
                managers to navigate these complexities, ensuring installations that meet building requirements while 
                delivering homeowner satisfaction in properties from the Ritz-Carlton to Museum Tower.
              </p>
            </div>
            <div className="border-l-4 border-gold-500 pl-6 bg-white p-6">
              <h3 className="font-serif text-xl text-navy-900 mb-3">Energy Efficiency for Dallas Climate</h3>
              <p className="text-navy-700 text-sm leading-relaxed">
                Summer temperatures in Dallas regularly exceed 100°F, stressing air conditioning systems and driving up 
                energy costs. Low-E glass with proper solar heat gain coefficients can dramatically reduce cooling loads 
                while maintaining abundant natural light. We&apos;ll help you select glass packages optimized for Dallas&apos;s 
                climate that qualify for utility rebates and deliver measurable energy savings.
              </p>
            </div>
          </div>

          {/* Local Knowledge */}
          <div className="bg-navy-900 p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6 text-center">
              Understanding Dallas Homes
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-cream-200 text-sm">
              <div>
                <p className="mb-4">
                  Dallas architecture tells the story of Texas growth from early 20th century to today. The Munger Place 
                  and Swiss Avenue historic districts showcase Prairie School, Tudor Revival, and Mediterranean styles 
                  from the 1920s-30s, requiring careful attention to window proportions and details. Post-war suburbs 
                  like Lake Highlands feature ranch homes with large picture windows that often need energy upgrades.
                </p>
                <p>
                  More recent developments in North Dallas emphasize contemporary designs with expansive glass, while 
                  urban infill projects throughout central neighborhoods blend modern aesthetics with traditional contexts. 
                  Each architectural period and style presents specific window requirements we understand through years 
                  of Dallas-area experience.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  Dallas&apos;s premium neighborhoods command some of Texas&apos;s highest property values, making quality window 
                  replacement a sound investment. Highland Park and University Park homes often feature custom windows 
                  sized to generous proportions. Preston Hollow estates may include specialty shapes and extensive glass 
                  walls requiring expert installation and premium products.
                </p>
                <p>
                  We bring appropriate expertise whether you&apos;re maintaining a historic Oak Cliff Victorian, upgrading a 
                  mid-century modern in Hollywood Heights, or installing hurricane-rated windows on a new build in the 
                  Design District. Our Dallas service area knowledge ensures we understand your neighborhood&apos;s specific 
                  character and requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Service Area */}
          <div className="text-center">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Convenient Service from Garland to Dallas
            </h2>
            <p className="text-navy-700 max-w-3xl mx-auto mb-8">
              Located in Garland, we&apos;re ideally positioned to serve Dallas homeowners with quick response times and 
              local knowledge. The short drive from our Garland base means we can provide prompt estimates, efficient 
              installations, and responsive service for all your Dallas window needs. We&apos;re your neighbors, committed 
              to serving the greater Dallas-Garland community with integrity and expertise.
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

