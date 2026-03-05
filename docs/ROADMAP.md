# TaskMan - Development Roadmap

## Phase 0: Foundation (Now)
**Goal**: Set up project structure, make decisions, prepare for dev

- [x] Brainstorm features (FEATURES.md)
- [x] Define tech stack (STACK.md)
- [x] Identify user personas (PERSONAS.md)
- [ ] Choose final tech stack
- [ ] Initialize Next.js project with TypeScript
- [ ] Set up database (PostgreSQL via Supabase)
- [ ] Set up basic authentication (NextAuth.js)
- [ ] Set up design system (shadcn/ui)

---

## Phase 1: MVP Core (Weeks 1-4)
**Goal**: Working app with essential calendar + task features

### Week 1: Project Setup & Auth
- [ ] Initialize Next.js App Router project
- [ ] Set up TypeScript + ESLint + Prettier
- [ ] Configure Tailwind CSS
- [ ] Install shadcn/ui
- [ ] Set up Supabase + Prisma
- [ ] Define basic database schema (users, events, tasks)
- [ ] Set up NextAuth.js with Google OAuth
- [ ] Create basic landing page

### Week 2: Calendar Backend
- [ ] Build calendar API routes (CRUD)
- [ ] Implement Prisma models for events
- [ ] Add Zod validation for all inputs
- [ ] Create database seed script for testing
- [ ] Write basic API tests

### Week 3: Calendar Frontend
- [ ] Build calendar views (month, week, day)
- [ ] Implement event creation modal
- [ ] Add drag-and-drop for events
- [ ] Implement event editing
- [ ] Add color coding by category
- [ ] Mobile-responsive calendar

### Week 4: Task Management
- [ ] Build task API routes (CRUD)
- [ ] Implement Prisma models for tasks
- [ ] Build task list UI
- [ ] Add task creation/editing
- [ ] Implement task priorities
- [ ] Create "Today" view combining events + tasks

**Deliverable**: Working MVP where users can create events and tasks, view them in a calendar and list, and have a "Today" view.

---

## Phase 2: AI Preparation Core (Weeks 5-8)
**Goal**: The heart of TaskMan — AI that prepares you for everything

### Week 5: Natural Language + Context
- [ ] Set up OpenAI API integration
- [ ] Build NLP parser for events ("add meeting with Sarah tomorrow at 3pm")
- [ ] Build NLP parser for tasks ("call mom about birthday plans")
- [ ] Add quick-capture input everywhere (calendar, todo list, floating button)
- [ ] Implement fuzzy date/time parsing

### Week 6: Todo Enrichment
- [ ] AI enrichment engine (who, what, where, when, why)
- [ ] Context gathering from:
  - Calendar (related events)
  - Tasks (related todos)
  - Previous items (history)
- [ ] Build todo card UI with enriched data
- [ ] Add time estimation
- [ ] Context suggestions (attachments, notes)

### Week 7: Calendar Preparation
- [ ] Build 3-key preparation system for calendar events
- [ ] Source integration MVP (start with calendar + tasks history)
- [ ] Preparation card UI design
- [ ] Conversation starters / "what to know" generation
- [ ] Attachment linking

### Week 8: Scheduling Intelligence
- [ ] AI slot suggestion engine for todos
- [ ] Calendar availability analysis
- [ ] Energy/time matching (based on user patterns)
- [ ] Conflict detection
- [ ] One-click approve/move flow
- [ ] Todo → calendar conversion

**Deliverable**: Full preparation loop working — todos get enriched, scheduled, become events, and events have prep cards.

---

## Phase 3: Gamification System (Weeks 9-11)
**Goal**: Add the RPG layer that keeps users engaged

### Week 9: XP & Stats
- [ ] XP calculation engine
- [ ] 5 stat categories (Mind, Health, Spirit, Career, Home)
- [ ] Level system (1-100+)
- [ ] XP multipliers (on-time, priority, streaks)
- [ ] Stats dashboard UI
- [ ] Level-up animations

### Week 10: Quests & Achievements
- [ ] Daily quest generation
- [ ] Achievement tracking
- [ ] Streak system
- [ ] Badge/award system
- [ ] Quest progress cards
- [ ] Achievement notifications

### Week 11: Gamification Polish
- [ ] Avatar/progression visuals
- [ ] Level-up rewards system
- [ ] Quest difficulty scaling
- [ ] Gamification settings (disable for users who don't like it)
- [ ] Analytics for engagement (what motivates users?)

**Deliverable**: Fully functional gamification system that actually motivates users.

---

## Phase 4: Polish & Launch Prep (Weeks 12-14)
**Goal**: Ship-ready product

### Week 12: UX Polish
- [ ] Dark mode implementation
- [ ] Animations and transitions
- [ ] Loading states and error handling
- [ ] Empty states (friendly, not sad)
- [ ] Keyboard shortcuts
- [ ] Mobile app PWA setup

### Week 13: Core Integrations
- [ ] Google Calendar sync (critical)
- [ ] Email integration (Gmail API) for prep context
- [ ] Google Drive/Docs connection
- [ ] Push notifications
- [ ] Email reminders

### Week 14: Testing & Launch
- [ ] End-to-end testing with Playwright
- [ ] Security audit
- [ ] Performance optimization
- [ ] Create landing page with demos
- [ ] Write documentation
- [ ] Set up error tracking (Sentry)
- [ ] Soft launch with beta users

**Deliverable**: Production-ready v1.0 with the full preparation loop + gamification.

---

## Phase 5: Post-Launch (v1.1+)
**Goal**: Gather feedback, iterate, add requested features

### Immediate Priorities (based on beta feedback)
- [ ] Subtasks / nested todos
- [ ] Task templates
- [ ] Recurring tasks
- [ ] More reminder options
- [ ] Improved mobile experience

### v1.2 Features
- [ ] Local AI option (Ollama) for privacy
- [ ] Advanced analytics dashboard
- [ ] Time zone support
- [ ] Bulk operations
- [ ] Search and filters

### v2.0 Features
- [ ] Family/shared calendars
- [ ] Voice input
- [ ] Habit tracking
- [ ] API access for power users
- [ ] Team/collaboration features

---

## Metrics to Track

**Engagement**
- Daily active users (DAU)
- Weekly active users (WAU)
- Tasks created per user per week
- Events created per user per week
- AI features adoption rate

**Retention**
- Day 1 retention
- Day 7 retention
- Day 30 retention
- Churn rate

**Productivity Signals**
- Task completion rate
- On-time task completion
- Time from creation to completion
- User-reported "saved time" (survey)

**Gamification Metrics**
- XP earned per user per day
- Levels achieved
- Quest completion rate
- Streak length distribution
- User-reported "motivation impact" (survey)

**Technical**
- API response times
- Error rates
- OpenAI API costs per user
- Database query performance

---

## Risk Assessment

| Risk | Impact | Mitigation |
|------|--------|------------|
| OpenAI API costs too high | High | Cache responses, use smaller models (GPT-4o mini), offer local option |
| Calendar sync breaks | Medium | Thorough testing, fallback to manual import, clear error messages |
| Users don't trust AI suggestions | Medium | Show reasoning, allow override, start conservative |
| Gamification feels childish | Medium | Make it optional, A/B test engagement, focus on progress not games |
| Users find prep overwhelming | Medium | Make it skimmable, highlight 3 key points, allow collapse |
| Competition launches similar features | Medium | Focus on UX, build community, iterate quickly |
| Database scaling issues | Low (early) | Design schema well, use managed DB (Supabase), plan for migration |

---

## Open Questions to Resolve Before Starting

1. **Final tech stack**: Confirm we're using Next.js + Supabase + OpenAI
2. **AI budget**: What's the target cost per user per month? (affects how much AI we use)
3. **Gamification balance**: What's the right level of playfulness? (test with users)
4. **Preparation depth**: How much data to fetch for prep? (privacy vs utility)
5. **Pricing model**: Free tier limits? Monthly subscription cost?
6. **Beta users**: Who will test? How many?
7. **Naming**: Finalize "TaskMan" or choose something else?

---

*Last updated: 2025-02-25*
*Refined with AI preparation core and gamification*
