'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a directory path.`;

type Output = ReturnType<typeof faker.system.directoryPath>;

export function DirectoryPath() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.system.directoryPath());
        toast.success('Faked directory path!');
    };

    return (
        <FakerSection
            title='Directory Path'
            id='directory-path'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
