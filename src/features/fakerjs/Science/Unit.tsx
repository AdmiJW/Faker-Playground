'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random scientific unit.`;

type Output = ReturnType<typeof faker.science.unit>;

export function Unit() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.science.unit());
        toast.success('Faked unit!');
    };

    return (
        <FakerSection title='Unit' id='unit' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
