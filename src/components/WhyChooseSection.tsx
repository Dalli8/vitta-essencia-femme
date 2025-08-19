import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Package, Leaf, Zap, Microscope, Shield, Heart, Pill } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Package,
      title: "Fórmula 7 em 1 exclusiva",
      description: "Desenvolvida por especialistas para restaurar o equilíbrio hormonal feminino."
    },
    {
      icon: Leaf,
      title: "100% Natural e Vegano",
      description: "Sem glúten, sem lactose e livre de hormônios sintéticos."
    },
    {
      icon: Zap,
      title: "Resultados reais e sustentáveis",
      description: "Mais de 10.000 mulheres já desbloquearam o emagrecimento com Vitta Femme."
    },
    {
      icon: Microscope,
      title: "Base científica comprovada",
      description: "Ativos selecionados com evidências clínicas em emagrecimento e equilíbrio hormonal."
    },
    {
      icon: Shield,
      title: "Segurança e confiança",
      description: "Produzido em laboratório certificado pela ANVISA, com garantia de 90 dias."
    },
    {
      icon: Heart,
      title: "Muito além do emagrecimento",
      description: "Mais energia, melhor humor, sono reparador e bem-estar no dia a dia."
    },
    {
      icon: Pill,
      title: "Praticidade no uso",
      description: "Apenas 2 cápsulas ao dia e pronto: simples de incluir na sua rotina."
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Por que escolher a Vitta Femme?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-elegant transition-all duration-300 hover:scale-105 border-2 hover:border-primary/30">
              <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-soft">
                <feature.icon className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-cta hover:scale-105 transition-all duration-300 text-lg font-bold px-12 py-4 rounded-full shadow-elegant hover:shadow-glow"
          >
            COMPRAR AGORA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;