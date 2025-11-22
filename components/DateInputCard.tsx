'use client';

import { Calendar } from 'lucide-react';
import { useState } from 'react';

interface DateInputCardProps {
  onDateSubmit: (date: Date) => void;
  initialDate?: Date | null;
}

export default function DateInputCard({ onDateSubmit, initialDate }: DateInputCardProps) {
  const [selectedDate, setSelectedDate] = useState<string>(
    initialDate ? initialDate.toISOString().split('T')[0] : ''
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedDate) {
      onDateSubmit(new Date(selectedDate));
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-pink-glow border border-pink-200">
      <div className="flex items-center gap-2 mb-4">
        <Calendar className="w-6 h-6 text-rose-pink" />
        <h2 className="text-xl font-semibold text-gray-800">Khyati's Last Period Date</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="lastPeriodDate" className="block text-sm font-medium text-gray-700 mb-2">
            Last Period Start Date 📅
          </label>
          <input
            type="date"
            id="lastPeriodDate"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            max={new Date().toISOString().split('T')[0]}
            className="w-full px-4 py-3 rounded-xl border-2 border-pink-200 focus:border-rose-pink focus:outline-none focus:ring-2 focus:ring-rose-pink/20 transition-all"
            required
          />
          {initialDate && (
            <p className="text-xs text-gray-500 mt-2">
              Currently saved: {initialDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={!selectedDate}
          className="w-full bg-gradient-to-r from-soft-pink to-rose-pink text-white font-semibold py-3 px-6 rounded-xl hover:shadow-pink-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
        >
          {initialDate ? 'Update & Recalculate ✨' : 'Save Date & Calculate ❤️'}
        </button>
      </form>
      
      <div className="mt-4 p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-200">
        <p className="text-xs text-gray-600 text-center">
          🔒 Your data is stored locally and never leaves your device
        </p>
      </div>
    </div>
  );
}
