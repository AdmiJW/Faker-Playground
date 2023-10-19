'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random avatar image url.`;

type Output = ReturnType<typeof faker.image.avatar>;

export function Avatar() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.image.avatar());
        toast.success('Faked avatar!');
    };

    return (
        <FakerSection title='Avatar' id='avatar' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} imageUrl={output} />
        </FakerSection>
    );
}
