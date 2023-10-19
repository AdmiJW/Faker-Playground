import {
    FormControl,
    InputLabel,
    Select as MuiSelect,
    MenuItem,
} from '@mui/material';
import { Tooltip } from './Tooltip';

export function Select({
    label,
    value,
    onChange,
    name,
    options,
    tooltip,
}: {
    label: string;
    value: string;
    onChange: any;
    name: string;
    options: { value: string; label: string }[];
    tooltip: React.ReactNode;
}) {
    return (
        <div className='flex items-center gap-2'>
            <FormControl variant='outlined' className='w-full'>
                <InputLabel>{label}</InputLabel>
                <MuiSelect
                    value={value}
                    onChange={onChange}
                    name={name}
                    label={label}
                    size='small'
                >
                    {options.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </MuiSelect>
            </FormControl>
            <Tooltip title={tooltip} />
        </div>
    );
}
