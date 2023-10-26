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

const tooltip = `Generates a date string for a git commit using the same format as git log.`;

const Schema = z.object({
    refDate: zodDate,
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.git.commitDate>;

export function CommitDate() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            refDate: dayjs(faker.defaultRefDate()),
        },
        validationSchema,
        onSubmit: (values) => {
            const commitDate = faker.git.commitDate({
                refDate: values.refDate.toDate(),
            });
            setOutput(commitDate);
            toast.success('Faked commit date!');
        },
    });

    return (
        <FakerSection title='Commit Date' id='commit-date' tooltip={tooltip}>
            <div className='flex-1'>
                <DatePicker
                    label='Reference Date'
                    name='refDate'
                    value={formik.values.refDate}
                    onChange={(newDate) =>
                        formik.setFieldValue('refDate', newDate)
                    }
                    error={formik.errors.refDate as string}
                    tooltip='The date to use as reference point for the commit.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
