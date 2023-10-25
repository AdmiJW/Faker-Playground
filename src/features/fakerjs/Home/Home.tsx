'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';

import logo from '@/assets/images/favicon.ico';
import { useDict } from '@locale';

export function HomePage() {
    const t = useDict().homeScreen;

    return (
        <div className='flex flex-1 flex-col items-center justify-center gap-8 py-10'>
            <Image src={logo} alt='FakerJS Logo' width={128} height={128} />
            <Typography
                color='primary'
                className='text-center text-3xl font-extrabold'
            >
                {t.welcome}
            </Typography>
            <Button variant='contained' color='primary' size='large'>
                <Link href='/airline'>{t.getStartedButton}</Link>
            </Button>
        </div>
    );
}
