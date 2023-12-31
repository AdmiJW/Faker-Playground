'use client';

import { Alpha } from './Alpha';
import { Alphanumeric } from './Alphanumeric';
import { Binary } from './Binary';
import { FromCharacters } from './FromCharacters';
import { Hexadecimal } from './Hexadecimal';
import { NanoID } from './NanoID';
import { Numeric } from './Numeric';
import { Octal } from './Octal';
import { Sample } from './Sample';
import { Symbol } from './Symbol';
import { UUID } from './UUID';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function StringPage() {
    const t = useDict().string;

    return (
        <>
            <PageTitle title={t.title} />

            <Alpha />
            <Alphanumeric />
            <Binary />
            <FromCharacters />
            <Hexadecimal />
            <NanoID />
            <Numeric />
            <Octal />
            <Sample />
            <Symbol />
            <UUID />
        </>
    );
}
