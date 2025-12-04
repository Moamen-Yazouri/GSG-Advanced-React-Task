🚀 GSG Technical Task — Rick & Morty Explorer

A clean, scalable React + TypeScript application built for the Gaza Sky Geeks Advanced React Bootcamp Technical Task.

This project showcases modern frontend architecture patterns, efficient API handling with TanStack Query, and a modular feature-driven structure designed for maintainability and real-world scalability.

🎯 Features
🔍 Characters Page

Displays a paginated list of Rick & Morty characters

Debounced search input (prevents API spam)

Responsive card layout

Each character navigates to its dedicated details page

🧪 Character Details

Character image + full information

Status badge with dynamic styling

Episode extraction via URL → ID parsing

Bulk episode fetching using /episode/:ids

Fully handled loading, error, and empty states

⚛️ Modern Architecture & Patterns Used

This project demonstrates:

Feature-based modular architecture

Custom Hooks per feature (useCharacters, useSearch, useCharDetails, useEpisodes)

Component-level utils (each component folder encapsulates utilities + hooks)

Centralized API layer with Axios

React Query (TanStack Query) for:

Caching

Background re-fetching

Loading & error states

HOC (withTitle) pattern to inject metadata into routes

Strong typing using a dedicated @types directory

Separation of concerns enforced throughout the codebase

Reusable UI components (LoadingSpinner, ErrorMessage, StatusBadge, etc.)

🧱 Project Structure

Your structure is clean and scalable. Here's the documented version for the README:

src/
│
├── @types/               # Global TypeScript interfaces (Character, Episode, API types)
├── api/                  # Axios API handler + service functions
│   ├── characters.ts
│   ├── episodes.ts
│   └── client.ts
│
├── components/           # UI components (each with its own logic & utils)
│   ├── character-list/
│   │     ├── components/
│   │     ├── hook/
│   │     └── utils/
│   │     ├── index.tsx
│   ├── character-details/
|   |     ├── components/
│   │     ├── hook/
│   │     └── utils/
│   │     ├── index.tsx
│   ├── errorMessage.tsx
│   ├── loadingSpinner.tsx
│   └── header/
│
├── hooks/                # Shared, generic hooks (e.g. useDebouncedValue)
│
├── pages/                # Route-level pages
│   ├── CharacterListPage.tsx
│   ├── CharacterDetailsPage.tsx
│   └── NotFoundPage.tsx
│
├── providers/            # React Query provider, theme provider, HOCs
│
├── routes/               # Routing setup + withTitle HOC
|
├── App.tsx               # App entry with route mapping
└── main.tsx              # Root bootstrap


This organization follows feature-driven modular design, often used in scalable production React apps.

🧠 Core Concepts Implemented
✔ TanStack Query

Used for all server-side state:

useQuery for fetching character list

Dependent queries: character → episodes

Proper query keys: ["characters"], ["character", id], ["episodes", ids]

✔ Debounced Search

Custom hook: useDebouncedValue
Prevents rapid firing of API requests.

✔ URL Param Handling

Using useParams & useNavigate for navigation.

✔ Bulk Episode Fetching

Converts episode URLs → IDs:

distructIds([".../1", ".../2"]); // → ["1", "2"]


Then fetches them via:

GET /episode/1,2,3

✔ Advanced UI/UX Components

Status badge color system

Strong hover effects

Clean detail view

Robust error handling

🛠️ Installation & Setup
# Clone the repo
git clone https://github.com/YOUR_USERNAME/gsg-reactAdv-technical-task.git

cd gsg-reactAdv-technical-task

# Install deps
npm install

# Run dev server
npm run dev

🔗 API Used

All data is fetched from:

👉 https://rickandmortyapi.com/documentation/

Endpoints used:

/character

/character/:id

/episode/:ids

🧑‍💻 Author

Moamen Al-Yazouri
Submitted for the GSG Advanced React Bootcamp Technical Task.