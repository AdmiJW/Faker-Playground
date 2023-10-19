'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random currency code. (The short text/abbreviation for the currency (e.g. US Dollar -> USD))`;

type Output = ReturnType<typeof faker.finance.currencyCode>;

export function CurrencyCode() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.currencyCode());
        toast.success('Faked currency code!');
    };

    return (
        <FakerSection
            title='Currency Code'
            id='currency-code'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
