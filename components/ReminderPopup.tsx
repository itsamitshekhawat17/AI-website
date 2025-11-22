'use client';

import { X, Bell } from 'lucide-react';

interface ReminderPopupProps {
  daysUntilPeriod: number;
  onClose: () => void;
}

export default function ReminderPopup({ daysUntilPeriod, onClose }: ReminderPopupProps) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-4 border-pink-200 relative animate-scaleIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          aria-label="Close"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="bg-gradient-to-br from-soft-pink to-rose-pink rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
            <Bell className="w-10 h-10 text-white" />
          </div>

          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Important Reminder! 💗
          </h3>

          <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 mb-6">
            <p className="text-lg font-semibold text-gray-800 mb-2">
              Khyati's period is coming in {daysUntilPeriod} days
            </p>
            <p className="text-gray-600">
              Be prepared and extra caring for Khyati ❤️
            </p>
          </div>

          <div className="space-y-2 text-left mb-6">
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>🍫</span>
              <span>Stock up on Khyati's favorite snacks</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>🧸</span>
              <span>Extra cuddles and comfort for Khyati</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>💊</span>
              <span>Check if pain relief is available</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-700">
              <span>❤️</span>
              <span>Be patient and understanding</span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-soft-pink to-rose-pink text-white font-semibold py-3 px-6 rounded-xl hover:shadow-pink-glow transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
          >
            Got it! ❤️
          </button>
        </div>
      </div>
    </div>
  );
}
