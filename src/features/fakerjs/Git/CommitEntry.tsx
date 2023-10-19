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
    Checkbox,
    Select,
    zodDate,
} from '@core/components/FakerSection';

const tooltip = `Generates a random commit entry as printed by git log.`;

const Schema = z.object({
    eol: z.enum(['CRLF', 'LF']),
    merge: z.boolean(),
    refDate: zodDate,
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.git.commitEntry>;

export function CommitEntry() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            eol: 'CRLF',
            merge: false,
            refDate: dayjs(faker.defaultRefDate()),
        },
        validationSchema,
        onSubmit: (values) => {
            const commitEntry = faker.git.commitEntry({
                eol: values.eol,
                merge: values.merge,
                refDate: values.refDate.toDate(),
            });
            setOutput(commitEntry);
            toast.success('Faked commit entry!');
        },
    });

    return (
        <FakerSection title='Commit Entry' id='commit-entry' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label='EOL'
                    name='eol'
                    value={formik.values.eol}
                    onChange={formik.handleChange}
                    tooltip="Choose the end of line character to use. 'LF' = '\n', 'CRLF' = '\r\n'"
                    options={[
                        { label: 'LF', value: 'LF' },
                        { label: 'CRLF', value: 'CRLF' },
                    ]}
                />
                <Checkbox
                    label='Merge'
                    checked={formik.values.merge}
                    onChange={(newValue) =>
                        formik.setFieldValue('merge', newValue)
                    }
                    tooltip='Set to true to generate a merge message line.'
                />
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
