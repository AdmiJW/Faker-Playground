'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random rabbit species.`;

type Output = ReturnType<typeof faker.animal.rabbit>;

export function Rabbit() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.animal.rabbit());
        toast.success('Faked rabbit!');
    };

    return (
        <FakerSection title='Rabbit' id='rabbit' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
