'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random vehicle.`;

type Output = ReturnType<typeof faker.vehicle.vehicle>;

export function Vehicle() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.vehicle.vehicle());
        toast.success('Faked vehicle!');
    };

    return (
        <FakerSection title='Vehicle' id='vehicle' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
