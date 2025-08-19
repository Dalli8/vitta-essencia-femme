import { Card } from "@/components/ui/card";
import { Microscope, Award, Shield } from "lucide-react";

const ScienceSection = () => {
  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ciência + Segurança = Vitta Femme
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 shadow-elegant mb-8">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              Cada cápsula de Vitta Femme é resultado da união entre pesquisas científicas e rigor nos 
              padrões de qualidade. Sua fórmula 7 em 1 foi desenvolvida por especialistas em 
              endocrinologia, nutrição e medicina integrativa, com ativos selecionados e validados 
              por estudos clínicos.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Produzido em laboratório certificado pela ANVISA, o Vitta Femme oferece eficácia 
              comprovada, segurança no consumo e a tranquilidade de um suplemento natural, vegano 
              e livre de hormônios sintéticos.
            </p>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
              <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Microscope className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Pesquisa Científica</h3>
              <p className="text-sm text-muted-foreground">
                Fórmula baseada em estudos clínicos e desenvolvida por especialistas
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
              <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Award className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Qualidade Premium</h3>
              <p className="text-sm text-muted-foreground">
                Laboratório certificado com os mais altos padrões de qualidade
              </p>
            </Card>

            <Card className="p-6 text-center hover:shadow-elegant transition-all duration-300">
              <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-soft">
                <Shield className="w-8 h-8 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Segurança ANVISA</h3>
              <p className="text-sm text-muted-foreground">
                Produzido seguindo rigorosos padrões de segurança e eficácia
              </p>
            </Card>
          </div>
        </div>

        <Card className="max-w-2xl mx-auto mt-12 p-8 bg-gradient-subtle border-2 border-primary/20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            A ciência a favor da sua essência
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            Vitta Femme é um suplemento em cápsulas com fórmula 7 em 1 desenvolvida para restaurar 
            o equilíbrio hormonal e desbloquear o emagrecimento feminino. Auxilia no controle do peso, 
            aumenta a energia, melhora o humor e reduz desconfortos comuns da perimenopausa e menopausa. 
            Prático, seguro e eficaz, transforma o cuidado com o corpo e o bem-estar em um hábito 
            simples da sua rotina.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ScienceSection;