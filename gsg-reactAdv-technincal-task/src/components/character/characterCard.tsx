import React from "react";
import { EStatus, type TCharacter } from "../../@types";

interface IProps {
  character: TCharacter;
}

const getStatusClasses = (status: TCharacter["status"]): string => {
  switch (status) {
    case "Alive":
      return "bg-emerald-500/15 text-emerald-300 border-emerald-500/40";
    case "Dead":
      return "bg-red-500/15 text-red-300 border-red-500/40";
    case "unknown":
      return "bg-slate-500/15 text-slate-300 border-slate-500/40";
    default:
      return "bg-slate-500/15 text-slate-300 border-slate-500/40";
  }
};

export const CharacterCard: React.FC<IProps> = ({ character }) => {
  const episodesCount = character.episode.length;

  return (
    <article className="max-w-md rounded-2xl border border-slate-700 bg-slate-900/80 text-slate-50 shadow-xl p-4 flex gap-4">
      {/* Avatar */}
      <div className="flex-shrink-0">
        <img
          src={character.image}
          alt={character.name}
          className="h-28 w-28 rounded-xl object-cover border border-slate-700"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 flex-1">
        {/* Name + Status */}
        <header className="flex items-start justify-between gap-2">
          <div>
            <h2 className="text-lg font-semibold leading-tight">
              {character.name}
            </h2>
            <p className="text-xs text-slate-400">
              ID #{character.id} • Created:{" "}
              {new Date(character.created).toLocaleDateString()}
            </p>
          </div>

          <span
            className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${getStatusClasses(
              character.status
            )}`}
          >
            <span
              className={`h-2 w-2 rounded-full ${
                character.status === EStatus.Alive
                  ? "bg-emerald-400"
                  : character.status === EStatus.Dead
                  ? "bg-red-400"
                  : "bg-slate-400"
              }`}
            />
            {character.status}
          </span>
        </header>

        {/* Species / Gender */}
        <div className="text-sm text-slate-200">
          <span className="font-medium">{character.species}</span>
          {character.type && (
            <span className="text-slate-400"> • {character.type}</span>
          )}
          <span className="text-slate-400"> • {character.gender}</span>
        </div>

        {/* Origin & Location */}
        <div className="mt-1 grid grid-cols-1 gap-1 text-xs text-slate-300">
          <p>
            <span className="font-semibold text-slate-400">Origin: </span>
            {character.origin.name}
          </p>
          <p>
            <span className="font-semibold text-slate-400">Last known: </span>
            {character.location.name}
          </p>
        </div>

        {/* Footer: episodes + link */}
        <footer className="mt-2 flex items-center justify-between text-xs">
          <span className="text-slate-400">
            Appears in{" "}
            <span className="font-semibold text-slate-100">
              {episodesCount}
            </span>{" "}
            episode{episodesCount === 1 ? "" : "s"}
          </span>

          <a
            href={character.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-sky-400 hover:text-sky-300"
          >
            View in API →
          </a>
        </footer>
      </div>
    </article>
  );
};
