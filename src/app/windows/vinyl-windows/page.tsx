import type { Metadata } from 'next'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ServiceHero from '@/components/service-hero'
import ServiceContent from '@/components/service-content'
import CtaBanner from '@/components/cta-banner'
import ContactSection from '@/components/contact-section'

export const metadata: Metadata = {
  title: 'Vinyl Windows Replacement Garland TX | Low Maintenance, Energy Efficient',
  description: 'Vinyl windows that resist Lake Ray Hubbard hard-water spotting and Firewheel HOA standards. Multi-chamber frames, Low-E argon, fusion-welded corners, 25-year warranty. Garland install crew, free estimate.',
  keywords: 'vinyl windows Garland TX, vinyl replacement windows, low maintenance windows, energy efficient vinyl windows, Andersen vinyl windows, Pella vinyl windows, JELD-WEN vinyl windows',
}

export default function VinylWindowsPage() {
  const content = {
    title: 'Vinyl Windows Replacement in Garland, TX',
    subtitle: 'Low-Maintenance Excellence with Superior Energy Performance',
    heroImage: '/window-types/vinyl-garland-tx.jpg',

    intro: "Vinyl is the workhorse window in Garland because it solves three specific local problems at once. First, the hard-water mineral content from Lake Ray Hubbard and Garland Water Utilities municipal supply leaves stubborn spotting on glass and frames after irrigation overspray; the smooth, non-porous PVC surface on a quality vinyl frame wipes clean without etching, where painted aluminum and bare wood absorb the deposits. Second, the Firewheel master-planned subdivisions and the Bradfield Estates and Club Hill HOAs hold homeowners to strict exterior color and trim standards, and modern vinyl ships factory-finished in HOA-friendly bronzes, almonds, and clays that never need repainting. Third, the I-635, I-30, and Hwy 78 corridors bracket Garland with traffic noise and the spring hail corridor delivers heavy impact loads, so the multi-chamber, fusion-welded vinyl frames we install offer the STC ratings and structural rigidity that single-pane originals never could.",

    sections: [
      {
        heading: 'Hard-Water Spotting and Lake Ray Hubbard Lakefront Homes',
        content: "Lake Ray Hubbard sits on the eastern edge of Garland, and the city&apos;s municipal water supply carries the calcium and magnesium content typical of North Texas surface water. For Bayside, Eastern Hills, and Lakeview Manor homeowners, that means sprinkler overspray and lake-air mist deposit a chalky film on window frames that bonds aggressively to porous painted surfaces. Quality vinyl is non-porous and chemically inert, so a vinegar-and-water rinse takes the deposits off without dulling the finish. Wood frames absorb the minerals and stain permanently; bare aluminum pits. Vinyl is the only frame material engineered to live next to a Garland sprinkler head without showing it.",
      },
      {
        heading: 'Energy Efficiency in North Texas Climate',
        content: "Garland&apos;s North Texas location brings hot summers and cool winters that vinyl windows handle with exceptional efficiency. The multi-chambered construction creates superior thermal barriers that reduce heating and cooling costs by 25-35%. Low-E coatings and argon gas fills optimize performance for Garland&apos;s climate, keeping homes comfortable during summer heat waves and winter chills. Many vinyl window models qualify for local energy rebates, making them an economical upgrade for Garland homeowners. The material&apos;s dimensional stability ensures consistent performance year-round, unlike wood that can warp with humidity changes.",
      },
      {
        heading: 'Versatile Styling for Garland Architecture',
        content: "Garland&apos;s housing stock spans 1950s ranches in Heritage Crossing and Spring Park, 1970s tract homes through Camelot and Eastern Hills, and the master-planned Firewheel and Naaman Forest subdivisions built since the 1990s. Vinyl carries each era convincingly. Wood-grain laminates on premium vinyl read as true wood from the curb on the older Bradfield Estates and Club Hill homes. The standard bronze, almond, sandalwood, and architectural clay finishes match Firewheel HOA palettes without a custom-color upcharge. For Hillside Village and Heatherwood owners updating original aluminum-frame singles, vinyl drops the U-factor by more than half with no exterior repaint cycle.",
      },
      {
        heading: 'Low Maintenance for Busy Garland Families',
        content: "Garland families lead active lives participating in community events, cultural activities, and local sports. Vinyl windows respect this lifestyle by requiring virtually no maintenance, unlike wood windows that demand regular refinishing or aluminum windows that need periodic painting. The smooth, non-porous surface resists Garland&apos;s occasional dust and environmental factors, staying looking new with minimal effort. This makes vinyl windows ideal for Garland homeowners who want beautiful, efficient windows that enhance their lifestyle without demanding constant attention. Focus on family and community rather than home maintenance with vinyl windows that maintain their appearance indefinitely.",
      },
      {
        heading: 'Growing Community Investment Value',
        content: "As Garland continues its steady growth, vinyl windows represent a smart investment for homeowners and investors alike. The material&apos;s durability ensures windows maintain their performance and appearance for decades, protecting property value in a competitive market. Unlike cheaper alternatives that may need replacement in 10-15 years, quality vinyl windows from Andersen, Pella, and JELD-WEN typically last 30-40 years with proper care. This longevity, combined with energy savings and minimal maintenance, creates excellent resale value. Garland&apos;s real estate market rewards homes updated with quality, low-maintenance improvements like premium vinyl windows.",
      },
      {
        heading: 'Trusted Quality for Garland Homeowners',
        content: "Garland homeowners trust Andersen, Pella, and JELD-WEN for their vinyl windows because these brands understand community needs and Texas climate challenges. Andersen&apos;s 200 Series offers exceptional value with signature Fibrex construction. Pella&apos;s vinyl lines feature advanced EnduraClad finishes that resist fading and staining. JELD-WEN&apos;s Premium Vinyl collection provides outstanding performance with fusion-welded construction. All three brands offer comprehensive warranties and local support, ensuring Garland families receive quality products backed by reliable service. These established brands serve Texas communities for generations, providing peace of mind with every installation.",
      },
    ],

    features: [
      'Culturally accommodating low maintenance',
      'Multi-chambered frames for superior insulation',
      'Never needs painting or staining',
      'Resists Garland environmental factors',
      '20-25 year manufacturer warranties',
      'Available in all window styles and sizes',
      'ENERGY STAR certified models available',
      'UV-resistant formulations for Texas sun',
      'Smooth, easy-to-clean surfaces',
      'Environmentally friendly and recyclable',
    ],

    brands: [
      {
        name: 'Andersen 200 Series Vinyl',
        description: 'Andersen\'s entry-level vinyl line offers exceptional value with their signature Fibrex composite construction. These windows feature multi-chambered frames, fusion-welded corners, and advanced weatherstripping for superior performance in Garland\'s climate.',
      },
      {
        name: 'Pella 150 Series Vinyl',
        description: 'Pella\'s vinyl windows combine affordability with premium features like their exclusive EnduraClad finish and multi-pane insulated glass. The smooth vinyl surfaces resist fading and staining while providing excellent energy efficiency.',
      },
      {
        name: 'JELD-WEN Premium Vinyl',
        description: 'JELD-WEN\'s Premium Vinyl collection delivers outstanding performance with fusion-welded frames and advanced glass packages. Their AuraLast wood-grain finish provides authentic wood appearance with vinyl\'s low-maintenance benefits.',
      },
    ],

    faq: [
      {
        question: 'Will vinyl windows hold up against Lake Ray Hubbard hard water and Garland sprinkler overspray?',
        answer: 'Yes. Vinyl is non-porous, so the calcium and magnesium deposits in Garland Water Utilities supply rinse off with vinegar-and-water without etching the frame. Painted aluminum and bare wood absorb the minerals and stain; vinyl does not.',
      },
      {
        question: 'How do vinyl windows handle Garland\'s urban environment?',
        answer: 'Vinyl windows excel in urban settings with their smooth, non-porous surfaces that resist pollutants and environmental factors. They maintain their appearance longer in Garland\'s diverse environment.',
      },
      {
        question: 'Are vinyl windows suitable for Garland historic homes?',
        answer: 'Yes, vinyl windows offer wood-grain finishes that blend beautifully with Garland\'s historic architecture while providing modern energy efficiency without the maintenance of real wood.',
      },
      {
        question: 'Do vinyl windows add value to Garland homes?',
        answer: 'Yes, vinyl windows enhance property value in Garland\'s competitive market. Their durability, energy efficiency, and low maintenance make them a smart investment for homeowners and investors.',
      },
      {
        question: 'Are vinyl windows environmentally friendly?',
        answer: 'Yes, modern vinyl windows are environmentally responsible. The material is 100% recyclable, many contain recycled content, and their superior energy efficiency reduces carbon emissions from heating and cooling.',
      },
      {
        question: 'How much do vinyl windows cost with installation?',
        answer: 'Vinyl window costs with installation vary by style and features. Everything is priced including installation. Pricing starts at around $850 for small vinyl windows and goes up to $3500 per window depending on frame material. We do not sell windows without installation.',
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