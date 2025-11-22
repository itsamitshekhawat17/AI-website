'use client';

import { Heart, Sparkles, MessageCircleHeart } from 'lucide-react';

interface BeSoftCardProps {
  isInPMSWindow: boolean;
  pmsDateRange: string;
}

export default function BeSoftCard({ isInPMSWindow, pmsDateRange }: BeSoftCardProps) {
  return (
    <div className={`
      bg-gradient-to-br backdrop-blur-sm rounded-2xl p-6 shadow-pink-glow border-2 transition-all duration-300
      ${isInPMSWindow 
        ? 'from-purple-50 via-pink-50 to-rose-50 border-purple-300 animate-pulse' 
        : 'from-pink-50 to-rose-50 border-pink-200'
      }
    `}>
      <div className="flex items-center gap-3 mb-4">
        <div className={`
          rounded-full p-3 
          ${isInPMSWindow 
            ? 'bg-gradient-to-br from-purple-400 to-pink-400' 
            : 'bg-gradient-to-br from-soft-pink to-rose-pink'
          }
        `}>
          <Heart className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-xl font-bold text-gray-800">
          Be Extra Soft 💗
        </h2>
      </div>

      {isInPMSWindow ? (
        <div className="space-y-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-5 border-2 border-purple-300">
            <div className="flex items-center gap-2 mb-2">
              <MessageCircleHeart className="w-5 h-5 text-purple-500" />
              <p className="text-lg font-bold text-gray-800">PMS Window Active</p>
            </div>
            <p className="text-gray-700 font-medium text-lg mb-3">
              Be gentle, supportive, and patient today ❤️
            </p>
            <p className="text-sm text-gray-600">
              Khyati's in her PMS phase right now
            </p>
          </div>

          <div className="bg-white/40 rounded-xl p-4 space-y-2">
            <p className="text-sm font-medium text-gray-700 mb-2">How to help:</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">Listen without trying to "fix" everything</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">Offer comfort food and warm drinks</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">Give her space when she needs it</p>
              </div>
              <div className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-500 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-700">Extra hugs and reassurance</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white/40 backdrop-blur-sm rounded-xl p-5">
          <p className="text-sm font-medium text-gray-600 mb-2">PMS Window</p>
          <p className="text-xl font-bold text-gray-800 mb-2">{pmsDateRange}</p>
          <p className="text-sm text-gray-600">
            Be extra caring and understanding during this time 💕
          </p>
        </div>
      )}

      <div className="mt-4 p-3 bg-gradient-to-r from-pink-100/50 to-purple-100/50 rounded-xl border border-pink-200">
        <p className="text-xs text-gray-600 text-center">
          💜 Small gestures of love mean the most during this time
        </p>
      </div>
    </div>
  );
}
