'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

type Output = ReturnType<typeof faker.image.avatarLegacy>;

export function AvatarLegacy() {
    const t = useDict().image.avatarLegacy;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.image.avatarLegacy());
        toast.success(t.success);
    };

    return (
        <FakerSection title={t.title} id='avatar-legacy' tooltip={t.tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} imageUrl={output} />
        </FakerSection>
    );
}
