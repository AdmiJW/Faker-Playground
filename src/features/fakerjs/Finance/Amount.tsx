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
import { useDict, useFaker } from '@locale';

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
    const t = useDict().finance.amount;
    const faker = useFaker();

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
                    max: t.errorMaxMustBeGreaterThanMin,
                    min: t.errorMinMustBeLessThanMax,
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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='amount' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label={t.autoFormatLabel}
                    checked={formik.values.autoFormat}
                    onChange={(newValue) =>
                        formik.setFieldValue('autoFormat', newValue)
                    }
                    tooltip={t.autoFormatTooltip}
                />
                <TextInput
                    type='number'
                    label={t.decimalsLabel}
                    name='dec'
                    onChange={formik.handleChange}
                    tooltip={t.decimalsTooltip}
                    value={formik.values.dec.toString()}
                    error={formik.errors.dec}
                />
                <TextInput
                    type='number'
                    label={t.minLabel}
                    name='min'
                    onChange={formik.handleChange}
                    tooltip={t.minTooltip}
                    value={formik.values.min.toString()}
                    error={formik.errors.min}
                />
                <TextInput
                    type='number'
                    label={t.maxLabel}
                    name='max'
                    onChange={formik.handleChange}
                    tooltip={t.maxTooltip}
                    value={formik.values.max.toString()}
                    error={formik.errors.max}
                />
                <TextInput
                    label={t.symbolLabel}
                    name='symbol'
                    onChange={formik.handleChange}
                    tooltip={t.symbolTooltip}
                    value={formik.values.symbol || ''}
                    error={formik.errors.symbol}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
