import { Typography } from '@mui/material';

export function NoParamsNeeded() {
    return (
        <Typography
            className='hidden flex-1 items-center justify-center text-lg font-light lg:flex'
            color='textPrimary'
        >
            <span className='ml-2'>No parameters needed 👊</span>
        </Typography>
    );
}
