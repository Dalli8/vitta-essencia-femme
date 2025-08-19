import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProductDescription = () => {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [isIngredientsOpen, setIsIngredientsOpen] = useState(false);

  const ingredients = [
    { name: "Psyllium", amount: "50mg", benefit: "controla a fome e estabiliza insulina" },
    { name: "Picolinato de Cromo", amount: "250mcg", benefit: "reduz compulsão por doces" },
    { name: "Cafeína", amount: "100mg", benefit: "acelera metabolismo naturalmente" },
    { name: "Curcumina", amount: "10mg", benefit: "combate inflamação e reduz cortisol" },
    { name: "Triptofano", amount: "70mg", benefit: "melhora humor e reduz ansiedade alimentar" },
    { name: "Antocianinas", amount: "130mg", benefit: "ativam genes que reduzem gordura corporal" },
    { name: "Ácido Clorogênico", amount: "10mg", benefit: "otimiza metabolismo e função tireoidiana" }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <Card className="p-6 mb-6 shadow-soft">
        <button
          onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
          className="w-full flex items-center justify-between text-left"
        >
          <h3 className="text-xl font-bold text-foreground">Descrição</h3>
          {isDescriptionOpen ? (
            <ChevronUp className="w-6 h-6 text-primary" />
          ) : (
            <ChevronDown className="w-6 h-6 text-primary" />
          )}
        </button>
        
        {isDescriptionOpen && (
          <div className="mt-6 text-muted-foreground leading-relaxed animate-accordion-down">
            <p className="mb-4">
              O equilíbrio dos hormônios influencia tudo: energia, humor, sono, peso e até a disposição para o dia a dia. 
              Quando algo sai do eixo, os reflexos aparecem no corpo e na mente. Pensando nisso, Vitta Femme foi desenvolvido 
              para ser o suporte natural e completo da mulher moderna. Apenas 2 cápsulas por dia e pronto!
            </p>
            
            <p className="mb-4">
              Com 7 ativos cientificamente selecionados — como psyllium, picolinato de cromo, curcumina, triptofano, 
              antocianinas, cafeína e ácido clorogênico —, Vitta Femme oferece uma abordagem inteligente para auxiliar no:
            </p>
            
            <ul className="space-y-2 ml-4">
              <li>• Desbloqueio do emagrecimento resistente</li>
              <li>• Redução da gordura abdominal</li>
              <li>• Controle natural do apetite e compulsão por doces</li>
              <li>• Aumento da energia e da disposição</li>
              <li>• Melhora do humor e redução da ansiedade</li>
              <li>• Sono reparador e metabolismo otimizado</li>
              <li>• Resultados sustentáveis e duradouros</li>
            </ul>
          </div>
        )}
      </Card>

      <Card className="p-6 shadow-soft">
        <button
          onClick={() => setIsIngredientsOpen(!isIngredientsOpen)}
          className="w-full flex items-center justify-between text-left"
        >
          <h3 className="text-xl font-bold text-foreground">Ingredientes</h3>
          {isIngredientsOpen ? (
            <ChevronUp className="w-6 h-6 text-primary" />
          ) : (
            <ChevronDown className="w-6 h-6 text-primary" />
          )}
        </button>
        
        {isIngredientsOpen && (
          <div className="mt-6 space-y-4 animate-accordion-down">
            {ingredients.map((ingredient, index) => (
              <div key={index} className="border-l-4 border-primary/30 pl-4 py-2">
                <div className="flex justify-between items-start mb-1">
                  <span className="font-semibold text-foreground">{ingredient.name}</span>
                  <span className="text-primary font-medium">({ingredient.amount})</span>
                </div>
                <p className="text-sm text-muted-foreground">{ingredient.benefit}</p>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
};

export default ProductDescription;