'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a random database column name.`;

type Output = ReturnType<typeof faker.database.column>;

export function Column() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.database.column());
        toast.success('Faked column!');
    };

    return (
        <FakerSection title='Column' id='column' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
