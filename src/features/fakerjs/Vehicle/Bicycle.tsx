'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a type of bicycle.`;

type Output = ReturnType<typeof faker.vehicle.bicycle>;

export function Bicycle() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.vehicle.bicycle());
        toast.success('Faked bicycle!');
    };

    return (
        <FakerSection title='Bicycle' id='bicycle' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
