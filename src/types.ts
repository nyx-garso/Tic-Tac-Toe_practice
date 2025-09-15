export type Player = 'X' | 'O' | null;


export type BoardState = Player[];


export type GameHistoryEntry = {
    board: BoardState;
    lastMoveIndex: number | null;
    player: Player; //last move player
};