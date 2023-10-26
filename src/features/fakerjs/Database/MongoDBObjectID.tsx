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

const tooltip = `Returns a MongoDB ObjectId string.`;

type Output = ReturnType<typeof faker.database.collation>;

export function MongoDBObjectID() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const onFake = () => {
        setOutput(faker.database.mongodbObjectId());
        toast.success('Faked MongoDB ObjectId!');
    };

    return (
        <FakerSection
            title='MongoDB ObjectId'
            id='mongodb-object-id'
            tooltip={tooltip}
        >
            <NoParamsNeeded />
            <Output onFake={onFake} output={output} />
        </FakerSection>
    );
}
