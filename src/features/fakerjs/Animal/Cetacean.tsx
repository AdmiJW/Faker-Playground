'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random cetacean species.`;

type Output = ReturnType<typeof faker.animal.cetacean>;

export function Cetacean() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.cetacean());
        toast.success('Faked cetacean!');
    };

    return (
        <FakerSection title='Cetacean' id='cetacean' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
