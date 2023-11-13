'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

type Output = ReturnType<typeof faker.animal.bird>;

export function Bird() {
    const t = useDict().animal.bird;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.bird());
        toast.success(t.success);
    };

    return (
        <FakerSection title={t.title} id='bird' tooltip={t.tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
