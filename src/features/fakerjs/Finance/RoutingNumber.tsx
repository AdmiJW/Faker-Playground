'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random routing number.`;

type Output = ReturnType<typeof faker.finance.routingNumber>;

export function RoutingNumber() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.routingNumber());
        toast.success('Faked routing number!');
    };

    return (
        <FakerSection
            title='Routing Number'
            id='routing-number'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
