'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random domain name.`;

type Output = ReturnType<typeof faker.internet.domainName>;

export function DomainName() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.internet.domainName());
        toast.success('Faked domain name!');
    };

    return (
        <FakerSection title='Domain Name' id='domain-name' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
