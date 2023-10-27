'use client';

import { BigIntSection } from './BigInt';
import { Binary } from './Binary';
import { Float } from './Float';
import { Hex } from './Hex';
import { Int } from './Int';
import { Octal } from './Octal';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function NumberPage() {
    const t = useDict().number;

    return (
        <>
            <PageTitle title={t.title} />

            <BigIntSection />
            <Binary />
            <Float />
            <Hex />
            <Int />
            <Octal />
        </>
    );
}
