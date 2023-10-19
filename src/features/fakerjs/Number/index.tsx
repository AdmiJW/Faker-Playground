import { PageTitle } from '@/core/components/FakerSection';

import { BigIntSection } from './BigInt';
import { Binary } from './Binary';
import { Float } from './Float';
import { Hex } from './Hex';
import { Int } from './Int';
import { Octal } from './Octal';

export function NumberPage() {
    return (
        <>
            <PageTitle title='Number 🔢' />

            <BigIntSection />
            <Binary />
            <Float />
            <Hex />
            <Int />
            <Octal />
        </>
    );
}
