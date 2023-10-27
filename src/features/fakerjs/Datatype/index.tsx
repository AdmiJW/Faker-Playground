'use client';

import { Boolean } from './Boolean';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function DatatypePage() {
    const t = useDict().datatype;

    return (
        <>
            <PageTitle title={t.title} />

            <Boolean />
        </>
    );
}
