import Link from 'next/link';
import { Button, Typography } from '@mui/material';
import { MdHome } from '@react-icons/all-files/md/MdHome';

export function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center pt-12'>
            <Typography color='primary' className='text-6xl font-extrabold'>
                404
            </Typography>

            <Typography
                className='text-xl font-light opacity-70'
                color='textPrimary'
            >
                Page not found
            </Typography>

            <Button
                className='mt-4'
                variant='contained'
                color='primary'
                size='large'
                endIcon={<MdHome />}
            >
                <Link href='/'>Home</Link>
            </Button>
        </div>
    );
}
