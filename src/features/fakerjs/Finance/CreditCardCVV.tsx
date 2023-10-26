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

const tooltip = `Generates a random credit card CVV.`;

type Output = ReturnType<typeof faker.finance.creditCardCVV>;

export function CreditCardCVV() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.creditCardCVV());
        toast.success('Faked credit card CVV!');
    };

    return (
        <FakerSection
            title='Credit Card CVV'
            id='credit-card-cvv'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
