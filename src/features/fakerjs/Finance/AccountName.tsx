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

const tooltip = `Generates a random account name.`;

type Output = ReturnType<typeof faker.finance.accountName>;

export function AccountName() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.accountName());
        toast.success('Faked account name!');
    };

    return (
        <FakerSection title='Account Name' id='account-name' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
