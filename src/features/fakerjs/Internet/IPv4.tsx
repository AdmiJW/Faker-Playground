'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random IPv4 address.`;

type Output = ReturnType<typeof faker.internet.ipv4>;

export function IPv4() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.internet.ipv4());
        toast.success('Faked ipv4!');
    };

    return (
        <FakerSection title='IPv4' id='ipv4' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
