import { useNavigate } from "react-router-dom";

export const Header = () => {
    const navigate = useNavigate()
  return (
    <header className="bg-slate-900 border-b border-blue-900/30 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <button onClick={() => navigate('/')} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/50">
            <span className="text-white">GSG</span>
          </div>
          <div className="text-left">
            <h1 className="text-blue-100">GSG-Technical</h1>
            <p className="text-sm text-blue-300/70">Browse characters and episodes</p>
          </div>
        </button>
      </div>
    </header>
  );
};
