'use client';

import { Paper, Tooltip, Typography } from '@mui/material';
import { useSelectedHeaderStore } from '@/core/states/selectedHeader';
import { MdInfo } from '@react-icons/all-files/md/MdInfo';

export function FakerSection({
    title,
    id,
    tooltip,
    children,
}: {
    title: string;
    id: string;
    tooltip: string;
    children: React.ReactNode;
}) {
    const selectedHeader = useSelectedHeaderStore((state) => state.current);
    const isThisSelectedHeader = selectedHeader === id;
    const setSelectedHeader = useSelectedHeaderStore(
        (state) => state.setCurrent
    );
    const setSelectedHeaderToThis = () => {
        setSelectedHeader(id);
    };

    return (
        <Paper className='mx-3 my-2 bg-opacity-20 p-4 backdrop-blur-sm'>
            <Typography
                color='primary'
                className='flex items-center gap-3 pb-6'
                onClick={setSelectedHeaderToThis}
                onMouseEnter={setSelectedHeaderToThis}
            >
                <h2 id={id} className='text-2xl font-bold'>
                    {title}
                </h2>

                <Tooltip title={tooltip ?? ''}>
                    <span className='cursor-pointer text-xl'>
                        <MdInfo />
                    </span>
                </Tooltip>

                <a
                    href={`#${id}`}
                    className={
                        'text-xl transition-opacity ' +
                        (isThisSelectedHeader || 'opacity-0')
                    }
                >
                    #
                </a>
            </Typography>

            <div className='flex flex-col gap-4 md:flex-row'>{children}</div>
        </Paper>
    );
}
