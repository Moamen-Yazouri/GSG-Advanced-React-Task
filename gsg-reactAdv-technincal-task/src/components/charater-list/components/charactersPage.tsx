import { useList } from "../hook/useList";
import { SearchBar } from "./searchBar";
import { LoadingSpinner } from "../../loadingSpinner";
import { ErrorMessage } from "../../errorMessage";
import { CharactersList } from "./characterList";



const CharactersPage = () => {
  const {
    search,
    setSearch,
    chars,
    isLoading,
    isError,
    error,
  } = useList()

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-blue-100">Characters</h1>
          <p className="text-blue-300/70 mt-1">
            {chars ? `${chars.length} characters found` : "Loading characters..."}
          </p>
        </div>
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search characters by name..."
        />
      </div>

      {isLoading && <LoadingSpinner />}

      {isError && (
        <ErrorMessage
          title="Failed to load characters"
          message={error?.message || "An error occurred while fetching characters"}
        />
      )}

      {chars && !isLoading && (
        <CharactersList 
          characters={chars} 
        />
      )}
    </div>
  );
};

export default CharactersPage;
