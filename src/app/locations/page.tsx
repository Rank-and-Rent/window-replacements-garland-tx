"use client";

import { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { locationsData } from "@/data";

export default function LocationsPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const cities = locationsData.filter((loc) => loc.type === "city");

  const filteredLocations = cities.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <li className="text-navy-900 font-medium">Locations</li>
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
            Window & Door Replacement Service Areas
          </h1>
          <p className="text-xl text-cream-200 mb-8 max-w-2xl mx-auto">
            Professional window and door installation throughout Garland, TX and
            surrounding communities in the Dallas-Fort Worth metroplex.
          </p>
          <Link href="/contact" className="btn-primary">
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Locations Grid */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-6xl mx-auto px-6">
          {/* Search */}
          <div className="max-w-md mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 border-2 border-navy-200 rounded-sm focus:border-gold-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-500 hover:text-navy-700"
                >
                  Clear
                </button>
              )}
            </div>
            <p className="text-center text-navy-600 text-sm mt-2">
              Showing {filteredLocations.length} of {cities.length} service
              areas
            </p>
          </div>

          {filteredLocations.length > 0 ? (
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredLocations.map((location) => (
                <Link
                  key={location.slug}
                  href={location.route}
                  className="bg-white p-4 border-l-4 border-gold-500 hover:shadow-lg transition-shadow"
                >
                  <h3 className="font-serif text-lg text-navy-900">
                    {location.name}
                  </h3>
                  <span className="text-gold-500 text-sm">View Services</span>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h2 className="font-serif text-2xl text-navy-900 mb-4">
                No locations found for &quot;{searchQuery}&quot;
              </h2>
              <p className="text-navy-700 mb-6">
                We may still serve your area in the Dallas-Fort Worth region.
              </p>
              <Link href="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* Why Choose Local */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-serif text-3xl font-semibold text-cream-100 mb-12 text-center">
            Why Choose a Local Window Expert
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">
                Local Knowledge
              </h3>
              <p className="text-cream-200 text-sm">
                We understand the unique climate challenges and building codes
                specific to North Texas communities.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">
                Fast Response
              </h3>
              <p className="text-cream-200 text-sm">
                Being local means quick consultations, faster installation
                schedules, and responsive service after the sale.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="font-serif text-xl text-cream-100 mb-3">
                Community Reputation
              </h3>
              <p className="text-cream-200 text-sm">
                Our reputation in the community matters. We deliver quality work
                and stand behind it for years to come.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl font-semibold text-navy-900 mb-6">
            Ready to Upgrade Your Windows & Doors?
          </h2>
          <p className="text-navy-700 text-lg mb-8">
            Contact us today for a free consultation. We serve Garland and all
            surrounding communities in the Dallas-Fort Worth area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              Get Free Estimate
            </Link>
            <a href="tel:972-734-3158" className="btn-outline">
              Call 972-734-3158
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
