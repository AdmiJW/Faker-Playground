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
    issuer: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.creditCardNumber>;

export function CreditCardNumber() {
    const t = useDict().finance.creditCardNumber;
    const faker = useFaker();

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection
            title={t.title}
            id='credit-card-number'
            tooltip={t.tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.issuerLabel}
                    name='issuer'
                    value={formik.values.issuer || ''}
                    onChange={formik.handleChange}
                    error={formik.errors.issuer}
                    tooltip={t.issuerTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
