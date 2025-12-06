import React from 'react';
import { Button } from './ui/Button';

export const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="bg-eco-primary rounded-[3rem] p-12 lg:p-20 text-center relative overflow-hidden shadow-2xl shadow-eco-primary/30">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-eco-dark/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 pointer-events-none"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-white mb-6">
              Готов сделать свой город чище?
            </h2>
            <p className="text-eco-light/90 text-lg lg:text-xl mb-10 font-light">
              Присоединяйся к EcoLink и меняй будущее вместе с нами. Каждый шаг имеет значение.
            </p>
            <Button variant="white" size="lg" className="text-eco-dark hover:bg-white hover:text-eco-primary">
              Начать сейчас
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};