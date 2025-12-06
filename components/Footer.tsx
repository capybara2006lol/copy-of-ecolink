import React from 'react';
import { Logo } from './Logo';
import { Instagram, Send, Mail } from 'lucide-react';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="space-y-6 lg:col-span-1">
            <Logo size="md" />
            <p className="text-gray-500 text-sm leading-relaxed">
              Делаем экологичный образ жизни доступным и выгодным для каждого жителя города.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-eco-bg flex items-center justify-center text-eco-dark hover:bg-eco-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-eco-bg flex items-center justify-center text-eco-dark hover:bg-eco-primary hover:text-white transition-colors">
                <Send size={20} />
              </a>
              <a href="mailto:hello@ecolink.com" className="w-10 h-10 rounded-full bg-eco-bg flex items-center justify-center text-eco-dark hover:bg-eco-primary hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold text-eco-dark mb-4">Платформа</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-eco-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-eco-primary transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-eco-primary transition-colors">Карта пунктов</a></li>
                <li><a href="#" className="hover:text-eco-primary transition-colors">EcoPoints</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-eco-dark mb-4">Партнёрам</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-eco-primary transition-colors">Бизнесу</a></li>
                <li><a href="#" className="hover:text-eco-primary transition-colors">Школам</a></li>
                <li><a href="#" className="hover:text-eco-primary transition-colors">Франшиза</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-eco-dark mb-4">Поддержка</h4>
              <ul className="space-y-3 text-sm text-gray-500">
                <li><a href="#" className="hover:text-eco-primary transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-eco-primary transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-eco-primary transition-colors">Политика</a></li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-1">
             <div className="bg-eco-bg p-6 rounded-2xl">
               <h4 className="font-bold text-eco-dark mb-2">Стать партнёром</h4>
               <p className="text-xs text-gray-500 mb-4">Хотите открыть пункт сдачи или поддержать проект?</p>
               <Button variant="outline" size="sm" fullWidth className="bg-white border-eco-primary/20 text-eco-dark hover:bg-eco-primary hover:text-white hover:border-transparent">
                 Подать заявку
               </Button>
             </div>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>© 2024 EcoLink. Все права защищены.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-eco-primary">Политика конфиденциальности</a>
             <a href="#" className="hover:text-eco-primary">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
};