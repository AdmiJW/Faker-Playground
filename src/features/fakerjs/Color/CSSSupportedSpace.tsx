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

type Output = ReturnType<typeof faker.color.cssSupportedSpace>;

export function CSSSupportedSpace() {
    const t = useDict().color.cssSupportedSpace;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.color.cssSupportedSpace());
        toast.success(t.success);
    };

    return (
        <FakerSection
            title={t.title}
            id='css-supported-space'
            tooltip={t.tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
