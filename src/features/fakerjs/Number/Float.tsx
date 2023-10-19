'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';

const tooltip = `Returns a single random floating-point number for a given precision or range and precision.`;

const Schema = z.object({
    min: z.number(),
    max: z.number(),
    precision: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.number.float>;

export function Float() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 0.0,
            max: 1.0,
            precision: 0.01,
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

            const float = faker.number.float({
                min: values.min,
                max: values.max,
                precision: values.precision,
            });
            setOutput(float);
            toast.success('Faked float!');
        },
    });

    return (
        <FakerSection title='Float' id='float' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='Lower bound for generated number.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='Upper bound for generated number.'
                />
                <TextInput
                    type='number'
                    label='Precision'
                    name='precision'
                    value={formik.values.precision.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.precision}
                    tooltip='Precision of the generated number.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
