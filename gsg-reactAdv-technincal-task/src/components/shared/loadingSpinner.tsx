import { Loader2 } from "lucide-react";

export const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center min-h-80 overflow-hidden">
      <Loader2 className="w-8 h-8 animate-spin text-cyan-400" />
    </div>
  );
};
