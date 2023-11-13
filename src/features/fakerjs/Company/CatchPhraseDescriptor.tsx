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

type Output = ReturnType<typeof faker.company.catchPhraseDescriptor>;

export function CatchPhraseDescriptor() {
    const t = useDict().company.catchPhraseDescriptor;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.company.catchPhraseDescriptor());
        toast.success(t.success);
    };

    return (
        <FakerSection
            title={t.title}
            id='catch-phrase-descriptor'
            tooltip={t.tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
