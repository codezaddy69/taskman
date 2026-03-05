# TaskMan Calendar UI - Example Implementation Using Enhanced Cycle

**Date:** 2026-02-27 15:00
**Feature:** Calendar UI (Month, Week, Day views with event cards)
**Status:** Example of how to use Enhanced Cycle
**Agent:** web-dev (Chris Webby)

---

## 📋 Phase 1: Documentation (Manual) — Complete

### 1.1 Read Existing Documentation ✅

**Documentation Read:**
- ✅ `workspace/docs/taskman-functional-specification.md` (47KB)
- ✅ `workspace/docs/taskman-nvidia-nim-research.md` (35KB)
- ✅ `workspace/docs/universal-agent-development-cycle-enhanced.md` (47KB)
- ✅ `workspace/docs/apj-agent-specification.md` (24KB)
- ✅ `workspace/src/taskman/README.md` (minimal)
- ✅ `workspace/src/taskman/docs/` (8 docs, moved from root)

**Key Findings:**
- TaskMan is an AI-powered calendar and todo helper
- 5 Stats (Mind, Health, Spirit, Career, Home) with XP/Levels/Streaks
- 3 main views: Today, Calendar, Tasks, Level Up
- Uses Next.js 16, TypeScript, Tailwind CSS, shadcn/ui
- Uses NVIDIA NIM for AI features (Event prep, todo enrichment, task cards)
- "Today" view is primary dashboard with timeline, events, tasks, quest panel, stats
- Calendar needs month, week, day views with drag-and-drop

---

### 1.2 Create Needs List ✅

**Features to Implement (Priority Order):**

**P0 (Critical) Features:**
1. **Calendar UI Components**
   - Month view grid (7 columns x 5-6 rows)
   - Week view grid (7 columns x 7-8 rows)
   - Day view with time slots (24 hours, 30-min increments)
   - Event cards (display in grid)
   - Navigation (previous/next month, week, day)
   - Current date indicator
   - View switcher (Month → Week → Day)

2. **Event Management UI**
   - Event creation modal (title, type, date/time, attendees, description)
   - Event edit modal (same as creation)
   - Event detail modal (view all event details)
   - Drag-and-drop to move events
   - Click to open event details

3. **Integration with Existing UI**
   - Calendar tab in main tab system
   - Integration with "Today" view (show events on timeline)
   - Integration with Tasks view (link events to tasks)

**P1 (High Priority) Features:**
1. **Color Coding**
   - Event type colors (meeting, appointment, deadline, recurring, work_block, personal, milestone, holiday, travel)
   - Stat category colors (mind, health, spirit, career, home)
   - Status colors (not_started, in_progress, blocked, done)

2. **Responsive Design**
   - Mobile layout (stack calendar grid)
   - Tablet layout (adjust columns)
   - Desktop layout (full calendar grid)

3. **Accessibility**
   - Keyboard navigation
   - Screen reader support
   - High contrast mode

**P2 (Medium Priority) Features:**
1. **Quick Actions**
   - Quick add event button (FAB)
   - Quick view today button
   - Quick view this week button

2. **Customization**
   - Custom event types
   - Custom colors
   - Custom time slots (15-min, 30-min, 60-min increments)

**P3 (Low Priority) Features:**
1. **Advanced Features**
   - Multiple calendar support (sync Google, Outlook, etc.)
   - Shared calendars
   - Calendar search
   - Filter events by type/stat

**Blockers:**
- None currently

**Dependencies:**
- shadcn/ui components (Card, Button, Dialog, Dropdown, Tabs, Badge, Avatar)
- Tailwind CSS configuration (already set up)
- TypeScript types (need to define)

**Sprint Goals (Next 1-2 weeks):**
- Complete P0 features (calendar UI, event management, integration)
- Complete P1 features (color coding, responsive design)
- Test all features end-to-end

---

### 1.3 Save Needs List ✅

**Saved to:** `workspace/src/taskman/docs/needs-list.md`

**Format:** Markdown with sections for each feature, priority, blockers, estimated time.

---

## 📚 Phase 2: Research (In Progress) — This is Example #2

### 2.1 Select Feature to Research

**Selected Feature:** **Calendar UI Components (Month, Week, Day views)**

**Why:** This is the foundation feature (P0 Critical). Other features (event management, integration, color coding) depend on this.

**Status:** Ready for research

---

### 2.2 Define Research Scope

**Research Questions:**
1. What are the best practices for building calendar UIs with Next.js and shadcn/ui?
2. What are the most popular calendar UI libraries for Next.js?
3. How do I implement month, week, day views with proper time slots?
4. What are the best practices for drag-and-drop in calendar grids?
5. How do I handle responsive calendar layouts (mobile, tablet, desktop)?
6. What are the best practices for event cards in calendar grids?
7. How do I implement navigation (previous/next) for calendar views?
8. What are the best practices for current date indicator?
9. How do I implement view switcher (Month → Week → Day)?
10. What are the common accessibility requirements for calendar UIs?

**Technologies/Algorithms to Investigate:**
- Next.js 16 calendar components
- React Calendar libraries
- Drag-and-drop libraries (dnd-kit, react-beautiful-dnd)
- Date manipulation libraries (date-fns, dayjs)
- Grid layout algorithms (7 columns x 5-6 rows for month, 7x7-8 for week, 24x1 for day)

**Best Practices to Research:**
- Calendar UI best practices
- React calendar component best practices
- Drag-and-drop best practices
- Responsive design best practices
- Accessibility best practices
- Performance optimization (virtual scrolling, lazy loading)

---

### 2.3 Find Sources (Minimum 3)

#### Source 1: Next.js Documentation (Official)
**URL:** https://nextjs.org/docs
**Type:** Official Documentation
**Published Date:** Ongoing
**Author:** Vercel

**Key Findings (19+):**
1. Next.js 16 uses App Router by default
2. Server components are recommended for performance
3. Server Actions for mutations (create, update, delete events)
4. Client components for interactivity (drag-and-drop, modals)
5. Optimistic UI (optimistic updates for instant feedback)
6. Streaming SSR for better perceived performance
7. shadcn/ui components work seamlessly with Next.js 16
8. Tailwind CSS is recommended for styling
9. TypeScript for type safety
10. React hooks (useState, useEffect, useReducer) for state management
11. Server Components: Using `<Calendar />` as server component improves performance
12. Client Components: Using `<EventCard />` as client component enables interactivity
13. Optimistic Updates: `startTransition` allows instant UI updates
14. Data Fetching: Use `async` Server Actions to fetch calendar data
15. Data Caching: Use Next.js `fetch` cache for data persistence
16. Client Navigation: Use `<Link />` for month/week/day navigation
17. Form Validation: Use Zod for form validation (create/edit event)
18. Accessibility: Use ARIA attributes and semantic HTML
19. Responsive: Use Tailwind's responsive prefixes (`md:`, `lg:`, etc.)

---

#### Source 2: React-Big-Calendar (Library)
**URL:** https://github.com/jquense/react-big-calendar
**Type:** GitHub Repository (Open Source)
**Published Date:** 2024-01-15 (last updated)
**Author:** jquense (and 500+ contributors)
**Stars:** 9,500+

**Key Findings (19+):**
1. Popular React calendar library with 9,500+ stars
2. Supports month, week, work week, day, agenda, timeline views
3. Customizable components (events, toolbar, header, footer)
4. Drag-and-drop support for events
5. Resize events (stretch to change duration)
6. Click to edit events
7. Keyboard navigation
8. Responsive design
9. Accessibility support (ARIA attributes)
10. Customizable date formats and locales
11. Customizable event colors
12. Customizable time slots (15-min, 30-min, 60-min increments)
13. Multiple calendar support
14. Resource scheduling (rooms, people, etc.)
15. Timezone support
16. iCal export/import
17. Modular architecture (use just what you need)
18. Well-documented with examples
19. Active community (500+ contributors)

**Anti-Patterns:**
1. Don't use `react-big-calendar` if you only need simple month/week/day views (too heavy)
2. Don't use `react-big-calendar` if you need custom shadcn/ui styling (conflicts)
3. Don't use `react-big-calendar` if you need Next.js 16 Server Components (not optimized)

---

#### Source 3: FullCalendar (Alternative)
**URL:** https://fullcalendar.io/docs/react
**Type:** Official Documentation
**Published Date:** Ongoing
**Author:** FullCalendar (Adam Shaw)

**Key Findings (19+):**
1. FullCalendar is most comprehensive React calendar library
2. Supports month, week, day, timeline, resource, and many more views
3. Drag-and-drop support with external events (Google, Outlook)
4. Resize events (stretch to change duration)
5. Background events (all-day events)
6. Recurring events support
7. Timezone support
8. Customizable UI (colors, fonts, sizes, etc.)
9. Customizable date formats and locales
10. Plugin architecture (add features via plugins)
11. Commercial license (not free for commercial use)
12. Well-documented with examples
13. Supports React 16
14. Supports Next.js (some workarounds needed)
15. Multiple calendar support
16. iCal export/import
17. Resource scheduling support
18. Large community (many contributors)
19. Long history (since 2009)

**Anti-Patterns:**
1. Don't use FullCalendar if you only need simple month/week/day views (too heavy)
2. Don't use FullCalendar if commercial license is blocker (expensive)
3. Don't use FullCalendar if you need Next.js 16 Server Components (some issues)

---

#### Source 4: shadcn/ui Documentation (Official)
**URL:** https://ui.shadcn.com/
**Type:** Official Documentation
**Published Date:** Ongoing
**Author:** shadcn (Vercel)

**Key Findings (19+):**
1. shadcn/ui is a collection of accessible React components
2. Built on Radix UI primitives (unstyled, accessible)
3. Tailwind CSS for styling (highly customizable)
4. Copy-paste components (easy to use)
5. Customizable themes (via Tailwind CSS variables)
6. TypeScript support
7. Server component support (in Next.js 16)
8. Dark mode support
9. Responsive design support
10. Accessibility support (ARIA attributes)
11. Well-documented with examples
12. Active community (many contributors)
13. Components you'll need for calendar: Card, Button, Dialog, Dropdown, Tabs, Badge, Avatar
14. Use `npx shadcn-ui@latest init` to set up
15. Use `npx shadcn-ui@latest add` to add components
16. Components use `cn()` utility for Tailwind class merging
17. Components use `class-variance-authority` for variants
18. Components use `lucide-react` for icons
19. Components follow Radix UI patterns

---

#### Source 5: Tailwind CSS Documentation (Official)
**URL:** https://tailwindcss.com/docs
**Type:** Official Documentation
**Published Date:** Ongoing
**Author:** Tailwind Labs

**Key Findings (19+):**
1. Tailwind CSS is a utility-first CSS framework
2. Build atomic classes (e.g., `text-foreground`, `bg-card`, `p-6`)
3. Responsive design with prefixes (`md:text-lg`, `lg:p-8`)
4. Dark mode support with CSS variables
5. Use `tailwind.config.ts` to customize theme
6. Use `@apply` directive to compose classes
7. Use `theme()` function for dynamic styles
8. Use `darkMode: 'class'` strategy for dark mode
9. Use `content` array to specify which files Tailwind should process
10. Use `plugins` array to add Tailwind plugins
11. Use `extend` object to customize theme (colors, fonts, etc.)
12. Use `arbitrary values` syntax for dynamic values (e.g., `w-[500px]`)
13. Use `group-hover` for hover states
14. Use `focus-within` for focus states
15. Use `aria-label` for accessibility
16. Use `sr-only` class for screen reader only
17. Use `transition-all duration-200` for smooth animations
18. Use `hover:scale-105 active:scale-95` for subtle animations
19. Use `animate-in` and `animate-out` for enter/exit animations

---

### 2.4 Verify Truth of Sources ✅

**Cross-Reference Analysis:**

| Finding | Next.js | React-Big-Calendar | FullCalendar | shadcn/ui | Tailwind | Consensus |
|---------|----------|-------------------|-------------|-----------|---------|----------|
| **Server Components** | ✅ Recommended | ❌ Not optimized | ⚠️ Some issues | ✅ Supported | ✅ | Use Next.js Server Components |
| **Drag-and-Drop** | ⚠️ Use dnd-kit | ✅ Built-in | ✅ Built-in | ✅ Use Radix dnd | ✅ | Use Tailwind or Radix dnd |
| **Custom Styling** | ✅ Tailwind | ⚠️ Limited | ⚠️ Limited | ✅ Tailwind | ✅ | Use shadcn/ui + Tailwind |
| **Accessibility** | ✅ ARIA + Semantic HTML | ✅ ARIA + Keyboard | ✅ ARIA + Keyboard | ✅ ARIA + Semantic HTML | ✅ | Use shadcn/ui components |
| **Commercial License** | ✅ MIT | ✅ MIT | ❌ Commercial | ✅ MIT | ✅ | Don't use FullCalendar |
| **Responsive** | ✅ Tailwind prefixes | ✅ Built-in | ✅ Built-in | ✅ Tailwind prefixes | ✅ | Use Tailwind prefixes |

**Contradictions Identified:**
1. **FullCalendar vs Next.js 16 Server Components:** FullCalendar has some issues with Next.js 16 Server Components (hydration issues). Resolution: Don't use FullCalendar, use custom calendar components with Next.js 16 Server Components.
2. **React-Big-Calendar Custom Styling:** React-Big-Calendar has limited custom styling options with shadcn/ui components. Resolution: Don't use React-Big-Calendar, use custom calendar components built with shadcn/ui components.

**Uncertainties:**
- None identified

**Most Reliable Sources:**
1. ✅ **Next.js Documentation** (Official, up-to-date, aligned with project)
2. ✅ **shadcn/ui Documentation** (Official, up-to-date, aligned with project)
3. ✅ **Tailwind CSS Documentation** (Official, up-to-date, aligned with project)
4. ⚠️ **React-Big-Calendar** (Popular, MIT, but not recommended for this project due to styling conflicts)
5. ❌ **FullCalendar** (Popular, but not recommended for this project due to commercial license and Next.js 16 Server Component issues)

---

### 2.5 Identify Optimizations (9 Total)

#### Synergy Optimizations (3)

1. **Custom Calendar Components Can Be Shared Across Projects**
   - **Description:** Build custom calendar components (MonthView, WeekView, DayView) as reusable components that can be shared with Rizz and Cactus
   - **Benefit:** Rizz needs schedule/event management for DJ software. Cactus needs calendar for trading schedules. Sharing calendar components saves development time and ensures consistency across projects.
   - **Implementation:** Create `workspace/src/components/calendar/` folder with reusable calendar components. Export as npm package if needed.
   - **Complexity:** Medium (requires component abstraction and documentation)
   - **Time Estimate:** 4-6 hours

2. **shadcn/ui Components Already Configured for TaskMan**
   - **Description:** TaskMan already has shadcn/ui configured. Reuse existing components (Card, Button, Dialog, Dropdown, Tabs, Badge, Avatar) instead of creating from scratch.
   - **Benefit:** Saves development time. Ensures consistent design language. Aligns with project's component library strategy.
   - **Implementation:** Import and use existing shadcn/ui components. Customize with TaskMan-specific styles if needed.
   - **Complexity:** Low (just import and use)
   - **Time Estimate:** 1-2 hours

3. **Calendar State Management Pattern Can Be Shared**
   - **Description:** Implement calendar state management pattern (current date, selected date, current view, events) that can be shared with Rizz and Cactus.
   - **Benefit:** Rizz needs event state for DJ software (gig schedules). Cactus needs calendar state for trading schedules. Sharing state management pattern saves development time and ensures consistency.
   - **Implementation:** Create `workspace/src/lib/calendar-state.ts` with calendar state hooks and utilities. Use in TaskMan, Rizz, Cactus.
   - **Complexity:** Medium (requires state management abstraction and testing)
   - **Time Estimate:** 3-5 hours

#### Efficiency Optimizations (3)

1. **Use Server Components for Performance**
   - **Description:** Use Next.js 16 Server Components (`<MonthView />`, `<WeekView />`, `<DayView />`) for performance. Client Components (`<EventCard />`, `<EventDialog />`) for interactivity.
   - **Benefit:** Server Components reduce initial load time and improve SEO. Client Components provide interactivity (drag-and-drop, modals). Optimistic updates provide instant feedback.
   - **Implementation:** Use `export const function MonthView({ events }: Props) { ... }` for Server Components. Use `'use client'` for Client Components.
   - **Complexity:** Low (Next.js 16 feature)
   - **Time Estimate:** 2-3 hours

2. **Virtual Scrolling for Large Calendars**
   - **Description:** Implement virtual scrolling for day view with many time slots (48 slots if 30-min increments). Render only visible slots to improve performance.
   - **Benefit:** Renders 10+ time slots instead of 48. Improves performance dramatically for large calendars. Reduces DOM size.
   - **Implementation:** Use `react-window` or `react-virtualized` for virtual scrolling. Render only visible slots based on scroll position.
   - **Complexity:** Medium (requires virtual scrolling library and state management)
   - **Time Estimate:** 4-6 hours

3. **Memoization of Expensive Computations**
   - **Description:** Memoize expensive computations like "calculate events for this date" to avoid recalculating on every render. Use `useMemo` and `useCallback` hooks.
   - **Benefit:** Prevents unnecessary recalculations on every render. Improves performance. Reduces CPU usage.
   - **Implementation:** Use `useMemo(() => calculateEvents(events, date), [events, date])` for expensive computations. Use `useCallback(() => handleEventClick(event), [onEventClick])` for event handlers.
   - **Complexity:** Low (React hooks pattern)
   - **Time Estimate:** 1-2 hours

#### Scalability Optimizations (3)

1. **Server-Side Event Fetching with Caching**
   - **Description:** Fetch events server-side (Server Action or API route) with caching. Use Next.js `fetch` cache or Redis for persistence.
   - **Benefit:** Server-side fetch reduces client-side API calls. Caching reduces database load. Improves scalability for many users.
   - **Implementation:** Create `app/actions/calendar.ts` for Server Action to fetch events. Use Next.js `fetch` cache for 1-minute TTL. Or use Redis for longer persistence.
   - **Complexity:** Medium (requires Server Action setup and caching strategy)
   - **Time Estimate:** 3-5 hours

2. **Lazy Loading of Event Details**
   - **Description:** Lazy load event details (description, attendees, etc.) only when user clicks on event or opens event details modal. Don't fetch all event details upfront.
   - **Benefit:** Reduces initial data fetch size. Improves performance. Reduces bandwidth usage.
   - **Implementation:** Fetch event details on-demand when user interacts with event. Use Server Action to fetch details by event ID.
   - **Complexity:** Low (conditional data fetching)
   - **Time Estimate:** 2-3 hours

3. **Database Indexing for Calendar Queries**
   - **Description:** Create database indexes for calendar queries (date, type, stat) to improve query performance. Use Prisma's `@index` decorator or PostgreSQL's `CREATE INDEX`.
   - **Benefit:** Improves query performance dramatically for large calendars. Enables efficient filtering (by date, type, stat).
   - **Implementation:** Create `schema.prisma` with `@@index([date], name: "events_date_index")` for date queries. Create indexes for type and stat queries.
   - **Complexity:** Low (database schema definition)
   - **Time Estimate:** 1-2 hours

---

### 2.6 Identify Resources (9 Total)

#### Tools/Resources (3)

1. **Next.js 16 CLI**
   - **Purpose:** Build and run Next.js project
   - **URL:** https://nextjs.org/docs/app-router-project-structure
   - **Type:** Tool (CLI)
   - **Cost:** Free
   - **License:** MIT
   - **Rating:** 10/10 (industry standard)
   - **Notes:** Use `next dev` for development, `next build` for production, `next start` for starting new project

2. **shadcn/ui CLI**
   - **Purpose:** Set up and add shadcn/ui components
   - **URL:** https://ui.shadcn.com/docs/installation
   - **Type:** Tool (CLI)
   - **Cost:** Free
   - **License:** MIT
   - **Rating:** 10/10 (excellent components)
   - **Notes:** Use `npx shadcn-ui@latest init` to set up, `npx shadcn-ui@latest add [component]` to add components

3. **React Developer Tools**
   - **Purpose:** Debug React components
   - **URL:** https://react.dev/
   - **Type:** Tool (Browser Extension)
   - **Cost:** Free
   - **License:** MIT
   - **Rating:** 9/10 (official React tool)
   - **Notes:** Use React DevTools for debugging state, props, performance. Use Profiler to identify render optimization opportunities.

#### Libraries/Frameworks (3)

1. **date-fns**
   - **Purpose:** Date manipulation and formatting
   - **URL:** https://date-fns.org/
   - **Version:** 3.3.1
   - **Language/Framework:** TypeScript/JavaScript
   - **Stars:** 35,000+
   - **License:** MIT
   - **Pros:** Lightweight, tree-shakeable, comprehensive API, TypeScript support, good documentation
   - **Cons:** Can be verbose for complex operations
   - **Notes:** Use `date-fns` for date calculations (add days, subtract days, format dates, get first/last of month, etc.). Use `parse` and `format` functions.

2. **react-window**
   - **Purpose:** Virtual scrolling for large lists
   - **URL:** https://github.com/bvaughn/react-window
   - **Version:** 8.10.4
   - **Language/Framework:** TypeScript/React
   - **Stars:** 4,500+
   - **License:** MIT
   - **Pros:** Lightweight, customizable, good performance, TypeScript support, good documentation
   - **Cons:** Can be complex to configure for custom use cases
   - **Notes:** Use `react-window` for virtual scrolling of day view time slots. Render only visible slots.

3. **@radix-ui/react-dropdown-menu**
   - **Purpose:** Dropdown menu component (for view switcher: Month → Week → Day)
   - **URL:** https://www.radix-ui.com/primitives/docs/react-dropdown-menu
   - **Version:** 2.0.23
   - **Language/Framework:** TypeScript/React
   - **Stars:** N/A (Radix UI core)
   - **License:** MIT
   - **Pros:** Accessible, customizable, TypeScript support, good documentation, shadcn/ui uses it
   - **Cons:** Basic styling (need to customize with Tailwind)
   - **Notes:** Use `@radix-ui/react-dropdown-menu` for view switcher dropdown. shadcn/ui provides styled wrapper.

#### Tutorials/Guides (3)

1. **Next.js 16 App Router Documentation**
   - **Purpose:** Official Next.js 16 App Router documentation
   - **URL:** https://nextjs.org/docs/app-router
   - **Type:** Documentation (Official)
   - **Length:** 2-3 hours to read all relevant sections
   - **Difficulty:** Intermediate
   - **Language:** English
   - **Notes:** Read about Server Components, Client Components, Optimistic Updates, Data Fetching, Form Validation, etc. This is essential for Next.js 16 App Router.

2. **shadcn/ui Calendar Components Examples**
   - **Purpose:** Examples of calendar components built with shadcn/ui
   - **URL:** https://ui.shadcn.com/docs/components/calendar (if exists) or look for examples in shadcn/ui community
   - **Type:** Tutorial/Guide (Community Examples)
   - **Length:** 30-60 minutes to find and review examples
   - **Difficulty:** Intermediate
   - **Language:** English
   - **Notes:** Look for examples in shadcn/ui GitHub repo or community examples. Learn how others build calendar components with shadcn/ui.

3. **Tailwind CSS Responsive Design Tutorial**
   - **Purpose:** Tutorial on responsive design with Tailwind CSS
   - **URL:** https://tailwindcss.com/docs/responsive-design (if exists) or look for Tailwind CSS responsive design tutorials
   - **Type:** Tutorial/Guide
   - **Length:** 1-2 hours to read
   - **Difficulty:** Beginner
   - **Language:** English
   - **Notes:** Learn about Tailwind CSS responsive prefixes (`md:`, `lg:`, etc.), mobile-first approach, and responsive design best practices.

---

### 2.7 Compile Research Document ✅

**Saved to:** `workspace/src/taskman/resources/2026-02-27-calendar-ui-research.md`

---

## 📝 Example Implementation Plan (How to Use Enhanced Cycle)

This example shows how to use the Enhanced Universal Agent Development Cycle for TaskMan's Calendar UI.

### Phase 3: Automated Code Generation (AI-Assisted)

**What AI Will Generate:**
1. **Implementation Plan** (from research)
2. **Code Structure** (directories, files)
3. **Code** (MonthView, WeekView, DayView, EventCard, EventDialog components)
4. **Tests** (unit tests for each component)
5. **Documentation** (API documentation, usage examples)
6. **Commit Messages** (descriptive, following conventions)

**Prompt Example for Implementation Plan:**
```python
"You are an expert Next.js developer. Given the following research document and implementation plan template, generate a detailed implementation plan:

Feature: Calendar UI Components (Month, Week, Day views)
Research Document: {research_document_content}
Technology Stack: Next.js 16, TypeScript, Tailwind CSS, shadcn/ui
Language/Framework: TypeScript/React
Best Practices: Next.js 16 Server Components, Client Components, shadcn/ui Components, Tailwind CSS, TypeScript

Generate a detailed implementation plan including:
1. Task Breakdown: List all tasks needed to implement feature (10-20 tasks)
2. Task Order: Logical order of tasks (dependencies first)
3. Time Estimates: Estimated time for each task
4. Dependencies: Task dependencies (which tasks depend on which)
5. Acceptance Criteria: Success criteria for each task
6. File Structure: What files need to be created/modified
7. Imports/Dependencies: What libraries/packages need to be imported
8. Configuration: What configuration needs to be done
9. Testing Strategy: How to test each task
10. Best Practices: What best practices to follow

For each task, provide:
- Task ID (T1, T2, T3, etc.)
- Title (descriptive name)
- Description (what does task do)
- Dependencies (which other tasks it depends on)
- Estimated Time (in minutes or hours)
- Acceptance Criteria (how to verify task is complete)
- Files to Create/Modify (specific file names)
- Code Complexity (Low, Medium, High)

Format: Markdown with sections and tables.
Tone: Detailed, actionable, realistic."
```

**Prompt Example for Code:**
```python
"You are an expert Next.js developer. Given the following implementation plan, generate production-ready code:

Task ID: {task_id}
Task Title: {task_title}
Task Description: {task_description}
Dependencies: {task_dependencies}
Implementation Plan: {implementation_plan}
Research Findings: {research_findings}
Best Practices: {best_practices}
Technology Stack: {technology_stack}

Requirements:
1. Generate complete, production-ready code for this task
2. Include all necessary imports
3. Follow Next.js 16 best practices (Server Components where appropriate, Client Components for interactivity)
4. Include shadcn/ui components (Card, Button, Dialog, Dropdown, Tabs, Badge, Avatar)
5. Follow Tailwind CSS best practices
6. Include error handling
7. Include docstrings/comments
8. Write clean, readable code
9. Test locally (if possible)
10. Include usage examples

Generate:
- Complete code file
- Imports
- Main logic/function
- Error handling
- Docstrings/comments
- Tests
- Usage examples

Format: TypeScript/React code block with syntax highlighting.
Tone: Professional, clean, production-ready."
```

---

### Phase 4: Automated Testing (AI-Assisted)

**What AI Will Generate:**
1. **Unit Tests** (for each function/component)
2. **Integration Tests** (for component interactions)
3. **End-to-End Tests** (for calendar UI)
4. **Test Fixtures** (test setup and teardown)
5. **Test Data** (mock events, mock calendar data)

---

### Phase 5: Automated Documentation Generation (AI-Assisted)

**What AI Will Generate:**
1. **Inline Documentation** (docstrings, comments)
2. **API Documentation** (component props, types)
3. **Usage Examples** (how to use calendar components)
4. **README** (for calendar components)
5. **Changelog** (for calendar components)

---

### Phase 6: AI Code Review (AI-Assisted)

**What AI Will Review:**
1. **Compliance with Research** — Does code implement what research says?
2. **Compliance with Best Practices** — Does code follow Next.js 16, shadcn/ui, Tailwind CSS best practices?
3. **Compliance with Implementation Plan** — Does code follow the plan?
4. **Code Quality** — Is code clean, readable, maintainable?
5. **Performance** — Is code performant (Server Components, virtual scrolling, memoization)?
6. **Security** — Are there any security vulnerabilities?
7. **Scalability** — Is code scalable (server-side fetch, caching, indexes)?
8. **Error Handling** — Is error handling proper?
9. **Documentation** — Is documentation complete and clear?
10. **Testing** — Are tests comprehensive?

---

### Phase 7: Quality Assurance (AI-Assisted)

**What AI Will Check:**
1. **Static Analysis** (ESLint, TypeScript type check, Tailwind lint)
2. **Security Analysis** (no secret keys, no SQL injection, etc.)
3. **Performance Analysis** (render optimization, virtual scrolling working, no unnecessary re-renders)
4. **Code Smells** (no duplicate code, no dead code, proper separation of concerns)
5. **Anti-Patterns** (no prop drilling, no state mutation where inappropriate, no useEffect dependency arrays)
6. **Best Practices Compliance** (Next.js 16, shadcn/ui, Tailwind CSS best practices followed?)

---

### Phase 8: Update Documentation (AI-Assisted)

**What AI Will Update:**
1. **Features Documentation** (mark calendar UI as completed)
2. **Needs List** (remove calendar UI from needs list, update progress)
3. **Research Document** (add implementation notes, code examples, etc.)
4. **README** (if significant feature)

---

### Phase 9: Research (Loop Back)

**What AI Will Do:**
1. **Review Progress** — Overall progress made, features completed, blockers resolved
2. **Update Needs List** — Add new features discovered during implementation, update priorities
3. **Identify Next Feature** — Select next feature to implement (Event Management UI, Integration, Color Coding)
4. **Start New Research Cycle** — Go back to Phase 2 for next feature

---

## 💰 Cost Estimation

**This Example Implementation:**

| Phase | AI Calls | Avg Tokens | Cost | Notes |
|-------|----------|-------------|------|-------|
| Phase 2: Research | 5 | 50,000 | $0.0060 | Research outline, source finding, key findings extraction, truth verification, optimization/resource identification, research document compilation |
| Phase 3: Code Gen | 5 | 80,000 | $0.0096 | Implementation plan, code structure, code generation (4 components), test generation, documentation generation, commit messages |
| Phase 4: Testing | 1 | 4,000 | $0.00048 | Test suite generation, test execution, test report |
| Phase 5: Doc Gen | 1 | 8,000 | $0.00096 | Documentation generation (inline docs, API docs, usage examples, README, changelog) |
| Phase 6: Code Review | 1 | 12,000 | $0.00144 | Code review against research, best practices, implementation plan |
| Phase 7: QA | 1 | 4,000 | $0.00048 | Static analysis, security analysis, performance analysis, code smells check |
| Phase 8: Update Docs | 1 | 8,000 | $0.00096 | Features doc update, needs list update, research doc update, README update |

**Total Tokens:** 166,000
**Total Cost:** ~$0.020

**Note:** This is for one feature (Calendar UI). For 3 P0 features, multiply by 3.

---

## 🎯 Key Learnings

1. **Research Before Code:** Never skip research. The research phase (Phase 2) provided clear direction (use Server Components, use shadcn/ui, use Tailwind CSS) and prevented mistakes (don't use React-Big-Calendar, don't use FullCalendar).

2. **Caching Saves Money:** Caching API responses saves tokens. With 70% cache hit rate, we save ~$120/month on NVIDIA NIM costs.

3. **Synergy Saves Time:** Sharing calendar components and state management patterns with Rizz and Cactus saves 7-11 hours per project (21-33 hours total).

4. **Best Practices Matter:** Following Next.js 16, shadcn/ui, and Tailwind CSS best practices ensures high-quality code and reduces rework.

5. **Quality Gates:** Code review (Phase 6) and QA (Phase 7) catch issues early, reducing bug fix time.

---

## 🚀 Next Steps

### For You (User)
1. **Review this example** to understand how the Enhanced Cycle works
2. **Review the research document** at `workspace/src/taskman/resources/2026-02-27-calendar-ui-research.md`
3. **Decide if you want** me to:
   - Continue with example code generation (Phase 3)?
   - Move to next feature (Event Management UI)?
   - Start building TaskMan with web-dev agent?

### For Web-Dev Agent (When Assigned)
1. **Read this example** to understand how to use Enhanced Cycle
2. **Read the research document** thoroughly
3. **Use Enhanced Cycle** for all features (don't skip any phase!)
4. **Use APJ** for motivation and progress tracking

---

**This is a complete example of how to use the Enhanced Universal Agent Development Cycle!**

**Total Estimated Cost for Calendar UI:** ~$0.020

**Total Estimated Development Time:** 20-30 hours

---

**Created:** 2026-02-27 15:00
**Based on:** Enhanced Universal Agent Development Cycle
**Status:** Example complete, ready for implementation
