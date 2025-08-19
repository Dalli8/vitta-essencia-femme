import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import womenTogether from "@/assets/women-together.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "42 anos",
      location: "São Paulo, SP",
      rating: 5,
      text: "Depois dos 40, o metabolismo ficou muito lento e eu não conseguia emagrecer de jeito nenhum. Com Vitta Femme, perdi 8kg em 2 meses e me sinto com muito mais energia. Meu humor melhorou demais!",
      result: "Perdeu 8kg em 2 meses"
    },
    {
      name: "Ana Costa",
      age: "35 anos", 
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Estava sempre cansada e com compulsão por doces. Vitta Femme mudou minha vida! Não tenho mais aquela fome descontrolada e durmo muito melhor. Já indiquei para todas as minhas amigas.",
      result: "Controlou a compulsão alimentar"
    },
    {
      name: "Fernanda Lima",
      age: "48 anos",
      location: "Belo Horizonte, MG", 
      rating: 5,
      text: "Na menopausa, engordei 15kg e estava sem esperança. Com Vitta Femme, já eliminei 10kg e a barriga que não saía de jeito nenhum está diminuindo. Me sinto renovada!",
      result: "Eliminou 10kg na menopausa"
    }
  ];

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Mulheres reais, resultados reais
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Veja o que nossas clientes estão dizendo sobre Vitta Femme
          </p>
          
          {/* Image showcasing women together */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative rounded-xl overflow-hidden shadow-elegant">
              <img
                src={womenTogether}
                alt="Mulheres felizes celebrando juntas seus resultados com Vitta Femme"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-hero opacity-20"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-primary-foreground/95 backdrop-blur-sm rounded-lg p-3 text-center">
                  <p className="text-foreground font-semibold text-sm">
                    Mais de 10.000 mulheres já transformaram suas vidas
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 relative">
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground italic mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="bg-gradient-hero p-3 rounded-lg mb-4">
                <p className="text-primary-foreground font-semibold text-sm text-center">
                  {testimonial.result}
                </p>
              </div>
              
              <div className="border-t pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.age} • {testimonial.location}</p>
              </div>
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

export default TestimonialsSection;