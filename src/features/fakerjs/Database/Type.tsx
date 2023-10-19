'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a random database column type.`;

type Output = ReturnType<typeof faker.database.type>;

export function Type() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.database.type());
        toast.success('Faked type!');
    };

    return (
        <FakerSection title='Type' id='type' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
