# TaskMan

AI-Powered Calendar & Todo Helper - A productivity application with calendar integration, task management, and gamification features.

## Features

- **Today Dashboard** - Daily overview with quests, timeline, and upcoming tasks
- **Calendar Views** - Month, week, and day views for comprehensive event management
- **Gamification** - XP system, levels, stats, and achievements to boost productivity
- **Vertical Sidebar Navigation** - Quick access to all app sections with icon-based navigation

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
taskman/
├── app/              # Next.js app directory
│   ├── calendar/     # Calendar page with month/week/day views
│   ├── today/        # Today's dashboard
│   └── layout.tsx    # Root layout with sidebar
├── components/       # Reusable components
│   ├── calendar/      # Calendar view components
│   ├── today/        # Today dashboard components
│   ├── ui/          # UI components (buttons, cards, etc.)
│   └── sidebar.tsx   # Vertical navigation sidebar
└── lib/             # Utilities and state management
    ├── calendar-state.ts  # Calendar state with localStorage persistence
    ├── calendar-types.ts  # Type definitions
    └── utils.ts         # Utility functions
```

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS 4** - Utility-first styling
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library
- **date-fns** - Date manipulation library

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API.
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Styling utilities
- [Radix UI](https://www.radix-ui.com/) - Accessible component primitives

## License

MIT
