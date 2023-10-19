'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a random music genre.`;

type Output = ReturnType<typeof faker.music.genre>;

export function Genre() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.music.genre());
        toast.success('Faked genre!');
    };

    return (
        <FakerSection title='Genre' id='genre' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
