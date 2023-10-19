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
    Checkbox,
} from '@core/components/FakerSection';

const tooltip = `Generates a given length string of digits.`;

const Schema = z.object({
    allowLeadingZeros: z.boolean(),
    exclude: z.string().optional(),
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.string.numeric>;

export function Numeric() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            allowLeadingZeros: true,
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

            const numeric = faker.string.numeric({
                allowLeadingZeros: values.allowLeadingZeros,
                exclude: values.exclude,
                length: {
                    min: values.min,
                    max: values.max,
                },
            });
            setOutput(numeric);
            toast.success('Faked numeric!');
        },
    });

    return (
        <FakerSection title='Numeric' id='numeric' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Allow Leading Zeros'
                    checked={formik.values.allowLeadingZeros}
                    onChange={(newValue) =>
                        formik.setFieldValue('allowLeadingZeros', newValue)
                    }
                    tooltip='Whether leading zeros are allowed or not.'
                />
                <TextInput
                    label='Exclude'
                    name='exclude'
                    onChange={formik.handleChange}
                    error={formik.errors.exclude}
                    tooltip='An array of digits which should be excluded in the generated string.'
                    value={formik.values.exclude || ''}
                />
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='The number or range of digits to generate.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='The number or range of digits to generate.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
