'use client';

import { useMemo } from 'react';
import { createTheme } from '@mui/material/styles';

import { poppins } from '@core/fonts';
import { useDarkModeStore } from '@core/states/darkMode';

const fonts = [poppins.style.fontFamily, 'Roboto', 'sans-serif'];

function deriveTheme(isDarkMode: boolean) {
    return createTheme({
        palette: {
            mode: isDarkMode ? 'dark' : 'light',
            primary: {
                main: isDarkMode ? '#ff610e' : '#e86500',
            },
            secondary: {
                main: '#f50057',
            },
            background: {
                paper: isDarkMode
                    ? 'rgba(51,51,51,.8)'
                    : 'rgba(255,255,255,.5)',
            },
        },
        typography: {
            fontFamily: fonts.join(','),
            button: {
                textTransform: 'none',
            },
        },
    });
}

export function useMuiTheme() {
    const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
    return useMemo(() => deriveTheme(isDarkMode), [isDarkMode]);
}
