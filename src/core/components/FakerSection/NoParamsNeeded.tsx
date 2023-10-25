import { Typography } from '@mui/material';
import { useDict } from '@locale';

export function NoParamsNeeded() {
    const t = useDict().fakerSection;

    return (
        <Typography
            className='hidden flex-1 items-center justify-center text-lg font-light lg:flex'
            color='textPrimary'
        >
            <span className='ml-2'>{t.noParametersNeeded}</span>
        </Typography>
    );
}
