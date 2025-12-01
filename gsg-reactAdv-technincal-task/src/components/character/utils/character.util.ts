import type { TCharacter } from "../../../@types";

export const getStatusClasses = (status: TCharacter["status"]): string => {
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