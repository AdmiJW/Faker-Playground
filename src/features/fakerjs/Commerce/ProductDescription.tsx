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

type Output = ReturnType<typeof faker.commerce.productDescription>;

export function ProductDescription() {
    const t = useDict().commerce.productDescription;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.commerce.productDescription());
        toast.success('Faked product description!');
    };

    return (
        <FakerSection
            title={t.title}
            id='product-description'
            tooltip={t.tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
