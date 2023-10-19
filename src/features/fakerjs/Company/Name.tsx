'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Generates a random company name.`;

type Output = ReturnType<typeof faker.company.name>;

export function Name() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.name());
        toast.success('Faked name!');
    };

    return (
        <FakerSection title='Name' id='name' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
