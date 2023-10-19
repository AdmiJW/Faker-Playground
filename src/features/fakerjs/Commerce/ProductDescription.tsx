'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a product description.`;

type Output = ReturnType<typeof faker.commerce.productDescription>;

export function ProductDescription() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.commerce.productDescription());
        toast.success('Faked product description!');
    };

    return (
        <FakerSection
            title='Product Description'
            id='product-description'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
