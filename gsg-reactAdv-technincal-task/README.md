# Rick & Morty Characters App

A React + TypeScript application built as part of the **Gaza Sky Geeks – Advanced React Bootcamp** technical task.

The app uses the **Rick and Morty API** to display characters, support searching, and show detailed character details including the episodes they appear in.

---

## 🚀 Features

- **Characters List**
  - Fetches characters from the Rick & Morty API
  - Responsive grid of character cards
- **Search**
  - Debounced search by character name
  - Clean UX without extra API spam
- **Character Details**
  - Character image, status, species, gender, origin, location
  - List of episodes (fetched in bulk using their IDs)
- **Error & Loading States**
  - Global loading spinner and error messages
  - 404 / Not Found page

---

## 🛠 Tech Stack

- React 18 + TypeScript
- Vite
- React Router
- TanStack Query (React Query)
- Axios
- Tailwind CSS
- Lucide React Icons

---

## 📁 Project Structure

```txt
src/
  @types/         # Shared TypeScript types (Character, Episode, API responses, etc.)
  api/            # Axios API clients and HTTP helpers
  assets/         # Static assets (images, logos, etc.)
  components/     # UI components (each component may have its own hooks/utils/types/..etc)
    character-list/
    character-details/
    ...
  hooks/          # Reusable generic hooks (e.g. useDebouncedValue)
  pages/          # Route-level pages (CharacterListPage, CharacterDetailsPage, NotFoundPage)
  providers/      # App-level providers (e.g. React Query client, Router HOCs, etc.)
  routes/         # Route configuration and route HOCs (withTitle, etc.)
  service/        # Domain/service layer (business logic between api and UI)
  App.tsx
  main.tsx
Each major UI piece (like character list, character details) lives in its own folder under components/, and can contain its own:

hook/ – component-specific hooks

utils/ – small helpers related to that component

index.tsx / main JSX

This keeps logic co-located and makes the app easier to scale.

▶️ Getting Started
bash
Copy code
# Clone the repo
git clone https://github.com/YOUR_USERNAME/gsg-reactAdv-technical-task.git

cd gsg-reactAdv-technical-task

# Install dependencies
npm install

# Run the dev server
npm run dev
Then open the URL printed in the terminal (usually http://localhost:5173/).

🔗 API
Data is fetched from the public Rick & Morty API:

https://rickandmortyapi.com/api/character

https://rickandmortyapi.com/api/character/:id

https://rickandmortyapi.com/api/episode/:ids

👨‍💻 Author
Built by Moamen Al-Yazouri
Submitted for the GSG Advanced React Bootcamp – Technical Task.