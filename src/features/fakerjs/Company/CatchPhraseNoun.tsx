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

const tooltip = `Returns a random catch phrase noun that can be displayed to an end user.`;

type Output = ReturnType<typeof faker.company.catchPhraseNoun>;

export function CatchPhraseNoun() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.catchPhraseNoun());
        toast.success('Faked catch phrase noun!');
    };

    return (
        <FakerSection
            title='Catch Phrase Noun'
            id='catch-phrase-noun'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
