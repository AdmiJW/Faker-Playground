'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';

import {
    NoParamsNeeded,
    FakerSection,
    Output,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

type Output = ReturnType<typeof faker.database.collation>;

export function MongoDBObjectID() {
    const t = useDict().database.mongoDbObjectId;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.database.mongodbObjectId());
        toast.success(t.success);
    };

    return (
        <FakerSection
            title={t.title}
            id='mongodb-object-id'
            tooltip={t.tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
