'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random localized street name.`;

type Output = ReturnType<typeof faker.location.street>;

export function Street() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.location.street());
        toast.success('Faked street!');
    };

    return (
        <FakerSection title='Street' id='street' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
