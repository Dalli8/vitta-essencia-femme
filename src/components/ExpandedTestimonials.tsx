import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Quote, Verified, Play } from "lucide-react";
import { useState } from "react";

const ExpandedTestimonials = () => {
  const [showMore, setShowMore] = useState(false);

  const initialTestimonials = [
    {
      name: "Maria Silva",
      age: "42 anos",
      location: "São Paulo, SP",
      rating: 5,
      text: "Depois dos 40, o metabolismo ficou muito lento e eu não conseguia emagrecer de jeito nenhum. Com Vitta Femme, perdi 8kg em 2 meses e me sinto com muito mais energia. Meu humor melhorou demais!",
      result: "Perdeu 8kg em 2 meses",
      verified: true,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b17c?w=60&h=60&fit=crop&crop=face",
      hasVideo: true
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
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=60&h=60&fit=crop&crop=face",
      hasVideo: true
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

  const additionalTestimonials = [
    {
      name: "Luciana Pereira",
      age: "45 anos",
      location: "Porto Alegre, RS",
      rating: 5,
      text: "Sofria com ondas de calor e insônia há anos. Com Vitta Femme, esses sintomas praticamente sumiram e ainda perdi 5kg sem esforço. Estou me sentindo jovem novamente!",
      result: "Eliminou sintomas da menopausa",
      verified: true,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=60&h=60&fit=crop&crop=face",
      hasVideo: true
    },
    {
      name: "Roberta Alves",
      age: "37 anos",
      location: "Brasília, DF",
      rating: 5,
      text: "Meu ciclo menstrual era completamente desregulado. Após 3 meses com Vitta Femme, tudo normalizou e ainda eliminei 6kg. Minha disposição está incrível!",
      result: "Regulou ciclo menstrual",
      verified: true,
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Camila Souza",
      age: "40 anos",
      location: "Recife, PE",
      rating: 5,
      text: "Estava tomando antidepressivos por causa das oscilações hormonais. Com Vitta Femme, consegui, junto com meu médico, reduzir a medicação e me sinto naturalmente bem!",
      result: "Melhorou saúde mental",
      verified: true,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Beatriz Martins",
      age: "46 anos",
      location: "Goiânia, GO",
      rating: 5,
      text: "Meu marido notou a diferença antes mesmo de eu! Disse que estou mais alegre e paciente. Realmente, Vitta Femme transformou meu dia a dia completamente.",
      result: "Transformou relacionamentos",
      verified: true,
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Amanda Oliveira",
      age: "43 anos",
      location: "Florianópolis, SC",
      rating: 5,
      text: "Trabalho em turnos e meu sono era terrível. Com Vitta Femme, durmo como um bebê e acordo descansada. Já perdi 9kg e minha produtividade no trabalho melhorou muito!",
      result: "Melhorou qualidade do sono",
      verified: true,
      image: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=60&h=60&fit=crop&crop=face",
      hasVideo: true
    },
    {
      name: "Daniela Costa",
      age: "38 anos",
      location: "Campo Grande, MS",
      rating: 5,
      text: "Depois de 2 filhos, meu corpo não era mais o mesmo. Vitta Femme me ajudou a recuperar minha forma e, principalmente, minha confiança. Me sinto poderosa novamente!",
      result: "Recuperou forma pós-parto",
      verified: true,
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const allTestimonials = showMore ? [...initialTestimonials, ...additionalTestimonials] : initialTestimonials;

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            +12.000 Mulheres Transformadas
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Histórias reais de transformação com Vitta Femme
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {allTestimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-elegant transition-all duration-300 hover:scale-105 relative border-2 hover:border-primary/30 animate-fade-in">
              <Quote className="w-8 h-8 text-primary/30 absolute top-4 right-4" />
              
              {/* Customer Profile */}
              <div className="flex items-start gap-3 mb-4">
                <div className="relative">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                  />
                  {testimonial.hasVideo && (
                    <div className="absolute -top-1 -right-1 bg-red-500 rounded-full p-1">
                      <Play className="w-3 h-3 text-white fill-white" />
                    </div>
                  )}
                </div>
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

        {!showMore && (
          <div className="text-center mb-8">
            <Button 
              variant="outline"
              onClick={() => setShowMore(true)}
              className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Ver Mais Depoimentos ({additionalTestimonials.length}+)
            </Button>
          </div>
        )}

        <div className="text-center">
          <Button 
            size="lg" 
            className="bg-gradient-cta hover:scale-105 transition-all duration-300 text-lg font-bold px-12 py-4 rounded-full shadow-elegant hover:shadow-glow"
          >
            QUERO MEU RESULTADO TAMBÉM
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpandedTestimonials;