# TaskMan - System Architecture

## High-Level Overview

```
┌─────────────────────────────────────────────────────────────┐
│                         Frontend                            │
│  Next.js (App Router) + TypeScript + shadcn/ui            │
└────────────────────────┬──────────────────────────────────┘
                         │
                         │ REST API / WebSockets
                         │
┌────────────────────────▼──────────────────────────────────┐
│                         Backend                            │
│  Express.js API + Real-time (Socket.io)                   │
│  ┌────────────────────────────────────────────────────┐   │
│  │  AI Services Layer (Provider-Agnostic)             │   │
│  │  - NLP Parser (User's chosen AI)                   │   │
│  │  - Context Enricher (RAG pattern)                  │   │
│  │  - Preparation Generator (User's chosen AI)         │   │
│  │  - Scheduling Optimizer (Algorithm + AI)           │   │
│  │  - XP/Gamification Engine                           │   │
│  └──────────────┬───────────────────────────────────────┘   │
│                 │                                            │
│                 │ API Abstraction Layer                    │
│                 │ (Unified interface to all providers)     │
│                 │                                            │
│  ┌──────────────▼───────────────────────────────────────┐   │
│  │  AI Provider Adapters                               │   │
│  │  - OpenAI Adapter                                   │   │
│  │  - Anthropic Adapter                                │   │
│  │  - OpenRouter Adapter                               │   │
│  │  - Ollama/LocalAI Adapter                           │   │
│  │  - Groq Adapter                                     │   │
│  │  - Together AI Adapter                              │   │
│  │  - Cohere Adapter                                   │   │
│  │  - Google AI Adapter                                │   │
│  │  - Azure OpenAI Adapter                             │   │
│  │  - Hugging Face Adapter                             │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────┬──────────────────────────────────┘
                         │
                         │ Prisma ORM
                         │
         ┌───────────────┼───────────────┐
         │               │               │
    ┌────▼────┐    ┌─────▼─────┐   ┌─────▼─────┐
    │PostgreSQL│   │  Redis    │   │   S3/     │
    │ (Supabase)│   │  (Cache)  │   │  Blob     │
    │          │   │           │   │ (Files)   │
    └──────────┘   └───────────┘   └───────────┘
         │
         │
    ┌────▼──────────────┐
    │  External APIs    │
    │ - User's AI Keys  │
    │ - Google Calendar │
    │ - Gmail           │
    │ - Google Drive    │
    └───────────────────┘
```

---

## AI Provider Architecture (BYOAI)

### Unified AI Interface

```typescript
interface AIProvider {
  name: string;
  models: AIModel[];

  // Core operations
  chat(params: ChatParams): Promise<ChatResponse>;
  completion(params: CompletionParams): Promise<CompletionResponse>;

  // Metadata
  getContextWindow(model: string): number;
  getCostPerToken(model: string, type: 'input' | 'output'): number;
}

interface AIModel {
  id: string;
  name: string;
  contextWindow: number;
  type: 'primary' | 'fast' | 'specialized';
  recommendedFor: string[];
}

interface ChatParams {
  model: string;
  messages: ChatMessage[];
  temperature?: number;
  maxTokens?: number;
  timeout?: number;
}

interface ChatResponse {
  content: string;
  usage: { inputTokens: number; outputTokens: number };
  model: string;
  finishReason: string;
}
```

### Provider Implementations

**OpenAI Adapter:**
```typescript
class OpenAIAdapter implements AIProvider {
  name = 'openai';
  models = [
    { id: 'gpt-4o', name: 'GPT-4o', contextWindow: 128000, type: 'primary', recommendedFor: ['reasoning', 'preparation', 'enrichment'] },
    { id: 'gpt-4o-mini', name: 'GPT-4o Mini', contextWindow: 128000, type: 'fast', recommendedFor: ['parsing', 'quick'] },
    { id: 'gpt-4-turbo', name: 'GPT-4 Turbo', contextWindow: 128000, type: 'primary', recommendedFor: ['legacy'] },
    { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', contextWindow: 16385, type: 'fast', recommendedFor: ['parsing'] },
  ];

  async chat(params: ChatParams): Promise<ChatResponse> {
    // Call OpenAI API with user's key
  }
}
```

**Anthropic Adapter:**
```typescript
class AnthropicAdapter implements AIProvider {
  name = 'anthropic';
  models = [
    { id: 'claude-3-5-sonnet-20241022', name: 'Claude 3.5 Sonnet', contextWindow: 200000, type: 'primary', recommendedFor: ['reasoning', 'preparation'] },
    { id: 'claude-3-haiku-20240307', name: 'Claude 3 Haiku', contextWindow: 200000, type: 'fast', recommendedFor: ['parsing', 'quick'] },
    { id: 'claude-3-opus-20240229', name: 'Claude 3 Opus', contextWindow: 200000, type: 'primary', recommendedFor: ['complex'] },
  ];

  async chat(params: ChatParams): Promise<ChatResponse> {
    // Call Anthropic API (convert messages format)
  }
}
```

**Ollama Adapter (Local):**
```typescript
class OllamaAdapter implements AIProvider {
  name = 'ollama';
  models: AIModel[] = []; // Fetched dynamically

  async chat(params: ChatParams): Promise<ChatResponse> {
    // Call local Ollama instance
    // No API key needed
    // May be slower but free and private
  }

  async fetchModels(): Promise<void> {
    // GET http://localhost:11434/api/tags
  }
}
```

**OpenRouter Adapter (Multi-Provider):**
```typescript
class OpenRouterAdapter implements AIProvider {
  name = 'openrouter';
  models = [
    // Hundreds of models fetched from OpenRouter API
  ];

  async chat(params: ChatParams): Promise<ChatResponse> {
    // Single key, access to many providers
  }
}
```

### AI Service Manager

```typescript
class AIServiceManager {
  private adapters: Map<string, AIProvider> = new Map();
  private userSettings: UserSettings;

  constructor(userSettings: UserSettings) {
    this.userSettings = userSettings;

    // Register all adapters
    this.adapters.set('openai', new OpenAIAdapter());
    this.adapters.set('anthropic', new AnthropicAdapter());
    this.adapters.set('ollama', new OllamaAdapter());
    this.adapters.set('openrouter', new OpenRouterAdapter());
    this.adapters.set('groq', new GroqAdapter());
    this.adapters.set('together', new TogetherAdapter());
    this.adapters.set('cohere', new CohereAdapter());
    this.adapters.set('google', new GoogleAIAdapter());
    this.adapters.set('azure', new AzureOpenAIAdapter());
    this.adapters.set('huggingface', new HuggingFaceAdapter());
  }

  getAdapter(): AIProvider {
    const provider = this.adapters.get(this.userSettings.aiProvider);
    if (!provider) throw new Error(`Unknown provider: ${this.userSettings.aiProvider}`);
    return provider;
  }

  async chat(params: Partial<ChatParams>): Promise<ChatResponse> {
    const adapter = this.getAdapter();

    // Merge user settings with call params
    const fullParams: ChatParams = {
      model: this.getModel('primary'),
      temperature: this.userSettings.temperature,
      maxTokens: this.userSettings.maxTokens,
      timeout: this.userSettings.requestTimeout,
      ...params,
    };

    // Try primary model, fallback to fast model
    try {
      return await adapter.chat(fullParams);
    } catch (error) {
      if (fullParams.model === this.getModel('primary')) {
        // Retry with fallback model
        fullParams.model = this.getModel('fallback') || this.getModel('fast');
        return await adapter.chat(fullParams);
      }
      throw error;
    }
  }

  private getModel(type: 'primary' | 'fast' | 'fallback'): string {
    switch (type) {
      case 'primary': return this.userSettings.primaryModel;
      case 'fast': return this.userSettings.fastModel;
      case 'fallback': return this.userSettings.fallbackModel || this.userSettings.fastModel;
    }
  }

  getAvailableModels(): AIModel[] {
    const adapter = this.getAdapter();
    return adapter.models;
  }
}
```

---

## Core Components

### 1. Frontend (Next.js App Router)

**Key Routes:**
```
/                          - Landing page
/app/dashboard             - Main dashboard
/app/calendar              - Calendar views (month/week/day)
/app/todos                 - Todo list
/app/settings              - User settings (AI provider, etc.)
/app/profile               - Profile + stats (gamification)
/api/*                     - API routes (Next.js or Express)
```

**Key Components:**
- `QuickCapture` - Floating button for quick adding
- `CalendarView` - Month/week/day views with drag-drop
- `TodoList` - Card-based todo list with enrichment
- `EventCard` - Calendar event with preparation card
- `StatsDashboard` - Gamification stats, levels, quests
- `PrepCard` - 3-key preparation display
- `SettingsPanel` - AI provider selection, API key management

**State Management:**
- Client: Zustand (UI state, selected views)
- Server: TanStack Query (API caching, optimistic updates)

### 2. Backend API

**API Routes (Express or Next.js API routes):**

```
POST   /api/auth/login          - Authentication
POST   /api/auth/register       - Registration

POST   /api/calendar/events     - Create event
GET    /api/calendar/events     - List events
PUT    /api/calendar/events/:id - Update event
DELETE /api/calendar/events/:id - Delete event

POST   /api/todos               - Create todo
GET    /api/todos               - List todos
PUT    /api/todos/:id           - Update todo
DELETE /api/todos/:id           - Delete todo

POST   /api/ai/parse            - Parse natural language
POST   /api/ai/enrich           - Enrich todo with context
POST   /api/ai/prepare          - Generate preparation for event
POST   /api/ai/schedule         - Suggest calendar slots

POST   /api/xp/complete         - Mark task complete, earn XP
GET    /api/stats               - Get user stats and levels
GET    /api/quests              - Get daily quests

POST   /api/settings            - Update user settings
GET    /api/settings            - Get user settings
POST   /api/settings/test-ai    - Test AI provider connection

POST   /api/integrations/sync   - Sync external data
```

**Real-time (Socket.io):**
- Real-time calendar updates
- Live XP updates
- Quest progress updates
- Collaborative features (future)

### 3. Database Schema (PostgreSQL + Prisma)

**Core Models:**

```prisma
model User {
  id            String    @id @default(cuid())
  email         String    @unique
  name          String?
  avatar        String?

  // Gamification
  mindLevel     Int       @default(1)
  mindXP        Int       @default(0)
  healthLevel   Int       @default(1)
  healthXP      Int       @default(0)
  spiritLevel   Int       @default(1)
  spiritXP      Int       @default(0)
  careerLevel   Int       @default(1)
  careerXP      Int       @default(0)
  homeLevel     Int       @default(1)
  homeXP        Int       @default(0)
  currentStreak Int       @default(0)
  longestStreak Int       @default(0)

  // Relationships
  events        Event[]
  todos         Todo[]
  quests        QuestProgress[]
  achievements  Achievement[]
  settings      UserSettings?

  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model UserSettings {
  id                  String   @id @default(cuid())
  userId              String   @unique
  user                User     @relation(fields: [userId], references: [id])

  // AI Configuration
  aiProvider          String   @default("openai")
  apiKey              String?  // Encrypted
  apiEndpoint         String?
  primaryModel        String   @default("gpt-4o")
  fastModel           String   @default("gpt-4o-mini")
  fallbackModel       String?
  temperature         Float    @default(0.7)
  maxTokens           Int      @default(4096)
  requestTimeout      Int      @default(30)

  // AI Behavior
  enrichmentDepth     String   @default("balanced")
  contextSources      Json?
  autoSchedule        Boolean  @default(true)
  scheduleAggressiveness String @default("balanced")
  prepDetailLevel     String   @default("normal")

  // Gamification
  gamificationEnabled Boolean  @default(true)
  showXPAnimations    Boolean  @default(true)
  dailyQuests         String   @default("auto")

  // Calendar Settings
  defaultView         String   @default("week")
  timeFormat          String   @default("12h")
  weekStart           String   @default("monday")
  timezone            String?
  defaultDuration     Int      @default(60)

  // Todo Settings
  defaultCategory     String   @default("mind")
  autoEnrich          Boolean  @default(true)
  showTimeEstimates   Boolean  @default(true)
  defaultPriority     String   @default("medium")

  // Notifications
  taskReminders       Json?
  eventReminders      Json?
  dailySummary        String?
  notificationChannels Json?
  quietHoursStart     String?
  quietHoursEnd       String?

  // Appearance
  theme               String   @default("system")
  fontSize            String   @default("medium")
  compactMode         Boolean  @default(false)
  animationLevel      String   @default("normal")
  calendarColors      Json?

  createdAt           DateTime @default(now())
  updatedAt           DateTime @updatedAt
}

model Event {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])

  title       String
  description String?
  startTime   DateTime
  endTime     DateTime
  location    String?
  category    String

  // AI Preparation
  preparation Json?

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt

  @@index([userId, startTime])
}

model Todo {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])

  title       String
  description String?
  dueDate     DateTime?
  priority    String
  status      String

  // AI Enrichment
  enrichment  Json?

  // Scheduling
  eventId     String?

  // Gamification
  category    String
  xpValue     Int      @default(10)

  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  completedAt DateTime?

  @@index([userId, status])
}

model Quest {
  id          String   @id @default(cuid())
  name        String
  description String
  category    String
  xpReward    Int
  required    Int
  userProgress QuestProgress[]
  createdAt   DateTime @default(now())
}

model QuestProgress {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  questId     String
  quest       Quest    @relation(fields: [questId], references: [id])
  progress    Int      @default(0)
  completed   Boolean  @default(false)
  date        DateTime @default(now())
  @@unique([userId, questId, date])
}

model Achievement {
  id          String   @id @default(cuid())
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  name        String
  description String
  unlockedAt  DateTime @default(now())
  @@index([userId])
}
```

### 4. AI Services Layer (Provider-Agnostic)

#### 4.1 NLP Parser

**Purpose:** Convert natural language input into structured data.

**Input:** "Meeting with Sarah from Design tomorrow at 3pm about Q2 roadmap"

**Output:**
```json
{
  "type": "event",
  "title": "Meeting with Sarah from Design",
  "participants": ["Sarah"],
  "time": {
    "date": "2025-03-05",
    "start": "15:00",
    "duration": 60
  },
  "context": "Q2 roadmap",
  "category": "work"
}
```

**Implementation:**
- Uses user's chosen AI provider via AIServiceManager
- Fast model for quick parsing
- Fallback to regex patterns for speed
- Cached results for similar inputs

#### 4.2 Context Enricher

**Purpose:** Gather context for todos/events.

**Data Sources (RAG Pattern):**
1. **Database:**
   - Related events (same participants, similar topics)
   - Related todos (same tags, similar content)
   - User history (patterns, preferences)

2. **External APIs (cached):**
   - Google Calendar (related events)
   - Gmail (recent emails)
   - Contacts (profile info)

3. **AI Inference:**
   - Semantic understanding
   - Time estimation
   - Category classification

**Implementation:**
- Multi-step retrieval (parallel fetches)
- Vector embeddings for semantic search (Supabase pgvector)
- LLM synthesis via user's chosen provider
- Enrichment depth based on user settings

#### 4.3 Preparation Generator

**Purpose:** Generate 3-key preparation for calendar events.

**Output:**
```json
{
  "keyPoints": [
    {
      "number": 1,
      "title": "Sarah's priorities this quarter",
      "content": "Just shipped onboarding redesign, pushing for better mobile UX...",
      "source": "Slack #design-team, Feb 20"
    }
  ],
  "attachments": [...],
  "conversationStarters": [...]
}
```

**Implementation:**
- Uses user's primary model
- Chain-of-thought prompting
- Source attribution
- Detail level based on user settings

#### 4.4 Scheduling Optimizer

**Algorithm:**
1. Find free slots (query calendar)
2. Score slots (energy, patterns, proximity)
3. Rank and return suggestions

**AI Component:**
- Time estimation (if not provided)
- Category classification for energy matching
- Pattern learning from user behavior

#### 4.5 Gamification Engine

**XP Calculation:**
```typescript
function calculateXP(todo: Todo, completionTime: Date): number {
  let baseXP = todo.xpValue;

  if (isOnTime(todo.dueDate, completionTime)) baseXP *= 1.5;
  if (todo.priority === 'critical') baseXP *= 2.0;
  if (isFirstTaskOfDay(todo.userId)) baseXP *= 1.3;
  if (user.currentStreak >= 7) baseXP *= 2.0;

  if (isOverdue(todo.dueDate, completionTime)) baseXP -= 5;
  if (todo.rescheduleCount >= 3) baseXP -= 2;

  return Math.max(0, Math.round(baseXP));
}
```

---

## Data Flow Examples

### Flow 1: Add Todo → Enrich → Schedule (BYOAI)

```
User: "Call mom about birthday plans"
   ↓
[Frontend] QuickCapture component
   ↓
[Backend] POST /api/todos
   ↓
[AIServiceManager] Get user's AI provider (e.g., Anthropic)
   ↓
[AI Adapter: Anthropic] NLP Parser → Parse input (using Claude 3 Haiku)
   ↓
[Database] Save todo with basic data
   ↓
[AIServiceManager] Context Enricher (async, using Claude 3.5 Sonnet)
   ├─→ Query calendar for related events
   ├─→ Query history for patterns
   ├─→ AI inference (time estimate, category)
   └─→ Update todo.enrichment
   ↓
[Scheduling Optimizer] Find free slots, score them
   ↓
[Frontend] Show todo card + suggestions
   ↓
User: Approves suggestion
   ↓
[Backend] Create calendar event, link to todo
```

---

## Security & Privacy

**API Key Management:**
- Keys encrypted at rest with AES-256-GCM
- Never logged or exposed in responses
- Per-user encryption keys
- Option to store keys locally only

**Data Protection:**
- Sensitive data encrypted
- JWT for authentication
- Rate limiting per user
- User consent for external integrations

**Privacy Controls:**
- Opt-out of AI enrichment
- Local-only AI option (Ollama)
- Clear data export/delete
- "No analytics" option

---

## Cost Tracking

**Per-User Cost Monitoring:**
```typescript
interface UsageMetrics {
  provider: string;
  model: string;
  inputTokens: number;
  outputTokens: number;
  cost: number; // Calculated from provider pricing
  timestamp: Date;
}

// Track all AI calls
// Show user their monthly costs
// Warn when approaching budget
```

---

*Last updated: 2025-02-25*
*Updated with BYOAI architecture*
