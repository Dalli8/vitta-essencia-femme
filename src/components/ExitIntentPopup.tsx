import { useState, useEffect } from "react";
import { X, Gift, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown) {
        setIsVisible(true);
        setHasShown(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleClaim = () => {
    // Scroll to pricing section
    document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 animate-fade-in">
      <Card className="relative max-w-md w-full p-6 bg-gradient-hero text-primary-foreground shadow-glow">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-primary-foreground/80 hover:text-primary-foreground transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center">
          <div className="bg-primary-foreground/20 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h3 className="text-xl font-bold mb-2">Espere! Não vá embora!</h3>
          <p className="text-primary-foreground/90 mb-4 text-sm">
            Suas amigas já estão transformando suas vidas. Não perca esta oportunidade única!
          </p>

          <div className="bg-success rounded-lg p-3 mb-4">
            <div className="flex items-center justify-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-success-foreground" />
              <span className="text-success-foreground font-bold text-sm">OFERTA ESPECIAL</span>
            </div>
            <p className="text-success-foreground font-bold">
              52% OFF válido apenas hoje!
            </p>
          </div>

          <div className="space-y-3">
            <Button 
              onClick={handleClaim}
              className="w-full bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-bold"
            >
              GARANTIR MINHA OFERTA
            </Button>
            <button 
              onClick={handleClose}
              className="w-full text-primary-foreground/70 text-sm hover:text-primary-foreground transition-colors"
            >
              Não obrigada, vou pagar o preço cheio depois
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExitIntentPopup;