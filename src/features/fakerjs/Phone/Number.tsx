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
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.phone.number>;

export function Number() {
    const t = useDict().phone.number;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            format: '01#-########',
        },
        validationSchema,
        onSubmit: (values) => {
            const number = faker.phone.number(values.format);
            setOutput(number);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='number' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.formatLabel}
                    name='format'
                    value={formik.values.format ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.format}
                    tooltip={t.formatTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
