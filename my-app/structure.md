exportde-tracker/
├── app/
│   ├── routes/                    # 🛤️ File-based routing (React Router v7)
│   │   ├── _index.tsx            # Homepage (/)
│   │   ├── auth/                 # Authentication routes
│   │   │   ├── login.tsx         # /auth/login
│   │   │   ├── register.tsx      # /auth/register
│   │   │   └── forgot-password.tsx
│   │   ├── dashboard/            # Main app routes
│   │   │   ├── _layout.tsx       # Dashboard layout
│   │   │   ├── _index.tsx        # /dashboard
│   │   │   ├── problems/         # Problem-related routes
│   │   │   │   ├── _index.tsx    # /dashboard/problems
│   │   │   │   ├── $id.tsx       # /dashboard/problems/:id
│   │   │   │   └── search.tsx    # /dashboard/problems/search
│   │   │   ├── friends/          # Social features
│   │   │   │   ├── _index.tsx    # /dashboard/friends
│   │   │   │   ├── $id.tsx       # /dashboard/friends/:id
│   │   │   │   └── leaderboard.tsx
│   │   │   ├── profile/          # User profile
│   │   │   │   ├── _index.tsx    # /dashboard/profile
│   │   │   │   ├── edit.tsx      # /dashboard/profile/edit
│   │   │   │   └── stats.tsx     # /dashboard/profile/stats
│   │   │   └── settings.tsx      # /dashboard/settings
│   │   └── api/                  # API routes (if using React Router as full-stack)
│   │
│   ├── components/               # 🧩 Shared UI Components
│   │   ├── ui/                   # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/               # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── navigation.tsx
│   │   ├── forms/                # Reusable form components
│   │   │   ├── auth-form.tsx
│   │   │   ├── profile-form.tsx
│   │   │   └── search-form.tsx
│   │   └── common/               # Common components
│   │       ├── loading-spinner.tsx
│   │       ├── error-boundary.tsx
│   │       ├── confirm-dialog.tsx
│   │       └── theme-toggle.tsx
│   │
│   ├── features/                 # 🎯 Feature-specific code
│   │   ├── auth/                 # Authentication feature
│   │   │   ├── components/       # Auth-specific components
│   │   │   │   ├── login-form.tsx
│   │   │   │   ├── register-form.tsx
│   │   │   │   └── auth-guard.tsx
│   │   │   ├── hooks/            # Auth-specific hooks
│   │   │   │   ├── use-auth.tsx
│   │   │   │   └── use-login.tsx
│   │   │   ├── types/            # Auth types
│   │   │   │   └── auth.types.ts
│   │   │   └── services/         # Auth services
│   │   │       └── auth.service.ts
│   │   │
│   │   ├── problems/             # LeetCode problems feature
│   │   │   ├── components/
│   │   │   │   ├── problem-card.tsx
│   │   │   │   ├── problem-list.tsx
│   │   │   │   ├── problem-detail.tsx
│   │   │   │   ├── problem-filter.tsx
│   │   │   │   └── problem-search.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-problems.tsx
│   │   │   │   ├── use-problem-stats.tsx
│   │   │   │   └── use-solve-problem.tsx
│   │   │   ├── types/
│   │   │   │   └── problem.types.ts
│   │   │   └── services/
│   │   │       └── problems.service.ts
│   │   │
│   │   ├── friends/              # Social features
│   │   │   ├── components/
│   │   │   │   ├── friend-card.tsx
│   │   │   │   ├── friend-list.tsx
│   │   │   │   ├── friend-request.tsx
│   │   │   │   └── leaderboard.tsx
│   │   │   ├── hooks/
│   │   │   │   ├── use-friends.tsx
│   │   │   │   └── use-leaderboard.tsx
│   │   │   ├── types/
│   │   │   │   └── friends.types.ts
│   │   │   └── services/
│   │   │       └── friends.service.ts
│   │   │
│   │   └── profile/              # User profile feature
│   │       ├── components/
│   │       │   ├── profile-card.tsx
│   │       │   ├── stats-dashboard.tsx
│   │       │   └── progress-chart.tsx
│   │       ├── hooks/
│   │       │   ├── use-profile.tsx
│   │       │   └── use-user-stats.tsx
│   │       ├── types/
│   │       │   └── profile.types.ts
│   │       └── services/
│   │           └── profile.service.ts
│   │
│   ├── hooks/                    # 🪝 Shared React Hooks
│   │   ├── use-local-storage.tsx
│   │   ├── use-debounce.tsx
│   │   ├── use-api.tsx
│   │   ├── use-pagination.tsx
│   │   └── use-infinite-scroll.tsx
│   │
│   ├── services/                 # 🔌 API & External Services
│   │   ├── api/                  # API layer
│   │   │   ├── client.ts         # HTTP client configuration
│   │   │   ├── endpoints.ts      # API endpoints
│   │   │   └── interceptors.ts   # Request/response interceptors
│   │   ├── leetcode/             # LeetCode API integration
│   │   │   ├── leetcode-api.ts
│   │   │   └── problem-scraper.ts
│   │   └── storage/              # Local storage services
│   │       ├── local-storage.ts
│   │       └── session-storage.ts
│   │
│   ├── stores/                   # 🏪 State Management
│   │   ├── auth-store.ts         # Authentication state
│   │   ├── problems-store.ts     # Problems state
│   │   ├── friends-store.ts      # Friends/social state
│   │   └── app-store.ts          # Global app state
│   │
│   ├── lib/                      # 🛠️ Utilities & Helpers
│   │   ├── utils.ts              # General utilities
│   │   ├── constants.ts          # App constants
│   │   ├── formatters.ts         # Data formatters
│   │   ├── validators.ts         # Input validation
│   │   └── date-utils.ts         # Date manipulation
│   │
│   ├── types/                    # 📝 Global TypeScript Types
│   │   ├── api.types.ts          # API response types
│   │   ├── common.types.ts       # Common/shared types
│   │   ├── leetcode.types.ts     # LeetCode-specific types
│   │   └── index.ts              # Type exports
│   │
│   ├── contexts/                 # ⚛️ React Contexts
│   │   ├── theme-context.tsx     # Theme management (already created)
│   │   ├── auth-context.tsx      # Authentication context
│   │   └── app-context.tsx       # Global app context
│   │
│   ├── assets/                   # 🎨 Static Assets
│   │   ├── images/
│   │   ├── icons/
│   │   └── fonts/
│   │
│   ├── styles/                   # 🎨 Styling
│   │   ├── globals.css           # Global styles
│   │   ├── components.css        # Component-specific styles
│   │   └── themes.css            # Theme variables
│   │
│   ├── app.css                   # Main CSS file
│   └── root.tsx                  # App root component
│
├── public/                       # 📁 Public Assets
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── README.md
```## 📋 **Key Principles & Guidelines**

### **1. 🛤️ Routes (File-based Routing)**
- Follow React Router v7 conventions
- Use `_layout.tsx` for nested layouts
- Use `$param.tsx` for dynamic routes
- Group related routes in folders

### **2. 🎯 Features (Domain-driven Organization)**
- Each feature is self-contained
- Contains its own components, hooks, types, and services
- Easy to test and maintain
- Can be extracted to separate packages if needed

### **3. 🧩 Components (Reusability)**
- `ui/` - Basic UI components (shadcn/ui)
- `layout/` - Layout-specific components
- `forms/` - Reusable form components
- `common/` - Shared utility components

### **4. 🔌 Services (External Integrations)**
- API layer with centralized HTTP client
- LeetCode API integration
- Storage services for persistence
- Clear separation of concerns

### **5. 🏪 State Management**
- Use React Context for simple state
- Consider Zustand for complex state
- Feature-specific stores when needed
- Global app state for cross-cutting concerns

## 🎯 **Specific Examples for Your LeetCode App**

### **Problem Types** (`types/leetcode.types.ts`):
```typescript
export interface Problem { interface Problem {numbering
  title: string
  difficulty: 'asy' | 'Mediumregory:d'
  category:lve string[]
  solve: boolean
  solotes?: Date
  notestring
}terface User

export interface Useress {
  totald: number: numberySolved: number  mediumSolverd: number
  hardSolved: numbereak}: number
}**Problem Service** (`features/problems/services/problems.service.ts`):
```typescript
export class ProblemsService {
  static async getProblems(): Promise<Problem[]>
  static async markAsSolved(problemId: number): Promise<void>
  static async getUserProgress(userId: string): Promise<UserProgress>
}
```

Would you like me to elaborate on any specific part of this structure or show you how to implement any particular feature?