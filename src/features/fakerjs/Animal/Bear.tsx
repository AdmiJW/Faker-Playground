'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random bear species.`;

type Output = ReturnType<typeof faker.animal.bear>;

export function Bear() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.bear());
        toast.success('Faked bear!');
    };

    return (
        <FakerSection title='Bear' id='bear' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
