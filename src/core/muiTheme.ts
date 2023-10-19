'use client';

import { createTheme } from '@mui/material/styles';

import { poppins } from '@core/fonts';

const fonts = [poppins.style.fontFamily, 'Roboto', 'sans-serif'];

export const muiTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#e86500',
        },
        secondary: {
            main: '#f50057',
        },
    },
    typography: {
        fontFamily: fonts.join(','),
        button: {
            textTransform: 'none',
        },
    },
});
