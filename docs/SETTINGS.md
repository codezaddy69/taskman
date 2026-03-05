# TaskMan - Settings & Configuration

## Bring Your Own AI (BYOAI) Architecture

Users provide their own API keys and choose their AI provider. TaskMan becomes AI-agnostic — a powerful interface that works with whatever AI services you prefer.

---

## AI Provider Options

### Supported Providers

**Option 1: OpenAI**
- Models: GPT-4o, GPT-4o mini, GPT-4 Turbo, GPT-3.5 Turbo
- Endpoint: `https://api.openai.com/v1`
- Strengths: Best overall, great coding, fast
- Pricing: Pay-per-use (your account)

**Option 2: Anthropic Claude**
- Models: Claude 3.5 Sonnet, Claude 3 Haiku, Claude 3 Opus
- Endpoint: `https://api.anthropic.com/v1`
- Strengths: Excellent reasoning, safe, long context
- Pricing: Pay-per-use (your account)

**Option 3: OpenRouter (Multi-Provider)**
- Models: Access to 100+ models across providers
- Endpoint: `https://openrouter.ai/api/v1`
- Strengths: One key, many models, competitive pricing
- Pricing: Pay-per-use (your account)

**Option 4: LocalAI / Ollama (Local)**
- Models: Llama 3, Mistral, Phi-3, etc.
- Endpoint: `http://localhost:11434` (Ollama)
- Strengths: Privacy, no API costs, unlimited usage
- Pricing: Free (requires local hardware)

**Option 5: Groq**
- Models: Llama 3 70B, Mixtral 8x7B
- Endpoint: `https://api.groq.com/openai/v1`
- Strengths: Extremely fast, affordable
- Pricing: Pay-per-use (your account)

**Option 6: Together AI**
- Models: Mixtral, Llama, RedPajama, custom models
- Endpoint: `https://api.together.xyz/v1`
- Strengths: Fast inference, open models
- Pricing: Pay-per-use (your account)

**Option 7: Cohere**
- Models: Command R+, Command R
- Endpoint: `https://api.cohere.ai/v1`
- Strengths: Great for text, RAG
- Pricing: Pay-per-use (your account)

**Option 8: Google AI (Gemini)**
- Models: Gemini Pro, Gemini Ultra
- Endpoint: `https://generativelanguage.googleapis.com/v1`
- Strengths: Multimodal, Google ecosystem
- Pricing: Pay-per-use (your account)

**Option 9: Azure OpenAI**
- Models: Same as OpenAI, hosted on Azure
- Endpoint: Custom Azure endpoint
- Strengths: Enterprise, Azure integration
- Pricing: Pay-per-use (your Azure account)

**Option 10: Hugging Face Inference**
- Models: Thousands of open models
- Endpoint: `https://api-inference.huggingface.co`
- Strengths: Open source, experimental models
- Pricing: Free tier available, pay for Pro

---

## Settings Menu Structure

```
Settings
├── 🤖 AI Configuration
│   ├── AI Provider
│   │   ├── OpenAI
│   │   ├── Anthropic Claude
│   │   ├── OpenRouter (Multi-Provider)
│   │   ├── LocalAI / Ollama
│   │   ├── Groq
│   │   ├── Together AI
│   │   ├── Cohere
│   │   ├── Google AI (Gemini)
│   │   ├── Azure OpenAI
│   │   └── Hugging Face
│   │
│   ├── API Key
│   ├── API Endpoint (custom)
│   ├── Model Selection
│   │   ├── Primary Model (for reasoning/prep)
│   │   ├── Fast Model (for quick parsing)
│   │   └── Show all available models
│   │
│   └── AI Settings
│       ├── Temperature (0.0 - 2.0)
│       ├── Max Tokens (256 - 128k)
│       ├── Timeout (seconds)
│       └── Fallback Model
│
├── 🗓️ Calendar Settings
│   ├── Default View
│   │   ├── Month
│   │   ├── Week
│   │   ├── Day
│   │   └── Schedule (3-day)
│   │
│   ├── Time Format
│   │   ├── 12-hour (AM/PM)
│   │   └── 24-hour
│   │
│   ├── Week Start
│   │   ├── Sunday
│   │   ├── Monday
│   │   └── Saturday
│   │
│   ├── Timezone
│   │   ├── Auto-detect
│   │   └── Manual selection
│   │
│   ├── Default Event Duration
│   │   ├── 15 min
│   │   ├── 30 min
│   │   ├── 45 min
│   │   ├── 1 hour
│   │   └── Custom
│   │
│   └── Show Week Numbers
│       └── [ ] On / Off
│
├── 📝 Todo Settings
│   ├── Default Todo Category
│   │   ├── Mind
│   │   ├── Health
│   │   ├── Spirit
│   │   ├── Career
│   │   └── Home
│   │
│   ├── Auto-Enrich Todos
│   │   └── [ ] On / Off
│   │
│   ├── Show Time Estimates
│   │   └── [ ] On / Off
│   │
│   ├── Default Priority
│   │   ├── Low
│   │   ├── Medium
│   │   ├── High
│   │   └── None
│   │
│   └── Archive Completed Todos
│       ├── Immediately
│       ├── After 1 day
│       ├── After 1 week
│       ├── After 1 month
│       └── Never
│
├── 🎮 Gamification
│   ├── Enable Gamification
│   │   └── [ ] On / Off
│   │
│   ├── Show XP Animations
│   │   └── [ ] On / Off
│   │
│   ├── Daily Quests
│   │   ├── Generate automatically
│   │   ├── Manual only
│   │   └── Disabled
│   │
│   ├── Level-Up Celebrations
│   │   └── [ ] On / Off
│   │
│   └── Show Streak Counter
│       └── [ ] On / Off
│
├── 🔔 Notifications
│   ├── Task Reminders
│   │   ├── 15 min before
│   │   ├── 1 hour before
│   │   ├── 1 day before
│   │   └── Custom
│   │
│   ├── Event Reminders
│   │   ├── 15 min before
│   │   ├── 1 hour before
│   │   ├── 1 day before
│   │   └── Multiple
│   │
│   ├── Daily Summary
│   │   ├── Morning (8:00 AM)
│   │   ├── Evening (8:00 PM)
│   │   └── Disabled
│   │
│   ├── Notification Channels
│   │   ├── Push notifications
│   │   ├── Email
│   │   └── Both
│   │
│   └── Quiet Hours
│       ├── Start time
│       ├── End time
│       └── Timezone
│
├── 🔗 Integrations
│   ├── Google Calendar
│   │   ├── [ ] Connect
│   │   ├── Sync direction
│   │   │   ├── Import only
│   │   │   ├── Export only
│   │   │   └── Two-way sync
│   │   └── Sync frequency
│   │       ├── Real-time
│   │       ├── Every 15 min
│   │       ├── Every hour
│   │       └── Manual
│   │
│   ├── Gmail
│   │   ├── [ ] Connect
│   │   ├── Enable context enrichment
│   │   └── Scan recent emails (7 days)
│   │
│   ├── Google Drive
│   │   ├── [ ] Connect
│   │   ├── Attach docs to events
│   │   └── Shared files only
│   │
│   ├── Notion
│   │   ├── [ ] Connect
│   │   ├── Sync tasks
│   │   └── Sync calendar
│   │
│   ├── Slack
│   │   ├── [ ] Connect
│   │   ├── Context from messages
│   │   └── Create tasks from Slack
│   │
│   └── Webhook (Custom)
│       ├── [ ] Enable
│       ├── Webhook URL
│       └── Authentication token
│
├── 👤 Profile & Privacy
│   ├── Display Name
│   ├── Avatar
│   ├── Email
│   ├── Timezone
│   │   ├── Auto-detect
│   │   └── Manual
│   │
│   └── Data & Privacy
│       ├── Export all my data
│       ├── Delete all my data
│       ├── Clear AI cache
│       └── Clear browsing history
│
├── 🎨 Appearance
│   ├── Theme
│   │   ├── System
│   │   ├── Light
│   │   ├── Dark
│   │   └── Custom colors
│   │
│   ├── Font Size
│   │   ├── Small
│   │   ├── Medium
│   │   ├── Large
│   │   └── Extra Large
│   │
│   ├── Calendar Colors
│   │   ├── Work
│   │   ├── Personal
│   │   ├── Health
│   │   ├── Mind
│   │   └── Custom per category
│   │
│   ├── Compact Mode
│   │   └── [ ] On / Off
│   │
│   └── Animations
│       ├── None
│       ├── Reduced
│       ├── Normal
│       └── Extra
│
├── ⌨️ Keyboard Shortcuts
│   ├── Quick Capture
│   │   └── Cmd/Ctrl + K
│   │
│   ├── New Event
│   │   └── Cmd/Ctrl + E
│   │
│   ├── New Todo
│   │   └── Cmd/Ctrl + T
│   │
│   ├── Go to Today
│   │   └── Cmd/Ctrl + G
│   │
│   ├── Search
│   │   └── Cmd/Ctrl + /
│   │
│   ├── Toggle Sidebar
│   │   └── Cmd/Ctrl + B
│   │
│   ├── Go to Calendar
│   │   └── Cmd/Ctrl + 1
│   │
│   ├── Go to Todos
│   │   └── Cmd/Ctrl + 2
│   │
│   ├── Go to Stats
│   │   └── Cmd/Ctrl + 3
│   │
│   └── Customize all shortcuts...
│
├── 🧠 AI Behavior (Advanced)
│   ├── Enrichment Depth
│   │   ├── Minimal (fast, cheap)
│   │   ├── Balanced (default)
│   │   ├── Deep (thorough, expensive)
│   │   └── Maximum (research-grade)
│   │
│   ├── Context Sources
│   │   ├── [ ] Calendar history
│   │   ├── [ ] Todo history
│   │   ├── [ ] Email (if connected)
│   │   ├── [ ] Documents (if connected)
│   │   └── [ ] Web search
│   │
│   ├── Scheduling Preferences
│   │   ├── Conservative (fewer suggestions)
│   │   ├── Balanced
│   │   ├── Aggressive (more suggestions)
│   │   └── Custom
│   │
│   ├── Preparation Detail Level
│   │   ├── Brief (1-2 sentences per point)
│   │   ├── Normal (default)
│   │   └── Detailed (full paragraphs)
│   │
│   └── Learning & Personalization
│       ├── [ ] Learn my schedule patterns
│       ├── [ ] Learn my task preferences
│       ├── [ ] Suggest based on history
│       └── Reset learning data
│
├── 📊 Analytics & Stats
│   ├── Enable Analytics
│   │   └── [ ] On / Off
│   │
│   ├── Share anonymous usage data
│   │   └── [ ] On / Off
│   │
│   ├── Productivity Insights
│   │   ├── [ ] Show weekly summary
│   │   ├── [ ] Show completion trends
│   │   └── [ ] Show time distribution
│   │
│   └── Export Analytics
│       ├── Last 7 days
│       ├── Last 30 days
│       ├── Last 90 days
│       └── All time
│
├── 🔒 Security
│   ├── Two-Factor Authentication
│   │   └── [ ] Enable
│   │
│   ├── Active Sessions
│   │   ├── Current device
│   │   ├── Chrome on Windows (2 hours ago)
│   │   ├── Safari on iPhone (1 day ago)
│   │   └── Revoke all others
│   │
│   ├── Login History
│   │   └── View last 30 logins
│   │
│   └── API Keys Security
│       ├── [ ] Encrypt API keys at rest
│       ├── [ ] Never expose keys in logs
│       └── Regenerate all encryption keys
│
└── 💾 Data & Storage
    ├── Storage Location
    │   ├── Cloud (TaskMan servers)
    │   ├── Local browser only
    │   └── Hybrid
    │
    ├── Backup Frequency
    │   ├── Real-time
    │   ├── Hourly
    │   ├── Daily
    │   └── Manual only
    │
    ├── Backup Location
    │   ├── TaskMan cloud
    │   ├── Google Drive
    │   ├── Download local copy
    │   └── Custom WebDAV
    │
    ├── Storage Usage
    │   ├── Events: 234 KB
    │   ├── Todos: 1.2 MB
    │   ├── AI Cache: 8.7 MB
    │   ├── Attachments: 0 B
    │   └── Total: 10.1 MB
    │
    ├── Clear Cache
    │   ├── AI cache only
    │   ├── All cache
    │   └── Clear everything
    │
    └── Import/Export
        ├── Export data (JSON)
        ├── Export calendar (iCal)
        ├── Import from JSON
        ├── Import from iCal
        └── Import from Todoist
```

---

## 20 Configuration Options (Detailed)

### 1. AI Provider Selection
**Type:** Dropdown
**Options:** OpenAI, Anthropic, OpenRouter, Ollama, Groq, Together AI, Cohere, Google AI, Azure OpenAI, Hugging Face
**Default:** OpenAI
**Impact:** Determines which API to call for all AI features

### 2. API Key
**Type:** Password input (masked, show/hide toggle)
**Default:** None
**Impact:** Authentication with AI provider
**Security:** Encrypted at rest, never logged

### 3. Custom API Endpoint
**Type:** URL input
**Default:** Provider default
**Impact:** For self-hosted or proxy setups
**Example:** `https://my-proxy.com/v1`

### 4. Primary AI Model
**Type:** Dropdown (dynamic based on provider)
**Options:** Varies by provider
**Default:** GPT-4o (OpenAI), Claude 3.5 Sonnet (Anthropic)
**Impact:** Used for deep reasoning, preparation, enrichment

### 5. Fast AI Model
**Type:** Dropdown (dynamic based on provider)
**Options:** Smaller/faster models
**Default:** GPT-4o mini (OpenAI), Claude 3 Haiku (Anthropic)
**Impact:** Used for quick NLP parsing, simple operations

### 6. Temperature
**Type:** Slider (0.0 - 2.0, step 0.1)
**Default:** 0.7
**Impact:** Creativity vs determinism of AI responses
**Lower:** More predictable, better for parsing
**Higher:** More creative, better for suggestions

### 7. Max Tokens
**Type:** Number input or dropdown
**Default:** 4096
**Impact:** Maximum length of AI responses
**Lower:** Faster, cheaper
**Higher:** More detailed, slower

### 8. Request Timeout
**Type:** Number input (seconds)
**Default:** 30
**Impact:** How long to wait for AI response before failing
**Lower:** Fail fast, try fallback
**Higher:** More patience for slow models

### 9. Fallback Model
**Type:** Dropdown (any available model)
**Default:** Fast model
**Impact:** Used if primary model fails or times out
**Smart fallback:** Auto-switch if error rate > 20%

### 10. Enrichment Depth
**Type:** Radio buttons
**Options:** Minimal, Balanced, Deep, Maximum
**Default:** Balanced
**Impact:** How much context to gather for todos/events
**Minimal:** Title + basic date parsing
**Maximum:** Research across all sources, web search

### 11. Context Sources (Multi-select)
**Type:** Checkboxes
**Options:** Calendar history, Todo history, Email, Documents, Web search
**Default:** Calendar + Todo
**Impact:** Where AI looks for context
**Privacy warning:** Email/docs require integration consent

### 12. Auto-Schedule Todos
**Type:** Toggle
**Default:** On
**Impact:** Automatically suggest calendar slots for new todos
**Off:** Only schedule when user requests

### 13. Scheduling Aggressiveness
**Type:** Radio buttons
**Options:** Conservative (2 suggestions), Balanced (3), Aggressive (5)
**Default:** Balanced
**Impact:** Number of calendar slot suggestions

### 14. Preparation Detail Level
**Type:** Radio buttons
**Options:** Brief, Normal, Detailed
**Default:** Normal
**Impact:** How detailed the 3-key preparation is
**Brief:** 1-2 sentences per point
**Detailed:** Full paragraphs with examples

### 15. Gamification Enabled
**Type:** Toggle
**Default:** On
**Impact:** Show XP, levels, quests, achievements
**Off:** Pure productivity app, no game elements

### 16. Show XP Animations
**Type:** Toggle
**Default:** On
**Impact:** Show confetti/celebration on level-up or task completion
**Off:** Subtle updates only

### 17. Daily Quests
**Type:** Dropdown
**Options:** Auto-generate, Manual only, Disabled
**Default:** Auto-generate
**Impact:** Whether to show daily quest suggestions

### 18. Notification Channels
**Type:** Checkboxes
**Options:** Push, Email, SMS (future)
**Default:** Push + Email
**Impact:** How users receive reminders

### 19. Quiet Hours
**Type:** Time range picker
**Default:** 10 PM - 7 AM
**Impact:** No notifications during these hours (except emergencies)

### 20. Data Storage Location
**Type:** Radio buttons
**Options:** Cloud, Local only, Hybrid
**Default:** Cloud
**Impact:** Where your data lives
**Cloud:** Sync across devices, backed up
**Local only:** Private, no sync, works offline

---

## Database Schema Extension

```prisma
model UserSettings {
  id                  String   @id @default(cuid())
  userId              String   @unique
  user                User     @relation(fields: [userId], references: [id])

  // AI Configuration
  aiProvider          String   @default("openai")  // openai, anthropic, openrouter, ollama, etc.
  apiKey              String?  // Encrypted
  apiEndpoint         String?  // Custom endpoint
  primaryModel        String   @default("gpt-4o")
  fastModel           String   @default("gpt-4o-mini")
  fallbackModel       String?
  temperature         Float    @default(0.7)
  maxTokens           Int      @default(4096)
  requestTimeout      Int      @default(30)

  // AI Behavior
  enrichmentDepth     String   @default("balanced")  // minimal, balanced, deep, maximum
  contextSources      Json?    // ["calendar", "todos", "email", "docs", "web"]
  autoSchedule        Boolean  @default(true)
  scheduleAggressiveness String @default("balanced") // conservative, balanced, aggressive
  prepDetailLevel     String   @default("normal")   // brief, normal, detailed

  // Gamification
  gamificationEnabled Boolean  @default(true)
  showXPAnimations    Boolean  @default(true)
  dailyQuests         String   @default("auto")     // auto, manual, disabled

  // Calendar Settings
  defaultView         String   @default("week")     // month, week, day, schedule
  timeFormat          String   @default("12h")       // 12h, 24h
  weekStart           String   @default("monday")    // sunday, monday, saturday
  timezone            String?
  defaultDuration     Int      @default(60)         // minutes
  showWeekNumbers     Boolean  @default(false)

  // Todo Settings
  defaultCategory     String   @default("mind")     // mind, health, spirit, career, home
  autoEnrich          Boolean  @default(true)
  showTimeEstimates   Boolean  @default(true)
  defaultPriority     String   @default("medium")   // low, medium, high
  archiveAfter        String?  // "1d", "1w", "1m", "never"

  // Notifications
  taskReminders       Json?    // ["15m", "1h", "1d"]
  eventReminders      Json?    // ["15m", "1h", "1d"]
  dailySummary        String?  // "morning", "evening", "disabled"
  notificationChannels Json?    // ["push", "email"]
  quietHoursStart     String?  // "22:00"
  quietHoursEnd       String?  // "07:00"

  // Appearance
  theme               String   @default("system")    // light, dark, system
  fontSize            String   @default("medium")   // small, medium, large, xl
  compactMode         Boolean  @default(false)
  animationLevel      String   @default("normal")   // none, reduced, normal, extra
  calendarColors      Json?    // {work: "#3b82f6", personal: "#10b981", ...}

  // Privacy & Security
  enable2FA           Boolean  @default(false)
  encryptAPIKeys      Boolean  @default(true)
  shareAnalytics      Boolean  @default(false)

  // Data
  storageLocation     String   @default("cloud")    // cloud, local, hybrid
  backupFrequency     String   @default("daily")    // real-time, hourly, daily, manual

  // Learning
  learnPatterns       Boolean  @default(true)
  learnPreferences    Boolean  @default(true)
  suggestFromHistory  Boolean  @default(true)

  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
}

model User {
  // ... existing fields ...
  settings            UserSettings?
}
```

---

## UI Implementation Notes

### AI Configuration Screen

**Provider Selection:**
- Cards with provider logos and key stats (speed, cost, strengths)
- "Recommended" badge for OpenAI
- "Fastest" badge for Groq
- "Best privacy" badge for Ollama
- "Most models" badge for OpenRouter

**API Key Input:**
- Masked by default
- "Show" toggle for verification
- "Test Connection" button
- Validation: Test with simple API call
- Error handling: Clear messages if invalid

**Model Selection:**
- Group by provider
- Show context window, pricing info
- "Recommended for:" tags (parsing, reasoning, fast)
- Performance indicators (speed, quality)

**Advanced Settings:**
- Collapsible section
- Sliders with tooltips explaining impact
- "Reset to defaults" button
- Performance estimates (cost per 100 operations)

### Settings Persistence

- Saved to `UserSettings` table
- Local storage for quick access (non-sensitive only)
- API keys encrypted with user-specific key
- Fallback to defaults if settings invalid

### Settings Validation

- Validate API key format
- Test connection on save
- Validate numeric ranges
- Warn about expensive settings (high enrichment depth)

---

## Cost Estimator

Based on user settings, show estimated costs:

```
💰 Estimated Monthly AI Costs

Based on your usage patterns (50 todos/week, 20 events/week):

Current Configuration:
- Provider: OpenAI
- Primary Model: GPT-4o ($5/1M input, $15/1M output)
- Enrichment: Balanced
- Context Sources: Calendar + Todo

Estimated: ~$8-12/month

💡 Save money:
- Switch to GPT-4o mini: ~$2-3/month
- Reduce enrichment to minimal: ~$4-6/month
- Use local Ollama: Free
```

---

## Migration Guide

For users switching providers:

1. Select new provider
2. Enter API key
3. Test connection
4. Choose models (auto-suggest best for new provider)
5. Import settings from previous provider (if compatible)
6. Clear old cache (optional)

---

*Last updated: 2025-02-25*
