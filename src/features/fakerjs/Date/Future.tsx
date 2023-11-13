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
    zodDate,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    refDate: zodDate,
    years: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.future>;

export function Future() {
    const t = useDict().date.future;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            years: 1,
            refDate: dayjs(faker.defaultRefDate()),
        },
        validationSchema,
        onSubmit: (values) => {
            const future = faker.date.future({
                years: values.years,
                refDate: values.refDate.toDate(),
            });
            setOutput(future);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='future' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label={t.yearsLabel}
                    name='years'
                    value={formik.values.years.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.years}
                    tooltip={t.yearsTooltip}
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
