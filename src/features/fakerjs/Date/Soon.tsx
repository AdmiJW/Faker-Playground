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
    days: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.soon>;

export function Soon() {
    const t = useDict().date.soon;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            days: 1,
            refDate: dayjs(faker.defaultRefDate()),
        },
        validationSchema,
        onSubmit: (values) => {
            const soon = faker.date.soon({
                days: values.days,
                refDate: values.refDate.toDate(),
            });
            setOutput(soon);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='soon' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label={t.daysLabel}
                    name='days'
                    value={formik.values.days.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.days}
                    tooltip={t.daysTooltip}
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
