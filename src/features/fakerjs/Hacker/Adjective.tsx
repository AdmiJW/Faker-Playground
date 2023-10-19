'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random hacker/IT adjective.`;

type Output = ReturnType<typeof faker.hacker.adjective>;

export function Adjective() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.hacker.adjective());
        toast.success('Faked adjective!');
    };

    return (
        <FakerSection title='Adjective' id='adjective' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
