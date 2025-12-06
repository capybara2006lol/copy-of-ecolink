import React from 'react';

export const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg' }> = ({ size = 'md' }) => {
  const containerSize = size === 'sm' ? 'w-8 h-8' : size === 'md' ? 'w-10 h-10' : 'w-16 h-16';
  const textSize = size === 'sm' ? 'text-xl' : size === 'md' ? 'text-2xl' : 'text-4xl';

  return (
    <div className="flex items-center gap-3 select-none group">
      <div className={`${containerSize} relative flex-shrink-0`}>
        <svg 
          viewBox="0 0 100 125" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg" 
          className="w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-105"
        >
           <defs>
             <linearGradient id="pinGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
               <stop offset="0%" stopColor="#3CB878" />
               <stop offset="100%" stopColor="#1B5A39" />
             </linearGradient>
           </defs>
           
           {/* Pin Shape */}
           <path 
             d="M50 0C22.4 0 0 22.4 0 50C0 85 50 125 50 125C50 125 100 85 100 50C100 22.4 77.6 0 50 0Z" 
             fill="url(#pinGradient)"
           />
           
           {/* Inner Circle */}
           <circle cx="50" cy="50" r="35" className="fill-eco-light" />
           
           {/* Sprout Icon */}
           <g transform="translate(0, 5)">
             {/* Stem */}
             <path 
               d="M50 70V45" 
               stroke="#1B5A39" 
               strokeWidth="6" 
               strokeLinecap="round" 
               strokeLinejoin="round"
             />
             {/* Left Leaf */}
             <path 
               d="M50 60Q30 60 25 40Q25 25 50 40" 
               fill="#1B5A39" 
             />
             {/* Right Leaf */}
             <path 
               d="M50 60Q70 60 75 40Q75 25 50 40" 
               fill="#1B5A39" 
             />
           </g>
        </svg>
      </div>
      <span className={`font-display font-bold text-eco-dark tracking-tight ${textSize}`}>
        EcoLink
      </span>
    </div>
  );
};