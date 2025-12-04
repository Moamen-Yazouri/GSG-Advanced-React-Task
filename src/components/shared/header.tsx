import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-slate-900 border-b border-blue-900/30 shadow-lg">
      <div className="container mx-auto px-4 py-6">
        <button
          onClick={() => navigate("/")}
          className="cursor-pointer flex items-center gap-3 hover:opacity-90 transition-opacity"
        >
          <div
            className="
              w-12 h-12 rounded-2xl
              bg-gradient-to-br from-cyan-500/30 via-blue-600/40 to-slate-900
              flex items-center justify-center
              border border-cyan-400/40
              shadow-lg shadow-cyan-500/40
            "
          >
            <img
              src="/logo.png"
              alt="GSG Technical logo"
              className="
                w-9 h-9 object-contain
                drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]
              "
            />
          </div>
          
          <div className="text-left">
            <h1 className="text-blue-100 font-semibold tracking-wide">
              GSG-Technical
            </h1>
            <p className="text-sm text-blue-300/70">
              Browse characters and episodes
            </p>
          </div>
        </button>
      </div>
    </header>
  );
};
