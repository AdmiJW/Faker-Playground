'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';

const tooltip = `Generates a random phone number.`;

const Schema = z.object({
    format: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.phone.number>;

export function Number() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            format: '01#-########',
        },
        validationSchema,
        onSubmit: (values) => {
            const number = faker.phone.number(values.format);
            setOutput(number);
            toast.success('Faked number!');
        },
    });

    return (
        <FakerSection title='Number' id='number' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='Format'
                    name='format'
                    value={formik.values.format ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.format}
                    tooltip='Format of the phone number. Defaults to a random phone number format.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
