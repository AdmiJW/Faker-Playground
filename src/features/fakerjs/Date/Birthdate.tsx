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

const tooltip = `Returns a random birthdate.`;

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
                    min: 'Min must be less than or equal to Max',
                    max: 'Max must be greater than or equal to Min',
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
            toast.success('Faked birthdate!');
        },
    });

    return (
        <FakerSection title='Birthdate' id='birthdate' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='The minimum age or year to generate a birthdate.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='The maximum age or year to generate a birthdate.'
                />
                <Select
                    label='Mode'
                    name='mode'
                    value={formik.values.mode}
                    onChange={formik.handleChange}
                    tooltip={<ModeTooltip />}
                    options={[
                        { label: 'Age', value: 'age' },
                        { label: 'Year', value: 'year' },
                    ]}
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

function ModeTooltip() {
    return (
        <div>
            {`The mode to generate the birthdate. Supported modes are 'age' and 'year' . There are two modes available 'age' and 'year': `}
            <ul className='flex flex-col gap-2 pl-2 pt-2'>
                <li>
                    {`'age': The min and max options define the age of the person (e.g. 18 - 42).`}
                </li>
                <li>
                    {`'year': The min and max options define the range the birthdate may be in (e.g. 1900 - 2000).`}
                </li>
            </ul>
        </div>
    );
}
