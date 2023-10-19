'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Generates a random catch phrase that can be displayed to an end user.`;

type Output = ReturnType<typeof faker.company.catchPhrase>;

export function CatchPhrase() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.catchPhrase());
        toast.success('Faked catch phrase!');
    };

    return (
        <FakerSection title='Catch Phrase' id='catch-phrase' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
