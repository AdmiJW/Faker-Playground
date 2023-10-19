import { Tooltip as MuiTooltip } from '@mui/material';
import { MdInfoOutline } from '@react-icons/all-files/md/MdInfoOutline';

export function Tooltip({ title }: { title: React.ReactNode }) {
    return (
        <MuiTooltip title={title} arrow>
            <span>
                <MdInfoOutline className='cursor-pointer text-primary' />
            </span>
        </MuiTooltip>
    );
}
