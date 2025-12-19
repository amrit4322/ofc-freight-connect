import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { FleetSection } from "@/components/home/FleetSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <HighlightsSection />
      <WhyChooseSection />
      <FleetSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
