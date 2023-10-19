'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random job type.`;

type Output = ReturnType<typeof faker.person.jobType>;

export function JobType() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.jobType());
        toast.success('Faked job type!');
    };

    return (
        <FakerSection title='Job Type' id='job-type' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
