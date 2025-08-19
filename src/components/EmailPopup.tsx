import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X, Mail, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";

const EmailPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('vitta-femme-popup-seen');
      if (!hasSeenPopup) {
        setIsVisible(true);
      }
    }, 15000); // Show after 15 seconds

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('vitta-femme-popup-seen', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      // Here you would normally send the email to your backend
      setTimeout(() => {
        handleClose();
      }, 3000);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full bg-background border-2 border-primary/20 shadow-glow relative overflow-hidden">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-muted-foreground hover:text-foreground z-10"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
        
        <div className="relative p-8 text-center">
          {!isSubmitted ? (
            <>
              <div className="bg-gradient-hero rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Gift className="w-8 h-8 text-primary-foreground" />
              </div>
              
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Ganhe 15% OFF
              </h3>
              
              <p className="text-muted-foreground mb-6">
                Cadastre seu e-mail e receba um desconto exclusivo + dicas de bem-estar feminino
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    type="email"
                    placeholder="Digite seu melhor e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10 h-12 border-2 border-primary/20 focus:border-primary"
                    required
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-cta hover:scale-105 transition-all duration-300 h-12 font-bold"
                >
                  QUERO MEU DESCONTO
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground mt-4">
                Seus dados estão seguros conosco. Não enviamos spam.
              </p>
            </>
          ) : (
            <div className="py-4">
              <div className="bg-success/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-success" />
              </div>
              
              <h3 className="text-2xl font-bold text-success mb-2">
                Parabéns! 🎉
              </h3>
              
              <p className="text-muted-foreground mb-4">
                Seu desconto foi enviado para <span className="font-semibold text-foreground">{email}</span>
              </p>
              
              <p className="text-sm text-muted-foreground">
                Verifique sua caixa de entrada e aproveite!
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default EmailPopup;