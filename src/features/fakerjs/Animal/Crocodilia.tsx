'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random crocodilian species.`;

type Output = ReturnType<typeof faker.animal.crocodilia>;

export function Crocodilia() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.crocodilia());
        toast.success('Faked crocodilia!');
    };

    return (
        <FakerSection title='Crocodilia' id='crocodilia' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
