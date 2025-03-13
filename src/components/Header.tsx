
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import GradientButton from './ui/GradientButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-3 glass-effect' : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
        <a href="/" className="text-2xl font-semibold text-primary">
          MortgagePro
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
          >
            Benefits
          </a>
          <a 
            href="#pricing" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="text-sm font-medium text-gray-700 hover:text-primary transition-colors duration-200"
          >
            FAQ
          </a>
          <GradientButton size="sm">Book a Demo</GradientButton>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 p-2" 
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-6 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="text-base font-medium text-gray-700 hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            className="text-base font-medium text-gray-700 hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a 
            href="#benefits" 
            className="text-base font-medium text-gray-700 hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Benefits
          </a>
          <a 
            href="#pricing" 
            className="text-base font-medium text-gray-700 hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </a>
          <a 
            href="#faq" 
            className="text-base font-medium text-gray-700 hover:text-primary py-2"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <GradientButton size="sm" className="w-full">Book a Demo</GradientButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
