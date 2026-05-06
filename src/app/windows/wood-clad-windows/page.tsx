import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Wood Clad Windows Replacement Garland TX | Traditional Beauty, Modern Protection',
  description: 'Wood-clad windows for Lake Ray Hubbard custom builds and Naaman Forest premium homes. Real wood interior, factory-finished aluminum exterior that resists Garland hail and lake humidity.',
  keywords: 'wood clad windows Garland TX, wood clad replacement windows, traditional windows, Andersen wood clad windows, Pella wood clad windows',
}

export default function WoodCladWindowsPage() {
  const content = {
    title: 'Wood Clad Windows Replacement in Garland, TX',
    subtitle: 'Authentic Wood Interior Beauty with Weather-Resistant Exterior Protection',
    heroImage: '/window-types/wood-clad-garland-tx.jpg',

    intro: "Wood-clad is the spec we write for the higher end of Garland&apos;s housing market. The lakefront custom builds along Lake Ray Hubbard, the larger Naaman Forest and Bradfield Estates traditionals, and the executive-tier Firewheel homes that face into the master-planned greenbelts all share a problem solid wood does not solve: prevailing Texas UV, the lake-air humidity off the eastern Garland shoreline, and the spring hail loads coming up Hwy 78 will burn through an exterior repaint cycle every two to three years if the wood is exposed. Wood-clad solves it by laminating an aluminum or fiberglass shell over the structural wood. The interior reads as true wood—stained, painted, or clear-coated to match existing millwork in a Bradfield Estates study or a Lake Ray Hubbard great room—while the exterior is factory-finished, hail-tested, and warranty-backed for thirty-plus years. It is the install we recommend whenever the budget supports it on a high-design Garland home.",

    sections: [
      {
        heading: 'Best of Both Worlds: Wood Inside, Durability Outside',
        content: "Wood clad windows feature genuine wood interiors that provide authentic natural beauty, warmth, and character. The interior wood can be stained or painted to match any décor, from traditional stains to contemporary colors. The exterior cladding—typically aluminum or vinyl—protects the wood from Garland\'s weather extremes, eliminating the maintenance burdens of traditional wood windows while preserving interior beauty.",
      },
      {
        heading: 'Weather Protection for Garland Climate',
        content: "The exterior cladding creates an impenetrable barrier against moisture, UV exposure, and temperature extremes that damage traditional wood windows in Garland. Unlike bare wood that requires annual maintenance, clad exteriors need minimal care while providing decades of weather protection. The cladding prevents rot, warping, and insect damage that plague unprotected wood in Texas climate.",
      },
      {
        heading: 'Superior Energy Efficiency',
        content: "Wood\'s natural insulating properties combined with modern cladding technology create exceptional thermal performance. Wood clad windows typically achieve U-factors of 0.25-0.30, significantly better than aluminum and comparable to premium vinyl. Garland homeowners see 30-40% reductions in energy costs compared to older windows, with the added benefit of wood\'s thermal mass that moderates temperature swings.",
      },
      {
        heading: 'Design Flexibility and Customization',
        content: "Wood clad windows offer unlimited design possibilities. The wood interior accepts any stain or paint color, matching Garland homes from traditional to contemporary styles. Exterior cladding is available in dozens of factory-finished colors that never need repainting. The combination allows homeowners to achieve perfect aesthetic harmony inside and out.",
      },
      {
        heading: 'Premium Quality and Longevity',
        content: "Wood clad windows represent the premium tier of window construction. Quality manufacturers use rot-resistant wood species, advanced cladding systems, and superior hardware. The result is windows that provide 30-40 years of service with minimal maintenance. For Garland homeowners who prioritize quality and longevity, wood clad windows offer unmatched value despite higher initial costs.",
      },
      {
        heading: 'Investment in Home Value',
        content: "Wood clad windows significantly enhance home value and appeal in Garland\'s community real estate market. The natural wood interior creates warmth and character that buyers value, while the low-maintenance exterior appeals to practical considerations. Wood clad windows are often cited as a key selling feature in premium Garland properties.",
      },
    ],

    features: [
      'Genuine wood interior for authentic beauty',
      'Weather-resistant exterior cladding',
      'Superior energy efficiency',
      'Minimal exterior maintenance required',
      'Unlimited interior staining/painting options',
      'Factory-finished exterior colors',
      '20-30 year manufacturer warranties',
      'Enhanced home resale value',
      'Available in all window styles',
      'Premium hardware and operation',
    ],

    brands: [
      {
        name: 'Andersen Wood Clad Series',
        description: 'Andersen pioneered wood clad window technology and remains the industry leader. Their wood clad windows feature premium wood species, advanced aluminum cladding, and comprehensive warranties that reflect superior quality.',
      },
      {
        name: 'Pella Architect Series Wood Clad',
        description: 'Pella\'s wood clad windows combine authentic wood beauty with their proprietary EnduraClad protection system. The result is windows that perform beautifully in Garland\'s challenging climate while maintaining traditional appeal.',
      },
      {
        name: 'JELD-WEN Siteline Wood Clad',
        description: 'JELD-WEN\'s Siteline collection offers premium wood clad windows with exceptional customization options. Their AuraLast wood protection system ensures longevity even in demanding Texas climate conditions.',
      },
    ],

    faq: [
      {
        question: 'What is the difference between wood clad and all-wood windows?',
        answer: 'Wood clad windows have genuine wood interiors just like all-wood windows, but feature weather-resistant aluminum or vinyl cladding on the exterior. This eliminates exterior maintenance while preserving interior wood beauty.',
      },
      {
        question: 'Do wood clad windows require maintenance?',
        answer: 'Interior wood surfaces benefit from occasional refinishing to maintain their beauty, but exterior cladding requires no painting or sealing. Overall maintenance is far less than traditional wood windows.',
      },
      {
        question: 'Are wood clad windows energy efficient?',
        answer: 'Yes, wood clad windows are highly energy efficient. Wood\'s natural insulating properties combined with modern glass technology can reduce energy costs by 30-40% in Garland\'s climate.',
      },
      {
        question: 'How long do wood clad windows last?',
        answer: 'Quality wood clad windows last 30-40 years with proper care. The exterior cladding protects the wood from weather damage, significantly extending service life compared to unprotected wood.',
      },
      {
        question: 'Can I paint the interior wood?',
        answer: 'Absolutely. Wood clad window interiors accept any stain or paint, allowing perfect color matching with your Garland home\'s interior design. Many homeowners change interior finishes over time.',
      },
      {
        question: 'How much do wood clad windows cost with installation?',
        answer: 'Wood clad window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
      },
    ],
  }

  return (
    <>
      <Header />
      <main>
        <ServiceHero
          title={content.title}
          subtitle={content.subtitle}
          image={content.heroImage}
        />
        <ServiceContent content={content} />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}