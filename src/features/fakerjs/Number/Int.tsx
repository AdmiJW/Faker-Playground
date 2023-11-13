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
    min: z.number().int(),
    max: z.number().int(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.number.int>;

export function Int() {
    const t = useDict().number.int;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 0,
            max: Number.MAX_SAFE_INTEGER,
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

            const int = faker.number.int({
                min: values.min,
                max: values.max,
            });
            setOutput(int);
            toast.success('Faked int!');
        },
    });

    return (
        <FakerSection title={t.title} id='int' tooltip={t.tooltip}>
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
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
