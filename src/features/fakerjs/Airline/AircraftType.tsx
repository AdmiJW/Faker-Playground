'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random aircraft type.`;

type Output = ReturnType<typeof faker.airline.aircraftType>;

export function AircraftType() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.airline.aircraftType());
        toast.success('Faked aircraft type!');
    };

    return (
        <FakerSection
            title='Aircraft Type'
            id='aircraft-type'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
