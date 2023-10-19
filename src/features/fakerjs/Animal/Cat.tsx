'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random cat breed.`;

type Output = ReturnType<typeof faker.animal.cat>;

export function Cat() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.cat());
        toast.success('Faked cat!');
    };

    return (
        <FakerSection title='Cat' id='cat' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
