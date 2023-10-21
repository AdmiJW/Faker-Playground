import Image from 'next/image';
import Link from 'next/link';
import { Button, Typography } from '@mui/material';

import logo from '@/assets/images/favicon.ico';

export function HomePage() {
    return (
        <div className='flex flex-1 flex-col items-center justify-center gap-8 py-10'>
            <Image src={logo} alt='FakerJS Logo' width={128} height={128} />
            <Typography
                color='primary'
                className='text-center text-3xl font-extrabold'
            >
                Welcome to Faker Playground!
            </Typography>
            <Button variant='contained' color='primary' size='large'>
                <Link href='/airline'>Faking start!</Link>
            </Button>
        </div>
    );
}
