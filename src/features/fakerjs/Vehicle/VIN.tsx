'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a vehicle identification number (VIN).`;

type Output = ReturnType<typeof faker.vehicle.vin>;

export function VIN() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.vehicle.vin());
        toast.success('Faked VIN!');
    };

    return (
        <FakerSection title='VIN' id='vin' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
