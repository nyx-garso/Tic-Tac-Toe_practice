import type { GameHistoryEntry } from '../types';


type Props = {
history: GameHistoryEntry[];
onJump: (index: number) => void;
currentIndex: number;
};


export default function HistoryList({ history, onJump, currentIndex }: Props) {
return (
<div className="space-y-2 max-h-48 overflow-auto">
{history.map((h, idx) => (
<button
key={idx}
onClick={() => onJump(idx)}
className={`w-full text-left p-2 rounded-md text-sm ${idx===currentIndex ? 'bg-emerald-50 border border-emerald-100' : 'bg-slate-50'}`}
>
{idx === 0 ? 'Game start' : `Move #${idx} — ${h.player ?? 'Unknown'}`}<span className="text-xs text-slate-400"> {h.lastMoveIndex !== null ? `(pos ${h.lastMoveIndex})` : ''}</span>
</button>
))}
</div>
);
}