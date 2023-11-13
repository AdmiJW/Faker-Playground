'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    format: z.string().optional(),
    state: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.zipCode>;

export function ZipCode() {
    const t = useDict().location.zipCode;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            format: '#####',
        },
        validationSchema,
        onSubmit: (values) => {
            const zipCode = faker.location.zipCode({
                format: values.format ? values.format : undefined,
                state: values.state,
            });
            setOutput(zipCode);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='zip-code' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.formatLabel}
                    name='format'
                    value={formik.values.format ?? ''}
                    onChange={formik.handleChange}
                    tooltip={t.formatTooltip}
                    error={formik.errors.format}
                />
                <TextInput
                    label={t.stateLabel}
                    name='state'
                    value={formik.values.state ?? ''}
                    onChange={formik.handleChange}
                    tooltip={t.stateTooltip}
                    error={formik.errors.state}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
