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
    TextInput,
    Select,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generating a string consisting of alpha characters and digits.`;

const Schema = z.object({
    casing: z.enum(['lower', 'upper', 'mixed']),
    exclude: z.string().optional(),
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.string.alphanumeric>;

export function Alphanumeric() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            casing: 'mixed',
            exclude: '',
            min: 1,
            max: 1,
        },
        validationSchema,
        onSubmit: (values, { setErrors }) => {
            const isMinBiggerThanMax = values.min > values.max;
            if (isMinBiggerThanMax) {
                setErrors({
                    min: 'Min must be smaller than max.',
                    max: 'Max must be bigger than min.',
                });
                return;
            }

            const alphanumeric = faker.string.alphanumeric({
                casing: values.casing,
                exclude: values.exclude,
                length: {
                    min: values.min,
                    max: values.max,
                },
            });
            setOutput(alphanumeric);
            toast.success('Faked alphanumeric!');
        },
    });

    return (
        <FakerSection title='Alphanumeric' id='alphanumeric' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label='Casing'
                    name='casing'
                    onChange={formik.handleChange}
                    tooltip='The casing of the characters.'
                    value={formik.values.casing}
                    options={[
                        { label: 'Lower', value: 'lower' },
                        { label: 'Upper', value: 'upper' },
                        { label: 'Mixed', value: 'mixed' },
                    ]}
                />
                <TextInput
                    label='Exclude'
                    name='exclude'
                    onChange={formik.handleChange}
                    error={formik.errors.exclude}
                    tooltip='An array of characters and digits which should be excluded in the generated string.'
                    value={formik.values.exclude || ''}
                />
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='The number or range of characters and digits to generate.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='The number or range of characters and digits to generate.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
