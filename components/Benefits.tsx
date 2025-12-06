import React from 'react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  { id: 1, title: "Экологично", description: "Мы формируем экологичные привычки и уменьшаем количество мусора." },
  { id: 2, title: "Удобно", description: "Интерактивная карта и понятное приложение — всё в одном месте." },
  { id: 3, title: "Выгодно", description: "EcoPoints превращают ваши экологичные действия в реальные бонусы." },
  { id: 4, title: "Сообщество", description: "Школы, компании, магазины — все объединены в одну экосистему." },
];

export const Benefits: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-eco-dark">Почему EcoLink?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className={`p-8 rounded-[2rem] transition-colors duration-300 border border-transparent hover:border-eco-light/50 ${index % 2 === 0 ? 'bg-eco-bg' : 'bg-white shadow-soft'}`}
            >
              <div className="text-5xl font-display font-bold text-eco-primary/20 mb-4">0{benefit.id}</div>
              <h3 className="text-xl font-bold text-eco-dark mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};