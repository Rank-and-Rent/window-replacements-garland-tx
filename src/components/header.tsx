"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { servicesData, locationsData, brandsData } from "@/data";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleMouseEnter = (dropdown: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
  };

  const handleDropdownMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
  };

  const toggleMobileDropdown = (dropdown: string) => {
    setMobileActiveDropdown(mobileActiveDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileActiveDropdown(null);
  };

  const windowServices = servicesData.filter((s) => s.category === "Windows");
  const doorServices = servicesData.filter((s) => s.category === "Doors");
  const topLocations = locationsData.filter((l) => l.type === "city").slice(0, 10);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-navy-950/95 backdrop-blur-sm shadow-lg" : "bg-navy-950/80"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0" onClick={closeMobileMenu}>
              <img
                src="/window-replacement-service-garland-tx.png"
                alt="Window Replacement Service of Garland"
                className="h-12 w-auto"
              />
            </Link>

            {/* Phone Number - Desktop */}
            <a
              href="tel:972-734-3158"
              className="hidden lg:flex items-center gap-2 text-cream-100 hover:text-gold-400 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span className="font-medium">(972) 734-3158</span>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-6">
              {/* Windows Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("windows")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-cream-100 text-sm font-medium tracking-wider hover:text-gold-400 transition-colors">
                  Windows
                </button>
                {activeDropdown === "windows" && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-stone-200 rounded-sm shadow-xl z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {windowServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.route}
                          className="block px-4 py-2 text-navy-900 text-sm hover:bg-stone-100 hover:text-gold-500 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="border-t border-stone-300 mt-2 pt-2">
                        <Link
                          href="/windows"
                          className="block px-4 py-2 bg-stone-50 text-navy-900 font-semibold text-sm hover:bg-stone-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All Windows
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Doors Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("doors")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-cream-100 text-sm font-medium tracking-wider hover:text-gold-400 transition-colors">
                  Doors
                </button>
                {activeDropdown === "doors" && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-stone-200 rounded-sm shadow-xl z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {doorServices.map((service) => (
                        <Link
                          key={service.slug}
                          href={service.route}
                          className="block px-4 py-2 text-navy-900 text-sm hover:bg-stone-100 hover:text-gold-500 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="border-t border-stone-300 mt-2 pt-2">
                        <Link
                          href="/doors"
                          className="block px-4 py-2 bg-stone-50 text-navy-900 font-semibold text-sm hover:bg-stone-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All Doors
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Brands Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("brands")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-cream-100 text-sm font-medium tracking-wider hover:text-gold-400 transition-colors">
                  Brands
                </button>
                {activeDropdown === "brands" && (
                  <div
                    className="absolute top-full left-0 mt-2 w-64 bg-white border border-stone-200 rounded-sm shadow-xl z-50"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {brandsData.map((brand) => (
                        <Link
                          key={brand.slug}
                          href={brand.route}
                          className="block px-4 py-2 text-navy-900 text-sm hover:bg-stone-100 hover:text-gold-500 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {brand.name}
                        </Link>
                      ))}
                      <div className="border-t border-stone-300 mt-2 pt-2">
                        <Link
                          href="/brands"
                          className="block px-4 py-2 bg-stone-50 text-navy-900 font-semibold text-sm hover:bg-stone-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All Brands
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Locations Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => handleMouseEnter("locations")}
                onMouseLeave={handleMouseLeave}
              >
                <button className="text-cream-100 text-sm font-medium tracking-wider hover:text-gold-400 transition-colors">
                  Areas We Serve
                </button>
                {activeDropdown === "locations" && (
                  <div
                    className="absolute top-full left-0 mt-2 w-56 bg-white border border-stone-200 rounded-sm shadow-xl z-50 max-h-96 overflow-y-auto"
                    onMouseEnter={handleDropdownMouseEnter}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="py-2">
                      {topLocations.map((location) => (
                        <Link
                          key={location.slug}
                          href={location.route}
                          className="block px-4 py-2 text-navy-900 text-sm hover:bg-stone-100 hover:text-gold-500 transition-colors"
                          onClick={() => setActiveDropdown(null)}
                        >
                          {location.name}
                        </Link>
                      ))}
                      <div className="border-t border-stone-300 mt-2 pt-2">
                        <Link
                          href="/locations"
                          className="block px-4 py-2 bg-stone-50 text-navy-900 font-semibold text-sm hover:bg-stone-200"
                          onClick={() => setActiveDropdown(null)}
                        >
                          View All Locations
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="text-cream-100 text-sm font-medium tracking-wider hover:text-gold-400 transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-cream-100 text-sm font-medium tracking-wider hover:text-gold-400 transition-colors"
              >
                Contact
              </Link>
            </nav>

            {/* Mobile: Call Now + Hamburger */}
            <div className="lg:hidden flex items-center gap-3">
              <a
                href="tel:972-734-3158"
                className="btn-primary text-sm py-2 px-4"
              >
                Call Now
              </a>
              <button
                type="button"
                className="text-cream-100 p-2"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-sm">
          <div className="flex items-center justify-between px-6 py-4">
            <Link href="/" onClick={closeMobileMenu}>
              <div className="border-2 border-gold-500 px-4 py-2">
                <span className="text-gold-500 text-2xl font-bold italic" style={{ fontFamily: "Georgia, serif" }}>
                  WRG
                </span>
              </div>
            </Link>
            <button type="button" className="text-cream-100 p-2" onClick={closeMobileMenu} aria-label="Close menu">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="px-6 py-8 overflow-y-auto max-h-[calc(100vh-100px)]">
            <div className="space-y-4">
              {/* Mobile Windows */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("windows")}
                  className="w-full text-left text-cream-100 text-lg font-medium tracking-wider py-3 hover:text-gold-400 transition-colors flex items-center justify-between"
                >
                  Windows
                  <span className="text-xs">{mobileActiveDropdown === "windows" ? "-" : "+"}</span>
                </button>
                {mobileActiveDropdown === "windows" && (
                  <div className="pl-4 space-y-2 mt-2">
                    {windowServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.route}
                        className="block text-cream-200 text-sm py-2 hover:text-gold-400 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/windows"
                      className="block text-gold-400 font-semibold text-sm py-2"
                      onClick={closeMobileMenu}
                    >
                      View All Windows
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Doors */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("doors")}
                  className="w-full text-left text-cream-100 text-lg font-medium tracking-wider py-3 hover:text-gold-400 transition-colors flex items-center justify-between"
                >
                  Doors
                  <span className="text-xs">{mobileActiveDropdown === "doors" ? "-" : "+"}</span>
                </button>
                {mobileActiveDropdown === "doors" && (
                  <div className="pl-4 space-y-2 mt-2">
                    {doorServices.map((service) => (
                      <Link
                        key={service.slug}
                        href={service.route}
                        className="block text-cream-200 text-sm py-2 hover:text-gold-400 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {service.name}
                      </Link>
                    ))}
                    <Link
                      href="/doors"
                      className="block text-gold-400 font-semibold text-sm py-2"
                      onClick={closeMobileMenu}
                    >
                      View All Doors
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Brands */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("brands")}
                  className="w-full text-left text-cream-100 text-lg font-medium tracking-wider py-3 hover:text-gold-400 transition-colors flex items-center justify-between"
                >
                  Brands
                  <span className="text-xs">{mobileActiveDropdown === "brands" ? "-" : "+"}</span>
                </button>
                {mobileActiveDropdown === "brands" && (
                  <div className="pl-4 space-y-2 mt-2">
                    {brandsData.map((brand) => (
                      <Link
                        key={brand.slug}
                        href={brand.route}
                        className="block text-cream-200 text-sm py-2 hover:text-gold-400 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {brand.name}
                      </Link>
                    ))}
                    <Link
                      href="/brands"
                      className="block text-gold-400 font-semibold text-sm py-2"
                      onClick={closeMobileMenu}
                    >
                      View All Brands
                    </Link>
                  </div>
                )}
              </div>

              {/* Mobile Locations */}
              <div>
                <button
                  onClick={() => toggleMobileDropdown("locations")}
                  className="w-full text-left text-cream-100 text-lg font-medium tracking-wider py-3 hover:text-gold-400 transition-colors flex items-center justify-between"
                >
                  Areas We Serve
                  <span className="text-xs">{mobileActiveDropdown === "locations" ? "-" : "+"}</span>
                </button>
                {mobileActiveDropdown === "locations" && (
                  <div className="pl-4 space-y-2 mt-2 max-h-48 overflow-y-auto">
                    {topLocations.map((location) => (
                      <Link
                        key={location.slug}
                        href={location.route}
                        className="block text-cream-200 text-sm py-2 hover:text-gold-400 transition-colors"
                        onClick={closeMobileMenu}
                      >
                        {location.name}
                      </Link>
                    ))}
                    <Link
                      href="/locations"
                      className="block text-gold-400 font-semibold text-sm py-2"
                      onClick={closeMobileMenu}
                    >
                      View All Locations
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href="/about"
                className="block text-cream-100 text-lg font-medium tracking-wider py-3 hover:text-gold-400 transition-colors"
                onClick={closeMobileMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="block text-cream-100 text-lg font-medium tracking-wider py-3 hover:text-gold-400 transition-colors"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </div>
            <div className="mt-8 pt-8 border-t border-navy-700">
              <a href="tel:972-734-3158" className="btn-primary w-full text-center">
                Call (972) 734-3158
              </a>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
