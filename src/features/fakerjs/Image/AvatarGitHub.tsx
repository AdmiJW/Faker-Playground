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

type Output = ReturnType<typeof faker.image.avatarGitHub>;

export function AvatarGitHub() {
    const t = useDict().image.avatarGitHub;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.image.avatarGitHub());
        toast.success(t.success);
    };

    return (
        <FakerSection title={t.title} id='avatar-github' tooltip={t.tooltip}>
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} imageUrl={output} />
        </FakerSection>
    );
}
