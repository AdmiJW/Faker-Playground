'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random person suffix.`;

type Output = ReturnType<typeof faker.person.suffix>;

export function Suffix() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.suffix());
        toast.success('Faked suffix!');
    };

    return (
        <FakerSection title='Suffix' id='suffix' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
