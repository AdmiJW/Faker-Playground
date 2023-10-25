'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';
import { useDict } from '@locale';

type Output = ReturnType<typeof faker.airline.airplane>;

export function Airplane() {
    const t = useDict().airline.airplane;

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.airline.airplane());
        toast.success(t.success);
    };

    return (
        <FakerSection title={t.title} id='airplane' tooltip={t.tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
