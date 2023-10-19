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

const tooltip = `Generating a string consisting of letters in the English alphabet.`;

const Schema = z.object({
    casing: z.enum(['lower', 'upper', 'mixed']),
    exclude: z.string().optional(),
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.string.alpha>;

export function Alpha() {
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

            const alpha = faker.string.alpha({
                casing: values.casing,
                exclude: values.exclude,
                length: {
                    min: values.min,
                    max: values.max,
                },
            });
            setOutput(alpha);
            toast.success('Faked alpha!');
        },
    });

    return (
        <FakerSection title='Alpha' id='alpha' tooltip={tooltip}>
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
                    tooltip='An array with characters which should be excluded in the generated string.'
                    value={formik.values.exclude || ''}
                />
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='The number or range of characters to generate.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='The number or range of characters to generate.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
