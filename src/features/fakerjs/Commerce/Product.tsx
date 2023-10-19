'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a short product name.`;

type Output = ReturnType<typeof faker.commerce.product>;

export function Product() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.commerce.product());
        toast.success('Faked product!');
    };

    return (
        <FakerSection title='Product' id='product' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
