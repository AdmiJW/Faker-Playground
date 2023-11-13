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

type Output = ReturnType<typeof faker.company.catchPhraseNoun>;

export function CatchPhraseNoun() {
    const t = useDict().company.catchPhraseNoun;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.catchPhraseNoun());
        toast.success(t.success);
    };

    return (
        <FakerSection
            title={t.title}
            id='catch-phrase-noun'
            tooltip={t.tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
