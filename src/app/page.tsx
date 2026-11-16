import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ContactCTASection } from "@/components/home/ContactCTASection";

export const metadata: Metadata = {
  title: "Desenvolvimento de Sites e Landing Pages | Estúdio Web",
  description: "Criação de sites profissionais, páginas empresariais e landing pages para campanhas. Desenvolvimento moderno, responsivo e personalizado.",
};

export default function Page() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <BenefitsSection />
      <ProcessSection />
      <ContactCTASection />
    </>
  );
}
