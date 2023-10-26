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
    zodDate,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates a random date between the given boundaries.`;

const Schema = z.object({
    from: zodDate,
    to: zodDate,
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.between>;

export function Between() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            from: dayjs(faker.defaultRefDate()),
            to: dayjs(faker.defaultRefDate()),
        },
        validationSchema,
        onSubmit: (values, { setErrors }) => {
            const { from, to } = values;

            if (from.isAfter(to)) {
                setErrors({
                    from: 'From date must be before to date',
                    to: 'To date must be after from date',
                });
                return;
            }

            const between = faker.date.between({
                from: from.toDate(),
                to: to.toDate(),
            });
            setOutput(between);
            toast.success('Faked between!');
        },
    });

    return (
        <FakerSection title='Between' id='between' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <DatePicker
                    label='From'
                    name='from'
                    value={formik.values.from}
                    onChange={(newDate) =>
                        formik.setFieldValue('from', newDate)
                    }
                    error={formik.errors.from as string}
                    tooltip='The early date boundary.'
                />
                <DatePicker
                    label='To'
                    name='to'
                    value={formik.values.to}
                    onChange={(newDate) => formik.setFieldValue('to', newDate)}
                    error={formik.errors.to as string}
                    tooltip='The late date boundary.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
