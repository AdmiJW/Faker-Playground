'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates IMEI number.`;

type Output = ReturnType<typeof faker.phone.imei>;

export function IMEI() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.phone.imei());
        toast.success('Faked imei!');
    };

    return (
        <FakerSection title='IMEI' id='imei' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
