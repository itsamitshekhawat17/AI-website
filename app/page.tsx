import Link from 'next/link';
import { Heart, Sparkles, Calendar } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeIn">
          {/* Decorative Hearts */}
          <div className="flex justify-center gap-4 mb-8">
            <Heart className="w-8 h-8 text-soft-pink animate-pulse" />
            <Sparkles className="w-10 h-10 text-rose-pink" />
            <Heart className="w-8 h-8 text-blush animate-pulse" />
          </div>

          {/* Main Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-soft-pink via-rose-pink to-blush bg-clip-text text-transparent">
            Khyati's Care Companion ❤️
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-700 mb-12 font-medium">
            Smart care and love for Khyati 💕
          </p>

          {/* CTA Button */}
          <Link href="/dashboard">
            <button className="group relative bg-gradient-to-r from-soft-pink to-rose-pink text-white font-bold text-lg px-12 py-5 rounded-2xl hover:shadow-pink-glow transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="flex items-center gap-3">
                <Calendar className="w-6 h-6" />
                Go to Dashboard
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </Link>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-pink-soft border border-pink-200 hover:shadow-pink-glow transition-all duration-300 hover:scale-[1.02]">
            <div className="text-4xl mb-3">📅</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Smart Tracking</h3>
            <p className="text-gray-600 text-sm">
              Calculate upcoming cycles, PMS windows, and important dates automatically
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-pink-soft border border-pink-200 hover:shadow-pink-glow transition-all duration-300 hover:scale-[1.02]">
            <div className="text-4xl mb-3">🍫</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Chocolate Alerts</h3>
            <p className="text-gray-600 text-sm">
              Never miss the perfect time to surprise her with her favorite treats
            </p>
          </div>

          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-pink-soft border border-pink-200 hover:shadow-pink-glow transition-all duration-300 hover:scale-[1.02]">
            <div className="text-4xl mb-3">💗</div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Care Tips</h3>
            <p className="text-gray-600 text-sm">
              Get personalized food suggestions and care reminders for each phase
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-500 text-sm">
          <p>Made with ❤️ for Khyati - the most special person</p>
          <p className="mt-2">All data stored locally on your device 🔒</p>
        </div>
      </div>
    </main>
  );
}
