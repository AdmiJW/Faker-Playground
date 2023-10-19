'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random country name.`;

type Output = ReturnType<typeof faker.location.country>;

export function Country() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.location.country());
        toast.success('Faked country!');
    };

    return (
        <FakerSection title='Country' id='country' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
