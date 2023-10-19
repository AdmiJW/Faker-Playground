'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a semantic version.`;

type Output = ReturnType<typeof faker.system.semver>;

export function SemVer() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.system.semver());
        toast.success('Faked sem ver!');
    };

    return (
        <FakerSection title='Sem Ver' id='sem-ver' tooltip={tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
