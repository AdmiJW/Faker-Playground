'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random lion species.`;

type Output = ReturnType<typeof faker.animal.lion>;

export function Lion() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.lion());
        toast.success('Faked lion!');
    };

    return (
        <FakerSection title='Lion' id='lion' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
