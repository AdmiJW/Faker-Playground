import { Tooltip as MuiTooltip, Typography } from '@mui/material';
import { MdInfoOutline } from '@react-icons/all-files/md/MdInfoOutline';

export function Tooltip({ title }: { title: React.ReactNode }) {
    return (
        <MuiTooltip title={title} arrow>
            <Typography color='primary'>
                <MdInfoOutline className='cursor-pointer' />
            </Typography>
        </MuiTooltip>
    );
}
