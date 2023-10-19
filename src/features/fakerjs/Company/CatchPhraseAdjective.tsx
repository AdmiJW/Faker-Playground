'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `Returns a random catch phrase adjective that can be displayed to an end user.`;

type Output = ReturnType<typeof faker.company.catchPhraseAdjective>;

export function CatchPhraseAdjective() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.catchPhraseAdjective());
        toast.success('Faked catch phrase adjective!');
    };

    return (
        <FakerSection
            title='Catch Phrase Adjective'
            id='catch-phrase-adjective'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
