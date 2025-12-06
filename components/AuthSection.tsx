import React from 'react';
import { Button } from './ui/Button';

export const AuthSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-32 bg-eco-bg overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Form Side */}
          <div className="w-full lg:w-1/2 max-w-lg">
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-eco-dark mb-4">
              Присоединяйся к EcoLink
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Создай личный кабинет, начни копить EcoPoints и обменивай их на скидки у партнёров.
            </p>

            <form className="space-y-5 bg-white p-8 rounded-[2rem] shadow-card">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input 
                  type="email" 
                  placeholder="name@example.com" 
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-eco-primary/20 focus:border-eco-primary transition-all outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Пароль</label>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full px-5 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-eco-primary/20 focus:border-eco-primary transition-all outline-none"
                />
              </div>
              <div className="pt-2">
                <Button fullWidth variant="primary" size="lg">
                  Создать аккаунт
                </Button>
              </div>
              <div className="text-center text-sm text-gray-500 pt-2">
                Уже есть аккаунт? <a href="#" className="text-eco-primary font-bold hover:underline">Войти</a>
              </div>
            </form>
          </div>

          {/* Visual Side - Phone Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-eco-light/40 to-transparent rounded-full filter blur-3xl -z-10"></div>
             
             {/* Phone Body */}
             <div className="relative w-[300px] h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-32 bg-gray-900 rounded-b-2xl z-20"></div>
                <div className="w-full h-full bg-white rounded-[2.2rem] overflow-hidden relative">
                   {/* App Screen Content */}
                   <div className="bg-eco-primary h-1/3 w-full p-6 text-white flex flex-col justify-end pb-8">
                      <h3 className="text-2xl font-display font-bold">Привет, Алекс!</h3>
                      <p className="opacity-80 text-sm">Ты сэкономил 12кг CO2</p>
                   </div>
                   <div className="p-6 -mt-6">
                      <div className="bg-white rounded-2xl shadow-lg p-4 mb-4 flex items-center justify-between">
                         <span className="font-bold text-gray-800">1250 pts</span>
                         <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">+50 сегодня</span>
                      </div>
                      <div className="space-y-3">
                         <div className="h-20 bg-gray-50 rounded-2xl border border-gray-100 w-full animate-pulse"></div>
                         <div className="h-20 bg-gray-50 rounded-2xl border border-gray-100 w-full animate-pulse delay-75"></div>
                         <div className="h-20 bg-gray-50 rounded-2xl border border-gray-100 w-full animate-pulse delay-150"></div>
                      </div>
                   </div>
                   
                   {/* Floating Button inside App */}
                   <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-eco-dark rounded-full flex items-center justify-center text-white shadow-xl shadow-eco-dark/30">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};