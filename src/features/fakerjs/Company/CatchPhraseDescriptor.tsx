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

const tooltip = `Returns a random catch phrase descriptor that can be displayed to an end user.`;

type Output = ReturnType<typeof faker.company.catchPhraseDescriptor>;

export function CatchPhraseDescriptor() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.catchPhraseDescriptor());
        toast.success('Faked catch phrase descriptor!');
    };

    return (
        <FakerSection
            title='Catch Phrase Descriptor'
            id='catch-phrase-descriptor'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
