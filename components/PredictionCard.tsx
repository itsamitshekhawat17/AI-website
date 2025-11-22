'use client';

import { LucideIcon } from 'lucide-react';

interface PredictionCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  emoji?: string;
  subtitle?: string;
  color?: 'pink' | 'rose' | 'blush' | 'purple';
}

export default function PredictionCard({
  title,
  value,
  icon: Icon,
  emoji,
  subtitle,
  color = 'pink',
}: PredictionCardProps) {
  const colorClasses = {
    pink: 'from-pink-50 to-pink-100 border-pink-200',
    rose: 'from-rose-50 to-rose-100 border-rose-200',
    blush: 'from-red-50 to-pink-50 border-red-200',
    purple: 'from-purple-50 to-pink-100 border-purple-200',
  };

  const iconColors = {
    pink: 'text-soft-pink',
    rose: 'text-rose-pink',
    blush: 'text-blush',
    purple: 'text-purple-400',
  };

  return (
    <div
      className={`bg-gradient-to-br ${colorClasses[color]} backdrop-blur-sm rounded-2xl p-6 shadow-pink-soft border transition-all duration-300 hover:shadow-pink-glow hover:scale-[1.02] cursor-default`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="bg-white/50 rounded-full p-2">
            <Icon className={`w-5 h-5 ${iconColors[color]}`} />
          </div>
          <h3 className="text-sm font-medium text-gray-700">{title}</h3>
        </div>
        {emoji && <span className="text-3xl animate-pulse">{emoji}</span>}
      </div>
      
      <p className="text-2xl font-bold text-gray-800 mb-1 break-words">{value}</p>
      
      {subtitle && (
        <p className="text-sm text-gray-600 mt-2">{subtitle}</p>
      )}
    </div>
  );
}
