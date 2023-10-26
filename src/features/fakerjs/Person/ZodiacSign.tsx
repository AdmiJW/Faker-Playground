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

const tooltip = `Returns a random zodiac sign.`;

type Output = ReturnType<typeof faker.person.zodiacSign>;

export function ZodiacSign() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.zodiacSign());
        toast.success('Faked zodiac sign!');
    };

    return (
        <FakerSection title='Zodiac Sign' id='zodiac-sign' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
