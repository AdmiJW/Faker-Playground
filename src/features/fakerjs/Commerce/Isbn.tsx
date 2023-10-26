'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import {
    FakerSection,
    Output,
    Select,
    TextInput,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random ISBN identifier.`;

const Schema = z.object({
    separator: z.string().optional(),
    variant: z.enum(['10', '13']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.commerce.isbn>;

export function Isbn() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            separator: '-',
            variant: '13',
        },
        validationSchema,
        onSubmit: (values) => {
            const variant = parseInt(values.variant) as 10 | 13;
            const isbn = faker.commerce.isbn({
                separator: values.separator,
                variant,
            });
            setOutput(isbn);
            toast.success('Faked isbn!');
        },
    });

    return (
        <FakerSection title='ISBN' id='isbn' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='Separator'
                    name='separator'
                    onChange={formik.handleChange}
                    tooltip='The separator to use in the format.'
                    value={formik.values.separator || ''}
                    error={formik.errors.separator}
                />
                <Select
                    label='Variant'
                    name='variant'
                    onChange={formik.handleChange}
                    tooltip='The variant of the identifier to return. Can be either 10 (10-digit format) or 13 (13-digit format).'
                    options={[
                        { label: '10', value: '10' },
                        { label: '13', value: '13' },
                    ]}
                    value={formik.values.variant}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
