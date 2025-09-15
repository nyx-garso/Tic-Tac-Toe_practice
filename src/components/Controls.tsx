type Props = {
  nextPlayer: 'X' | 'O' | null;
  onRestart: () => void;
  aiEnabled: boolean;
  setAiEnabled: (v: boolean) => void;
};

export default function Controls({ nextPlayer, onRestart, aiEnabled, setAiEnabled }: Props) {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      <button
        className="px-4 py-2 rounded bg-teal-600 dark:bg-teal-500 text-white font-bold shadow hover:bg-teal-700 dark:hover:bg-teal-400 transition"
        onClick={onRestart}
      >
        Restart
      </button>
      <button
        className={`px-4 py-2 rounded font-bold shadow transition
          ${aiEnabled
            ? 'bg-emerald-600 dark:bg-emerald-500 text-white hover:bg-emerald-700 dark:hover:bg-emerald-400'
            : 'bg-slate-200 dark:bg-neutral-700 text-slate-700 dark:text-slate-200 hover:bg-slate-300 dark:hover:bg-neutral-600'
          }`}
        onClick={() => setAiEnabled(!aiEnabled)}
      >
        {aiEnabled ? 'Disable AI' : 'Player vs AI'}
      </button>
      {nextPlayer && (
        <span className="px-4 py-2 rounded bg-slate-100 dark:bg-neutral-700 text-slate-700 dark:text-slate-200 font-semibold">
          Next: <span className={nextPlayer === 'X' ? 'text-rose-500 dark:text-rose-300' : 'text-teal-600 dark:text-teal-300'}>{nextPlayer}</span>
        </span>
      )}
    </div>
  );
}