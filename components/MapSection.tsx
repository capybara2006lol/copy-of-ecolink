import React, { useState } from 'react';
import { Button } from './ui/Button';
import { MapPoint } from '../types';
import { MapPin, Filter, X } from 'lucide-react';

const mockPoints: MapPoint[] = [
  { id: 1, type: 'Plastic', x: 20, y: 30, address: 'ул. Ленина, 45' },
  { id: 2, type: 'Glass', x: 45, y: 50, address: 'пр. Мира, 12' },
  { id: 3, type: 'Paper', x: 70, y: 25, address: 'Центральный парк' },
  { id: 4, type: 'Metal', x: 60, y: 70, address: 'ТЦ Галерея' },
  { id: 5, type: 'Plastic', x: 30, y: 65, address: 'Эко-квартал' },
];

export const MapSection: React.FC = () => {
  const [activePoint, setActivePoint] = useState<MapPoint | null>(null);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-eco-dark mb-4">Интерактивная карта</h2>
            <p className="text-gray-600">Найдите ближайший пункт приёма отходов. Фильтруйте по типу: пластик, стекло, бумага или металл.</p>
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
             {['Пластик', 'Стекло', 'Бумага', 'Металл'].map((filter) => (
               <button key={filter} className="px-4 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-600 hover:bg-eco-light hover:text-eco-dark hover:border-eco-light transition-colors whitespace-nowrap">
                 {filter}
               </button>
             ))}
          </div>
        </div>

        <div className="relative w-full h-[500px] bg-gray-100 rounded-[2.5rem] overflow-hidden shadow-inner group">
          {/* Map Placeholder Image */}
          <div 
             className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-700 group-hover:scale-105"
             style={{ backgroundImage: 'url(https://picsum.photos/1200/800?grayscale&blur=2)' }}
          />
          <div className="absolute inset-0 bg-eco-primary/5 mix-blend-multiply" />

          {/* Points */}
          {mockPoints.map((point) => (
            <div 
              key={point.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
              style={{ left: `${point.x}%`, top: `${point.y}%` }}
              onClick={() => setActivePoint(point)}
            >
              <div className={`relative flex items-center justify-center w-12 h-12 rounded-full shadow-lg ${activePoint?.id === point.id ? 'bg-eco-dark text-white scale-110' : 'bg-white text-eco-primary'} transition-colors duration-300`}>
                <MapPin size={24} fill="currentColor" strokeWidth={1} />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-400 rounded-full animate-pulse" />
              </div>
            </div>
          ))}

          {/* Active Point Card (Floating) */}
          {activePoint && (
             <div className="absolute bottom-6 left-6 md:left-auto md:right-6 bg-white p-6 rounded-3xl shadow-2xl w-[280px] animate-fade-in-up z-20">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="text-xs font-bold text-eco-primary uppercase tracking-wider">{activePoint.type}</span>
                    <h4 className="text-lg font-bold text-eco-dark mt-1">{activePoint.address}</h4>
                  </div>
                  <button onClick={() => setActivePoint(null)} className="text-gray-400 hover:text-gray-600">
                    <X size={20} />
                  </button>
                </div>
                <div className="space-y-3">
                   <div className="flex justify-between text-sm text-gray-600 border-b pb-2">
                     <span>Часы работы:</span>
                     <span className="font-medium">09:00 - 20:00</span>
                   </div>
                   <div className="flex justify-between text-sm text-gray-600">
                     <span>Загруженность:</span>
                     <span className="text-green-500 font-medium">Низкая</span>
                   </div>
                </div>
                <Button variant="primary" size="sm" fullWidth className="mt-4 rounded-xl">
                  Проложить маршрут
                </Button>
             </div>
          )}

          {/* Bottom Overlay Button */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 pointer-events-none">
             <Button variant="white" className="shadow-lg pointer-events-auto">
               Открыть полную карту
             </Button>
          </div>
        </div>
      </div>
    </section>
  );
};