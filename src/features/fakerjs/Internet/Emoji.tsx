'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random emoji.`;

type Output = ReturnType<typeof faker.internet.emoji>;

export function Emoji() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.internet.emoji());
        toast.success('Faked emoji!');
    };

    return (
        <FakerSection title='Emoji' id='emoji' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
