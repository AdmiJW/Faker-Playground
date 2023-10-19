'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Returns a commonly used file extension.`;

type Output = ReturnType<typeof faker.system.commonFileExt>;

export function CommonFileExt() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.system.commonFileExt());
        toast.success('Faked common file ext!');
    };

    return (
        <FakerSection
            title='Common File Ext'
            id='common-file-ext'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
