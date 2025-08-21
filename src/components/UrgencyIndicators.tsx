import { Clock, Package, TrendingUp, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const UrgencyIndicators = () => {
  const [currentStock] = useState(47); // Simulated stock count
  const [recentPurchases, setRecentPurchases] = useState(12);

  useEffect(() => {
    // Simulate live purchase counter
    const interval = setInterval(() => {
      setRecentPurchases(prev => prev + Math.floor(Math.random() * 3));
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-4">
      {/* Stock Counter */}
      <div className="bg-gradient-hero rounded-lg p-4 text-center animate-pulse">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Package className="w-5 h-5 text-primary-foreground" />
          <span className="text-primary-foreground font-bold text-sm">ESTOQUE LIMITADO</span>
        </div>
        <p className="text-primary-foreground text-lg font-bold">
          Restam apenas {currentStock} unidades disponíveis!
        </p>
        <p className="text-primary-foreground/80 text-xs mt-1">
          Últimas unidades com desconto especial
        </p>
      </div>

      {/* Live Purchase Counter */}
      <div className="bg-success/10 border border-success/20 rounded-lg p-3 text-center">
        <div className="flex items-center justify-center gap-2 mb-1">
          <TrendingUp className="w-4 h-4 text-success" />
          <span className="text-success font-semibold text-sm">EM TEMPO REAL</span>
        </div>
        <p className="text-success text-sm">
          <span className="font-bold">{recentPurchases}</span> mulheres compraram hoje
        </p>
      </div>

      {/* Social Proof Badges */}
      <div className="flex flex-wrap justify-center gap-2">
        <Badge variant="outline" className="text-xs">
          <Users className="w-3 h-3 mr-1" />
          +10k clientes satisfeitas
        </Badge>
        <Badge variant="outline" className="text-xs">
          <Clock className="w-3 h-3 mr-1" />
          Oferta por tempo limitado
        </Badge>
      </div>
    </div>
  );
};

export default UrgencyIndicators;