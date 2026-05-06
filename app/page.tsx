import PortfolioHero from "@/components/ui/portfolio-hero";
import { FAQS } from "@/lib/seo";

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://itsmikespage.tech/#person",
        name: "Michael Chege",
        url: "https://itsmikespage.tech",
        jobTitle: "Web Designer",
        description:
          "Kenya-based web designer focused on conversion-focused websites, landing pages, and UX systems.",
        sameAs: [
          "https://www.linkedin.com/in/mike-c-71872a270",
          "https://github.com/001-sketch",
        ],
        knowsAbout: [
          "Web design",
          "Landing page design",
          "UI/UX design",
          "Core Web Vitals",
          "Conversion rate optimization",
          "Information architecture",
        ],
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://itsmikespage.tech/#business",
        name: "Michael Chege Web Design",
        url: "https://itsmikespage.tech",
        description:
          "Conversion-focused web design studio for service businesses seeking higher bookings and enquiries.",
        areaServed: "Kenya",
        serviceType: [
          "Website Design",
          "Landing Page Design",
          "UI/UX Design",
          "Core Web Vitals Optimization",
          "SEO Content Strategy",
        ],
        founder: { "@id": "https://itsmikespage.tech/#person" },
      },
      {
        "@type": "WebSite",
        "@id": "https://itsmikespage.tech/#website",
        name: "ItsMikesPage",
        url: "https://itsmikespage.tech",
        description:
          "Michael Chege portfolio featuring conversion-focused web design, landing pages, and UX strategy.",
        inLanguage: "en-KE",
        publisher: { "@id": "https://itsmikespage.tech/#person" },
      },
      {
        "@type": "WebPage",
        "@id": "https://itsmikespage.tech/#webpage",
        url: "https://itsmikespage.tech",
        name: "Michael Chege | Web Designer in Kenya",
        description:
          "Conversion-focused web designer helping service businesses improve bookings with SEO-ready UX.",
        isPartOf: { "@id": "https://itsmikespage.tech/#website" },
        about: { "@id": "https://itsmikespage.tech/#person" },
        inLanguage: "en-KE",
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://itsmikespage.tech/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://itsmikespage.tech",
          },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://itsmikespage.tech/#faq",
        mainEntity: FAQS.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <PortfolioHero />
    </>
  );
}
