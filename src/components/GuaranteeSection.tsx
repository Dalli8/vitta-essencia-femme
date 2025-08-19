import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Shield, CheckCircle } from "lucide-react";

const GuaranteeSection = () => {
  return (
    <div className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto p-8 text-center shadow-elegant border-2 border-primary/20">
          <div className="bg-gradient-hero rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6 shadow-glow">
            <Shield className="w-12 h-12 text-primary-foreground" />
          </div>
          
          <div className="bg-success/20 text-success px-6 py-2 rounded-full inline-block mb-6 font-bold text-lg">
            90 DIAS DE GARANTIA
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Garantia Incondicional de Satisfação
          </h2>
          
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-3xl mx-auto">
            Acreditamos tanto no poder transformador de Vitta Femme que oferecemos uma garantia incondicional de satisfação:
          </p>
          
          <Card className="bg-primary/5 border-primary/20 p-6 mb-8">
            <p className="text-lg text-foreground leading-relaxed">
              Se após <strong>90 dias</strong> de uso conforme recomendado você não estiver completamente 
              satisfeita com seus resultados, basta nos enviar um email e devolveremos <strong>100% do seu investimento</strong>.
            </p>
            <div className="flex justify-center gap-6 mt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Sem perguntas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>Sem burocracia</span>
              </div>
            </div>
          </Card>
          
          <Button 
            size="lg" 
            className="bg-gradient-cta hover:scale-105 transition-all duration-300 text-lg font-bold px-12 py-4 rounded-full shadow-elegant hover:shadow-glow"
          >
            COMPRAR AGORA
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default GuaranteeSection;