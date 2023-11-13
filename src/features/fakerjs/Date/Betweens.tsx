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
    min: z.number(),
    max: z.number(),
    from: zodDate,
    to: zodDate,
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.betweens>;

export function Betweens() {
    const t = useDict().date.betweens;
    const faker = useFaker();

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
                    min: isMinMoreThanMax ? t.errorMinMustBeLessThanMax : '',
                    max: isMinMoreThanMax ? t.errorMaxMustBeGreaterThanMin : '',
                    from: isFromAfterTo ? t.errorFromMustBeBeforeTo : '',
                    to: isFromAfterTo ? t.errorToMustBeAfterFrom : '',
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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='betweens' tooltip={t.tooltip}>
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
                <DatePicker
                    label={t.fromLabel}
                    name='from'
                    value={formik.values.from}
                    onChange={(newDate) =>
                        formik.setFieldValue('from', newDate)
                    }
                    error={formik.errors.from as string}
                    tooltip={t.fromTooltip}
                />
                <DatePicker
                    label={t.toLabel}
                    name='to'
                    value={formik.values.to}
                    onChange={(newDate) => formik.setFieldValue('to', newDate)}
                    error={formik.errors.to as string}
                    tooltip={t.toTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
