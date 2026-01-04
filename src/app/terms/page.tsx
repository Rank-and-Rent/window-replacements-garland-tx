import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Window Replacement Service of Garland, TX",
  description: "Terms of service for Window Replacement Service of Garland, TX. Read our service terms and conditions.",
};

export default function TermsPage() {
  return (
    <main>
      <Header />

      {/* Breadcrumbs */}
      <nav className="bg-cream-200 py-4 pt-32">
        <div className="max-w-6xl mx-auto px-6">
          <ol className="flex items-center space-x-2 text-sm text-navy-700">
            <li>
              <Link href="/" className="hover:text-gold-500">
                Home
              </Link>
            </li>
            <li>/</li>
            <li className="text-navy-900 font-medium">Terms of Service</li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-medium uppercase tracking-wider">Legal</span>
            <h1 className="font-serif text-5xl font-bold text-navy-900 mt-2 mb-4">
              Terms of Service
            </h1>
            <p className="text-navy-600">Last Updated: December 31, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-navy-700">
            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Service Description
            </h2>
            <p className="mb-8">
              This website provides information about window and door installation services in Garland, TX. We provide educational resources and project consultation to help property owners make informed decisions.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              No Direct Installation Services
            </h2>
            <p className="mb-8">
              We provide consultation and project planning services. Installation work is performed by qualified professionals with appropriate expertise and certifications.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              User Responsibilities
            </h2>
            <p className="mb-4">When using our service, you agree to:</p>
            <ul className="mb-8 space-y-2">
              <li>- Provide accurate information about your project</li>
              <li>- Obtain multiple quotes for comparison</li>
              <li>- Check references and credentials independently</li>
              <li>- Verify all contractor qualifications and insurance</li>
              <li>- Ensure all necessary permits are obtained</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Educational Content Only
            </h2>
            <p className="mb-8">
              Information provided on this website is educational in nature. It is not engineering
              advice, legal advice, or construction advice. Consult with qualified professionals for
              specific project guidance.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              No Warranties or Guarantees
            </h2>
            <p className="mb-8">
              We make no warranties or guarantees about the work performed by independent contractors. 
              Any warranties or guarantees related to installation work are provided solely by the 
              contractor and manufacturer.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="mb-8">
              We are not liable for the quality, timeliness, or outcome of work performed by independent 
              contractors. Property owners assume all risk when hiring contractors for installation work.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Changes to Terms
            </h2>
            <p className="mb-8">
              We reserve the right to modify these terms at any time. Continued use of our service 
              after changes constitutes acceptance of the modified terms.
            </p>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Contact Us
            </h2>
            <p>
              Questions about these terms? Contact us at:
              <br />
              Phone: <a href="tel:972-734-3158" className="text-gold-500 hover:text-gold-600">(972) 734-3158</a>
              <br />
              Email: <a href="mailto:contact@windowreplacementgarlandtx.com" className="text-gold-500 hover:text-gold-600">contact@windowreplacementgarlandtx.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
