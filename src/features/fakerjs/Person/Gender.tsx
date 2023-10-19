'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random gender.`;

type Output = ReturnType<typeof faker.person.gender>;

export function Gender() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.gender());
        toast.success('Faked gender!');
    };

    return (
        <FakerSection title='Gender' id='gender' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
