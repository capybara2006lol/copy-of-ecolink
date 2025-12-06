import React from 'react';
import { Button } from './ui/Button';
import { Logo } from './Logo';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-eco-light/30 to-white z-0" />
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-eco-primary/5 rounded-full blur-3xl -z-0" />
      <div className="absolute bottom-0 left-20 w-[300px] h-[300px] bg-eco-light/40 rounded-full blur-2xl -z-0" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="flex flex-col items-start text-left space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-eco-light/50 text-eco-dark text-sm font-semibold border border-eco-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-eco-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-eco-primary"></span>
              </span>
              Экологичная платформа #1
            </div>

            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-eco-dark leading-tight">
              EcoLink — платформа, которая делает переработку <span className="text-eco-primary">простой</span> и <span className="text-eco-primary">выгодной</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
              Сдавай отходы, получай EcoPoints и меняй город к лучшему. Присоединяйся к сообществу осознанного потребления уже сегодня.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button variant="primary" size="lg" className="shadow-soft shadow-eco-primary/50">
                Начать использовать
              </Button>
              <Button variant="secondary" size="lg">
                Для школ и компаний
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-gray-500 pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-eco-primary" />
                <span>Бесплатно</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-eco-primary" />
                <span>Безопасно</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-eco-primary" />
                <span>Экологично</span>
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative z-10 bg-white rounded-[2.5rem] shadow-soft p-6 border border-eco-light/30 transform hover:-translate-y-2 transition-transform duration-500">
               {/* Mock UI: App Dashboard */}
               <div className="rounded-3xl overflow-hidden bg-gray-50 border border-gray-100 aspect-[4/3] relative">
                  <div className="absolute inset-0 bg-cover bg-center opacity-90" style={{ backgroundImage: 'url(https://picsum.photos/800/600?random=1)' }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
                    <div className="flex items-center justify-between">
                       <div className="text-white">
                         <p className="text-sm font-medium opacity-80">Ваш баланс</p>
                         <h3 className="text-3xl font-bold font-display">2,450 EcoPoints</h3>
                       </div>
                       <div className="bg-white/20 backdrop-blur-md p-3 rounded-full text-white">
                         <Logo size="sm" />
                       </div>
                    </div>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center gap-3">
                     <div className="w-8 h-8 rounded-full bg-eco-light flex items-center justify-center text-eco-dark font-bold">12</div>
                     <div className="text-sm font-semibold text-gray-800">Пунктов рядом</div>
                  </div>
               </div>
            </div>
            
            {/* Decorative blob behind image */}
            <div className="absolute -bottom-10 -right-10 w-full h-full bg-eco-primary/10 rounded-[3rem] -z-10" />
          </div>

        </div>
      </div>
    </section>
  );
};