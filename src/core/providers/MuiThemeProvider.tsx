'use client';

import { useState, useMemo, useEffect } from 'react';
import { useServerInsertedHTML } from 'next/navigation';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import { poppins } from '@core/fonts';
import { useDarkModeStore } from '@core/states/darkMode';

/// * Please reference: https://mui.com/material-ui/guides/next-js-app-router/

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
                    : 'rgba(255,255,255, .95)',
            },
        },
        typography: {
            fontFamily: fonts.join(','),
            button: {
                textTransform: 'none',
            },
        },
        components: {
            MuiDrawer: {
                styleOverrides: {
                    paper: {
                        backgroundColor: isDarkMode
                            ? 'rgba(51,51,51,1)'
                            : 'rgba(255,255,255,1)',
                    },
                },
            },
        },
    });
}

function useMuiTheme() {
    const isDarkMode = useDarkModeStore((state) => state.isDarkMode);
    return useMemo(() => deriveTheme(isDarkMode), [isDarkMode]);
}

// 1. Check the system preferred color scheme. If it is dark, then set the dark mode.
// 2. Then, check if localStorage has a value for dark mode. If it has, then set the dark mode.
// 3. Watch for changes in the dark mode. If it changes, then update the localStorage.
function useInitializeDarkMode() {
    const setDarkMode = useDarkModeStore((state) => state.setDarkMode);

    useEffect(() => {
        const isPreferredDarkMode =
            window.matchMedia &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isSavedDarkMode = localStorage.getItem('darkMode');
        const isDarkMode = isSavedDarkMode
            ? JSON.parse(isSavedDarkMode)
            : isPreferredDarkMode;

        setDarkMode(isDarkMode);
    }, [setDarkMode]);
}

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export function MuiThemeProvider({
    options = { key: 'mui' },
    children,
}: {
    options?: Parameters<typeof createCache>[0];
    children: React.ReactNode;
}) {
    const [{ cache, flush }] = useState(() => {
        const cache = createCache(options);
        cache.compat = true;

        const prevInsert = cache.insert;
        let inserted: string[] = [];

        cache.insert = (...args) => {
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };

        const flush = () => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };

        return { cache, flush };
    });

    useServerInsertedHTML(() => {
        const names = flush();
        if (names.length === 0) return null;

        let styles = '';
        for (const name of names) styles += cache.inserted[name];

        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(' ')}`}
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        );
    });

    const muiTheme = useMuiTheme();
    useInitializeDarkMode();

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={muiTheme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </CacheProvider>
    );
}
