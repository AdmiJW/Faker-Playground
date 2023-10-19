'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random Litecoin address.`;

type Output = ReturnType<typeof faker.finance.litecoinAddress>;

export function LitecoinAddress() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.litecoinAddress());
        toast.success('Faked litecoin address!');
    };

    return (
        <FakerSection
            title='Litecoin Address'
            id='litecoin-address'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
