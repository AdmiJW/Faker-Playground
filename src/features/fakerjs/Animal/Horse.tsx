'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random horse breed.`;

type Output = ReturnType<typeof faker.animal.horse>;

export function Horse() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.horse());
        toast.success('Faked horse!');
    };

    return (
        <FakerSection title='Horse' id='horse' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
