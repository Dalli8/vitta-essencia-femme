import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Leaf, Shield, Zap } from "lucide-react";

const PricingSection = () => {
  const pricingOptions = [
    {
      quantity: 5,
      originalPrice: 835,
      price: 437,
      pricePerUnit: 87.40,
      discount: "52% OFF",
      savings: 398,
      isPopular: true
    },
    {
      quantity: 3,
      originalPrice: 501,
      price: 257,
      pricePerUnit: 85.66,
      discount: "51% OFF",
      savings: 244,
      isPopular: false
    },
    {
      quantity: 1,
      originalPrice: 167,
      price: 167,
      pricePerUnit: 167,
      discount: "",
      savings: 0,
      isPopular: false
    }
  ];

  const features = [
    { icon: Leaf, text: "100% Vegano" },
    { icon: Shield, text: "Livre de Glúten" },
    { icon: Zap, text: "Zero Lactose" }
  ];

  return (
    <div className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Vitta Femme
          </h1>
          
          <div className="flex justify-center gap-8 mb-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 text-muted-foreground">
                <feature.icon className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
          {pricingOptions.map((option, index) => (
            <Card key={index} className={`relative p-6 text-center border-2 transition-all duration-300 hover:shadow-elegant ${
              option.isPopular 
                ? "border-primary bg-gradient-hero text-primary-foreground shadow-glow scale-105" 
                : "border-border hover:border-primary/30"
            }`}>
              {option.isPopular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-success text-success-foreground px-4 py-1">
                  MAIS POPULAR
                </Badge>
              )}
              
              <div className="mb-4">
                <div className={`text-2xl font-bold mb-2 ${option.isPopular ? "text-primary-foreground" : "text-foreground"}`}>
                  {option.quantity} Frasco{option.quantity > 1 ? "s" : ""}
                </div>
                
                {option.savings > 0 && (
                  <div className={`text-sm mb-2 ${option.isPopular ? "text-primary-foreground/90" : "text-muted-foreground"}`}>
                    R${option.pricePerUnit.toFixed(2)}/cada
                  </div>
                )}
                
                <div className={`text-3xl font-bold mb-2 ${option.isPopular ? "text-primary-foreground" : "text-primary"}`}>
                  R${option.price}
                </div>
                
                {option.discount && (
                  <Badge className="bg-success text-success-foreground mb-2">
                    {option.discount}
                  </Badge>
                )}
                
                {option.savings > 0 && (
                  <div className={`text-sm font-medium ${option.isPopular ? "text-primary-foreground/90" : "text-success"}`}>
                    Economize R${option.savings}
                  </div>
                )}
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
          
          <div className="flex justify-center gap-8 mt-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Pagamento 100% Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-success" />
              <span>Em até 12x s/juros</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;