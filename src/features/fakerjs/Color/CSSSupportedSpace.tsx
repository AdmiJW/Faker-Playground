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

const tooltip = `Returns a random css supported color space name.`;

type Output = ReturnType<typeof faker.color.cssSupportedSpace>;

export function CSSSupportedSpace() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.color.cssSupportedSpace());
        toast.success('Faked css supported space!');
    };

    return (
        <FakerSection
            title='CSS Supported Space'
            id='css-supported-space'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
