'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a random buzz adjective that can be used to demonstrate data being viewed by a manager.`;

type Output = ReturnType<typeof faker.company.buzzAdjective>;

export function BuzzAdjective() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.buzzAdjective());
        toast.success('Faked buzz adjective!');
    };

    return (
        <FakerSection
            title='Buzz Adjective'
            id='buzz-adjective'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
