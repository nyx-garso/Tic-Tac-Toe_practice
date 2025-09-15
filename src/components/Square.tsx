import React from 'react';


type Props = {
    value: 'X' | 'O' | null;
    onClick: () => void;
    isHighlighted?: boolean;
};


export default function Square({ value, onClick, isHighlighted = false }: Props) {
    return (
        <button
            onClick={onClick}
            className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-2xl md:text-3xl font-semibold border border-slate-200 bg-white focus:outline-emerald-300
${isHighlighted ? 'ring-2 ring-emerald-300' : ''}`}
            aria-label={`square ${value ?? 'empty'}`}
        >
            {value}
        </button>
    );
}