'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';
import { Button, Paper, CircularProgress } from '@mui/material';
import JsonView from 'react18-json-view';

import 'react18-json-view/src/style.css';
import 'react18-json-view/src/dark.css';

export function Output({
    output,
    onFake,
    imageUrl,
}: {
    output: Object | string | undefined;
    onFake: () => void;
    imageUrl?: string;
}) {
    output ??= '';

    const isDarkMode = useTheme().palette.mode === 'dark';

    return (
        <div className='relative flex flex-1 flex-col gap-2'>
            <Paper
                className='max-h-40 min-h-[80px] max-w-lg flex-1 overflow-auto p-3 shadow-md'
                variant='outlined'
            >
                <JsonView
                    src={output}
                    collapsed={1}
                    dark={isDarkMode}
                    theme='atom'
                />
            </Paper>

            {imageUrl && <ImageOutput imageUrl={imageUrl} />}

            <div className='flex gap-2'>
                <Button
                    variant='contained'
                    fullWidth
                    color='primary'
                    className='text-white'
                    onClick={onFake}
                >
                    Fake!
                </Button>
            </div>
        </div>
    );
}

function ImageOutput({ imageUrl }: { imageUrl: string }) {
    const [isImageLoading, setIsImageLoading] = useState(false);

    useEffect(() => {
        setIsImageLoading(true);
    }, [imageUrl]);

    return (
        <div className='relative my-3 flex min-h-[150px] items-center justify-center text-center'>
            <Image
                src={imageUrl}
                alt='Output image'
                fill
                unoptimized
                onLoadingComplete={() => setIsImageLoading(false)}
                className={`object-contain ${isImageLoading && 'invisible'}`}
            />
            <CircularProgress className={`${!isImageLoading && 'hidden'}`} />
        </div>
    );
}
