import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Tooltip } from './Tooltip';

import { BsFillDice6Fill } from '@react-icons/all-files/bs/BsFillDice6Fill';

export function TextInput({
    label,
    value,
    onChange,
    name,
    tooltip,
    error,
    type = 'text',
    step = 1,
    randomFn,
}: {
    label: string;
    value: string;
    onChange: any;
    name: string;
    tooltip: string;
    error?: string;
    type?: string;
    step?: number;
    randomFn?: () => any;
}) {
    return (
        <div className='flex items-center gap-2'>
            <TextField
                type={type}
                fullWidth
                label={label}
                value={value}
                onChange={onChange}
                name={name}
                size='small'
                variant='outlined'
                error={Boolean(error)}
                helperText={error}
                InputProps={{
                    inputProps: { step: step },
                    endAdornment: randomFn ? (
                        <InputAdornment position='end'>
                            <IconButton onClick={randomFn}>
                                <BsFillDice6Fill className='text-sm' />
                            </IconButton>
                        </InputAdornment>
                    ) : null,
                }}
            />
            <Tooltip title={tooltip} />
        </div>
    );
}
