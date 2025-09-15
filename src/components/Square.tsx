import { type ReactNode } from 'react';

type Props = {
    children?: ReactNode;
    onClick: () => void;
    isHighlighted?: boolean;
};

export default function Square({ children, onClick, isHighlighted = false }: Props) {
    return (
        <button
            onClick={onClick}
            className={`w-full h-full aspect-square flex items-center justify-center border border-slate-300 dark:border-slate-700
                bg-white dark:bg-neutral-800 transition-colors
                text-slate-700 dark:text-slate-100
                focus:outline-emerald-300
                rounded-lg
                ${isHighlighted ? 'ring-2 ring-emerald-300' : ''}`}
            aria-label={`square ${children ?? 'empty'}`}
        >
            {children && (
                <span className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {children}
                </span>
            )}
        </button>
    );
}