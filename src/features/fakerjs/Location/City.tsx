'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random localized city name.`;

type Output = ReturnType<typeof faker.location.city>;

export function City() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.location.city());
        toast.success('Faked city!');
    };

    return (
        <FakerSection title='City' id='city' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
