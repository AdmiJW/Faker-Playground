'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random short biography`;

type Output = ReturnType<typeof faker.person.bio>;

export function Bio() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.bio());
        toast.success('Faked bio!');
    };

    return (
        <FakerSection title='Bio' id='bio' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
