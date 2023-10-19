'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';

const tooltip = `Generates a price between min and max (inclusive).`;

const Schema = z.object({
    dec: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
    min: z.number().int().nonnegative(),
    symbol: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.commerce.price>;

export function Price() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            dec: 2,
            max: 1000,
            min: 1,
            symbol: '',
        },
        validationSchema,
        onSubmit: (values, { setErrors }) => {
            const isMinGreaterThanMax = values.min > values.max;
            if (isMinGreaterThanMax) {
                setErrors({
                    max: 'Max must be greater than min.',
                    min: 'Min must be less than max.',
                });
                return;
            }

            const price = faker.commerce.price({
                dec: values.dec,
                max: values.max,
                min: values.min,
                symbol: values.symbol,
            });
            setOutput(price);
            toast.success('Faked price!');
        },
    });

    return (
        <FakerSection title='Price' id='price' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Decimals'
                    name='dec'
                    onChange={formik.handleChange}
                    tooltip='The number of decimal places.'
                    value={formik.values.dec.toString()}
                    error={formik.errors.dec}
                />
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    onChange={formik.handleChange}
                    tooltip='The minimum price.'
                    value={formik.values.min.toString()}
                    error={formik.errors.min}
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    onChange={formik.handleChange}
                    tooltip='The maximum price.'
                    value={formik.values.max.toString()}
                    error={formik.errors.max}
                />
                <TextInput
                    label='Symbol'
                    name='symbol'
                    onChange={formik.handleChange}
                    tooltip='The currency value to use.'
                    value={formik.values.symbol || ''}
                    error={formik.errors.symbol}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
