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

const tooltip = `Generates a random date in the recent past.`;

const Schema = z.object({
    refDate: zodDate,
    days: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.recent>;

export function Recent() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            days: 1,
            refDate: dayjs(faker.defaultRefDate()),
        },
        validationSchema,
        onSubmit: (values) => {
            const recent = faker.date.recent({
                days: values.days,
                refDate: values.refDate.toDate(),
            });
            setOutput(recent);
            toast.success('Faked recent!');
        },
    });

    return (
        <FakerSection title='Recent' id='recent' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Days'
                    name='days'
                    value={formik.values.days.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.days}
                    tooltip='The range of days the date may be in the future.'
                />
                <DatePicker
                    label='Reference Date'
                    name='refDate'
                    value={formik.values.refDate}
                    onChange={(date) => {
                        formik.setFieldValue('refDate', date);
                    }}
                    error={formik.errors.refDate as string}
                    tooltip='The date to use as reference point for the newly generated date.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
