import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Rowlett TX | Lake Ray Hubbard Window Experts",
  description: "Window replacement in Rowlett, TX. Specialists in Lake Ray Hubbard waterfront homes with hard-water-resistant frames and impact-rated glass for the Hwy 66 storm corridor. Andersen, Pella, Marvin.",
  keywords: "window replacement Rowlett TX, Rowlett windows, Lake Ray Hubbard windows, waterfront window installation",
};

export default function RowlettWindowReplacement() {
  return (
    <main>
      <Header />
      
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-rowlett-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Rowlett, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Specialized window solutions for Rowlett&apos;s lakefront and inland neighborhoods.
          </p>
          <a href="tel:972-734-3158" className="btn-primary">
            Call 972-734-3158
          </a>
        </div>
      </section>

      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Rowlett&apos;s Lake Living Window Specialists
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Rowlett&apos;s identity is inseparable from Lake Ray Hubbard—the massive reservoir that defines the city&apos;s 
                eastern edge and provides recreational opportunities for the entire metroplex. Homes with lake views or 
                waterfront access represent Rowlett&apos;s premium properties, where expansive windows showcase stunning vistas 
                while facing unique challenges from humidity, water exposure, and intense sun reflection off the lake surface. 
                We bring specialized expertise to these demanding applications.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Beyond the lakefront, Rowlett&apos;s growing inland neighborhoods from Herfurth Farms to Pecan Grove feature 
                newer construction and established homes that reflect the city&apos;s transformation from rural community to 
                thriving Dallas suburb. The proximity to Lake Ray Hubbard creates elevated humidity levels throughout Rowlett—
                a factor we address through proper window selection and installation techniques that prevent moisture-related 
                problems. Our experience with Rowlett&apos;s microclimate ensures installations perform flawlessly for decades.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                As your Garland neighbors just minutes away, we understand Rowlett&apos;s community character and architectural 
                preferences. Whether you&apos;re replacing windows in a lakefront property with panoramic views, updating an 
                established home near downtown Rowlett, or maintaining newer construction, we bring appropriate expertise 
                and products. Rowlett homeowners appreciate our combination of technical knowledge and local accessibility.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Rowlett Homeowner Advantages</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Lake Living Expertise:</strong> Understanding moisture and humidity challenges unique to waterfront</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">View Optimization:</strong> Large windows and glass solutions that showcase lake vistas</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Rapid Response:</strong> Quick service from nearby Garland for estimates and installation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Premium Products:</strong> Moisture-resistant materials suited to lake proximity</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Community Connection:</strong> Local company invested in serving Rowlett long-term</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Rowlett-Specific Window Solutions
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Lakefront & Waterfront Windows</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Properties directly on Lake Ray Hubbard face continuous moisture exposure and potential for severe 
                  storm damage. We recommend composite or vinyl frames that won&apos;t rot or corrode, with comprehensive 
                  weather sealing that prevents water intrusion. Impact-resistant glass protects against wind-driven 
                  debris during storms. Large picture windows and sliding glass doors maximize your investment in lake 
                  views while incorporating proper drainage and ventilation.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Solar Heat Management</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Lake-facing windows receive direct sun plus reflected glare off water surfaces—intensifying heat gain 
                  and creating uncomfortable glare. Low-E glass with appropriate solar heat gain coefficients blocks 
                  excessive heat while maintaining your views. We&apos;ll assess your property&apos;s orientation and recommend 
                  glass packages that keep interiors comfortable without resorting to heavy window treatments that defeat 
                  the purpose of lake living.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Humidity & Condensation Control</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Lake proximity creates elevated humidity levels throughout Rowlett, particularly in summer months. 
                  Improperly specified windows can develop condensation on interior surfaces, leading to mold growth and 
                  finish damage. We select glass packages and frame materials engineered to resist condensation even in 
                  humid conditions, maintaining clear views and preventing moisture problems that plague inferior installations.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Replacement for Growing Neighborhoods</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Rowlett&apos;s inland neighborhoods continue growing with new construction and established homes from various 
                  eras. We serve homeowners replacing original windows in older properties and those upgrading builder-grade 
                  windows in newer homes. Our range of products from value-oriented Jeld-Wen to premium Andersen ensures 
                  we match your budget and performance expectations without compromising quality.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Serving Rowlett with Pride
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              From lakefront estates to growing family neighborhoods, Rowlett homeowners deserve window solutions that 
              respect their unique location and lifestyle. Schedule your free consultation and experience the difference 
              local expertise makes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows/picture-windows" className="btn-primary">
                Lake View Windows
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

