# TaskMan - Project Documentation Index

**AI-Powered Calendar & Todo Helper with Gamification**

*Lead Designer: Delta (AI)*
*Last Updated: 2025-02-25*

---

## 📚 Documentation Files

| File | Description |
|------|-------------|
| **[README.md](README.md)** | Project overview, vision, and quick pitch |
| **[FEATURES.md](FEATURES.md)** | Complete feature list with the preparation loop and gamification |
| **[STACK.md](STACK.md)** | Tech stack recommendations (Next.js, PostgreSQL, etc.) |
| **[PERSONAS.md](PERSONAS.md)** | User personas to guide design decisions |
| **[ROADMAP.md](ROADMAP.md)** | 14-week development plan broken into phases |
| **[ARCHITECTURE.md](ARCHITECTURE.md)** | System architecture, AI provider abstraction, database schema |
| **[SETTINGS.md](SETTINGS.md)** | Comprehensive settings menu with 20+ configuration options and BYOAI |

---

## 🎯 Core Concept

TaskMan is a **preparation assistant**, not just a storage app.

**The Loop:**
1. Add something (event or todo) — quick, minimal input
2. AI researches it — who, what, where, when, why
3. AI prepares you — 3 key things you need to know
4. AI schedules todos — optimal calendar slots
5. You execute → earn XP → level up → repeat

**Never start a meeting or task unprepared again.**

---

## 🎮 Gamification: Your Life RPG

**5 Stats:**
- 🧠 **Mind** — Learning, deep work, creativity
- 💪 **Health** — Exercise, self-care, wellness
- ✨ **Spirit** — Social connections, hobbies, nature
- 💼 **Career** — Work tasks, professional growth
- 🏠 **Home** — Chores, finances, organization

**XP System:**
- Complete tasks → earn XP
- Multipliers: on-time, high priority, streaks
- Levels: 1-100+ with unlock rewards
- Daily quests with bonus XP
- Achievements and badges

---

## 🤖 Bring Your Own AI (BYOAI)

TaskMan is AI-agnostic. Users choose their provider:

**Supported Providers:**
- OpenAI (GPT-4o, GPT-4o mini, etc.)
- Anthropic Claude (Claude 3.5 Sonnet, Haiku, Opus)
- OpenRouter (100+ models, one key)
- Ollama/LocalAI (privacy, free)
- Groq, Together AI, Cohere, Google AI, Azure OpenAI, Hugging Face

**User Controls:**
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
├── README.md          # Project overview
├── FEATURES.md        # Complete feature list
├── STACK.md           # Tech stack recommendations
├── PERSONAS.md        # User personas
├── ROADMAP.md         # Development roadmap (14 weeks)
├── ARCHITECTURE.md    # System architecture & BYOAI design
├── SETTINGS.md        # Settings menu & configuration options
└── INDEX.md           # This file
```

---

## 🚀 Quick Start for Development

**Tech Stack:**
- **Frontend:** Next.js (App Router) + TypeScript + shadcn/ui
- **Backend:** Express.js API + Socket.io for real-time
- **Database:** PostgreSQL (Supabase) + Prisma ORM
- **Cache:** Redis
- **Storage:** S3/Supabase Storage
- **AI:** Provider-agnostic (BYOAI architecture)

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

## 💡 Key Features by Category

### Calendar Management
- Quick add (natural language)
- Month/week/day views
- Drag-and-drop
- Recurring events
- Color coding

### Todo Management
- Quick add (natural language)
- AI-enriched cards
- Priority levels
- Calendar slot suggestions
- One-click scheduling

### AI Preparation
- 3-key preparations for events
- Context gathering (calendar, tasks, email, docs)
- Source attribution
- Conversation starters
- Attachment linking

### Scheduling Intelligence
- Optimal slot suggestions
- Conflict detection
- Energy matching
- Time estimation
- Schedule optimization

### Gamification
- XP system with multipliers
- 5 stat categories
- Level progression
- Daily quests
- Streaks & achievements
- Stats dashboard

### Settings (20+ Options)
- AI provider selection (10+ providers)
- API key management (BYOAI)
- Model selection
- Temperature, tokens, timeout
- Enrichment depth
- Context sources
- Calendar settings
- Todo settings
- Gamification toggle
- Notifications
- Integrations
- Appearance (theme, colors)
- Keyboard shortcuts
- Analytics
- Security
- Data storage

---

## 🎨 UI/UX Principles

**Quick Capture Everywhere:**
- Floating quick-capture button
- Keyboard shortcut (Cmd/Ctrl + K)
- Natural language input

**Context-Rich Cards:**
- Todo cards show enrichment
- Event cards show preparation
- Source links for trust

**One-Click Actions:**
- Approve schedule suggestion
- Complete task (earn XP)
- Level-up celebration

**Clean, Focused Design:**
- Not cluttered
- Progressive disclosure
- Show what matters, hide complexity

---

## 🔒 Privacy & Security

**BYOAI Benefits:**
- Your API keys, your account
- We don't see your API calls (except through our abstraction)
- Local AI option (Ollama) for complete privacy

**Data Protection:**
- API keys encrypted at rest
- User consent for external integrations
- Opt-out of AI enrichment
- Export/delete all data
- Local storage option

---

## 💰 Business Model (Discussion)

**Options:**
1. **Freemium:**
   - Free: Basic features, limited AI calls
   - Pro: Unlimited AI, advanced features, integrations

2. **BYOAI-First:**
   - Users pay their own AI costs
   - App subscription: $5-10/mo for platform features
   - Fair, transparent pricing

3. **Hybrid:**
   - Free tier with basic AI (our account, limited)
   - Pro tier with BYOAI (your account, unlimited)

---

## 📊 Target Metrics (Launch)

**Engagement:**
- Daily active users (DAU)
- Tasks created per user/week
- AI features adoption rate

**Retention:**
- Day 1, 7, 30 retention
- Churn rate

**Productivity:**
- Task completion rate
- On-time completion
- User-reported "saved time"

**Gamification:**
- XP earned per day
- Levels achieved
- Quest completion rate
- Streak length distribution

---

## 🤔 Open Questions

1. **Final tech stack:** Confirm Next.js + Supabase + OpenAI architecture
2. **Pricing model:** Freemium, BYOAI-first, or hybrid?
3. **Gamification balance:** What's the right level of playfulness?
4. **AI budget per user:** Target cost/month?
5. **Mobile strategy:** PWA vs native app?
6. **Beta users:** Who will test? How many?
7. **Naming:** TaskMan or something else?

---

## 🎉 Next Steps

1. **Review all documentation** — Confirm vision and direction
2. **Choose tech stack** — Lock in final decisions
3. **Initialize project** — Set up Next.js, database, auth
4. **Build Phase 1** — MVP core (4 weeks)
5. **Add AI layer** — Preparation core (4 weeks)
6. **Gamification** — XP, levels, quests (3 weeks)
7. **Polish & launch** — Integrations, testing (3 weeks)

---

**Ready to build? Let me know when you want to start Phase 1!** 🚀
