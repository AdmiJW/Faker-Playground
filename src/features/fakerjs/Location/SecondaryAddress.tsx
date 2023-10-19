'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random localized secondary address. This refers to a specific location at a given address such as an apartment or room number.`;

type Output = ReturnType<typeof faker.location.secondaryAddress>;

export function SecondaryAddress() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.location.secondaryAddress());
        toast.success('Faked secondary address!');
    };

    return (
        <FakerSection
            title='Secondary Address'
            id='secondary-address'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
