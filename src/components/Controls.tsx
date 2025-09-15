
type Props = {
nextPlayer: 'X'|'O'|null;
onRestart: () => void;
aiEnabled: boolean;
setAiEnabled: (v: boolean) => void;
};


export default function Controls({ nextPlayer, onRestart, aiEnabled, setAiEnabled }: Props) {
return (
<div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
<div className="flex items-center gap-3">
<div className="text-sm">Next: <strong className="ml-1">{nextPlayer ?? '-'}</strong></div>
<label className="inline-flex items-center gap-2 text-sm">
<input type="checkbox" checked={aiEnabled} onChange={(e)=>setAiEnabled(e.target.checked)} />
<span>Play vs AI</span>
</label>
</div>


<div className="flex gap-2">
<button onClick={onRestart} className="px-3 py-1 rounded-md bg-emerald-600 text-white text-sm hover:brightness-105">Restart</button>
</div>
</div>
);
}