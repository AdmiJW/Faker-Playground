'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

type Output = ReturnType<typeof faker.commerce.productName>;

export function ProductName() {
    const t = useDict().commerce.productName;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.commerce.productName());
        toast.success(t.success);
    };

    return (
        <FakerSection title={t.title} id='product-name' tooltip={t.tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
