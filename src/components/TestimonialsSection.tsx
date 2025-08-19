import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Quote, Verified } from "lucide-react";
import womenTogether from "@/assets/women-together.jpg";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      age: "42 anos",
      location: "São Paulo, SP",
      rating: 5,
      text: "Depois dos 40, o metabolismo ficou muito lento e eu não conseguia emagrecer de jeito nenhum. Com Vitta Femme, perdi 8kg em 2 meses e me sinto com muito mais energia. Meu humor melhorou demais!",
      result: "Perdeu 8kg em 2 meses",
      verified: true,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Ana Costa",
      age: "35 anos", 
      location: "Rio de Janeiro, RJ",
      rating: 5,
      text: "Estava sempre cansada e com compulsão por doces. Vitta Femme mudou minha vida! Não tenho mais aquela fome descontrolada e durmo muito melhor. Já indiquei para todas as minhas amigas.",
      result: "Controlou a compulsão alimentar",
      verified: true,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Fernanda Lima",
      age: "48 anos",
      location: "Belo Horizonte, MG", 
      rating: 5,
      text: "Na menopausa, engordei 15kg e estava sem esperança. Com Vitta Femme, já eliminei 10kg e a barriga que não saía de jeito nenhum está diminuindo. Me sinto renovada!",
      result: "Eliminou 10kg na menopausa",
      verified: true,
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Carla Santos",
      age: "39 anos",
      location: "Curitiba, PR",
      rating: 5,
      text: "Minha autoestima estava no chão. Com Vitta Femme não só perdi peso, mas ganhei confiança. Durmo melhor e tenho muito mais energia para brincar com meus filhos.",
      result: "Recuperou a autoestima",
      verified: true,
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Julia Rocha",
      age: "44 anos",
      location: "Salvador, BA",
      rating: 5,
      text: "Tentei várias dietas e nada funcionava. Vitta Femme foi diferente, senti mudanças desde a primeira semana. Já são 7kg eliminados e continuo firme!",
      result: "Eliminou 7kg naturalmente",
      verified: true,
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Patricia Moura",
      age: "41 anos",
      location: "Fortaleza, CE",
      rating: 5,
      text: "O que mais me impressionou foi como meu humor melhorou. Não tenho mais irritabilidade e ansiedade. E de quebra, já perdi 6kg sem sofrer!",
      result: "Melhorou humor e perdeu 6kg",
      verified: true,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
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
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 relative border-2 hover:border-primary/30">
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              
              {/* Customer Profile */}
              <div className="flex items-start gap-3 mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold text-foreground text-sm">{testimonial.name}</span>
                    {testimonial.verified && (
                      <Verified className="w-4 h-4 text-primary fill-primary" />
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonial.age} • {testimonial.location}
                  </div>
                </div>
              </div>
              
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Review text */}
              <p className="text-muted-foreground italic mb-4 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>
              
              {/* Result highlight */}
              <div className="bg-gradient-hero p-3 rounded-lg text-center">
                <p className="text-primary-foreground font-semibold text-sm">
                  {testimonial.result}
                </p>
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