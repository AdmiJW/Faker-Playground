'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random file name with a given extension or a commonly used extension.`;

const Schema = z.object({
    ext: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.system.commonFileName>;

export function CommonFileName() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            ext: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const commonFileName = faker.system.commonFileName(values.ext);
            setOutput(commonFileName);
            toast.success('Faked common file name!');
        },
    });

    return (
        <FakerSection
            title='Common File Name'
            id='common-file-name'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='Extension'
                    name='ext'
                    value={formik.values.ext || ''}
                    onChange={formik.handleChange}
                    error={formik.errors.ext}
                    tooltip='Extension. Empty string is considered to be not set.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
