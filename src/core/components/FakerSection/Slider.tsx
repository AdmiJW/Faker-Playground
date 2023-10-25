import { Typography, Slider as MuiSlider } from '@mui/material';
import { Tooltip } from './Tooltip';

export function Slider({
    label,
    value,
    onChange,
    name,
    min,
    max,
    step,
    tooltip,
}: {
    label: string;
    value: number[] | number;
    onChange: any;
    name: string;
    min?: number;
    max?: number;
    step?: number;
    tooltip: string;
}) {
    return (
        <div className='flex items-center gap-2'>
            <Typography
                className='mt-2 flex items-center gap-2 whitespace-nowrap'
                gutterBottom
            >
                {label}
            </Typography>
            <MuiSlider
                className='mx-3'
                size='small'
                valueLabelDisplay='auto'
                value={value}
                onChange={onChange}
                name={name}
                min={min}
                max={max}
                step={step}
            />
            <Tooltip title={tooltip} />
        </div>
    );
}
