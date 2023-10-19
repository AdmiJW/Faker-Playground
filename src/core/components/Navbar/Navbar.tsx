'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Paper, IconButton, Tooltip } from '@mui/material';
import { MdMenu } from '@react-icons/all-files/md/MdMenu';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt';

import { useDrawerStore } from '@core/components/Drawer';

import Logo from '@/assets/images/favicon.ico';

export function Navbar() {
    const toggle = useDrawerStore((state) => state.toggle);

    return (
        <Paper
            className='sticky top-3 z-50 m-3 flex items-center gap-4 rounded-xl px-4 py-2 shadow-sm backdrop-blur-sm'
            variant='outlined'
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}
        >
            <IconButton onClick={toggle}>
                <MdMenu className='text-lg text-primary' />
            </IconButton>

            <Link href='/' className='hidden items-center gap-2 md:flex'>
                <span className='text-lg font-bold text-primary'>
                    Faker Playground
                </span>
            </Link>

            <div className='flex-1' />

            <Tooltip title='Faker.js API documentation'>
                <a
                    href='https://fakerjs.dev/api/'
                    target='_blank'
                    rel='noreferrer'
                >
                    <IconButton>
                        <FaExternalLinkAlt className='text-sm text-primary' />
                    </IconButton>
                </a>
            </Tooltip>
        </Paper>
    );
}
