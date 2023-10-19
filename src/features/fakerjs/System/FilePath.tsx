'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a file path.`;

type Output = ReturnType<typeof faker.system.filePath>;

export function FilePath() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.system.filePath());
        toast.success('Faked file path!');
    };

    return (
        <FakerSection title='File Path' id='file-path' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
