import { addDays, differenceInDays, isWithinInterval, format } from 'date-fns';

export interface PeriodData {
  lastPeriodDate: Date;
  nextPeriodDate: Date;
  pmsWindow: { start: Date; end: Date };
  fertileWindow: { start: Date; end: Date };
  crampDays: Date[];
  chocolateAlertDay: Date;
  beSoftDays: Date[];
  currentPhase: 'period' | 'pms' | 'fertile' | 'normal';
  moodPrediction: 'High' | 'Medium' | 'Low';
  daysUntilNextPeriod: number;
}

export const CYCLE_LENGTH = 28;
export const PMS_START_DAY = 21;
export const FERTILE_START_DAY = 11;
export const FERTILE_END_DAY = 16;
export const CRAMP_DAYS_COUNT = 3;
export const CHOCOLATE_ALERT_DAYS_BEFORE = 2;

/**
 * Calculate the next expected period date
 * Formula: lastPeriod + 28 days
 */
export function calculateNextPeriod(lastDate: Date): Date {
  return addDays(lastDate, CYCLE_LENGTH);
}

/**
 * Calculate PMS window
 * Formula: lastPeriod + 21 to 28 days
 */
export function calculatePMSWindow(lastDate: Date): { start: Date; end: Date } {
  return {
    start: addDays(lastDate, PMS_START_DAY),
    end: addDays(lastDate, CYCLE_LENGTH),
  };
}

/**
 * Calculate fertile window
 * Formula: lastPeriod + 11 to 16 days
 */
export function calculateFertileWindow(lastDate: Date): { start: Date; end: Date } {
  return {
    start: addDays(lastDate, FERTILE_START_DAY),
    end: addDays(lastDate, FERTILE_END_DAY),
  };
}

/**
 * Calculate cramp-prone days (first 3 days of period)
 * NextPeriodDate → days 1–3
 */
export function calculateCrampDays(nextPeriod: Date): Date[] {
  return Array.from({ length: CRAMP_DAYS_COUNT }, (_, i) => addDays(nextPeriod, i));
}

/**
 * Calculate chocolate alert day
 * 2 days before next period
 */
export function calculateChocolateAlertDay(nextPeriod: Date): Date {
  return addDays(nextPeriod, -CHOCOLATE_ALERT_DAYS_BEFORE);
}

/**
 * Calculate "Be Soft" days (PMS week)
 */
export function calculateBeSoftDays(pmsWindow: { start: Date; end: Date }): Date[] {
  const days: Date[] = [];
  let currentDay = pmsWindow.start;
  
  while (currentDay <= pmsWindow.end) {
    days.push(new Date(currentDay));
    currentDay = addDays(currentDay, 1);
  }
  
  return days;
}

/**
 * Determine current phase based on today's date
 */
export function getCurrentPhase(
  today: Date,
  lastPeriod: Date,
  nextPeriod: Date,
  pmsWindow: { start: Date; end: Date },
  fertileWindow: { start: Date; end: Date }
): 'period' | 'pms' | 'fertile' | 'normal' {
  // Check if in current period (first 5 days)
  const periodEnd = addDays(lastPeriod, 5);
  if (isWithinInterval(today, { start: lastPeriod, end: periodEnd })) {
    return 'period';
  }
  
  // Check if in next period (first 5 days)
  const nextPeriodEnd = addDays(nextPeriod, 5);
  if (isWithinInterval(today, { start: nextPeriod, end: nextPeriodEnd })) {
    return 'period';
  }
  
  // Check if in PMS window
  if (isWithinInterval(today, { start: pmsWindow.start, end: pmsWindow.end })) {
    return 'pms';
  }
  
  // Check if in fertile window
  if (isWithinInterval(today, { start: fertileWindow.start, end: fertileWindow.end })) {
    return 'fertile';
  }
  
  return 'normal';
}

/**
 * Calculate mood prediction
 * PMS phase → mood swing = high
 * Period phase → mood swing = medium
 * Normal days → mood swing = low
 */
export function calculateMoodPrediction(
  today: Date,
  pmsWindow: { start: Date; end: Date },
  lastPeriod: Date,
  nextPeriod: Date
): 'High' | 'Medium' | 'Low' {
  const currentPhase = getCurrentPhase(today, lastPeriod, nextPeriod, pmsWindow, { 
    start: addDays(lastPeriod, FERTILE_START_DAY), 
    end: addDays(lastPeriod, FERTILE_END_DAY) 
  });
  
  if (currentPhase === 'pms') return 'High';
  if (currentPhase === 'period') return 'Medium';
  return 'Low';
}

/**
 * Main calculation function that returns all period data
 */
export function calculatePeriodData(lastPeriodDate: Date): PeriodData {
  const today = new Date();
  const nextPeriodDate = calculateNextPeriod(lastPeriodDate);
  const pmsWindow = calculatePMSWindow(lastPeriodDate);
  const fertileWindow = calculateFertileWindow(lastPeriodDate);
  const crampDays = calculateCrampDays(nextPeriodDate);
  const chocolateAlertDay = calculateChocolateAlertDay(nextPeriodDate);
  const beSoftDays = calculateBeSoftDays(pmsWindow);
  const currentPhase = getCurrentPhase(today, lastPeriodDate, nextPeriodDate, pmsWindow, fertileWindow);
  const moodPrediction = calculateMoodPrediction(today, pmsWindow, lastPeriodDate, nextPeriodDate);
  const daysUntilNextPeriod = differenceInDays(nextPeriodDate, today);
  
  return {
    lastPeriodDate,
    nextPeriodDate,
    pmsWindow,
    fertileWindow,
    crampDays,
    chocolateAlertDay,
    beSoftDays,
    currentPhase,
    moodPrediction,
    daysUntilNextPeriod,
  };
}

/**
 * Get food suggestions based on current phase
 */
export function getFoodSuggestions(phase: 'period' | 'pms' | 'fertile' | 'normal'): {
  title: string;
  suggestions: string[];
  emoji: string;
} {
  switch (phase) {
    case 'pms':
      return {
        title: 'PMS Phase Foods',
        emoji: '🍫',
        suggestions: [
          'Dark chocolate (rich in magnesium)',
          'Warm water & herbal teas',
          'Bananas (for potassium)',
          'Nuts & seeds',
          'Light, easy-to-digest meals',
        ],
      };
    case 'period':
      return {
        title: 'Period Days Care',
        emoji: '🌸',
        suggestions: [
          'Hot water bag for cramps',
          'Warm soups & broths',
          'Light fruits (apples, berries)',
          'Iron-rich foods (spinach, dates)',
          'Avoid cold drinks & junk food',
        ],
      };
    case 'normal':
      return {
        title: 'Normal Days Nutrition',
        emoji: '🥥',
        suggestions: [
          'Coconut water (hydration)',
          'Fresh fruits & vegetables',
          'Healthy snacks',
          'Plenty of water',
          'Balanced meals',
        ],
      };
    default:
      return {
        title: 'Healthy Habits',
        emoji: '💚',
        suggestions: [
          'Stay hydrated',
          'Eat balanced meals',
          'Fresh fruits daily',
          'Light exercise',
          'Good sleep',
        ],
      };
  }
}

/**
 * Check if we should show the 3-day reminder
 */
export function shouldShowReminder(daysUntilNextPeriod: number): boolean {
  return daysUntilNextPeriod === 3;
}

/**
 * Save last period date to localStorage
 */
export function saveLastPeriodDate(date: Date): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('lastPeriodDate', date.toISOString());
  }
}

/**
 * Load last period date from localStorage
 */
export function loadLastPeriodDate(): Date | null {
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem('lastPeriodDate');
    return saved ? new Date(saved) : null;
  }
  return null;
}

/**
 * Format date for display
 */
export function formatDateDisplay(date: Date): string {
  return format(date, 'MMMM dd, yyyy');
}

/**
 * Format date range for display
 */
export function formatDateRange(start: Date, end: Date): string {
  return `${format(start, 'MMM dd')} - ${format(end, 'MMM dd, yyyy')}`;
}
