'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random periodic table element.`;

type Output = ReturnType<typeof faker.science.chemicalElement>;

export function ChemicalElement() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.science.chemicalElement());
        toast.success('Faked chemical element!');
    };

    return (
        <FakerSection
            title='Chemical Element'
            id='chemical-element'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
