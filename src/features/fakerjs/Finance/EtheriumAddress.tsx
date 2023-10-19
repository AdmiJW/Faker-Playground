'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `
    Creates a random, non-checksum Ethereum address. To generate a checksummed Ethereum address (with specific per character casing), 
    wrap this method in a custom method and use third-party libraries to transform the result.
`;

type Output = ReturnType<typeof faker.finance.ethereumAddress>;

export function EtheriumAddress() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.finance.ethereumAddress());
        toast.success('Faked etherium address!');
    };

    return (
        <FakerSection
            title='Etherium Address'
            id='etherium-address'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
