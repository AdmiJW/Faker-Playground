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
    TextInput,
    Checkbox,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    length: z.number().int().min(0),
    memorable: z.boolean(),
    prefix: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.password>;

export function Password() {
    const t = useDict().internet.password;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            length: 15,
            memorable: false,
            prefix: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const password = faker.internet.password({
                length: values.length,
                memorable: values.memorable,
                prefix: values.prefix,
            });
            setOutput(password);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='password' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label={t.lengthLabel}
                    name='length'
                    value={formik.values.length.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.length}
                    tooltip={t.lengthTooltip}
                />
                <Checkbox
                    label={t.memorableLabel}
                    tooltip={t.memorableTooltip}
                    checked={formik.values.memorable}
                    onChange={(newValue) =>
                        formik.setFieldValue('memorable', newValue)
                    }
                />
                <TextInput
                    label={t.prefixLabel}
                    name='prefix'
                    value={formik.values.prefix ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.prefix}
                    tooltip={t.prefixTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
