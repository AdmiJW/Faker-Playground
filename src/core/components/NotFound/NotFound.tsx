import Link from 'next/link';
import { Button } from '@mui/material';
import { MdHome } from '@react-icons/all-files/md/MdHome';

export function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center pt-12'>
            <h1 className='text-6xl font-extrabold text-primary'>404</h1>
            <h2 className='text-xl text-gray-500'>Page not found</h2>

            <Button
                className='mt-4 text-white'
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
