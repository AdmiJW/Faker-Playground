'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import {
    FakerSection,
    Output,
    Select,
    TextInput,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    separator: z.string().optional(),
    variant: z.enum(['10', '13']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.commerce.isbn>;

export function Isbn() {
    const t = useDict().commerce.isbn;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            separator: '-',
            variant: '13',
        },
        validationSchema,
        onSubmit: (values) => {
            const variant = parseInt(values.variant) as 10 | 13;
            const isbn = faker.commerce.isbn({
                separator: values.separator,
                variant,
            });
            setOutput(isbn);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='isbn' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.separatorLabel}
                    name='separator'
                    onChange={formik.handleChange}
                    tooltip={t.separatorTooltip}
                    value={formik.values.separator || ''}
                    error={formik.errors.separator}
                />
                <Select
                    label={t.variantLabel}
                    name='variant'
                    onChange={formik.handleChange}
                    tooltip={t.variantTooltip}
                    options={[
                        { label: '10', value: '10' },
                        { label: '13', value: '13' },
                    ]}
                    value={formik.values.variant}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
