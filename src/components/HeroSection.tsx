import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import womanEmpowered from "@/assets/woman-empowered.jpg";

const HeroSection = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('produtos');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative py-20 bg-gradient-subtle overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Desbloqueie seu
              <span className="bg-gradient-cta bg-clip-text text-transparent"> equilíbrio </span>
              feminino
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Vitta Femme: A fórmula 7 em 1 desenvolvida especialmente para restaurar seu 
              equilíbrio hormonal e desbloquear o emagrecimento natural. 
              Mais energia, melhor humor e resultados duradouros.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                className="bg-gradient-cta hover:scale-105 transition-all duration-300 text-lg font-bold px-8 py-4 rounded-full shadow-elegant hover:shadow-glow"
                onClick={scrollToProducts}
              >
                COMPRAR COM DESCONTO
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary hover:bg-primary/10 text-lg font-semibold px-8 py-4 rounded-full"
                onClick={scrollToProducts}
              >
                VER BENEFÍCIOS
              </Button>
            </div>
            
            <div className="flex items-center justify-center lg:justify-start gap-2 text-muted-foreground">
              <span className="text-sm">Desça para saber mais</span>
              <ArrowDown className="w-4 h-4 animate-bounce" />
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant hover:shadow-glow transition-all duration-500">
              <img
                src={womanEmpowered}
                alt="Mulher confiante e empoderada representando o bem-estar feminino"
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
              <div className="absolute bottom-6 left-6 right-6 text-center">
                <div className="bg-primary-foreground/95 backdrop-blur-sm rounded-lg p-4 shadow-soft">
                  <p className="text-foreground font-semibold">
                    "Transforme sua essência feminina"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;