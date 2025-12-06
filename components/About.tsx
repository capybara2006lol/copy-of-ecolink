import React from 'react';

const RecyclingIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-gray-50 to-green-50 relative overflow-hidden group">
    <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Decorative BG */}
      <circle cx="20" cy="20" r="100" fill="#CFFFE2" opacity="0.4" />
      
      {/* Floor */}
      <path d="M0 240 L400 240 L400 300 L0 300 Z" fill="#E2E8F0" />
      
      {/* Character */}
      <g transform="translate(80, 90)">
        <path d="M30 150 L50 150 L50 60 L30 60 Z" fill="#1B5A39" /> {/* Legs */}
        <path d="M20 60 Q40 60 60 60 L60 120 L20 120 Z" fill="#3CB878" rx="5" /> {/* Body */}
        <circle cx="40" cy="40" r="18" fill="#FFE4C4" /> {/* Head */}
        <path d="M40 70 L80 90" stroke="#1B5A39" strokeWidth="6" strokeLinecap="round" /> {/* Arm */}
        <circle cx="85" cy="95" r="8" fill="#FCD34D" /> {/* Item held */}
      </g>

      {/* Recycling Bins */}
      <g transform="translate(180, 130)">
        {/* Yellow Bin - Plastic */}
        <path d="M0 20 L50 20 L45 110 L5 110 Z" fill="#FCD34D" />
        <path d="M-5 20 L55 20 L55 10 L-5 10 Z" fill="#F59E0B" />
        <text x="25" y="75" fontSize="24" textAnchor="middle" fill="white" fontWeight="bold">♻</text>
        
        {/* Blue Bin - Paper */}
        <g transform="translate(60, 0)">
          <path d="M0 20 L50 20 L45 110 L5 110 Z" fill="#60A5FA" />
          <path d="M-5 20 L55 20 L55 10 L-5 10 Z" fill="#3B82F6" />
          <text x="25" y="75" fontSize="24" textAnchor="middle" fill="white" fontWeight="bold">♻</text>
        </g>
        
        {/* Green Bin - Glass */}
        <g transform="translate(120, 0)">
          <path d="M0 20 L50 20 L45 110 L5 110 Z" fill="#4ADE80" />
          <path d="M-5 20 L55 20 L55 10 L-5 10 Z" fill="#22C55E" />
          <text x="25" y="75" fontSize="24" textAnchor="middle" fill="white" fontWeight="bold">♻</text>
        </g>
      </g>
    </svg>
  </div>
);

const ForestIllustration = () => (
  <div className="w-full h-full bg-gradient-to-br from-blue-50 to-green-50 relative overflow-hidden">
    <svg viewBox="0 0 400 300" className="w-full h-full" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      {/* Sky */}
      <circle cx="350" cy="50" r="30" fill="#FDE047" opacity="0.8" />
      <path d="M50 50 Q80 30 110 50" stroke="white" strokeWidth="4" fill="none" opacity="0.6" strokeLinecap="round"/>
      <path d="M250 80 Q280 60 310 80" stroke="white" strokeWidth="4" fill="none" opacity="0.6" strokeLinecap="round"/>

      {/* Background Hills */}
      <path d="M0 220 C100 180 300 150 400 220 V300 H0 Z" fill="#86EFAC" />
      
      {/* Foreground Hills */}
      <path d="M0 260 C150 230 250 240 400 280 V300 H0 Z" fill="#4ADE80" />

      {/* Trees */}
      {/* Tree 1 */}
      <g transform="translate(50, 160)">
         <rect x="15" y="60" width="10" height="40" fill="#78350F" />
         <path d="M20 10 L50 70 H-10 Z" fill="#15803D" />
         <path d="M20 30 L45 70 H-5 Z" fill="#166534" opacity="0.8" />
      </g>

      {/* Tree 2 (Round) */}
      <g transform="translate(150, 180)">
         <rect x="25" y="50" width="10" height="40" fill="#78350F" />
         <circle cx="30" cy="40" r="30" fill="#22C55E" />
         <circle cx="20" cy="30" r="15" fill="#4ADE80" opacity="0.5" />
      </g>

      {/* Tree 3 (Big Pine) */}
      <g transform="translate(260, 130) scale(1.2)">
         <rect x="15" y="60" width="10" height="40" fill="#78350F" />
         <path d="M20 10 L50 70 H-10 Z" fill="#15803D" />
         <path d="M20 35 L45 70 H-5 Z" fill="#166534" opacity="0.3" />
      </g>
      
      {/* Flower */}
      <g transform="translate(350, 260)">
        <line x1="10" y1="20" x2="10" y2="35" stroke="#166534" strokeWidth="2" />
        <circle cx="10" cy="15" r="5" fill="#F472B6" />
      </g>
    </svg>
  </div>
);

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 lg:order-1 relative">
             <div className="grid grid-cols-2 gap-4">
                <div className="rounded-3xl w-full h-64 shadow-card transform translate-y-8 overflow-hidden bg-gray-50">
                  <RecyclingIllustration />
                </div>
                <div className="rounded-3xl w-full h-64 shadow-card overflow-hidden bg-gray-50">
                  <ForestIllustration />
                </div>
             </div>
             {/* Decorative Circle */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-eco-light rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-10"></div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-eco-primary font-bold tracking-wider uppercase text-sm">О проекте</span>
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-eco-dark">
              Миссия EcoLink
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              EcoLink — цифровая экоплатформа, которая объединяет людей, школы и компании для развития экологичных привычек. Мы упрощаем сортировку отходов, создаём сеть пунктов сдачи и мотивируем пользователей EcoPoints.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Наша цель — сделать экологичное поведение доступным каждому, превращая заботу о планете в увлекательный и выгодный процесс.
            </p>
            
            <div className="pt-4 grid grid-cols-2 gap-8">
              <div>
                 <h4 className="text-4xl font-bold text-eco-primary mb-1">50+</h4>
                 <p className="text-sm text-gray-500">Пунктов сдачи</p>
              </div>
              <div>
                 <h4 className="text-4xl font-bold text-eco-primary mb-1">10k+</h4>
                 <p className="text-sm text-gray-500">Пользователей</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};