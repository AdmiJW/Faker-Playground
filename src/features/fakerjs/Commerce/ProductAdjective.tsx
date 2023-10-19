'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns an adjective describing a product.`;

type Output = ReturnType<typeof faker.commerce.productAdjective>;

export function ProductAdjective() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.commerce.productAdjective());
        toast.success('Faked product adjective!');
    };

    return (
        <FakerSection
            title='Product Adjective'
            id='product-adjective'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
