# Khyati's Care Companion ❤️

A beautiful, AI-powered Next.js 14 web application to help track and care for your loved one's menstrual cycle with thoughtfulness and care.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![TailwindCSS](https://img.shields.io/badge/Tailwind-pink?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- 📅 **Smart Cycle Tracking** - AI-powered predictions for upcoming periods, PMS windows, and fertile periods
- 🍫 **Chocolate Alerts** - Never forget to surprise her with chocolates when she needs them most
- 💗 **Care Reminders** - Get notified during PMS windows to be extra caring and patient
- 🍎 **Personalized Food Suggestions** - AI-based nutrition recommendations for each cycle phase
- 🌸 **Mood Predictions** - Understand emotional patterns throughout the cycle
- 🔒 **Privacy First** - All data stored locally in browser (no server, no database)

## 🎨 Design

Beautiful UI with soft pink color palette, modern rounded corners, and gentle animations.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 How to Use

1. Visit the home page
2. Click "Go to Dashboard"
3. Enter the last period date
4. View all AI-powered predictions and personalized care tips

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Date Utils**: date-fns
- **Icons**: Lucide React
- **Storage**: Browser LocalStorage

## 📁 Project Structure

```
pcw/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── dashboard/
│       └── page.tsx
├── components/
│   ├── DateInputCard.tsx
│   ├── PredictionCard.tsx
│   ├── FoodSuggestions.tsx
│   ├── ReminderPopup.tsx
│   ├── ChocolateAlert.tsx
│   └── BeSoftCard.tsx
├── lib/
│   └── periodCalculations.ts
└── package.json
```

## 🎯 Key Features

### Automatic Calculations
- Next period date (28-day cycle)
- PMS window (days 21-28)
- Fertile window (days 11-16)
- Mood predictions
- Chocolate alert day

### Smart Reminders
- 3-day advance notice
- PMS phase alerts
- Phase-based care tips

### Food Suggestions
- PMS phase nutrition
- Period day care
- Normal day wellness

## 🔐 Privacy

- 100% client-side application
- No data sent to servers
- All data stored locally in browser
- Complete privacy guaranteed

## 💝 Made with Love

This AI-powered website was created to help caring partners better understand and support their loved ones during their menstrual cycle.

## 📄 License

Personal use project.

---

**Remember**: Every person's cycle is different. These AI predictions are based on a standard 28-day cycle. Always communicate with your partner. ❤️
