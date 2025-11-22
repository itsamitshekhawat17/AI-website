'use client';

import { Candy, Gift, Heart } from 'lucide-react';

interface ChocolateAlertProps {
  chocolateDay: string;
  isToday: boolean;
  isPast: boolean;
}

export default function ChocolateAlert({ chocolateDay, isToday, isPast }: ChocolateAlertProps) {
  if (isPast && !isToday) {
    return null;
  }

  return (
    <div className="bg-gradient-to-br from-amber-50 via-pink-50 to-rose-50 backdrop-blur-sm rounded-2xl p-6 shadow-pink-glow border-2 border-pink-300 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-rose-pink/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-amber-200/10 rounded-full blur-3xl" />

      <div className="relative">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-gradient-to-br from-soft-pink to-rose-pink rounded-full p-3">
            <Candy className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-800">
            Chocolate Alert 🍫
          </h2>
        </div>

        {isToday ? (
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border-2 border-pink-300 animate-pulse">
            <div className="flex items-center gap-2 mb-3">
              <Gift className="w-5 h-5 text-rose-pink" />
              <p className="text-lg font-bold text-gray-800">TODAY IS THE DAY!</p>
            </div>
            <p className="text-gray-700 mb-3">
              Get Khyati chocolates – she might need extra comfort 🧸🍫
            </p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="bg-rose-pink/20 text-rose-pink px-3 py-1 rounded-full text-xs font-medium">
                Dark Chocolate
              </span>
              <span className="bg-rose-pink/20 text-rose-pink px-3 py-1 rounded-full text-xs font-medium">
                Her Favorite Treats
              </span>
              <span className="bg-rose-pink/20 text-rose-pink px-3 py-1 rounded-full text-xs font-medium">
                Extra Love
              </span>
            </div>
          </div>
        ) : (
          <div className="bg-white/40 backdrop-blur-sm rounded-xl p-5">
            <div className="flex items-center gap-2 mb-2">
              <Heart className="w-5 h-5 text-rose-pink" />
              <p className="text-sm font-medium text-gray-600">Chocolate Day Coming Up</p>
            </div>
            <p className="text-2xl font-bold text-gray-800 mb-2">{chocolateDay}</p>
            <p className="text-sm text-gray-600">
              Mark your calendar to surprise Khyati with chocolates 🍫💕
            </p>
          </div>
        )}

        <div className="mt-4 p-3 bg-gradient-to-r from-pink-100/50 to-rose-100/50 rounded-xl border border-pink-200">
          <p className="text-xs text-gray-600 text-center">
            💡 Pro tip: Dark chocolate is rich in magnesium and helps with mood!
          </p>
        </div>
      </div>
    </div>
  );
}
