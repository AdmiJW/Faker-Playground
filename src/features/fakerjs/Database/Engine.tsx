'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a random database engine.`;

type Output = ReturnType<typeof faker.database.engine>;

export function Engine() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.database.engine());
        toast.success('Faked engine!');
    };

    return (
        <FakerSection title='Engine' id='engine' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
