import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://windowreplacementgarlandtx.com'),
  title: {
    default: "Window Replacement Service of Garland | Premium Window Installation in Garland, TX",
    template: "%s | Window Replacement Service of Garland",
  },
  description:
    "Garland-based window replacement crews working Heritage Crossing historic, Firewheel master-planned, Naaman Forest, Bradfield Estates, Camelot, Spring Park, and Lake Ray Hubbard lakefront homes. Andersen, Pella, JELD-WEN, Marvin.",
  keywords: [
    'window replacement Garland TX',
    'window installation Garland',
    'Andersen windows Garland',
    'Pella windows Texas',
    'Jeld-Wen windows Garland',
    'double hung windows Garland',
    'casement windows Garland TX',
    'bay windows installation',
    'residential window replacement',
    'energy efficient windows Garland',
    'replacement windows Dallas County',
  ],
  authors: [{ name: 'Window Replacement Service of Garland' }],
  creator: 'Window Replacement Service of Garland',
  publisher: 'Window Replacement Service of Garland',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Best Window Replacement in Garland, TX",
    description:
      "Window replacement built for Garland: Lake Ray Hubbard hard water, Firewheel HOA standards, Hwy 78 hail corridor, post-Uri freeze cycles. Andersen, Pella, JELD-WEN, Marvin.",
    url: 'https://windowreplacementgarlandtx.com',
    siteName: 'Window Replacement Service of Garland',
    locale: "en_US",
    type: "website",
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Window Replacement Service of Garland - Premium Window Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Window Replacement Service of Garland',
    description: 'Garland window replacement: Lake Ray Hubbard, Firewheel, Heritage Crossing, Naaman Forest. Andersen, Pella, JELD-WEN, Marvin.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://windowreplacementgarlandtx.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Source+Serif+4:ital,opsz,wght@0,8..60,200..900;1,8..60,200..900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/favicon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <meta name="theme-color" content="#1a365d" />
        <meta name="geo.region" content="US-TX" />
        <meta name="geo.placename" content="Garland" />
        <meta name="geo.position" content="32.9126;-96.6389" />
        <meta name="ICBM" content="32.9126, -96.6389" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'HomeAndConstructionBusiness',
              '@id': 'https://windowreplacementgarlandtx.com/#organization',
              name: 'Window Replacement Service of Garland',
              alternateName: 'Garland Window Replacement',
              description: 'Professional window replacement services in Garland, Texas. Expert installation of Andersen, Pella, and Jeld-Wen windows.',
              url: 'https://windowreplacementgarlandtx.com',
              telephone: '+1-972-734-3158',
              email: 'contact@windowreplacementgarlandtx.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '3333 N Garland Ave #200',
                addressLocality: 'Garland',
                addressRegion: 'TX',
                postalCode: '75040',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 32.9126,
                longitude: -96.6389,
              },
              areaServed: [
                { '@type': 'City', name: 'Garland', containedInPlace: { '@type': 'State', name: 'Texas' } },
                { '@type': 'City', name: 'Richardson' },
                { '@type': 'City', name: 'Rowlett' },
                { '@type': 'City', name: 'Sachse' },
                { '@type': 'City', name: 'Wylie' },
                { '@type': 'City', name: 'Mesquite' },
                { '@type': 'City', name: 'Dallas' },
              ],
              knowsAbout: [
                'Window Replacement',
                'Window Installation',
                'Energy Efficient Windows',
                'Double-Hung Windows',
                'Casement Windows',
                'Bay Windows',
                'Bow Windows',
              ],
              brand: [
                { '@type': 'Brand', name: 'Andersen' },
                { '@type': 'Brand', name: 'Pella' },
                { '@type': 'Brand', name: 'Jeld-Wen' },
              ],
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                  opens: '08:00',
                  closes: '18:00',
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Saturday',
                  opens: '09:00',
                  closes: '14:00',
                },
              ],
              priceRange: '$$',
              currenciesAccepted: 'USD',
              paymentAccepted: 'Cash, Credit Card, Financing',
              image: 'https://windowreplacementgarlandtx.com/og-image.jpg',
              logo: 'https://windowreplacementgarlandtx.com/logo.png',
              slogan: 'Premium Window Replacement for Garland Homes',
              foundingDate: '2010',
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                reviewCount: '98',
                bestRating: '5',
                worstRating: '1',
              },
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Window Replacement Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Double-Hung Window Installation',
                      description: 'Professional installation of double-hung windows with energy-efficient Low-E glass.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Casement Window Installation',
                      description: 'Side-hinged casement windows for maximum ventilation and energy efficiency.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Bay Window Installation',
                      description: 'Stunning bay window installations that add space and natural light.',
                    },
                  },
                ],
              },
              sameAs: [],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              '@id': 'https://windowreplacementgarlandtx.com/#website',
              name: 'Window Replacement Service of Garland',
              url: 'https://windowreplacementgarlandtx.com',
              publisher: { '@id': 'https://windowreplacementgarlandtx.com/#organization' },
              potentialAction: {
                '@type': 'SearchAction',
                target: {
                  '@type': 'EntryPoint',
                  urlTemplate: 'https://windowreplacementgarlandtx.com/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              '@id': 'https://windowreplacementgarlandtx.com/#org',
              name: 'Window Replacement Service of Garland',
              url: 'https://windowreplacementgarlandtx.com',
              logo: 'https://windowreplacementgarlandtx.com/logo.png',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-972-734-3158',
                contactType: 'customer service',
                areaServed: 'US',
                availableLanguage: ['English', 'Spanish'],
              },
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
