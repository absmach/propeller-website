import { FAQSection } from "@/components/faq-section";
import FeatureSection from "@/components/feature-section";
import FooterSection from "@/components/footer";
import { HeroSection } from "@/components/hero";
import HowItWorksSection from "@/components/how-it-works-section";
import PartnerCloudSection from "@/components/partner-cloud";
// import ProductDemoSection from "@/components/product-demo-section";
import StatisticsSection from "@/components/statistics-section";
import TestimonialsSection from "@/components/testimonials-section";
import { Separator } from "@/components/ui/separator";

export default function HomePage() {
  return (
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
      <Separator className="container mx-auto" />
      <TestimonialsSection />
      <Separator className="container mx-auto" />
      <FAQSection />
      <Separator className="container mx-auto" />
      <FooterSection />
    </div>
  );
}
