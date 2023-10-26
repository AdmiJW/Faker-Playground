'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates a random PIN number.`;

const Schema = z.object({
    length: z.number().int().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.pin>;

export function PIN() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            length: 4,
        },
        validationSchema,
        onSubmit: (values) => {
            const pin = faker.finance.pin({
                length: values.length,
            });
            setOutput(pin);
            toast.success('Faked PIN!');
        },
    });

    return (
        <FakerSection title='PIN' id='pin' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Length'
                    name='length'
                    onChange={formik.handleChange}
                    tooltip='The length of the unmasked number.'
                    value={formik.values.length.toString()}
                    error={formik.errors.length}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
