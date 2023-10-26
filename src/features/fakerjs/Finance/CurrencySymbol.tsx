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

const tooltip = `Returns a random currency symbol.`;

type Output = ReturnType<typeof faker.finance.currencySymbol>;

export function CurrencySymbol() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.currencySymbol());
        toast.success('Faked currency symbol!');
    };

    return (
        <FakerSection
            title='Currency Symbol'
            id='currency-symbol'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
