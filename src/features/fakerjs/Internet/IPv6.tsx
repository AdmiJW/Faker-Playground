'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random IPv6 address.`;

type Output = ReturnType<typeof faker.internet.ipv6>;

export function IPv6() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.internet.ipv6());
        toast.success('Faked ipv6!');
    };

    return (
        <FakerSection title='IPv6' id='ipv6' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
