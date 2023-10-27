'use client';

import { ChemicalElement } from './ChemicalElement';
import { Unit } from './Unit';

import { useDict } from '@locale';
import { PageTitle } from '@/core/components/FakerSection';

export function SciencePage() {
    const t = useDict().science;

    return (
        <>
            <PageTitle title={t.title} />

            <ChemicalElement />
            <Unit />
        </>
    );
}
