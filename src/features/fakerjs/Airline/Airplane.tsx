'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = 'Generates a random airplane.';

type Output = ReturnType<typeof faker.airline.airplane>;

export function Airplane() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.airline.airplane());
        toast.success('Faked airplane!');
    };

    return (
        <FakerSection title='Airplane' id='airplane' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
