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

type Output = ReturnType<typeof faker.color.cssSupportedFunction>;

export function CSSSupportedFunction() {
    const t = useDict().color.cssSupportedFunction;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.color.cssSupportedFunction());
        toast.success(t.success);
    };

    return (
        <FakerSection
            title={t.title}
            id='css-supported-function'
            tooltip={t.tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
