import type { Metadata } from "next";
import { FAQSection } from "@/components/faq-section";
import FeatureSection from "@/components/feature-section";
import FooterSection from "@/components/footer";
import { HeroSection } from "@/components/hero";
import HowItWorksSection from "@/components/how-it-works-section";
import { JsonLd } from "@/components/json-ld";
import PartnerCloudSection from "@/components/partner-cloud";
import PropellerUISection from "@/components/propeller-ui-section";
import StatisticsSection from "@/components/statistics-section";
import { Separator } from "@/components/ui/separator";
import { assetPath } from "@/lib/base-path";
import { SITE_URL } from "@/lib/geo-constants";
import {
  faqPageSchema,
  organizationSchema,
  softwareApplicationSchema,
  webSiteSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  alternates: {
    canonical: `${SITE_URL}/`,
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={organizationSchema()} />
      <JsonLd data={softwareApplicationSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={faqPageSchema()} />
      <link
        rel="preload"
        href={assetPath("/architecture.svg")}
        as="image"
        type="image/svg+xml"
        fetchPriority="high"
      />
      <div>
        <HeroSection />
        <Separator className="container mx-auto" />
        <PartnerCloudSection />
        <Separator className="container mx-auto" />
        <StatisticsSection />
        <Separator className="container mx-auto" />
        <FeatureSection />
        {/*<Separator className="container mx-auto" />
        <ProductDemoSection />*/}
        <Separator className="container mx-auto" />
        <HowItWorksSection />
        {/*<Separator className="container mx-auto" />
        <TestimonialsSection />*/}
        <Separator className="container mx-auto" />
        <PropellerUISection />
        <Separator className="container mx-auto" />
        <FAQSection />
        <Separator className="container mx-auto" />
        <FooterSection />
      </div>
    </>
  );
}
