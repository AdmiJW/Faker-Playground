'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a material of a product.`;

type Output = ReturnType<typeof faker.commerce.productMaterial>;

export function ProductMaterial() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.commerce.productMaterial());
        toast.success('Faked product material!');
    };

    return (
        <FakerSection
            title='Product Material'
            id='product-material'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
