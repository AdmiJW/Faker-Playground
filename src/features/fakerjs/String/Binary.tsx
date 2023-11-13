'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
    prefix: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.string.binary>;

export function Binary() {
    const t = useDict().string.binary;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 1,
            max: 1,
            prefix: '0b',
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

            const binary = faker.string.binary({
                prefix: values.prefix,
                length: {
                    min: values.min,
                    max: values.max,
                },
            });
            setOutput(binary);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='binary' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
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
                <TextInput
                    label={t.prefixLabel}
                    name='prefix'
                    onChange={formik.handleChange}
                    error={formik.errors.prefix}
                    tooltip={t.prefixTooltip}
                    value={formik.values.prefix || ''}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
