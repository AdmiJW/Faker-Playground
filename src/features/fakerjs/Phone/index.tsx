'use client';

import { IMEI } from './IMEI';
import { Number } from './Number';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function PhonePage() {
    const t = useDict().phone;

    return (
        <>
            <PageTitle title={t.title} />

            <IMEI />
            <Number />
        </>
    );
}
