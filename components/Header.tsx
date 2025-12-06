import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-gray-600 hover:text-eco-primary font-medium transition-colors">О проекте</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-eco-primary font-medium transition-colors">Как это работает</a>
            <a href="#map" className="text-gray-600 hover:text-eco-primary font-medium transition-colors">Карта</a>
            <Button variant="primary" size="sm" className="rounded-xl shadow-none">
              Войти
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-2">
          <a href="#about" className="text-lg font-medium text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>О проекте</a>
          <a href="#how-it-works" className="text-lg font-medium text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Как это работает</a>
          <a href="#map" className="text-lg font-medium text-gray-700" onClick={() => setIsMobileMenuOpen(false)}>Карта</a>
          <div className="pt-4 border-t border-gray-100">
             <Button fullWidth onClick={() => setIsMobileMenuOpen(false)}>Войти</Button>
          </div>
        </div>
      )}
    </header>
  );
};