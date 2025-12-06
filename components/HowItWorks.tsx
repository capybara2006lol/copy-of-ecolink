import React from 'react';
import { Step } from '../types';
import { Map, QrCode, Leaf, BarChart3 } from 'lucide-react';

const steps: Step[] = [
  {
    id: 1,
    title: "Найди пункт сдачи",
    description: "Открой карту EcoLink и выбери ближайший пункт приёма отходов.",
    icon: Map
  },
  {
    id: 2,
    title: "Сдавай по QR-коду",
    description: "Сканируй QR-код в экопункте и фиксируй сдачу прямо в приложении.",
    icon: QrCode
  },
  {
    id: 3,
    title: "Получай EcoPoints",
    description: "За каждую сдачу начисляются EcoPoints, которые можно обменивать.",
    icon: Leaf
  },
  {
    id: 4,
    title: "Следи за вкладом",
    description: "Просматривай статистику, участвуй в челленджах и улучши рейтинг.",
    icon: BarChart3
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 bg-eco-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-eco-primary font-bold tracking-wider uppercase text-sm mb-2 block">Процесс</span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-eco-dark mb-4">Как это работает</h2>
          <p className="text-gray-600">Всего 4 простых шага, чтобы начать жить экологичнее и получать за это бонусы.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className="bg-white rounded-3xl p-8 shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-eco-light/30 text-eco-primary flex items-center justify-center mb-6 group-hover:bg-eco-primary group-hover:text-white transition-colors duration-300">
                <step.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-eco-dark mb-3">{step.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};