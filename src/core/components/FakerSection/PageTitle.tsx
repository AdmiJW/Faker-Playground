'use client';

import { useTheme } from '@mui/material/styles';

export function PageTitle({ title }: { title: string }) {
    const primaryColor = useTheme().palette.primary.main;

    return (
        <h1
            className='mx-3 py-20 text-center text-5xl font-extrabold uppercase text-white sm:text-7xl'
            style={{
                WebkitTextStroke: `4px ${primaryColor}`,
                textShadow: `4px 4px 0 rgba(0, 0, 0, 0.25)`,
            }}
        >
            {title}
        </h1>
    );
}
