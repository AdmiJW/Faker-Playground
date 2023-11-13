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
    const t = useDict().string.alphanumeric;
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
                    min: t.errorMinMustBeLessThanMax,
                    max: t.errorMaxMustBeGreaterThanMin,
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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='alphanumeric' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label={t.casingLabel}
                    name='casing'
                    onChange={formik.handleChange}
                    tooltip={t.casingTooltip}
                    value={formik.values.casing}
                    options={[
                        { label: t.optionLower, value: 'lower' },
                        { label: t.optionUpper, value: 'upper' },
                        { label: t.optionMixed, value: 'mixed' },
                    ]}
                />
                <TextInput
                    label={t.excludeLabel}
                    name='exclude'
                    onChange={formik.handleChange}
                    error={formik.errors.exclude}
                    tooltip={t.excludeTooltip}
                    value={formik.values.exclude || ''}
                />
                <TextInput
                    type='number'
                    label={t.minLabel}
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip={t.minTooltip}
                />
                <TextInput
                    type='number'
                    label={t.maxLabel}
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip={t.maxTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
