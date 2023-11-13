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

type Output = ReturnType<typeof faker.commerce.product>;

export function Product() {
    const t = useDict().commerce.product;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.commerce.product());
        toast.success(t.success);
    };

    return (
        <FakerSection title={t.title} id='product' tooltip={t.tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
