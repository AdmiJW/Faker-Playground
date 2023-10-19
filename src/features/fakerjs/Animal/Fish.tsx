'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random fish species.`;

type Output = ReturnType<typeof faker.animal.fish>;

export function Fish() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.fish());
        toast.success('Faked fish!');
    };

    return (
        <FakerSection title='Fish' id='fish' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
