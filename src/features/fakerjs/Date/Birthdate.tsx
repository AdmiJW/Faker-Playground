'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import dayjs from 'dayjs';

import {
    FakerSection,
    Output,
    DatePicker,
    TextInput,
    Select,
    zodDate,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    min: z.number().nonnegative(),
    max: z.number().nonnegative(),
    mode: z.enum(['age', 'year']),
    refDate: zodDate,
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.birthdate>;

export function Birthdate() {
    const t = useDict().date.birthdate;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 18,
            max: 80,
            mode: 'age',
            refDate: dayjs(faker.defaultRefDate()),
        },
        validationSchema,
        onSubmit: (values, { setErrors }) => {
            const { min, max } = values;

            if (min > max) {
                setErrors({
                    min: t.errorMinMustBeLessThanMax,
                    max: t.errorMaxMustBeGreaterThanMin,
                });
                return;
            }

            const birthdate = faker.date.birthdate({
                min,
                max,
                mode: values.mode,
                refDate: values.refDate.toDate(),
            });
            setOutput(birthdate);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='birthdate' tooltip={t.tooltip}>
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
                    label={t.modeLabel}
                    name='mode'
                    value={formik.values.mode}
                    onChange={formik.handleChange}
                    tooltip={<ModeTooltip />}
                    options={[
                        { label: t.optionAge, value: 'age' },
                        { label: t.optionYear, value: 'year' },
                    ]}
                />
                <DatePicker
                    label={t.refDateLabel}
                    name='refDate'
                    value={formik.values.refDate}
                    onChange={(date) => {
                        formik.setFieldValue('refDate', date);
                    }}
                    error={formik.errors.refDate as string}
                    tooltip={t.refDateTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}

function ModeTooltip() {
    const t = useDict().date.birthdate;

    return (
        <div>
            {t.modeTooltip1}
            <ul className='flex flex-col gap-2 pl-2 pt-2'>
                <li>{t.modeTooltip2}</li>
                <li>{t.modeTooltip3}</li>
            </ul>
        </div>
    );
}
