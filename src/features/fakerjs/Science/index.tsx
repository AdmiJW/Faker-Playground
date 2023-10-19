import { PageTitle } from '@/core/components/FakerSection';

import { ChemicalElement } from './ChemicalElement';
import { Unit } from './Unit';

export function SciencePage() {
    return (
        <>
            <PageTitle title='Science 🔬' />

            <ChemicalElement />
            <Unit />
        </>
    );
}
