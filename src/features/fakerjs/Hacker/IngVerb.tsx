'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random hacker/IT verb for continuous actions (en: ing suffix; e.g. hacking).`;

type Output = ReturnType<typeof faker.hacker.ingverb>;

export function IngVerb() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.hacker.ingverb());
        toast.success('Faked ing verb!');
    };

    return (
        <FakerSection title='Ing verb' id='ing-verb' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
