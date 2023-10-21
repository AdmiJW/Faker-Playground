'use client';

import { useTheme } from '@mui/material/styles';

import './animatedBackground.css';

export function AnimatedBackground() {
    const isDarkMode = useTheme().palette.mode === 'dark';

    const className = `animated-background-area ${
        isDarkMode ? 'dark-mode' : ''
    }`;

    return (
        <div className={className}>
            <ul className='animated-background-circles'>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}
