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

const tooltip = `Returns a random time zone.`;

type Output = ReturnType<typeof faker.location.timeZone>;

export function TimeZone() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.location.timeZone());
        toast.success('Faked time zone!');
    };

    return (
        <FakerSection title='Time Zone' id='time-zone' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
