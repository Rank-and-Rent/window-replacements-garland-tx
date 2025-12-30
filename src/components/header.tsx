"use client";

import { useState } from "react";
import Link from "next/link";

const services = [
  { name: "Double-Hung Windows", href: "/services/double-hung-windows" },
  { name: "Single-Hung Windows", href: "/services/single-hung-windows" },
  { name: "Casement Windows", href: "/services/casement-windows" },
  { name: "Awning Windows", href: "/services/awning-windows" },
  { name: "Sliding Windows", href: "/services/sliding-windows" },
  { name: "Picture Windows", href: "/services/picture-windows" },
  { name: "Bay & Bow Windows", href: "/services/bay-bow-windows" },
  { name: "Special Shape Windows", href: "/services/special-shape-windows" },
];

const locations = [
  { name: "Dallas", href: "/locations/dallas-tx" },
  { name: "Richardson", href: "/locations/richardson-tx" },
  { name: "Plano", href: "/locations/plano-tx" },
  { name: "Mesquite", href: "/locations/mesquite-tx" },
  { name: "Rowlett", href: "/locations/rowlett-tx" },
  { name: "Wylie", href: "/locations/wylie-tx" },
  { name: "Rockwall", href: "/locations/rockwall-tx" },
  { name: "Sachse", href: "/locations/sachse-tx" },
  { name: "Murphy", href: "/locations/murphy-tx" },
  { name: "Forney", href: "/locations/forney-tx" },
  { name: "Sunnyvale", href: "/locations/sunnyvale-tx" },
  { name: "Balch Springs", href: "/locations/balch-springs-tx" },
  { name: "Allen", href: "/locations/allen-tx" },
  { name: "McKinney", href: "/locations/mckinney-tx" },
  { name: "Frisco", href: "/locations/frisco-tx" },
];

const navigation = [
  { name: "BRANDS", href: "#brands" },
  { name: "GALLERY", href: "#gallery" },
  { name: "ABOUT", href: "#about" },
  { name: "REQUEST SERVICE", href: "#contact" },
  { name: "CONTACT US", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <nav className="flex items-center justify-between px-6 lg:px-12 py-6">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="border-2 border-gold-500 px-4 py-2 bg-navy-900/90 backdrop-blur-sm">
            <span
              className="text-gold-500 text-2xl font-bold italic"
              style={{ fontFamily: "Georgia, serif" }}
            >
              WRG
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-cream-100 text-sm font-medium tracking-wider hover:text-gold-400 transition-colors duration-300">
              SERVICES
            </button>
            {servicesOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-navy-950 border border-navy-700 rounded-sm shadow-xl z-50">
                <div className="py-2">
                  {services.map((service) => (
                    <Link
                      key={service.name}
                      href={service.href}
                      className="block px-4 py-2 text-cream-100 text-sm hover:bg-navy-800 hover:text-gold-400 transition-colors"
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Locations Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button className="text-cream-100 text-sm font-medium tracking-wider hover:text-gold-400 transition-colors duration-300">
              LOCATIONS
            </button>
            {locationsOpen && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-navy-950 border border-navy-700 rounded-sm shadow-xl z-50 max-h-96 overflow-y-auto">
                <div className="py-2">
                  {locations.map((location) => (
                    <Link
                      key={location.name}
                      href={location.href}
                      className="block px-4 py-2 text-cream-100 text-sm hover:bg-navy-800 hover:text-gold-400 transition-colors"
                    >
                      {location.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-cream-100 text-sm font-medium tracking-wider hover:text-gold-400 transition-colors duration-300"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden text-cream-100 p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 py-6">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              <div className="border-2 border-gold-500 px-4 py-2">
                <span
                  className="text-gold-500 text-2xl font-bold italic"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  WRG
                </span>
              </div>
            </Link>
            <button
              type="button"
              className="text-cream-100 p-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="px-6 py-8">
            <div className="space-y-4">
              {/* Mobile Services */}
              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full text-left text-cream-100 text-lg font-medium tracking-wider py-3 hover:text-gold-400 transition-colors flex items-center justify-between"
                >
                  SERVICES
                  <span className="text-xs">{servicesOpen ? "−" : "+"}</span>
                </button>
                {servicesOpen && (
                  <div className="pl-4 space-y-2 mt-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        className="block text-cream-200 text-sm py-2 hover:text-gold-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Locations */}
              <div>
                <button
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="w-full text-left text-cream-100 text-lg font-medium tracking-wider py-3 hover:text-gold-400 transition-colors flex items-center justify-between"
                >
                  LOCATIONS
                  <span className="text-xs">{locationsOpen ? "−" : "+"}</span>
                </button>
                {locationsOpen && (
                  <div className="pl-4 space-y-2 mt-2 max-h-64 overflow-y-auto">
                    {locations.map((location) => (
                      <Link
                        key={location.name}
                        href={location.href}
                        className="block text-cream-200 text-sm py-2 hover:text-gold-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {location.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-cream-100 text-lg font-medium tracking-wider py-3 hover:text-gold-400 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-navy-700">
              <a href="tel:972-734-3158" className="btn-primary w-full">
                Call 972-734-3158
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
