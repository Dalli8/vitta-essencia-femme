import { ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-gradient-hero text-primary-foreground py-3 shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center text-sm font-medium">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-4 h-4" />
            <span>BEM-VINDO À NOSSA LOJA</span>
          </div>
          <div className="bg-primary-foreground/20 px-4 py-1 rounded-full">
            <span className="font-bold">COMPRE 5 COM 52% OFF</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;