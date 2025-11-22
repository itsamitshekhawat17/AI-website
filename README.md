# Period Care Companion ❤️

A beautiful, caring Next.js 14 web application to help you track and care for your girlfriend's menstrual cycle with love and thoughtfulness.

![Period Care Companion](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-pink?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- 📅 **Smart Cycle Tracking** - Automatically calculates upcoming periods, PMS windows, and fertile periods
- 🍫 **Chocolate Alerts** - Never forget to surprise her with chocolates when she needs them most
- 💗 **Be Extra Soft Reminders** - Get notified during PMS windows to be extra caring and patient
- 🍎 **Phase-Based Food Suggestions** - Personalized nutrition recommendations for each cycle phase
- 🌸 **Mood Predictions** - Understand her emotional state throughout the cycle
- 🔒 **Privacy First** - All data stored locally in your browser (no server, no database)

## 🎨 Design

- **Color Palette**: White (#FFFFFF), Soft Pink (#FFC0CB), Rose Pink (#FFB6C1), Blush (#F4C2C2)
- **UI Style**: Modern, soft, rounded corners with gentle shadows
- **Typography**: Inter font family
- **Icons**: Lucide React icons with cute emojis

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**:
```bash
cd d:\pcw
```

2. **Install dependencies**:
```bash
npm install
```

3. **Run the development server**:
```bash
npm run dev
```

4. **Open your browser**:
Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 How to Use

1. **Visit the Home Page** - Read about the features
2. **Go to Dashboard** - Click "Go to Dashboard" button
3. **Enter Last Period Date** - Input when her last period started
4. **Get Predictions** - The app automatically calculates:
   - Next expected period date
   - PMS window (7 days before period)
   - Fertile window (days 11-16 of cycle)
   - Chocolate alert day (2 days before period)
   - Current phase and mood prediction
5. **Follow Care Tips** - Get personalized food suggestions and care reminders

## 📁 Project Structure

```
d:\pcw\
├── app/
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page with hero section
│   ├── globals.css          # Global styles and animations
│   └── dashboard/
│       └── page.tsx         # Main dashboard with all features
├── components/
│   ├── DateInputCard.tsx    # Date input component
│   ├── PredictionCard.tsx   # Reusable prediction card
│   ├── FoodSuggestions.tsx  # Phase-based food suggestions
│   ├── ReminderPopup.tsx    # 3-day reminder modal
│   ├── ChocolateAlert.tsx   # Chocolate reminder card
│   └── BeSoftCard.tsx       # PMS care reminder card
├── lib/
│   └── periodCalculations.ts # All calculation logic
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.js
```

## 🧮 Calculation Logic

### Cycle Predictions
- **Next Period Date**: Last period + 28 days
- **PMS Window**: Days 21-28 of cycle
- **Fertile Window**: Days 11-16 of cycle
- **Cramp Days**: First 3 days of period
- **Chocolate Alert**: 2 days before next period

### Mood Prediction
- **High**: During PMS phase (be patient and supportive)
- **Medium**: During period (offer comfort)
- **Low**: Normal days (all good!)

### Food Suggestions by Phase

#### PMS Phase 💜
- Dark chocolate (magnesium)
- Warm water & herbal teas
- Bananas (potassium)
- Nuts & seeds
- Light meals

#### Period Days 🌸
- Hot water bag
- Warm soups & broths
- Light fruits
- Iron-rich foods
- Avoid cold drinks

#### Normal Days 💚
- Coconut water
- Fresh fruits & vegetables
- Healthy snacks
- Stay hydrated
- Balanced meals

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Date Utilities**: date-fns
- **Icons**: Lucide React
- **Storage**: Browser LocalStorage

## 🎯 Key Components

### DateInputCard
Beautiful date picker for entering the last period date. Saves to localStorage automatically.

### PredictionCard
Reusable card component displaying cycle predictions with icons and emojis.

### FoodSuggestions
AI-feel suggestion box with phase-appropriate nutrition tips.

### ChocolateAlert
Special alert that activates 2 days before her period with chocolate reminders.

### BeSoftCard
Caring reminder during PMS phase with specific tips on how to help.

### ReminderPopup
Modal that appears 3 days before her period to prepare you.

## 📱 Responsive Design

The app is fully responsive and works beautifully on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large screens

## 🔐 Privacy & Data

- **No Server**: Everything runs in your browser
- **No Database**: No external data storage
- **LocalStorage Only**: Data never leaves your device
- **Privacy First**: Your girlfriend's data stays 100% private

## 🎨 Customization

You can easily customize the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  'soft-pink': '#FFC0CB',
  'rose-pink': '#FFB6C1',
  'blush': '#F4C2C2',
}
```

## 📝 Build for Production

```bash
npm run build
npm start
```

## 🤝 Contributing

This is a personal project, but feel free to fork and customize for your own use!

## ❤️ Made with Love

This app was created to help caring partners better understand and support their loved ones during their menstrual cycle. Small gestures of understanding and care make all the difference.

## 📄 License

This project is for personal use only.

---

**Remember**: Every person's cycle is different. These predictions are based on a standard 28-day cycle. Always communicate with your partner and adjust care based on her individual needs. ❤️
