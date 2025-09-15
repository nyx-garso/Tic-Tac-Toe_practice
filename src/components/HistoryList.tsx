import type { GameHistoryEntry } from '../types';

type Props = {
  history: GameHistoryEntry[];
  onJump: (idx: number) => void;
  currentIndex: number;
};

export default function HistoryList({ history, onJump, currentIndex }: Props) {
  return (
    <ul>
      {history.map((entry, idx) => (
        <li key={idx}>
          <button
            className={`w-full text-left px-2 py-1 rounded transition
              ${idx === currentIndex
                ? 'bg-teal-100 dark:bg-teal-800 text-teal-700 dark:text-teal-200 font-bold'
                : 'hover:bg-slate-200 dark:hover:bg-neutral-600 text-slate-700 dark:text-slate-200'
              }`}
            onClick={() => onJump(idx)}
          >
            {idx === 0
              ? 'Game start'
              : `#${idx}: Move by ${entry.player ?? ''} at ${entry.lastMoveIndex !== null ? entry.lastMoveIndex + 1 : ''}`}
          </button>
        </li>
      ))}
    </ul>
  );
}