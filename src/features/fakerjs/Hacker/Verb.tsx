'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random hacker/IT verb.`;

type Output = ReturnType<typeof faker.hacker.verb>;

export function Verb() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.hacker.verb());
        toast.success('Faked verb!');
    };

    return (
        <FakerSection title='Verb' id='verb' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
