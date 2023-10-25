'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
    Paper,
    IconButton,
    Tooltip,
    Typography,
    Menu,
    MenuItem,
} from '@mui/material';
import { MdMenu } from '@react-icons/all-files/md/MdMenu';
import { FaExternalLinkAlt } from '@react-icons/all-files/fa/FaExternalLinkAlt';
import { FaSun } from '@react-icons/all-files/fa/FaSun';
import { FaMoon } from '@react-icons/all-files/fa/FaMoon';
import { MdLanguage } from '@react-icons/all-files/md/MdLanguage';

import { useDrawerStore } from '@core/components/Drawer';
import { useDarkModeStore } from '@/core/states/darkMode';
import { useLocaleStore, useDict } from '@locale';

export function Navbar() {
    const [anchorElement, setAnchorElement] = useState<null | HTMLElement>(
        null
    );

    const toggle = useDrawerStore((state) => state.toggle);
    const isDarkMode = useDarkModeStore((state) => state.isDarkMode);

    const setDarkMode = useDarkModeStore((state) => state.setDarkMode);
    const changeLocale = useLocaleStore((state) => state.changeLocale);

    const onChangeLocale = (locale: Parameters<typeof changeLocale>[0]) => {
        changeLocale(locale);
        setAnchorElement(null);
    };

    const t = useDict();

    return (
        <Paper
            className='sticky top-3 z-50 m-3 flex items-center gap-4 rounded-xl px-4 py-2 shadow-lg backdrop-blur-sm'
            variant='outlined'
        >
            <IconButton onClick={toggle} size='large' color='primary'>
                <MdMenu className='text-lg' />
            </IconButton>

            <Link href='/' className='hidden items-center gap-2 md:flex'>
                <Typography color='primary' className='text-lg font-bold'>
                    {t.title}
                </Typography>
            </Link>

            <div className='flex-1' />

            {/* Buttons */}
            <div className='flex gap-2'>
                <Tooltip title={t.navbar.language}>
                    <IconButton
                        size='large'
                        color='primary'
                        onClick={(e) => setAnchorElement(e.currentTarget)}
                    >
                        <MdLanguage className='text-lg' />
                    </IconButton>
                </Tooltip>

                <Menu
                    anchorEl={anchorElement}
                    open={Boolean(anchorElement)}
                    onClose={() => setAnchorElement(null)}
                >
                    <MenuItem onClick={() => onChangeLocale('en')}>
                        English
                    </MenuItem>
                    <MenuItem onClick={() => onChangeLocale('zh_CN')}>
                        简体中文
                    </MenuItem>
                </Menu>

                <Tooltip title={t.navbar.darkMode}>
                    <IconButton
                        size='large'
                        color='primary'
                        onClick={() => setDarkMode(!isDarkMode)}
                    >
                        {isDarkMode ? (
                            <FaMoon className='text-lg' />
                        ) : (
                            <FaSun className='text-lg' />
                        )}
                    </IconButton>
                </Tooltip>

                <Tooltip title={t.navbar.fakerJsDoc}>
                    <a
                        href='https://fakerjs.dev/api/'
                        target='_blank'
                        rel='noreferrer'
                    >
                        <IconButton size='large' color='primary'>
                            <FaExternalLinkAlt className='text-sm' />
                        </IconButton>
                    </a>
                </Tooltip>
            </div>
        </Paper>
    );
}
