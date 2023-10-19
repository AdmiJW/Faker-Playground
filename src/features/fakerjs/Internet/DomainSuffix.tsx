'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random domain suffix.`;

type Output = ReturnType<typeof faker.internet.domainSuffix>;

export function DomainSuffix() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.internet.domainSuffix());
        toast.success('Faked domain suffix!');
    };

    return (
        <FakerSection
            title='Domain Suffix'
            id='domain-suffix'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
