🚀 GSG Technical Task — Rick & Morty Explorer

A clean, scalable React + TypeScript application built for the Gaza Sky Geeks Advanced React Bootcamp Technical Task.

This project follows modern frontend architecture patterns, efficient API handling with TanStack Query, and a feature-based structure engineered for real-world scalability.

🎯 Features
🔍 Characters Page

Paginated list of Rick & Morty characters

Debounced search (prevents API spam)

Responsive card grid

Click any character to view full details

🧪 Character Details

Character image + full information

Dynamic status badge (Alive / Dead / Unknown)

Extracts episode IDs from URLs

Bulk episode fetching via /episode/:ids

Clean loading & error handling

⚛️ Modern Architecture & Patterns Used

This project demonstrates:

Feature-based modular architecture

Custom hooks per feature
(useCharacters, useSearch, useCharDetails, useEpisodes)

Co-located utils/hooks per component

Centralized API layer using Axios

TanStack Query for:

Caching

Background fetching

Server state management

Loading & error states

HOC pattern (withTitle) for injecting metadata into routes

Strong TypeScript usage (@types directory)

Fully separated concerns

Reusable shared components:

LoadingSpinner

ErrorMessage

StatusBadge

🧱 Project Structure
src/
│
├── @types/                       # Global TypeScript definitions
│
├── api/                          # Axios clients + API functions
│   ├── characters.ts
│   ├── episodes.ts
│   └── client.ts
│
├── components/                   # UI components (feature-scoped)
│   ├── character-list/
│   │   ├── components/
│   │   ├── hook/
│   │   └── utils/
│   │   └── index.tsx
│   │
│   ├── character-details/
│   │   ├── components/
│   │   ├── hook/
│   │   └── utils/
│   │   └── index.tsx
│   │
│   ├── shared/
│   │   ├── header.tsx
│   │   ├── errorMessage.tsx
│   │   └── loadingSpinner.tsx
│
├── hooks/                        # Global shared hooks (debounce, etc.)
│
├── pages/                        # Route-level pages
│   ├── CharacterListPage.tsx
│   ├── CharacterDetailsPage.tsx
│   └── NotFoundPage.tsx
│
├── providers/                    # React Query client, HOCs
│
├── routes/                       # Router config + withTitle HOC
│
├── App.tsx                       # App entry
└── main.tsx                      # Root bootstrap


This follows a feature-driven modular design, ideal for large-scale applications.

🧠 Core Concepts Implemented
✔ TanStack Query

Character list fetching

Character details → dependent episodes query

Query keys:

["characters"]

["character", id]

["episodes", ids]

✔ Debounced Search
useDebouncedValue(value, 500);

✔ URL Param Handling

useParams

useNavigate

✔ Episode Extraction
distructIds([".../1", ".../2"]) // → ["1", "2"]

✔ Bulk Fetching
GET /episode/1,2,3

✔ UI/UX Enhancements

Status badge color system

Strong hover animations

Clean layout

Elegant loading & error components

🛠 Installation & Setup
# Clone repo
git clone https://github.com/YOUR_USERNAME/GSG-Advanced-React-Task.git

cd GSG-Advanced-React-Task

# Install dependencies
npm install

# Start development server
npm run dev

🔗 API Used

All data comes from:

👉 https://rickandmortyapi.com/documentation/

Endpoints implemented:

/character

/character/:id

/episode/:ids

👨‍💻 Author

Moamen Al-Yazouri
Submitted for the GSG Advanced React Bootcamp Technical Task.