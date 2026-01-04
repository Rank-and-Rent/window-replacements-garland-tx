"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const heroImages = [
  {
    src: "/windows/double-hung-windows-garland-tx.jpg",
    alt: "Double-hung windows in Garland home",
  },
  {
    src: "/windows/casement-windows-garland-tx.jpg",
    alt: "Casement windows installation",
  },
  {
    src: "/windows/picture-windows-garland-tx.jpg",
    alt: "Picture windows with views",
  },
  {
    src: "/windows/bay-bow-windows-garland-tx.jpg",
    alt: "Bay and bow windows",
  },
  {
    src: "/windows/sliding-windows-garland-tx.jpg",
    alt: "Sliding windows installation",
  },
  {
    src: "/windows/awning-windows-garland-tx.jpg",
    alt: "Awning windows for ventilation",
  },
  {
    src: "/windows/single-hung-windows-garland-tx.webp",
    alt: "Single-hung windows installation",
  },
  {
    src: "/windows/special-shape-windows-garland-tx.jpg",
    alt: "Special shape windows",
  },
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? heroImages.length - 1 : prevIndex - 1
    );
  };
  return (
    <section className="relative min-h-screen flex items-end">
      {/* Brand Logos Banner - positioned below fixed header */}
      <div className="absolute top-[80px] left-0 right-0 z-20 bg-white/90 backdrop-blur-sm border-b border-gray-200/20">
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-3 lg:py-4">
          <div className="flex items-center justify-center gap-3 sm:gap-4 lg:gap-8">
            <span className="hidden sm:inline text-sm font-medium text-gray-700 mr-2 lg:mr-4">Trusted Brands:</span>
            <Link href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/andersen-windows-and-doors-garland-tx-logo.png"
                alt="Andersen Windows & Doors"
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </Link>
            <Link href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/pella-windows-and-doors-garland-tx-logo.png"
                alt="Pella Windows & Doors"
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </Link>
            <Link href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/jeld-wen-windows-and-doors-garland-tx-logo.png"
                alt="Jeld-Wen Windows & Doors"
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </Link>
            <Link href="/brands" className="hover:opacity-80 transition-opacity flex-shrink-0">
              <img
                src="/marvin-windows-and-doors-garland-tx-logo.png"
                alt="Marvin Windows & Doors"
                className="h-6 sm:h-8 lg:h-10 w-auto"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url('${image.src}')`,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/40 to-navy-950/20" />
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevImage}
        className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 text-cream-100/60 hover:text-cream-100 transition-colors z-10"
        aria-label="Previous slide"
      >
        <svg
          className="w-8 h-8 lg:w-12 lg:h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        onClick={nextImage}
        className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 text-cream-100/60 hover:text-cream-100 transition-colors z-10"
        aria-label="Next slide"
      >
        <svg
          className="w-8 h-8 lg:w-12 lg:h-12"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-cream-100"
                : "bg-cream-100/40 hover:bg-cream-100/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 w-full pt-40 pb-16 lg:pb-24">
        <div className="px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream-100 font-semibold leading-tight max-w-xl">
              Best Window and Door Replacement Service in Garland, TX
            </h1>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/windows" className="btn-outline-light">
                PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
