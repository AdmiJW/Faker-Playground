'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a UUID v4 (Universally Unique Identifier).`;

type Output = ReturnType<typeof faker.string.uuid>;

export function UUID() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.string.uuid());
        toast.success('Faked UUID!');
    };

    return (
        <FakerSection title='UUID' id='uuid' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
