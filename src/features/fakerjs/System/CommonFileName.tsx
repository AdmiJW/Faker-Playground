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
    ext: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.system.commonFileName>;

export function CommonFileName() {
    const t = useDict().system.commonFileName;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            ext: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const commonFileName = faker.system.commonFileName(values.ext);
            setOutput(commonFileName);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='common-file-name' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.extensionLabel}
                    name='ext'
                    value={formik.values.ext || ''}
                    onChange={formik.handleChange}
                    error={formik.errors.ext}
                    tooltip={t.extensionTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
