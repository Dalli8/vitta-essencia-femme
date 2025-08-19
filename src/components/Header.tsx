import { ShoppingBag, Clock } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-gradient-hero text-primary-foreground py-3 shadow-soft z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>BEM-VINDO À NOSSA LOJA</span>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-primary-foreground/20 px-3 py-1 rounded-full">
              <Clock className="w-4 h-4" />
              <span className="font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            
            <div className="bg-success/90 px-4 py-1 rounded-full pulse">
              <span className="font-bold">COMPRE 5 COM 52% OFF</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;