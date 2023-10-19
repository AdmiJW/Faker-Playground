'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = 'Generates a random airport.';

type Output = ReturnType<typeof faker.airline.airport>;

export function Airport() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.airline.airport());
        toast.success('Faked airport!');
    };

    return (
        <FakerSection title='Airport' id='airport' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
