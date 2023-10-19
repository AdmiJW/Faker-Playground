'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random hacker/IT abbreviation.`;

type Output = ReturnType<typeof faker.hacker.abbreviation>;

export function Abbreviation() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.hacker.abbreviation());
        toast.success('Faked abbreviation!');
    };

    return (
        <FakerSection title='Abbreviation' id='abbreviation' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
