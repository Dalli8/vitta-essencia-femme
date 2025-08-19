import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductCarousel from "@/components/ProductCarousel";
import PricingSection from "@/components/PricingSection";
import ProductDescription from "@/components/ProductDescription";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ComparisonSection from "@/components/ComparisonSection";
import ScienceSection from "@/components/ScienceSection";
import GuaranteeSection from "@/components/GuaranteeSection";
import FAQSection from "@/components/FAQSection";
import EmailPopup from "@/components/EmailPopup";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <EmailPopup />
      
      {/* Hero Section - Add padding top for fixed header */}
      <div className="pt-16">
        <HeroSection />
      </div>
      
      <main>
        {/* Product Section with Carousel */}
        <section id="produtos" className="py-16">
          <div className="container mx-auto px-4">
            <ProductCarousel />
          </div>
        </section>

        {/* Pricing Section */}
        <PricingSection />

        {/* Product Description */}
        <ProductDescription />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Why Choose Section */}
        <WhyChooseSection />

        {/* Science Section */}
        <ScienceSection />

        {/* Comparison Section */}
        <ComparisonSection />

        {/* Guarantee Section */}
        <GuaranteeSection />

        {/* FAQ Section */}
        <FAQSection />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2024 Vitta Femme. Todos os direitos reservados. 
            Produto desenvolvido especialmente para o bem-estar feminino.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
