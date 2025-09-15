import Game from './components/Game';
import ThemeToggle from './components/ThemeToggle';

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-100 dark:bg-neutral-900 transition-colors p-2 sm:p-4">
      <div className="w-full max-w-lg sm:max-w-md bg-white dark:bg-neutral-800 rounded-2xl shadow-lg p-2 sm:p-6 flex flex-col items-center transition-colors">
        <header className="mb-2 sm:mb-4 w-full flex justify-between items-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-teal-700 dark:text-teal-300 text-center w-full">Tic‑Tac‑Toe — Remix</h1>
          <ThemeToggle />
        </header>
        <main className="w-full flex justify-center">
          <Game />
        </main>
        <footer className="mt-4 sm:mt-6 text-xs text-slate-400 dark:text-slate-500 text-center w-full">Practice Project</footer>
      </div>
    </div>
  );
}