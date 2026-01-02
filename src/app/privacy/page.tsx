import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Window Replacement Service of Garland, TX",
  description: "Privacy policy for Window Replacement Service of Garland, TX. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
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
            <li className="text-navy-900 font-medium">Privacy Policy</li>
          </ol>
        </div>
      </nav>

      {/* Content */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-gold-500 text-sm font-medium uppercase tracking-wider">Legal</span>
            <h1 className="font-serif text-5xl font-bold text-navy-900 mt-2 mb-4">
              Privacy Policy
            </h1>
            <p className="text-navy-600">Last Updated: December 31, 2025</p>
          </div>

          <div className="prose prose-lg max-w-none text-navy-700">
            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              When you contact us for window or door installation services in Garland, TX, we may collect:
            </p>
            <ul className="mb-8 space-y-2">
              <li>- Name and contact information (email, phone number)</li>
              <li>- Property information and project details</li>
              <li>- Communication preferences</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">We use the information you provide to:</p>
            <ul className="mb-8 space-y-2">
              <li>- Provide consultation and project planning services</li>
              <li>- Coordinate consultations and estimates</li>
              <li>- Communicate about your project</li>
              <li>- Improve our services</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Information Sharing
            </h2>
            <p className="mb-4">We may share your information with:</p>
            <ul className="mb-8 space-y-2">
              <li>- Qualified professionals for project consultation and estimates</li>
              <li>- Service providers who assist with our operations</li>
              <li>- As required by law or to protect our rights</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Your Rights
            </h2>
            <p className="mb-4">You have the right to:</p>
            <ul className="mb-8 space-y-2">
              <li>- Access the personal information we hold about you</li>
              <li>- Request correction of inaccurate information</li>
              <li>- Request deletion of your information</li>
              <li>- Opt out of marketing communications</li>
            </ul>

            <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have questions about this privacy policy or your personal information, please contact us at:
            </p>
            <p>
              Phone: <a href="tel:972-734-3158" className="text-gold-500 hover:text-gold-600">(972) 734-3158</a>
              <br />
              Email: <a href="mailto:info@windowreplacementgarland.com" className="text-gold-500 hover:text-gold-600">info@windowreplacementgarland.com</a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
