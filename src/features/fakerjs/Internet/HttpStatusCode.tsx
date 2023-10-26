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

const tooltip = `Generates a random HTTP status code.`;

type Output = ReturnType<typeof faker.internet.httpStatusCode>;

export function HttpStatusCode() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.internet.httpStatusCode());
        toast.success('Faked http status code!');
    };

    return (
        <FakerSection
            title='HTTP Status Code'
            id='http-status-code'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
