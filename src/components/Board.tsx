import Square from './Square';
import type { BoardState } from '../types';


type Props = {
board: BoardState;
onPlay: (index: number) => void;
highlightLine?: number[] | null;
};


export default function Board({ board, onPlay, highlightLine=null }: Props) {
return (
<div className="grid grid-cols-3 gap-2">
{board.map((v, i) => (
<Square
key={i}
value={v}
onClick={() => onPlay(i)}
isHighlighted={!!highlightLine && highlightLine.includes(i)}
/>
))}
</div>
);
}