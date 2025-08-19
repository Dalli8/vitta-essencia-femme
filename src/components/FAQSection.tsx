import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quanto tempo leva para ver resultados com Vitta Femme?",
      answer: "A maioria das mulheres começa a notar mudanças na fome e nos níveis de energia nos primeiros 7-10 dias. Resultados visíveis na balança e nas medidas geralmente aparecem entre 3-4 semanas de uso contínuo, com resultados mais significativos após 8-12 semanas."
    },
    {
      question: "Vitta Femme funciona para mulheres na menopausa?",
      answer: "Sim! Na verdade, Vitta Femme é especialmente eficaz para mulheres na perimenopausa e menopausa, quando as flutuações hormonais tornam o emagrecimento particularmente desafiador. Os ingredientes foram selecionados para ajudar a equilibrar os hormônios durante esta fase de transição."
    },
    {
      question: "Preciso seguir uma dieta específica enquanto tomo Vitta Femme?",
      answer: "Não é necessário seguir uma dieta restritiva. Vitta Femme trabalha para restaurar seu equilíbrio hormonal, o que naturalmente reduz desejos por alimentos problemáticos e melhora sua relação com a comida. Recomendamos apenas uma alimentação balanceada e consciente para resultados otimizados."
    },
    {
      question: "Vitta Femme tem efeitos colaterais?",
      answer: "Vitta Femme foi formulado com ingredientes naturais em dosagens seguras e eficazes. Não contém estimulantes agressivos, hormônios sintéticos ou ingredientes controversos. A grande maioria das usuárias não relata efeitos colaterais. Como com qualquer suplemento, pessoas com condições médicas pré-existentes devem consultar seu médico."
    },
    {
      question: "Como devo tomar Vitta Femme?",
      answer: "Recomendamos 2 cápsulas por dia, preferencialmente pela manhã com o café da manhã. Cada frasco contém 60 cápsulas, suficientes para 30 dias de tratamento."
    },
    {
      question: "Vitta Femme é adequado para vegetarianas/veganas?",
      answer: "Sim! Vitta Femme é 100% vegano, livre de glúten, lactose e ingredientes de origem animal."
    },
    {
      question: "Por quanto tempo devo tomar Vitta Femme?",
      answer: "Para resultados ótimos, recomendamos um ciclo inicial de 3 meses para restaurar completamente o equilíbrio hormonal. Após esse período, muitas mulheres optam por continuar com uma dose de manutenção para sustentar os benefícios a longo prazo."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="p-6 shadow-soft hover:shadow-elegant transition-all duration-300">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-6 h-6 text-primary flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="mt-4 text-muted-foreground leading-relaxed animate-accordion-down">
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;