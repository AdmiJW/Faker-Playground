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

const tooltip = `Generates a random avatar from GitHub.`;

type Output = ReturnType<typeof faker.image.avatarGitHub>;

export function AvatarGitHub() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.image.avatarGitHub());
        toast.success('Faked avatar GitHub!');
    };

    return (
        <FakerSection
            title='Avatar GitHub'
            id='avatar-github'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} imageUrl={output} />
        </FakerSection>
    );
}
