// src/components/Game.tsx
import { useEffect, useState, type JSX } from 'react';
import Board from './Board';
import Controls from './Controls';
import HistoryList from './HistoryList';
import { calculateWinner, simpleAiMove } from '../utils/gameLogic';
import type { BoardState, GameHistoryEntry, Player } from '../types';

const EMPTY: BoardState = Array(9).fill(null);

export default function Game(): JSX.Element {
  const [history, setHistory] = useState<GameHistoryEntry[]>([
    { board: EMPTY, lastMoveIndex: null, player: null },
  ]);
  const [current, setCurrent] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<boolean>(true);
  const [aiEnabled, setAiEnabled] = useState<boolean>(false);

  const currentBoard = history[current].board;
  const winnerInfo = calculateWinner(currentBoard as BoardState);

  const nextPlayer: Player = winnerInfo ? null : (xIsNext ? 'X' : 'O');

  function handlePlay(idx: number) {
    if (currentBoard[idx] || calculateWinner(currentBoard as BoardState)) return;
    const player: Player = xIsNext ? 'X' : 'O';
    const newBoard = [...currentBoard] as BoardState;
    newBoard[idx] = player;
    const newHistory = history.slice(0, current + 1).concat({
      board: newBoard,
      lastMoveIndex: idx,
      player,
    });
    setHistory(newHistory);
    setCurrent(newHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  useEffect(() => {
    if (!aiEnabled) return;
    if (winnerInfo) return;
    if (!xIsNext) {
      const move = simpleAiMove(currentBoard as BoardState, 'O');
      const t = setTimeout(() => {
        setHistory((prev) => {
          const base = prev.slice(0, current + 1);
          const last = base[base.length - 1];
          if (calculateWinner(last.board as BoardState) || (last.board as BoardState)[move]) return prev;
          const nextBoard = [...(last.board as BoardState)];
          nextBoard[move] = 'O';
          const newHistory = base.concat([{ board: nextBoard, lastMoveIndex: move, player: 'O' }]);
          setCurrent(newHistory.length - 1);
          setXIsNext(true);
          return newHistory;
        });
      }, 300);
      return () => clearTimeout(t);
    }
  }, [aiEnabled, xIsNext, current, currentBoard, winnerInfo]);

  function jumpTo(idx: number) {
    setCurrent(idx);
    setXIsNext(idx % 2 === 0);
  }

  function restart() {
    setHistory([{ board: EMPTY, lastMoveIndex: null, player: null }]);
    setCurrent(0);
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 w-full max-w-4xl mx-auto px-2">
      <div className="flex flex-col items-center flex-1 min-w-0">
        <Board board={currentBoard as BoardState} onPlay={handlePlay} highlightLine={winnerInfo?.line ?? null} />
        <div className="mt-4 w-full max-w-md mx-auto">
          <Controls nextPlayer={nextPlayer} onRestart={restart} aiEnabled={aiEnabled} setAiEnabled={setAiEnabled} />
        </div>
        <div className="mt-3 text-sm w-full max-w-md mx-auto">
          {winnerInfo ? (
            winnerInfo.winner === 'draw' ? (
              <div className="text-center p-2 text-slate-600 dark:text-slate-300">It's a draw!</div>
            ) : (
              <div className="text-center p-2 text-emerald-700 dark:text-emerald-300">Winner: {winnerInfo.winner}</div>
            )
          ) : (
            <div className="text-center p-2 text-slate-500 dark:text-slate-400">Game in progress</div>
          )}
        </div>
      </div>
      <aside className="flex flex-col gap-4 w-full max-w-xs mx-auto">
        <div className="bg-slate-50 dark:bg-neutral-700 p-3 rounded-md transition-colors">
          <h3 className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Moves:</h3>
          <HistoryList history={history} onJump={jumpTo} currentIndex={current} />
        </div>
        <div className="bg-slate-50 dark:bg-neutral-700 p-3 rounded-md transition-colors">
          <h3 className="text-sm font-semibold mb-2 text-slate-700 dark:text-slate-200">Tips:</h3>
          <ul className="text-xs list-disc pl-4 text-slate-500 dark:text-slate-300">
            <li>Use the moves history list to time-travel and explore different outcomes.</li>
            <li>Toggle <strong>Player vs AI</strong> to let the simple AI play as O.</li>
            <li>Winning line is highlighted on the board.</li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
