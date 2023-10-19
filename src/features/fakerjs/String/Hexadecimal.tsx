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

const tooltip = `Returns a hexadecimal string.`;

const Schema = z.object({
    casing: z.enum(['lower', 'upper', 'mixed']),
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
    prefix: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.string.hexadecimal>;

export function Hexadecimal() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            casing: 'mixed',
            min: 1,
            max: 1,
            prefix: '0x',
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

            const hexadecimal = faker.string.hexadecimal({
                casing: values.casing,
                prefix: values.prefix,
                length: {
                    min: values.min,
                    max: values.max,
                },
            });
            setOutput(hexadecimal);
            toast.success('Faked hexadecimal!');
        },
    });

    return (
        <FakerSection title='Hexadecimal' id='hexadecimal' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label='Casing'
                    name='casing'
                    onChange={formik.handleChange}
                    tooltip='Casing of the generated number.'
                    value={formik.values.casing}
                    options={[
                        { label: 'Lower', value: 'lower' },
                        { label: 'Upper', value: 'upper' },
                        { label: 'Mixed', value: 'mixed' },
                    ]}
                />
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='The number or range of characters to generate after the prefix.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='The number or range of characters to generate after the prefix.'
                />
                <TextInput
                    label='Prefix'
                    name='prefix'
                    onChange={formik.handleChange}
                    error={formik.errors.prefix}
                    tooltip='Prefix for the generated number.'
                    value={formik.values.prefix || ''}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
