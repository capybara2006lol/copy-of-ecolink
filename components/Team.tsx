import React from 'react';
import { TeamMember } from '../types';

const team: TeamMember[] = [
  { 
    id: 1, 
    name: "Валиева Айгюн", 
    role: "Тимлид / Project Manager", 
    description: "Роль: управление проектом, координация команды. Отвечает за: планирование, постановку задач, контроль сроков, коммуникацию и развитие концепции EcoLink.", 
    image: "https://i.postimg.cc/YChfvnqx/Ajgun.jpg" 
  },
  { 
    id: 2, 
    name: "Шутикова Елизавета", 
    role: "Дизайнер & Программист (UI/UX + Front-end)", 
    description: "Роль: визуальная часть и разработка сайта. Отвечает за: дизайн интерфейсов, создание лого, прототипы, верстку, реализацию основных страниц сайта и функционала MVP.", 
    image: "https://i.postimg.cc/tgR117zf/liza.webp" 
  },
  { 
    id: 3, 
    name: "Хайдаров Шерзод", 
    role: "Финансист", 
    description: "Роль: финансовое планирование и расчёты. Отвечает за: финансовую модель, прогнозы расходов, расчёт unit-экономики, стратегии монетизации и бюджет проекта.", 
    image: "https://i.postimg.cc/xjBbsf0X/serzod.jpg" 
  },
  { 
    id: 4, 
    name: "Шукуруллаева Шахзода", 
    role: "Менеджер по партнёрствам", 
    description: "Роль: развитие сети EcoLink и привлечение организаций. Отвечает за: переговоры с пунктами приёма, школами, магазинами и компаниями, расширение партнёрской экосистемы.", 
    image: "https://i.postimg.cc/GpR2WtNJ/sahzoda.jpg" 
  },
  { 
    id: 5, 
    name: "Махмуджонов Рустам", 
    role: "Специалист по экоконтенту", 
    description: "Роль: создание материалов и популяризация проекта. Отвечает за: образовательный контент, ведение соцсетей, эко-челленджи, обучающие материалы по сортировке отходов.", 
    image: "https://i.postimg.cc/RFDvZZPW/Rustam.jpg" 
  },
];

export const Team: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-display font-bold text-eco-dark mb-12 text-center">Команда проекта</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 items-start">
          {team.map((member) => (
            <div key={member.id} className="text-center group flex flex-col items-center">
              <div className="relative w-32 h-32 mb-4 shrink-0">
                 <div className="absolute inset-0 bg-eco-light rounded-full transform rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                 <img 
                   src={member.image} 
                   alt={member.name} 
                   className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-md group-hover:scale-105 transition-all duration-300 bg-gray-50"
                 />
              </div>
              <h3 className="font-bold text-lg text-eco-dark leading-tight mb-1">{member.name}</h3>
              <p className="text-eco-primary text-xs font-bold mb-3 min-h-[2.5rem] flex items-center justify-center text-center leading-tight px-1 uppercase tracking-wide">{member.role}</p>
              <p className="text-gray-500 text-xs leading-relaxed max-w-[240px]">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};