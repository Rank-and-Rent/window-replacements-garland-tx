import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Storm Door Replacement Garland TX | Protection & Ventilation",
  description: "Professional storm door replacement in Garland, TX. Protective storm doors for added security and energy efficiency. Screen and glass options. Call 972-734-3158.",
  keywords: "storm doors Garland TX, screen doors, security doors, door replacement Garland",
};

export default function StormDoorPage() {
  return (
    <main>
      <Header />
      
      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li><Link href="/" className="hover:text-gold-500">Home</Link></li>
            <li>/</li>
            <li><Link href="/doors" className="hover:text-gold-500">Doors</Link></li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Storm Doors</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/doors/storm-doors-garland-tx.jpg')" }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            Storm Door Replacement in Garland, TX
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Extra protection, ventilation, and curb appeal for your entry door.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
                Protect Your Investment
              </h2>
              <p className="text-navy-700 leading-relaxed mb-6">
                A storm door is one of the highest-leverage upgrades a Garland homeowner can make to extend the life of an entry door. Texas summer sun is brutal on stained wood doors and even painted fiberglass over time. The UV index from May through September is consistently in the high range, and a west-facing front entry can see surface temperatures well above 140&deg;F by mid-afternoon. A full-glass storm door blocks the worst of that exposure and cuts the heat soak through the entry, both of which extend finish life and reduce hot-spot heat gain inside the foyer.
              </p>
              <p className="text-navy-700 leading-relaxed mb-6">
                Modern storm doors handle several different jobs at once. Retractable screen models let Garland homeowners open the front door for fresh air during the cooler weeks of spring and fall without inviting in mosquitoes from the creek bottoms. Full-view glass models with low-E coatings provide a permanent UV-blocking layer in front of the entry door. Heavy-duty security storm doors with steel grilles and multi-point locks add a real second layer of physical security at the front of the home.
              </p>
              <p className="text-navy-700 leading-relaxed">
                We install Andersen, Larson, and ProVia storm doors most often in Garland. Each line offers heavy-duty hinges, full-perimeter weatherstripping, hydraulic closers that won&apos;t slam in a Texas wind gust, and color matching for the most common entry-door finishes used in this market.
              </p>
            </div>
            <div className="bg-navy-900 p-8 rounded-sm">
              <h3 className="font-serif text-2xl text-cream-100 mb-6">Storm Door Benefits</h3>
              <ul className="space-y-4 text-cream-200">
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Door Protection:</strong> Shields entry door from weather and UV damage</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Ventilation:</strong> Screen options allow fresh air without bugs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Energy Savings:</strong> Extra insulation layer reduces heating/cooling</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Security:</strong> Additional barrier with locking mechanism</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Natural Light:</strong> Glass panels brighten entryways</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold-500 mr-3 mt-1">-</span>
                  <span><strong className="text-cream-100">Curb Appeal:</strong> Enhance your home&apos;s entrance appearance</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Storm Door Picks */}
          <div className="bg-white p-10 rounded-sm mb-16">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6 text-center">
              How to Pick the Right Storm Door
            </h2>
            <div className="grid md:grid-cols-3 gap-6 text-navy-700 text-sm leading-relaxed">
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Full-View Glass</h3>
                <p>
                  The most versatile choice for most Garland front entries. The glass panel sits in front of the entry door, blocking UV and weather while letting daylight reach the foyer. Some models include a retractable screen behind the glass for ventilation when the entry door is opened.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Ventilating Half-Glass</h3>
                <p>
                  Half-glass storm doors with a built-in screen panel are the right pick for shaded entries or for homeowners who want to leave the front door open frequently. The configuration prevents heat soak between the storm door and entry door, which can be a concern in full-glass installations on west-facing entries.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-navy-900 mb-3">Security Storm Doors</h3>
                <p>
                  Heavy-duty steel-grille security storm doors add real physical protection at the front entry. We install these most often on rental properties and on homes where the homeowner travels frequently. Multi-point locking and reinforced hinges resist forced-entry attempts.
                </p>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div>
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-8 text-center">
              Common Questions
            </h2>
            <div className="space-y-6 max-w-4xl mx-auto">
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Do storm doors really save energy?</h3>
                <p className="text-navy-700 text-sm">
                  Yes, storm doors create an insulating air pocket between the storm door and entry door, 
                  reducing heat transfer and potentially lowering energy bills by 10-15%.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">Will a storm door damage my entry door?</h3>
                <p className="text-navy-700 text-sm">
                  If properly ventilated, no. Storm doors with ventilation options or retractable screens 
                  prevent heat buildup that could potentially damage certain door finishes.
                </p>
              </div>
              <div className="border-l-4 border-gold-500 pl-6 py-2">
                <h3 className="font-semibold text-navy-900 mb-2">How long do storm doors last?</h3>
                <p className="text-navy-700 text-sm">
                  Quality storm doors typically last 25-50 years with proper maintenance. Aluminum frames 
                  resist rust and corrosion even in Garland&apos;s humid conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-900 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl font-semibold text-cream-100 mb-6">
            Add Protection to Your Entry
          </h2>
          <p className="text-cream-200 text-lg mb-8">
            Contact us for a free consultation on storm door replacement in Garland, TX.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
            </Link>
            <a href="tel:972-734-3158" className="btn-outline-light">
              Call 972-734-3158
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
