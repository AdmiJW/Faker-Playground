'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a vehicle registration number (Vehicle Registration Mark - VRM)`;

type Output = ReturnType<typeof faker.vehicle.vrm>;

export function VRM() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.vehicle.vrm());
        toast.success('Faked VRM!');
    };

    return (
        <FakerSection title='VRM' id='vrm' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
