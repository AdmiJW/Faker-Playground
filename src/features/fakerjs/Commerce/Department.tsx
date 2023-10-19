'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a department inside a shop.`;

type Output = ReturnType<typeof faker.commerce.department>;

export function Department() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.commerce.department());
        toast.success('Faked department!');
    };

    return (
        <FakerSection title='Department' id='department' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
