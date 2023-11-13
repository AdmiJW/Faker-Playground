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
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    eol: z.enum(['CRLF', 'LF']),
    merge: z.boolean(),
    refDate: zodDate,
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.git.commitEntry>;

export function CommitEntry() {
    const t = useDict().git.commitEntry;
    const faker = useFaker();

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='commit-entry' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label={t.eolLabel}
                    name='eol'
                    value={formik.values.eol}
                    onChange={formik.handleChange}
                    tooltip={t.eolTooltip}
                    options={[
                        { label: 'LF', value: t.optionLF },
                        { label: 'CRLF', value: t.optionCRLF },
                    ]}
                />
                <Checkbox
                    label={t.mergeLabel}
                    checked={formik.values.merge}
                    onChange={(newValue) =>
                        formik.setFieldValue('merge', newValue)
                    }
                    tooltip={t.mergeTooltip}
                />
                <DatePicker
                    label={t.refDateLabel}
                    name='refDate'
                    value={formik.values.refDate}
                    onChange={(newDate) =>
                        formik.setFieldValue('refDate', newDate)
                    }
                    error={formik.errors.refDate as string}
                    tooltip={t.refDateTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
