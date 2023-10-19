'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random snake species.`;

type Output = ReturnType<typeof faker.animal.snake>;

export function Snake() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.snake());
        toast.success('Faked snake!');
    };

    return (
        <FakerSection title='Snake' id='snake' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
