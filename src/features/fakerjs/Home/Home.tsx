import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@mui/material';

import logo from '@/assets/images/favicon.ico';

export function HomePage() {
    return (
        <div className='flex flex-1 flex-col items-center justify-center gap-8 py-10'>
            <Image src={logo} alt='FakerJS Logo' width={128} height={128} />
            <h1 className='text-center text-3xl font-extrabold text-primary'>
                Welcome to Faker Playground!
            </h1>
            <Button
                variant='contained'
                color='primary'
                className=''
                size='large'
            >
                <Link href='/airline'>Faking start!</Link>
            </Button>
        </div>
    );
}
