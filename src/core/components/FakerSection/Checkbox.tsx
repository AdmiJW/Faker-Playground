import { Checkbox as MuiCheckbox, FormControlLabel } from '@mui/material';

import { Tooltip } from './Tooltip';

export function Checkbox({
    label,
    checked,
    tooltip,
    onChange,
}: {
    label: string;
    checked: boolean;
    tooltip: string;
    onChange: (checked: boolean) => void;
}) {
    return (
        <div className='flex items-center'>
            <FormControlLabel
                label={label}
                control={
                    <MuiCheckbox
                        checked={checked}
                        onChange={() => onChange(!checked)}
                    />
                }
            />
            <div className='flex-1'></div>
            <Tooltip title={tooltip} />
        </div>
    );
}
