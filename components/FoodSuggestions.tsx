'use client';

import { UtensilsCrossed, Sparkles } from 'lucide-react';

interface FoodSuggestionsProps {
  phase: 'period' | 'pms' | 'fertile' | 'normal';
  suggestions: {
    title: string;
    suggestions: string[];
    emoji: string;
  };
}

export default function FoodSuggestions({ phase, suggestions }: FoodSuggestionsProps) {
  const phaseColors = {
    pms: 'from-purple-50 to-pink-50 border-purple-200',
    period: 'from-pink-50 to-rose-50 border-pink-300',
    fertile: 'from-green-50 to-emerald-50 border-green-200',
    normal: 'from-blue-50 to-cyan-50 border-blue-200',
  };

  return (
    <div
      className={`bg-gradient-to-br ${phaseColors[phase]} backdrop-blur-sm rounded-2xl p-6 shadow-pink-soft border transition-all duration-300`}
    >
      <div className="flex items-center gap-3 mb-4">
        <UtensilsCrossed className="w-6 h-6 text-rose-pink" />
        <h2 className="text-xl font-semibold text-gray-800">{suggestions.title}</h2>
        <span className="text-3xl ml-auto">{suggestions.emoji}</span>
      </div>

      <div className="space-y-3">
        {suggestions.suggestions.map((suggestion, index) => (
          <div
            key={index}
            className="flex items-start gap-3 bg-white/60 rounded-xl p-3 transition-all duration-200 hover:bg-white/80 hover:scale-[1.01]"
          >
            <Sparkles className="w-4 h-4 text-rose-pink mt-0.5 flex-shrink-0" />
            <p className="text-sm text-gray-700">{suggestion}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 p-3 bg-white/40 rounded-xl">
        <p className="text-xs text-gray-600 text-center italic">
          ✨ Nutrition tailored to her current phase ✨
        </p>
      </div>
    </div>
  );
}
