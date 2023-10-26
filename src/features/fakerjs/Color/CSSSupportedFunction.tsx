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

const tooltip = `Returns a random css supported color function name.`;

type Output = ReturnType<typeof faker.color.cssSupportedFunction>;

export function CSSSupportedFunction() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.color.cssSupportedFunction());
        toast.success('Faked css supported function!');
    };

    return (
        <FakerSection
            title='CSS Supported Function'
            id='css-supported-function'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
