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

const tooltip = `Returns a random bird species.`;

type Output = ReturnType<typeof faker.animal.bird>;

export function Bird() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.bird());
        toast.success('Faked bird!');
    };

    return (
        <FakerSection title='Bird' id='bird' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
