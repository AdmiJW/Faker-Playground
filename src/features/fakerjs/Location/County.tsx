'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random localized county, or other equivalent second-level administrative entity for the locale's country such as a district or department.`;

type Output = ReturnType<typeof faker.location.county>;

export function County() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.location.county());
        toast.success('Faked county!');
    };

    return (
        <FakerSection title='County' id='county' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
