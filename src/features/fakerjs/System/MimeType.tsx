'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a mime-type.`;

type Output = ReturnType<typeof faker.system.mimeType>;

export function MimeType() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.system.mimeType());
        toast.success('Faked mime type!');
    };

    return (
        <FakerSection title='Mime Type' id='mime-type' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
