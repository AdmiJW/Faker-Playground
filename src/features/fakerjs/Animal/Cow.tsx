'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random cow species.`;

type Output = ReturnType<typeof faker.animal.cow>;

export function Cow() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.cow());
        toast.success('Faked cow!');
    };

    return (
        <FakerSection title='Cow' id='cow' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
