'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';

const tooltip = `
    Returns a random color space name from the worldwide accepted color spaces. 
    Source: https://en.wikipedia.org/wiki/List_of_color_spaces_and_their_uses
`;

type Output = ReturnType<typeof faker.color.space>;

export function Space() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.color.space());
        toast.success('Faked space!');
    };

    return (
        <FakerSection title='Space' id='space' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
