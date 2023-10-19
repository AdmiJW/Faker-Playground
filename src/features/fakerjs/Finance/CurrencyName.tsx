'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random currency name.`;

type Output = ReturnType<typeof faker.finance.currencyName>;

export function CurrencyName() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.currencyName());
        toast.success('Faked currency name!');
    };

    return (
        <FakerSection
            title='Currency Name'
            id='currency-name'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
