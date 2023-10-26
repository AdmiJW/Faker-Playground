'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random middle name.`;

const Schema = z.object({
    sex: z.enum(['female', 'male']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.person.middleName>;

export function MiddleName() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            sex: 'male',
        },
        validationSchema,
        onSubmit: (values) => {
            const middleName = faker.person.middleName(values.sex);
            setOutput(middleName);
            toast.success('Faked middle name!');
        },
    });

    return (
        <FakerSection title='Middle Name' id='middle-name' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label='Sex'
                    name='sex'
                    value={formik.values.sex}
                    onChange={formik.handleChange}
                    tooltip="The optional sex to use. Can be either 'female' or 'male'."
                    options={[
                        { label: 'Female', value: 'female' },
                        { label: 'Male', value: 'male' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
