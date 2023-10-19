'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a random human-readable color name.`;

type Output = ReturnType<typeof faker.color.human>;

export function Human() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.color.human());
        toast.success('Faked human!');
    };

    return (
        <FakerSection title='Human' id='human' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
