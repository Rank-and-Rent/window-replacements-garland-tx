import Header from "@/components/header";
import CallToAction from "@/components/call-to-action";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Window Replacement Rockwall TX | Premium Installation Services",
  description: "Expert window replacement in Rockwall, Texas. Lakefront properties, historic downtown, and all Rockwall neighborhoods. Premium windows. Call 972-734-3158.",
  keywords: "window replacement Rockwall TX, Rockwall windows, lakefront windows, Rockwall window installation",
};

export default function RockwallWindowReplacement() {
  return (
    <main>
      <Header />
      
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/locations/window-replacement-rockwall-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-24">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Window Replacement in Rockwall, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Premium window solutions for Rockwall&apos;s lakefront estates and distinctive neighborhoods.
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
                Rockwall&apos;s Window Replacement Experts
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                Rockwall stands apart as one of North Texas&apos;s most desirable communities, where Lake Ray Hubbard waterfront 
                estates, historic downtown charm, and master-planned luxury developments create a distinctive real estate 
                market. Properties here command premium values that justify—and require—quality window solutions. Whether 
                your home overlooks the lake from the cliffs of The Shores or sits in the tree-lined streets near downtown, 
                we bring the expertise and premium products that Rockwall homeowners expect.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Rockwall&apos;s lakefront properties present unique window challenges: moisture exposure from lake proximity, 
                intense sun reflection off water surfaces, and the desire for expansive glass to capture stunning views. 
                We specialize in large picture windows, bay windows, and custom configurations that showcase your investment 
                in lake living while incorporating proper drainage, weather sealing, and energy-efficient glass that manages 
                solar heat gain. These demanding applications require experience we&apos;ve developed through years serving 
                Rockwall&apos;s premium properties.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Beyond the lakefront, Rockwall&apos;s diverse neighborhoods from Heath to McLendon-Chisholm feature homes ranging 
                from historic downtown residences to modern luxury estates in developments like Chandlers Landing. Each context 
                demands appropriate window solutions—historic preservation considerations, HOA compliance in planned communities, 
                or custom specifications for luxury builds. We navigate these requirements smoothly, ensuring your Rockwall 
                window project meets all standards while exceeding performance expectations.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Rockwall Homeowner Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Luxury Standards:</strong> Premium products and installation quality for high-end properties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Lakefront Expertise:</strong> Solutions for waterfront moisture and sun challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Custom Capabilities:</strong> Specialty shapes and sizes for distinctive architecture</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Property Value:</strong> Quality installations that protect Rockwall&apos;s premium real estate values</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">•</span>
                  <span><strong className="text-cream-100">Professional Service:</strong> Experience worthy of Rockwall&apos;s discerning homeowners</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Rockwall Window Specialties
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Lakefront Estate Windows</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Rockwall&apos;s Lake Ray Hubbard estates demand exceptional window performance. Expansive picture windows and 
                  walls of glass require specialized structural support, advanced weather sealing, and glass packages that 
                  manage intense sun exposure from multiple angles. We coordinate with architects and builders to specify 
                  appropriate solutions, from floor-to-ceiling systems to custom bay windows that frame panoramic lake views.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Historic Downtown Preservation</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Downtown Rockwall&apos;s historic district features homes and buildings requiring careful window restoration or 
                  replacement that respects architectural heritage. We source windows matching historic profiles while 
                  incorporating modern insulated glass and weather sealing. The result preserves Rockwall&apos;s character while 
                  solving practical problems that made original windows inefficient and difficult to maintain.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Master-Planned Community Standards</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Developments like Chandlers Landing, The Shores, and Summer Lee maintain strict architectural standards. 
                  Window replacements must comply with design guidelines regarding colors, styles, and configurations. We 
                  navigate these requirements efficiently, ensuring your project receives architectural review approval without 
                  delays while meeting your performance and aesthetic goals.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 p-4">
                <h3 className="font-semibold text-navy-900 mb-2">Custom Home Window Design</h3>
                <p className="text-navy-700 text-sm leading-relaxed">
                  Rockwall&apos;s luxury custom homes often feature unique window configurations—specialty shapes, custom sizes, 
                  or architectural details that define the design. We work with homeowners and designers to source appropriate 
                  products from manufacturers like Andersen and Pella who offer virtually unlimited customization. These 
                  distinctive installations require expertise we bring to every Rockwall custom project.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-navy-900 p-10 rounded-sm text-center">
            <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-6">
              Excellence for Rockwall Homes
            </h2>
            <p className="text-cream-200 max-w-3xl mx-auto mb-8">
              Rockwall&apos;s premium properties deserve window solutions that match their quality and character. Experience 
              the difference that specialized expertise and premium products make. Schedule your consultation today.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/windows/picture-windows" className="btn-primary">
                View Options
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

