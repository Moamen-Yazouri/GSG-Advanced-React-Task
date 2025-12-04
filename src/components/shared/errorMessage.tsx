import { AlertCircle } from "lucide-react";

interface ErrorMessageProps {
  title?: string;
  message: string;
}

export const ErrorMessage = ({ title = "Error", message }: ErrorMessageProps) => {
  return (
    <div className="max-w-2xl mx-auto bg-red-950/50 border border-red-800/50 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="text-red-200">{title}</h3>
          <p className="text-sm text-red-300/80 mt-1">{message}</p>
        </div>
      </div>
    </div>
  );
};
