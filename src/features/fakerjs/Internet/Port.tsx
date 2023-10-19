'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random port number.`;

type Output = ReturnType<typeof faker.internet.port>;

export function Port() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.internet.port());
        toast.success('Faked port!');
    };

    return (
        <FakerSection title='Port' id='port' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
