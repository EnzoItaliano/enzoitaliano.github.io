import { Sun, Moon } from "lucide-react";

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

export default function Navbar({ theme, toggleTheme }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 w-full border-b border-zinc-200/50 dark:border-zinc-800/50 bg-white/30 dark:bg-black/30 backdrop-blur-xl px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2 font-bold text-lg">
        <span className="text-indigo-500">{"{ }"}</span> ENZO_ITALIANO
      </div>
      <button
        onClick={toggleTheme}
        className="p-2 rounded-xl border border-white/20 dark:border-white/10 bg-white/30 dark:bg-zinc-900/30 hover:bg-white/50 dark:hover:bg-zinc-800/50 transition-colors backdrop-blur-md shadow-sm"
      >
        {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
      </button>
    </nav>
  );
}
