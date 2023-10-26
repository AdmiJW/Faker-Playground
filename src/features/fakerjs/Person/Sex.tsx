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

const tooltip = `
    Returns a random sex. Output of this method is localised, so it should not be used to fill 
    the parameter sex available in some other modules for example faker.person.firstName().
`;

type Output = ReturnType<typeof faker.person.sex>;

export function Sex() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.person.sex());
        toast.success('Faked sex!');
    };

    return (
        <FakerSection title='Sex' id='sex' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
