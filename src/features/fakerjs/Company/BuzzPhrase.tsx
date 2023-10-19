'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Generates a random buzz phrase that can be used to demonstrate data being viewed by a manager.`;

type Output = ReturnType<typeof faker.company.buzzPhrase>;

export function BuzzPhrase() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.buzzPhrase());
        toast.success('Faked buzz phrase!');
    };

    return (
        <FakerSection title='Buzz Phrase' id='buzz-phrase' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
