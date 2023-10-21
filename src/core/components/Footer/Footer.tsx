import { Typography } from '@mui/material';

export function Footer() {
    return (
        <Typography
            color='textPrimary'
            className='p-6 text-center font-semibold'
        >
            Made with ❤️ by{' '}
            <a
                href='https://github.com/AdmiJW'
                target='_blank'
                className='text-blue-500'
            >
                AdmiJW
            </a>
        </Typography>
    );
}
