'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random text based on a random lorem method.`;

type Output = ReturnType<typeof faker.lorem.text>;

export function Text() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.lorem.text());
        toast.success('Faked text!');
    };

    return (
        <FakerSection title='Text' id='text' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
