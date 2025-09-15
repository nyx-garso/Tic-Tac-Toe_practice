type Props = {
    value: 'X' | 'O' | null;
    onClick: () => void;
    isHighlighted?: boolean;
};


export default function Square({ value, onClick, isHighlighted = false }: Props) {
    return (
        <button
            onClick={onClick}
            className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-2xl md:text-3xl font-semibold border border-slate-200 dark:border-slate-700
                bg-white dark:bg-neutral-800 transition-colors
                text-slate-700 dark:text-slate-100
                focus:outline-emerald-300
                ${isHighlighted ? 'ring-2 ring-emerald-300' : ''}`}
            aria-label={`square ${value ?? 'empty'}`}
        >
            {value}
        </button>
    );
}