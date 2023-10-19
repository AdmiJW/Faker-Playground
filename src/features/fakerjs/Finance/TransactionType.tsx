'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random transaction type.`;

type Output = ReturnType<typeof faker.finance.transactionType>;

export function TransactionType() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.transactionType());
        toast.success('Faked transaction type!');
    };

    return (
        <FakerSection
            title='Transaction Type'
            id='transaction-type'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
