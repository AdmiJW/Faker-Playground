'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a file type.`;

type Output = ReturnType<typeof faker.system.fileType>;

export function FileType() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.system.fileType());
        toast.success('Faked file type!');
    };

    return (
        <FakerSection title='File Type' id='file-type' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
