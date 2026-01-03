import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Window Replacement Service of Garland, TX",
  description:
    "Professional window and door installation services in Garland, Texas. Andersen, Pella, JELD-WEN, Marvin windows.",
};

export default function AboutPage() {
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
            <li className="text-navy-900 font-medium">About</li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-navy-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage:
              "url('/windows/double-hung-windows-garland-tx.jpg')",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto py-20">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-cream-100 mb-6">
            About Our Service
          </h1>
          <p className="text-xl text-cream-200 max-w-2xl mx-auto">
            Premium window and door installation services for Garland property owners.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Who We Are
            </h2>
            <p className="text-navy-700 mb-6">
              Window Replacements of Garland provides comprehensive window and door installation services throughout Garland, TX. We specialize in residential projects, offering energy-efficient windows, elegant entry doors, and patio door replacements that enhance both comfort and curb appeal.
            </p>

            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              How We Help
            </h2>
            <p className="text-navy-700 mb-6">
              We provide comprehensive window and door installation services with attention to detail and quality craftsmanship. Our team understands that windows and doors are significant investments that enhance your home's energy efficiency, comfort, and value.
            </p>

            <h3 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Our Process
            </h3>
            <ol className="text-navy-700 mb-8 space-y-3">
              <li>
                <strong>Initial Consultation</strong> - Share your project
                details with us through our contact form or by phone
              </li>
              <li>
                <strong>Project Planning</strong> - We assess your needs and develop a customized solution for your property
              </li>
              <li>
                <strong>Project Coordination</strong> - Assistance with
                scheduling consultations and estimates
              </li>
              <li>
                <strong>Installation Support</strong> - Coordination throughout
                the installation process
              </li>
            </ol>

            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Why Garland Homeowners Choose Us
            </h2>
            <ul className="text-navy-700 mb-8 space-y-2">
              <li>- Knowledge of local building codes and permit requirements</li>
              <li>- Experience with Garland&apos;s climate considerations</li>
              <li>
                - Premium brands including
                Andersen, Pella, JELD-WEN, and Marvin
              </li>
              <li>
                - Comprehensive service from consultation through project
                completion
              </li>
              <li>- Quality craftsmanship and attention to detail</li>
            </ul>

            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Our Service Area
            </h2>
            <p className="text-navy-700 mb-8">
              We serve Garland, TX and surrounding communities including Dallas,
              Richardson, Plano, Mesquite, Rowlett, Sachse, Wylie, Rockwall,
              Murphy, and the greater Dallas-Fort Worth metroplex. Our network
              of professionals is familiar with the unique needs of homes
              throughout the region.
            </p>

            <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
              Educational Resources
            </h2>
            <p className="text-navy-700 mb-8">
              The information provided on this website is educational in nature
              and designed to help property owners make informed decisions about
              window and door installations. This content is not engineering
              advice, legal advice, or construction advice. We recommend
              consulting with qualified professionals for specific project
              guidance and obtaining multiple quotes before making decisions.
            </p>
          </div>

          {/* CTA Box */}
          <div className="bg-navy-900 p-8 rounded-sm mt-12 text-center">
            <h2 className="font-serif text-2xl font-semibold text-cream-100 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-cream-200 mb-6">
              Contact us today for a free consultation and estimate for your
              window or door installation in Garland, TX.
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
        </div>
      </section>

      <Footer />
    </main>
  );
}
