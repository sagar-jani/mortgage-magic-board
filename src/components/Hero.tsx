
import { useState, useEffect } from 'react';
import GradientButton from './ui/GradientButton';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-hero relative overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAyMCAwIEwgMCAwIDAgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2UwZTBlMCIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')]"
        style={{ opacity: 0.3 }}
      ></div>
      
      <div className="container mx-auto relative z-10 px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div 
            className={`transition-all duration-700 transform ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Mortgage Management Simplified
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-balance">
              Automate Your Mortgage <br className="hidden md:block" /> 
              <span className="text-primary">Management System</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Streamline your mortgage operations with automated file processing, 
              commission calculations, and invoice generation for lenders and brokers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton size="lg">Get Started</GradientButton>
              <GradientButton size="lg" variant="secondary">Book a Demo</GradientButton>
            </div>
          </div>
          
          <div 
            className={`relative transition-all duration-1000 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent z-0"></div>
              <img 
                src="https://as2.ftcdn.net/v2/jpg/02/65/56/65/1000_F_265566504_OKyGBLlk6FlQCfX98c38noCQjBaGVL9Z.jpg" 
                alt="Mortgage Management Dashboard" 
                className={`transition-all duration-1000 w-full h-auto rounded-2xl relative z-10 ${
                  isLoaded ? 'blur-loaded' : 'blur-loading'
                }`}
                onLoad={() => setIsLoaded(true)}
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-primary/10 rounded-full animate-pulse-soft"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-primary/5 rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
