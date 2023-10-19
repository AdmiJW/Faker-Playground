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

const tooltip = `Generates random dates between the given boundaries.`;

const Schema = z.object({
    min: z.number(),
    max: z.number(),
    from: zodDate,
    to: zodDate,
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.betweens>;

export function Betweens() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 3,
            max: 3,
            from: dayjs(faker.defaultRefDate()),
            to: dayjs(faker.defaultRefDate()),
        },
        validationSchema,
        onSubmit: (values, { setErrors }) => {
            const { min, max, from, to } = values;

            const isMinMoreThanMax = min > max;
            const isFromAfterTo = from.isAfter(to);
            const isError = isMinMoreThanMax || isFromAfterTo;
            if (isError) {
                const errors = {
                    min: isMinMoreThanMax
                        ? 'Min must be less than or equal to Max'
                        : '',
                    max: isMinMoreThanMax
                        ? 'Max must be greater than or equal to Min'
                        : '',
                    from: isFromAfterTo
                        ? 'From date must be before to date'
                        : '',
                    to: isFromAfterTo ? 'To date must be after from date' : '',
                };
                setErrors(errors);
                return;
            }

            const betweens = faker.date.betweens({
                count: { min, max },
                from: from.toDate(),
                to: to.toDate(),
            });
            setOutput(betweens);
            toast.success('Faked betweens!');
        },
    });

    return (
        <FakerSection title='Betweens' id='betweens' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='The minimum number of dates to generate.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='The maximum number of dates to generate.'
                />
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
