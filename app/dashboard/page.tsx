'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar as CalendarIcon, Heart, TrendingUp, Activity, Smile } from 'lucide-react';
import Link from 'next/link';
import DateInputCard from '@/components/DateInputCard';
import PredictionCard from '@/components/PredictionCard';
import FoodSuggestions from '@/components/FoodSuggestions';
import ReminderPopup from '@/components/ReminderPopup';
import ChocolateAlert from '@/components/ChocolateAlert';
import BeSoftCard from '@/components/BeSoftCard';
import {
  calculatePeriodData,
  getFoodSuggestions,
  shouldShowReminder,
  saveLastPeriodDate,
  loadLastPeriodDate,
  formatDateDisplay,
  formatDateRange,
  PeriodData,
} from '@/lib/periodCalculations';
import { isToday, isPast } from 'date-fns';

export default function Dashboard() {
  const [lastPeriodDate, setLastPeriodDate] = useState<Date | null>(null);
  const [periodData, setPeriodData] = useState<PeriodData | null>(null);
  const [showReminder, setShowReminder] = useState(false);
  const [hasCheckedReminder, setHasCheckedReminder] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  // Load saved date on mount
  useEffect(() => {
    const saved = loadLastPeriodDate();
    if (saved) {
      setLastPeriodDate(saved);
      const data = calculatePeriodData(saved);
      setPeriodData(data);

      // Check if we should show reminder (only once per session)
      if (!hasCheckedReminder && shouldShowReminder(data.daysUntilNextPeriod)) {
        setShowReminder(true);
        setHasCheckedReminder(true);
      }
    }
  }, [hasCheckedReminder]);

  const handleDateSubmit = (date: Date) => {
    setLastPeriodDate(date);
    saveLastPeriodDate(date);
    
    const data = calculatePeriodData(date);
    setPeriodData(data);

    // Check if we should show reminder
    if (shouldShowReminder(data.daysUntilNextPeriod)) {
      setShowReminder(true);
    }
  };

  const handleClearData = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('lastPeriodDate');
      setLastPeriodDate(null);
      setPeriodData(null);
      setShowClearConfirm(false);
    }
  };

  const foodSuggestions = periodData ? getFoodSuggestions(periodData.currentPhase) : null;

  return (
    <main className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-rose-pink transition-colors mb-4 cursor-pointer"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
          
          <div className="flex items-center gap-3">
            <Heart className="w-10 h-10 text-rose-pink" />
            <h1 className="text-4xl font-bold text-gray-800">
              Khyati's Dashboard 💗
            </h1>
          </div>
          <p className="text-gray-600 mt-2">
            Track and care for Khyati with love ❤️
          </p>
        </div>

        {/* Date Input Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <DateInputCard onDateSubmit={handleDateSubmit} initialDate={lastPeriodDate} />
            </div>
            {periodData && (
              <div className="md:w-auto">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-pink-soft border border-pink-200 h-full flex flex-col justify-center">
                  <button
                    onClick={() => setShowClearConfirm(true)}
                    className="px-4 py-2 bg-gray-100 hover:bg-red-50 text-gray-700 hover:text-red-600 rounded-xl transition-all duration-300 text-sm font-medium border border-gray-200 hover:border-red-200"
                  >
                    🗑️ Clear All Data
                  </button>
                  <p className="text-xs text-gray-500 mt-2 text-center">
                    Remove saved date
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Results Section - Only show if we have data */}
        {periodData && (
          <div className="space-y-8 animate-fadeIn">
            {/* Key Predictions Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-rose-pink" />
                Cycle Predictions
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <PredictionCard
                  title="Next Period Date"
                  value={formatDateDisplay(periodData.nextPeriodDate)}
                  icon={CalendarIcon}
                  emoji="🌸"
                  subtitle={`In ${periodData.daysUntilNextPeriod} days`}
                  color="pink"
                />
                <PredictionCard
                  title="Current Phase"
                  value={periodData.currentPhase.toUpperCase()}
                  icon={Activity}
                  emoji={
                    periodData.currentPhase === 'period' ? '🌸' :
                    periodData.currentPhase === 'pms' ? '💜' :
                    periodData.currentPhase === 'fertile' ? '🌟' : '💚'
                  }
                  color={
                    periodData.currentPhase === 'period' ? 'pink' :
                    periodData.currentPhase === 'pms' ? 'purple' :
                    periodData.currentPhase === 'fertile' ? 'rose' : 'blush'
                  }
                />
                <PredictionCard
                  title="Mood Prediction"
                  value={periodData.moodPrediction}
                  icon={Smile}
                  emoji={
                    periodData.moodPrediction === 'High' ? '😰' :
                    periodData.moodPrediction === 'Medium' ? '😊' : '😄'
                  }
                  subtitle={
                    periodData.moodPrediction === 'High' ? 'Be extra patient' :
                    periodData.moodPrediction === 'Medium' ? 'Offer comfort' : 'All good!'
                  }
                  color={
                    periodData.moodPrediction === 'High' ? 'purple' : 'pink'
                  }
                />
                <PredictionCard
                  title="PMS Window"
                  value={formatDateRange(periodData.pmsWindow.start, periodData.pmsWindow.end)}
                  icon={Heart}
                  emoji="💗"
                  color="rose"
                />
              </div>
            </div>

            {/* Alerts Section */}
            <div className="grid md:grid-cols-2 gap-6">
              <ChocolateAlert
                chocolateDay={formatDateDisplay(periodData.chocolateAlertDay)}
                isToday={isToday(periodData.chocolateAlertDay)}
                isPast={isPast(periodData.chocolateAlertDay)}
              />
              <BeSoftCard
                isInPMSWindow={periodData.currentPhase === 'pms'}
                pmsDateRange={formatDateRange(periodData.pmsWindow.start, periodData.pmsWindow.end)}
              />
            </div>

            {/* Food Suggestions */}
            {foodSuggestions && (
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Activity className="w-6 h-6 text-rose-pink" />
                  Nutrition & Care Tips
                </h2>
                <FoodSuggestions phase={periodData.currentPhase} suggestions={foodSuggestions} />
              </div>
            )}

            {/* Additional Info Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-pink-soft border border-pink-200 hover:shadow-pink-glow transition-all">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  🌟 Fertile Window
                </h3>
                <p className="text-2xl font-bold text-gray-700 mb-2">
                  {formatDateRange(periodData.fertileWindow.start, periodData.fertileWindow.end)}
                </p>
                <p className="text-sm text-gray-600">
                  Ovulation period - heightened fertility window
                </p>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-pink-soft border border-pink-200 hover:shadow-pink-glow transition-all">
                <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                  🩹 Cramp-Prone Days
                </h3>
                <p className="text-2xl font-bold text-gray-700 mb-2">
                  {formatDateDisplay(periodData.crampDays[0])} - {formatDateDisplay(periodData.crampDays[2])}
                </p>
                <p className="text-sm text-gray-600">
                  First 3 days - be ready with pain relief and extra comfort for Khyati
                </p>
              </div>
            </div>
            
            {/* Quick Actions */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                💡 Quick Care Tips for Today
              </h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white/60 rounded-xl p-4">
                  <p className="text-2xl mb-2">💬</p>
                  <p className="text-sm font-medium text-gray-800 mb-1">Communication</p>
                  <p className="text-xs text-gray-600">Check in and ask how she's feeling</p>
                </div>
                <div className="bg-white/60 rounded-xl p-4">
                  <p className="text-2xl mb-2">🎁</p>
                  <p className="text-sm font-medium text-gray-800 mb-1">Small Gestures</p>
                  <p className="text-xs text-gray-600">Surprise her with something thoughtful</p>
                </div>
                <div className="bg-white/60 rounded-xl p-4">
                  <p className="text-2xl mb-2">❤️</p>
                  <p className="text-sm font-medium text-gray-800 mb-1">Be Present</p>
                  <p className="text-xs text-gray-600">Quality time together matters most</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!periodData && (
          <div className="text-center py-16 animate-fadeIn">
            <div className="text-6xl mb-4">📅</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Welcome! Let's Track Khyati's Cycle
            </h2>
            <p className="text-gray-600 mb-4">
              Enter Khyati's last period date above to get started ❤️
            </p>
            <div className="max-w-md mx-auto mt-8 bg-gradient-to-r from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-200">
              <h3 className="font-semibold text-gray-800 mb-3">What you'll get:</h3>
              <div className="space-y-2 text-left text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Next period date prediction</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>PMS window alerts</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Chocolate reminder notifications</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Phase-based food suggestions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>✅</span>
                  <span>Mood predictions & care tips</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Reminder Popup */}
        {showReminder && periodData && (
          <ReminderPopup
            daysUntilPeriod={periodData.daysUntilNextPeriod}
            onClose={() => setShowReminder(false)}
          />
        )}

        {/* Clear Data Confirmation */}
        {showClearConfirm && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border-4 border-pink-200 animate-scaleIn">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
                Clear All Data? 🗑️
              </h3>
              <p className="text-gray-600 text-center mb-6">
                This will remove Khyati's saved period date and all calculations. You'll need to enter the date again.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 bg-gray-100 text-gray-700 font-semibold py-3 px-6 rounded-xl hover:bg-gray-200 transition-all duration-300"
                >
                  Cancel
                </button>
                <button
                  onClick={handleClearData}
                  className="flex-1 bg-gradient-to-r from-red-400 to-red-500 text-white font-semibold py-3 px-6 rounded-xl hover:shadow-lg transition-all duration-300"
                >
                  Clear Data
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
