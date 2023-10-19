'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random animal type.`;

type Output = ReturnType<typeof faker.animal.type>;

export function Type() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.type());
        toast.success('Faked type!');
    };

    return (
        <FakerSection title='Type' id='type' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
