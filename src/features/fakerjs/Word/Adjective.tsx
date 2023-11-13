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
import { getAlertTitleUtilityClass } from '@mui/material';

const Schema = z.object({
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
    strategy: z.enum(['any-length', 'closest', 'fail', 'longest', 'shortest']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.word.adjective>;

export function Adjective() {
    const t = useDict().word.adjective;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 1,
            max: 1,
            strategy: 'any-length',
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

            const adjective = faker.word.adjective({
                length: {
                    min: values.min,
                    max: values.max,
                },
                strategy: values.strategy,
            });
            setOutput(adjective);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='adjective' tooltip={t.tooltip}>
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
                <Select
                    label={t.strategyLabel}
                    name='strategy'
                    value={formik.values.strategy}
                    onChange={formik.handleChange}
                    tooltip={t.strategyTooltip}
                    options={[
                        { label: t.optionAnyLength, value: 'any-length' },
                        { label: t.optionClosest, value: 'closest' },
                        { label: t.optionFail, value: 'fail' },
                        { label: t.optionLongest, value: 'longest' },
                        { label: t.optionShortest, value: 'shortest' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
