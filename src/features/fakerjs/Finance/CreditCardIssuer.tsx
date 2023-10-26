'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random credit card issuer.`;

type Output = ReturnType<typeof faker.finance.creditCardIssuer>;

export function CreditCardIssuer() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.creditCardIssuer());
        toast.success('Faked credit card issuer!');
    };

    return (
        <FakerSection
            title='Credit Card Issuer'
            id='credit-card-issuer'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
