'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random job descriptor.`;

type Output = ReturnType<typeof faker.person.jobDescriptor>;

export function JobDescriptor() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.jobDescriptor());
        toast.success('Faked job descriptor!');
    };

    return (
        <FakerSection
            title='Job Descriptor'
            id='job-descriptor'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
