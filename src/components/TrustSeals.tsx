import { Shield, Lock, Truck, Award, CreditCard, Heart } from "lucide-react";

const TrustSeals = () => {
  const seals = [
    {
      icon: Shield,
      title: "ANVISA Certificado",
      description: "Laboratório aprovado"
    },
    {
      icon: Lock,
      title: "Compra Segura",
      description: "SSL 256-bit"
    },
    {
      icon: Truck,
      title: "Frete Grátis",
      description: "Acima de R$ 200"
    },
    {
      icon: Award,
      title: "90 Dias Garantia",
      description: "Satisfação total"
    },
    {
      icon: CreditCard,
      title: "12x Sem Juros",
      description: "No cartão de crédito"
    },
    {
      icon: Heart,
      title: "10mil+ Clientes",
      description: "Satisfeitas"
    }
  ];

  return (
    <div className="bg-muted/50 rounded-xl p-6 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {seals.map((seal, index) => (
          <div key={index} className="text-center group">
            <div className="bg-gradient-hero rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-200">
              <seal.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h4 className="text-xs font-bold text-foreground mb-1">{seal.title}</h4>
            <p className="text-xs text-muted-foreground">{seal.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSeals;