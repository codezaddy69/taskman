# TaskMan - AI Calendar & Todo Helper

An intelligent task and calendar management application that **prepares you** for everything, not just stores your tasks. Built with Node.js, AI-agnostic architecture (BYOAI), and gamified to keep you motivated.

## 🎯 Vision

Most calendar/todo apps are passive — they just store what you tell them. TaskMan is proactive. It learns your patterns, researches context, prepares you for meetings, suggests optimal schedules, and gamifies your progress.

**Never start a meeting or task unprepared again.**

---

## ✨ Key Features

### 🔄 The Preparation Loop

1. **Add** something to your calendar or todo list (quick, minimal input)
2. **TaskMan researches** it — who, what, where, when, why
3. **TaskMan prepares** you with 3 key things you need to know
4. **TaskMan schedules** todos into optimal calendar slots
5. **You execute** → earn XP → level up → get better at life

### 🤖 AI That Prepares You

**Calendar Events:**
- 3-key preparation cards (priorities, context, what to bring)
- Source attribution (know where info came from)
- Conversation starters
- Attachment links

**Todo Items:**
- AI enrichment (who, what, where, when, why)
- Time estimation
- Context suggestions
- Calendar slot suggestions

### 🎮 Gamification: Your Life RPG

**5 Stats to Level Up:**
- 🧠 **Mind** — Learning, deep work, creativity
- 💪 **Health** — Exercise, self-care, wellness
- ✨ **Spirit** — Social connections, hobbies, nature
- 💼 **Career** — Work tasks, professional growth
- 🏠 **Home** — Chores, finances, organization

**XP System:**
- Complete tasks → earn XP
- Multipliers for on-time, high priority, streaks
- Levels 1-100+ with unlock rewards
- Daily quests with bonus XP
- Achievements and badges

### 🔧 Bring Your Own AI (BYOAI)

**Choose Your Provider:**
- OpenAI (GPT-4o, GPT-4o mini, etc.)
- Anthropic Claude (Claude 3.5 Sonnet, Haiku, Opus)
- OpenRouter (100+ models, one key)
- Ollama/LocalAI (privacy, free)
- Groq, Together AI, Cohere, Google AI, Azure OpenAI, Hugging Face

**Full Control:**
- API key storage (encrypted)
- Custom API endpoints
- Model selection (primary, fast, fallback)
- Temperature, max tokens, timeout
- Enrichment depth
- Context sources
- Preparation detail level

---

## 📁 Project Structure

```
src/taskman/
├── README.md          # This file
├── FEATURES.md        # Complete feature list
├── STACK.md           # Tech stack recommendations
├── PERSONAS.md        # User personas
├── ROADMAP.md         # 14-week development roadmap
├── ARCHITECTURE.md    # System architecture & BYOAI design
├── SETTINGS.md        # Settings menu & 20+ configuration options
└── INDEX.md           # Documentation index
```

---

## 🚀 Quick Pitch

> "TaskMan is like having a really organized personal assistant who actually prepares you for everything and turns your life into a fun RPG."

---

## 🛠️ Tech Stack (Proposed)

**Frontend:**
- Next.js (App Router) + TypeScript
- shadcn/ui for components
- Tailwind CSS
- Zustand for state
- TanStack Query for server state

**Backend:**
- Express.js API
- Socket.io for real-time
- PostgreSQL (Supabase)
- Prisma ORM
- Redis for caching

**AI:**
- Provider-agnostic architecture (BYOAI)
- Support for 10+ AI providers
- User-controlled models and settings

---

## 📅 Development Timeline

**Phase 1 (Weeks 1-4):** MVP Core
- Calendar + task CRUD
- Basic views (month, week, day)
- "Today" view

**Phase 2 (Weeks 5-8):** AI Preparation Core
- Natural language parsing
- Todo enrichment
- Calendar preparation (3-key)
- Scheduling suggestions

**Phase 3 (Weeks 9-11):** Gamification
- XP system
- 5 stats
- Levels & quests
- Achievements

**Phase 4 (Weeks 12-14):** Polish & Launch
- Integrations (Google Calendar, Gmail)
- Testing
- Launch

---

## 🎯 Differentiators

**1. Preparation First:**
- Not just storage → it prepares you
- 3-key preparation for every event
- Context from calendar, tasks, email, docs

**2. BYOAI Architecture:**
- Your API keys, your costs
- Choose any AI provider
- Local AI option for privacy

**3. Circular Flow:**
- Todo → Enrich → Schedule → Execute → XP
- Everything connected, nothing isolated

**4. Gamified:**
- XP, levels, stats
- Daily quests, streaks, achievements
- Productivity becomes a game

---

## 👥 Target Users

**Primary:**
- Overwhelmed professionals (50+ meetings/week)
- Freelancers/solopreneurs (multiple deadlines)
- Students with ADHD (need structure)

**Secondary:**
- Busy parents (family calendar chaos)
- Power users (want control, API access)

---

## 💰 Pricing Model (Discussion)

**Option 1: BYOAI-First**
- App subscription: $5-10/mo
- AI costs: User's own API account
- Fair, transparent, sustainable

**Option 2: Freemium**
- Free: Basic features, limited AI
- Pro: Unlimited AI, advanced features

**Option 3: Hybrid**
- Free: Basic AI (our account, limited)
- Pro: BYOAI (your account, unlimited)

---

## 📊 Status

🚧 **Planning Phase** — All documentation complete, ready to start development.

---

## 🤝 Contributing

This is currently in early planning. Once development begins, contributions will be welcome!

---

## 📄 License

TBD

---

**Lead Designer: Delta (AI)**
**Created: 2025-02-25**
**Vision: Never be unprepared again.** 🎯
