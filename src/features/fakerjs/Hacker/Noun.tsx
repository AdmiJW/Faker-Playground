'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random hacker/IT noun.`;

type Output = ReturnType<typeof faker.hacker.noun>;

export function Noun() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.hacker.noun());
        toast.success('Faked noun!');
    };

    return (
        <FakerSection title='Noun' id='noun' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
