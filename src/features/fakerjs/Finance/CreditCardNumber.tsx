'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';

const tooltip = `Generates a random credit card number.`;

const Schema = z.object({
    issuer: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.creditCardNumber>;

export function CreditCardNumber() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            issuer: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const creditCardNumber = faker.finance.creditCardNumber({
                issuer: values.issuer,
            });
            setOutput(creditCardNumber);
            toast.success('Faked credit card number!');
        },
    });

    return (
        <FakerSection
            title='Credit Card Number'
            id='credit-card-number'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='Issuer'
                    name='issuer'
                    value={formik.values.issuer || ''}
                    onChange={formik.handleChange}
                    error={formik.errors.issuer}
                    tooltip='The name of the issuer (case-insensitive) or the format used to generate one.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
