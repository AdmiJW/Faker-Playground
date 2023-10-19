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

const tooltip = `Generates a random iban.`;

const Schema = z.object({
    countryCode: z.string().optional(),
    formatted: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.iban>;

export function IBAN() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            countryCode: '',
            formatted: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const IBAN = faker.finance.iban({
                countryCode: values.countryCode,
                formatted: values.formatted,
            });
            setOutput(IBAN);
            toast.success('Faked IBAN!');
        },
    });

    return (
        <FakerSection title='IBAN' id='iban' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='Country Code'
                    name='countryCode'
                    onChange={formik.handleChange}
                    tooltip='The country code from which you want to generate an IBAN, if none is provided a random country will be used.'
                    value={formik.values.countryCode || ''}
                    error={formik.errors.countryCode}
                />
                <Checkbox
                    label='Formatted'
                    checked={formik.values.formatted}
                    onChange={(newValue) =>
                        formik.setFieldValue('formatted', newValue)
                    }
                    tooltip='Return a formatted version of the generated IBAN.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
