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

const tooltip = `Generates a random amount between the given bounds (inclusive).`;

const Schema = z.object({
    autoFormat: z.boolean(),
    dec: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
    min: z.number().int().nonnegative(),
    symbol: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.amount>;

export function Amount() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            autoFormat: false,
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

            const amount = faker.finance.amount({
                autoFormat: values.autoFormat,
                dec: values.dec,
                max: values.max,
                min: values.min,
                symbol: values.symbol,
            });
            setOutput(amount);
            toast.success('Faked amount!');
        },
    });

    return (
        <FakerSection title='Amount' id='amount' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Auto Format'
                    checked={formik.values.autoFormat}
                    onChange={(newValue) =>
                        formik.setFieldValue('autoFormat', newValue)
                    }
                    tooltip='If true this method will use Number.toLocaleString(). Otherwise it will use Number.toFixed().'
                />
                <TextInput
                    type='number'
                    label='Decimals'
                    name='dec'
                    onChange={formik.handleChange}
                    tooltip='The number of decimal places for the amount.'
                    value={formik.values.dec.toString()}
                    error={formik.errors.dec}
                />
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    onChange={formik.handleChange}
                    tooltip='The lower bound for the amount.'
                    value={formik.values.min.toString()}
                    error={formik.errors.min}
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    onChange={formik.handleChange}
                    tooltip='The upper bound for the amount.'
                    value={formik.values.max.toString()}
                    error={formik.errors.max}
                />
                <TextInput
                    label='Symbol'
                    name='symbol'
                    onChange={formik.handleChange}
                    tooltip='The symbol used to prefix the amount.'
                    value={formik.values.symbol || ''}
                    error={formik.errors.symbol}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
