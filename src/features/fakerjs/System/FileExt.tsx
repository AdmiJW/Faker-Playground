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
    mimeType: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.system.fileExt>;

export function FileExt() {
    const t = useDict().system.fileExt;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            mimeType: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const fileExt = faker.system.fileExt(values.mimeType || undefined);
            setOutput(fileExt);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='file-ext' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.mimeTypeLabel}
                    name='mimeType'
                    value={formik.values.mimeType || ''}
                    onChange={formik.handleChange}
                    error={formik.errors.mimeType}
                    tooltip={t.mimeTypeTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
