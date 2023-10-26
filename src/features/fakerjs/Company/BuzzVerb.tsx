'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random buzz verb that can be used to demonstrate data being viewed by a manager.`;

type Output = ReturnType<typeof faker.company.buzzVerb>;

export function BuzzVerb() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.buzzVerb());
        toast.success('Faked buzz verb!');
    };

    return (
        <FakerSection title='Buzz Verb' id='buzz-verb' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
