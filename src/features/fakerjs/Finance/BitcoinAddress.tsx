'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random Bitcoin address.`;

type Output = ReturnType<typeof faker.finance.bitcoinAddress>;

export function BitcoinAddress() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.bitcoinAddress());
        toast.success('Faked bitcoin address!');
    };

    return (
        <FakerSection
            title='Bitcoin Address'
            id='bitcoin-address'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
