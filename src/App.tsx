import Game from './components/Game';


export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <header className="mb-4">
          <h1 className="text-3xl font-extrabold text-emerald-700">Tic‑Tac‑Toe — Remix</h1>
        </header>


        <main>
          <Game />
        </main>


        <footer className="mt-6 text-xs text-slate-400 text-center">Practice Project</footer>
      </div>
    </div>
  );
}