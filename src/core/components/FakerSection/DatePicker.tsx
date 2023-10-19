'use client';

import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers';
import dayjs, { Dayjs } from 'dayjs';
import { Tooltip } from './Tooltip';
import { z } from 'zod';

export const zodDate = z.custom<Dayjs>((value) => {
    return dayjs.isDayjs(value);
}, 'Invalid date');

export function DatePicker({
    label,
    value,
    onChange,
    name,
    tooltip,
    error,
}: {
    label: string;
    value: Dayjs;
    onChange: (date: Dayjs | null) => void;
    name: string;
    tooltip: string;
    error?: string;
}) {
    return (
        <div className='flex items-center gap-2'>
            <MuiDatePicker
                label={label}
                value={value}
                onChange={onChange}
                slotProps={{
                    textField: {
                        name,
                        error: Boolean(error),
                        helperText: error,
                        size: 'small',
                        variant: 'outlined',
                        fullWidth: true,
                    },
                }}
            />
            <Tooltip title={tooltip} />
        </div>
    );
}
