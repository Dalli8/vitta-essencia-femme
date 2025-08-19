import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";

const ComparisonSection = () => {
  const comparisons = [
    "Fórmula 7 em 1 desenvolvida especificamente para mulheres",
    "Atua na causa do ganho de peso: reequilíbrio hormonal",
    "Integração entre saúde hormonal, bem-estar e estética",
    "Resultados sustentáveis, sem efeito sanfona",
    "Produzido em laboratório certificado pela ANVISA",
    "Garantia de 90 dias: satisfação ou seu dinheiro de volta"
  ];

  return (
    <div className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Vitta Femme é sua melhor escolha
          </h2>
          <p className="text-lg text-muted-foreground">
            Qualidade, eficácia e resultados reais ao seu alcance
          </p>
        </div>

        <Card className="max-w-4xl mx-auto p-8 shadow-elegant">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary/20">
                  <th className="text-left py-4 text-lg font-bold text-foreground">
                    Benefícios exclusivos
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-gradient-hero text-primary-foreground px-4 py-2 rounded-lg font-bold">
                      Vitta Femme
                    </div>
                  </th>
                  <th className="text-center py-4 px-4">
                    <div className="bg-muted text-muted-foreground px-4 py-2 rounded-lg font-bold">
                      Outros
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((item, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-4 text-sm text-foreground font-medium">
                      {item}
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex justify-center">
                        <div className="bg-success/20 rounded-full p-2">
                          <Check className="w-5 h-5 text-success" />
                        </div>
                      </div>
                    </td>
                    <td className="text-center py-4 px-4">
                      <div className="flex justify-center">
                        <div className="bg-destructive/20 rounded-full p-2">
                          <X className="w-5 h-5 text-destructive" />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <div className="text-center mt-12">
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

export default ComparisonSection;