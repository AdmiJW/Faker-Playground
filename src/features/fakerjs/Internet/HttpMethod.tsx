'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random http method.`;

type Output = ReturnType<typeof faker.internet.httpMethod>;

export function HttpMethod() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.internet.httpMethod());
        toast.success('Faked http method!');
    };

    return (
        <FakerSection title='HTTP Method' id='http-method' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
