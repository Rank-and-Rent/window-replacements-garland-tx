"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { servicesData } from "@/data";

export default function ContactPage() {
  const windowServices = servicesData.filter((s) => s.category === "Windows");
  const doorServices = servicesData.filter((s) => s.category === "Doors");

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
            <li className="text-navy-900 font-medium">Contact</li>
          </ol>
        </div>
      </nav>

      {/* Contact Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-5xl font-bold text-navy-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-navy-700 max-w-2xl mx-auto">
              Schedule your free in-home consultation and estimate for window
              and door replacement in Garland, TX.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="font-serif text-2xl font-semibold text-navy-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-navy-700 mb-8">
                Our expert consultants will visit your home, assess your needs,
                and provide a detailed, no-obligation estimate. We serve Garland
                and all surrounding communities in the Dallas-Fort Worth area.
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">
                    Call Us Directly
                  </h3>
                  <a
                    href="tel:972-734-3158"
                    className="text-gold-500 text-2xl font-semibold hover:text-gold-600"
                  >
                    (972) 734-3158
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">
                    Email Us
                  </h3>
                  <a
                    href="mailto:contact@windowreplacementgarlandtx.com"
                    className="text-gold-500 hover:text-gold-600"
                  >
                    contact@windowreplacementgarlandtx.com
                  </a>
                </div>

                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Address</h3>
                  <address className="text-navy-700 not-italic">
                    350 Oaks Trl #220
                    <br />
                    Garland, TX 75043
                  </address>
                </div>

                <div>
                  <h3 className="font-semibold text-navy-900 mb-2">Hours</h3>
                  <p className="text-navy-700">
                    Open 24/7
                    <br />
                    Available for Emergency Service
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8">
                <h3 className="font-semibold text-navy-900 mb-4">Find Us</h3>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3347.8!2d-96.6285!3d32.9285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1f5b5e1b5a6d%3A0x1234567890!2s350%20Oaks%20Trl%20%23220%2C%20Garland%2C%20TX%2075043!5e0!3m2!1sen!2sus!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "4px" }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Window Replacement Service of Garland location map"
                  ></iframe>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-navy-900 p-8 rounded-sm">
              <h2 className="font-serif text-2xl font-semibold text-cream-100 mb-6">
                Request Your Free Estimate
              </h2>

              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-cream-200 text-sm mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-cream-200 text-sm mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    placeholder="(972) 734-3158"
                    className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-cream-200 text-sm mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-cream-200 text-sm mb-2"
                  >
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="">Select a service...</option>
                    <optgroup label="Windows">
                      {windowServices.map((service) => (
                        <option key={service.slug} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Doors">
                      {doorServices.map((service) => (
                        <option key={service.slug} value={service.name}>
                          {service.name}
                        </option>
                      ))}
                    </optgroup>
                    <option value="Not Sure / Multiple Services">
                      Not Sure / Multiple Services
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-cream-200 text-sm mb-2"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    placeholder="123 Main St, Garland, TX 75043"
                    className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="timeline"
                    className="block text-cream-200 text-sm mb-2"
                  >
                    Project Timeline
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    required
                    className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  >
                    <option value="">Select timeline...</option>
                    <option value="ASAP">ASAP</option>
                    <option value="Within 1 month">Within 1 month</option>
                    <option value="Within 3 months">Within 3 months</option>
                    <option value="Within 6 months">Within 6 months</option>
                    <option value="6+ months">6+ months</option>
                    <option value="Just researching">Just researching</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="description"
                    className="block text-cream-200 text-sm mb-2"
                  >
                    Project Description
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows={4}
                    required
                    placeholder="Tell us about your project or any questions you have..."
                    className="w-full px-4 py-3 bg-white text-navy-900 rounded-sm focus:outline-none focus:ring-2 focus:ring-gold-500"
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full">
                  Request Free Estimate
                </button>

                <p className="text-cream-300 text-xs text-center">
                  By submitting this form, you agree to receive communications
                  from our team. We respect your privacy and will never share
                  your information.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
