'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random sex type.`;

type Output = ReturnType<typeof faker.person.sexType>;

export function SexType() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.sexType());
        toast.success('Faked sex type!');
    };

    return (
        <FakerSection title='Sex Type' id='sex-type' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
