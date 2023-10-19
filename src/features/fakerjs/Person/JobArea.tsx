'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random job area.`;

type Output = ReturnType<typeof faker.person.jobArea>;

export function JobArea() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.jobArea());
        toast.success('Faked job area!');
    };

    return (
        <FakerSection title='Job Area' id='job-area' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
