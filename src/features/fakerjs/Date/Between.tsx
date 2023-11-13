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

const Schema = z.object({
    from: zodDate,
    to: zodDate,
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.date.between>;

export function Between() {
    const t = useDict().date.between;
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
                    from: t.errorFromMustBeBeforeTo,
                    to: t.errorToMustBeAfterFrom,
                });
                return;
            }

            const between = faker.date.between({
                from: from.toDate(),
                to: to.toDate(),
            });
            setOutput(between);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='between' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
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
