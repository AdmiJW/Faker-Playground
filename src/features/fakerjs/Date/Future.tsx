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

const tooltip = `Generates a random date in the future.`;

const Schema = z.object({
    refDate: zodDate,
    years: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.future>;

export function Future() {
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
            toast.success('Faked future!');
        },
    });

    return (
        <FakerSection title='Future' id='future' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Years'
                    name='years'
                    value={formik.values.years.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.years}
                    tooltip='The range of years the date may be in the future.'
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
