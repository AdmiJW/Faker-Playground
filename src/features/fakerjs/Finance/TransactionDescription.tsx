'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random transaction description.`;

type Output = ReturnType<typeof faker.finance.transactionDescription>;

export function TransactionDescription() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.transactionDescription());
        toast.success('Faked transaction description!');
    };

    return (
        <FakerSection
            title='Transaction Description'
            id='transaction-description'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
