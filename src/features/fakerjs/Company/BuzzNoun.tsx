'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a random buzz noun that can be used to demonstrate data being viewed by a manager.`;

type Output = ReturnType<typeof faker.company.buzzNoun>;

export function BuzzNoun() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.buzzNoun());
        toast.success('Faked buzz noun!');
    };

    return (
        <FakerSection title='Buzz Noun' id='buzz-noun' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
