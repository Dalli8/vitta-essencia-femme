import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const productImages = [
    "/lovable-uploads/9bebb7ed-8bd0-40d0-8451-c8b4bdb9b118.png",
    "/lovable-uploads/9bebb7ed-8bd0-40d0-8451-c8b4bdb9b118.png",
    "/lovable-uploads/9bebb7ed-8bd0-40d0-8451-c8b4bdb9b118.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % productImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % productImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + productImages.length) % productImages.length);
  };

  return (
    <div className="relative max-w-md mx-auto bg-gradient-subtle rounded-2xl p-8 shadow-elegant">
      <div className="relative overflow-hidden rounded-xl">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {productImages.map((image, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <img
                src={image}
                alt={`Vitta Femme produto ${index + 1}`}
                className="w-full h-80 object-contain"
              />
            </div>
          ))}
        </div>
        
        <button
          onClick={prevSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary-foreground/90 hover:bg-primary-foreground rounded-full p-2 shadow-soft transition-all duration-200"
        >
          <ChevronLeft className="w-5 h-5 text-primary" />
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary-foreground/90 hover:bg-primary-foreground rounded-full p-2 shadow-soft transition-all duration-200"
        >
          <ChevronRight className="w-5 h-5 text-primary" />
        </button>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        {productImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              currentSlide === index 
                ? "bg-primary shadow-glow" 
                : "bg-muted hover:bg-primary/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductCarousel;