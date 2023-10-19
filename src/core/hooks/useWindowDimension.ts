'use client';

import { useState, useEffect } from 'react';

// Returns the window dimensions, which updates on resize
export function useWindowDimension() {
    const [dimension, setDimension] = useState({
        width: 0,
        height: 0,
    });

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth: width, innerHeight: height } = window;
            setDimension({ width, height });
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return dimension;
}
