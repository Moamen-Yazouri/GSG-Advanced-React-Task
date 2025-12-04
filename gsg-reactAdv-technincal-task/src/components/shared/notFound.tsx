import { Home, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export const NotFoundPage = () => {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl rounded-full"></div>
            <AlertTriangle className="w-24 h-24 text-cyan-400 relative animate-pulse" />
          </div>
        </div>

        <div className="space-y-2">
          <h1 className="text-blue-100 text-6xl">404</h1>
          <h2 className="text-blue-100 text-2xl">Portal Malfunction!</h2>
          <p className="text-blue-300/70">
            Wubba lubba dub dub! This dimension doesn&apos;t exist.
          </p>
        </div>

        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg hover:from-blue-500 hover:to-cyan-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50"
          >
            <Home className="w-5 h-5" />
            Return to Characters
          </Link>
        </div>
      </div>
    </div>
  );
};
