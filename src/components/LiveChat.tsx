import { useState, useEffect } from "react";
import { MessageCircle, X, Send, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [isOnline, setIsOnline] = useState(true);

  const faqResponses = {
    "horario": "Nosso atendimento funciona de Segunda a Sexta: 9h às 18h | Sábado: 9h às 14h",
    "entrega": "Entregamos para todo o Brasil! Frete grátis acima de R$ 200. Prazo: 5-10 dias úteis.",
    "garantia": "Oferecemos 90 dias de garantia total. Se não ficar satisfeita, devolvemos 100% do seu dinheiro!",
    "ingredientes": "Vitta Femme é 100% natural: Inositol, Ômega 3, Vitamina D3, Magnésio, Zinco e mais 7 ingredientes ativos.",
    "resultados": "Os primeiros resultados aparecem em 7-15 dias. Resultados completos em 60-90 dias de uso contínuo.",
    "uso": "Tome 2 cápsulas por dia, preferencialmente após as refeições principais (almoço e jantar).",
    "efeitos": "Vitta Femme é totalmente natural e seguro. Raramente causa efeitos colaterais.",
    "pagamento": "Aceitamos: Cartão de crédito (até 12x), PIX, Boleto. Pagamento 100% seguro."
  };

  const quickMessages = [
    "Como usar o produto?",
    "Qual o prazo de entrega?",
    "Quais os ingredientes?",
    "Como funciona a garantia?"
  ];

  useEffect(() => {
    // Simulate online status
    const interval = setInterval(() => {
      setIsOnline(Math.random() > 0.1); // 90% chance of being online
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    // Simple keyword matching for FAQ responses
    const keywords = Object.keys(faqResponses);
    const foundKeyword = keywords.find(keyword => 
      message.toLowerCase().includes(keyword)
    );

    if (foundKeyword) {
      // Simulate typing delay
      setTimeout(() => {
        alert(`Resposta automática: ${faqResponses[foundKeyword as keyof typeof faqResponses]}`);
      }, 1000);
    } else {
      // Redirect to WhatsApp for complex questions
      const whatsappMessage = encodeURIComponent(`Olá! Tenho uma dúvida sobre Vitta Femme: ${message}`);
      window.open(`https://wa.me/5511999999999?text=${whatsappMessage}`, '_blank');
    }
    
    setMessage("");
  };

  const handleQuickMessage = (quickMsg: string) => {
    setMessage(quickMsg);
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="w-14 h-14 rounded-full bg-gradient-hero shadow-glow hover:scale-110 transition-all duration-300"
        >
          {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
        </Button>
        
        {/* Online indicator */}
        {isOnline && !isOpen && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full border-2 border-white animate-pulse"></div>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-80 h-96 z-40 shadow-elegant animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-hero text-primary-foreground p-4 rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4" />
                </div>
                {isOnline && (
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-success rounded-full border border-primary-foreground"></div>
                )}
              </div>
              <div>
                <h3 className="font-semibold text-sm">Suporte Vitta Femme</h3>
                <p className="text-xs text-primary-foreground/80">
                  {isOnline ? "Online agora" : "Offline"}
                </p>
              </div>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 space-y-3 h-48 overflow-y-auto">
            <div className="bg-muted rounded-lg p-3 text-sm">
              <p className="text-muted-foreground">
                Olá! 👋 Como posso ajudar você hoje?
              </p>
            </div>

            {/* Business Hours */}
            <div className="bg-primary/10 rounded-lg p-3 text-xs">
              <div className="flex items-center gap-2 text-primary mb-1">
                <Clock className="w-3 h-3" />
                <span className="font-semibold">Horário de Atendimento</span>
              </div>
              <p className="text-muted-foreground">
                Seg-Sex: 9h às 18h<br />
                Sáb: 9h às 14h
              </p>
            </div>

            {/* Quick Questions */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground font-medium">Perguntas frequentes:</p>
              {quickMessages.map((msg, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickMessage(msg)}
                  className="w-full text-left text-xs h-auto p-2 justify-start"
                >
                  {msg}
                </Button>
              ))}
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t p-3">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="text-sm"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button
                size="sm"
                onClick={handleSendMessage}
                className="bg-gradient-hero hover:scale-105 transition-transform"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              Resposta em até 5 minutos
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default LiveChat;