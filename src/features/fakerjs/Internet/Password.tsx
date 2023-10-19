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

const tooltip = `Generates a random password.`;

const Schema = z.object({
    length: z.number().int().min(0),
    memorable: z.boolean(),
    prefix: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.password>;

export function Password() {
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
            toast.success('Faked password!');
        },
    });

    return (
        <FakerSection title='Password' id='password' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Length'
                    name='length'
                    value={formik.values.length.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.length}
                    tooltip='The length of the password to generate.'
                />
                <Checkbox
                    label='Memorable'
                    tooltip='Whether the generated password should be memorable.'
                    checked={formik.values.memorable}
                    onChange={(newValue) =>
                        formik.setFieldValue('memorable', newValue)
                    }
                />
                <TextInput
                    label='Prefix'
                    name='prefix'
                    value={formik.values.prefix ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.prefix}
                    tooltip='The prefix to use'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
