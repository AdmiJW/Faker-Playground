'use client';

import { Typography } from '@mui/material';
import { useDict } from '@locale';

export function Footer() {
    const t = useDict().footer;

    return (
        <Typography
            color='textPrimary'
            className='p-6 text-center font-semibold'
        >
            {`${t.madeWithLove} `}
            <a
                href='https://github.com/AdmiJW'
                target='_blank'
                className='text-blue-500'
            >
                AdmiJW
            </a>
        </Typography>
    );
}
