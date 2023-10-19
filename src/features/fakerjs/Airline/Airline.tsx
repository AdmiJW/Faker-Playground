'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = 'Generates a random airline.';

type Output = ReturnType<typeof faker.airline.airline>;

export function Airline() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.airline.airline());
        toast.success('Faked airline!');
    };

    return (
        <FakerSection title='Airline' id='airline' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
