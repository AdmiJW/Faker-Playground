'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Generates a random descriptive product name.`;

type Output = ReturnType<typeof faker.commerce.productName>;

export function ProductName() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.commerce.productName());
        toast.success('Faked product name!');
    };

    return (
        <FakerSection title='Product Name' id='product-name' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
