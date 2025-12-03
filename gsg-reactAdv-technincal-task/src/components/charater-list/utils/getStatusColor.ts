export const getStatusColor = (status: string) => {
    switch (status) {
      case "Alive":
        return "bg-emerald-500/90 text-emerald-100";
      case "Dead":
        return "bg-red-500/90 text-red-100";
      default:
        return "bg-slate-500/90 text-slate-100";
    }
  };