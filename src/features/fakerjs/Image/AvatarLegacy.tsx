'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import {
    FakerSection,
    Output,
    NoParamsNeeded,
} from '@core/components/FakerSection';

const tooltip = `Generates a random avatar from https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar.`;

type Output = ReturnType<typeof faker.image.avatarLegacy>;

export function AvatarLegacy() {
    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.image.avatarLegacy());
        toast.success('Faked avatar legacy!');
    };

    return (
        <FakerSection
            title='Avatar Legacy'
            id='avatar-legacy'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} imageUrl={output} />
        </FakerSection>
    );
}
