'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random IPv4 or IPv6 address.`;

type Output = ReturnType<typeof faker.internet.ip>;

export function IP() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.internet.ip());
        toast.success('Faked ip!');
    };

    return (
        <FakerSection title='IP' id='ip' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
