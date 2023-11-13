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
    allowLeadingZeros: z.boolean(),
    exclude: z.string().optional(),
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.string.numeric>;

export function Numeric() {
    const t = useDict().string.numeric;
    const faker = useFaker();

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
                    min: t.errorMinMustBeLessThanMax,
                    max: t.errorMaxMustBeGreaterThanMin,
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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='numeric' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label={t.allowLeadingZeroesLabel}
                    checked={formik.values.allowLeadingZeros}
                    onChange={(newValue) =>
                        formik.setFieldValue('allowLeadingZeros', newValue)
                    }
                    tooltip={t.allowLeadingZeroesTooltip}
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
