'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates a random job title.`;

type Output = ReturnType<typeof faker.person.jobTitle>;

export function JobTitle() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.jobTitle());
        toast.success('Faked job title!');
    };

    return (
        <FakerSection title='Job Title' id='job-title' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
