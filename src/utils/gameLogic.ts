import type { BoardState, Player } from '../types';


export const LINES = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
];


export function calculateWinner(board: BoardState) {
    for (const [a, b, c] of LINES) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return { winner: board[a] as Player, line: [a, b, c] };
        }
    }
    if (board.every(Boolean)) return { winner: 'draw' as const };
    return null;
}



export function simpleAiMove(board: BoardState, aiPlayer: Player): number {
    const human = aiPlayer === 'X' ? 'O' : 'X';

    for (let i = 0; i < 9; i++) if (!board[i]) {
        const copy = [...board]; copy[i] = aiPlayer;
        if (calculateWinner(copy)?.winner === aiPlayer) return i;
    }

    for (let i = 0; i < 9; i++) if (!board[i]) {
        const copy = [...board]; copy[i] = human;
        if (calculateWinner(copy)?.winner === human) return i;
    }
    
    if (!board[4]) return 4;
    
    const corners = [0, 2, 6, 8].filter(i => !board[i]);
    if (corners.length) return corners[Math.floor(Math.random() * corners.length)];
    
    const empties = board.map((v, i) => v ? -1 : i).filter(i => i >= 0);
    return empties[Math.floor(Math.random() * empties.length)];
}