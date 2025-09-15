import Square from './Square';
import type { BoardState } from '../types';

type Props = {
  board: BoardState;
  onPlay: (idx: number) => void;
  highlightLine?: number[] | null;
};

export default function Board({ board, onPlay, highlightLine }: Props) {
  return (
    <div className="grid grid-cols-3 grid-rows-3 gap-2 bg-slate-100 dark:bg-neutral-800 p-2 sm:p-4 rounded-xl shadow transition-colors aspect-square w-full max-w-[320px] sm:max-w-[400px] md:max-w-[480px] mx-auto">
      {board.map((value, idx) => (
        <Square
          key={idx}
          onClick={() => onPlay(idx)}
          isHighlighted={highlightLine?.includes(idx)}
        >
          {value === 'X' ? (
            <span className="text-rose-500 dark:text-rose-300">X</span>
          ) : value === 'O' ? (
            <span className="text-teal-600 dark:text-teal-300">O</span>
          ) : null}
        </Square>
      ))}
    </div>
  );
}