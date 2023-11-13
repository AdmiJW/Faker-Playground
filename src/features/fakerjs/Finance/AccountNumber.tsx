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
    length: z.number().int().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.accountNumber>;

export function AccountNumber() {
    const t = useDict().finance.accountNumber;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            length: 8,
        },
        validationSchema,
        onSubmit: (values) => {
            const accountNumber = faker.finance.accountNumber({
                length: values.length,
            });
            setOutput(accountNumber);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='account-number' tooltip={t.tooltip}>
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
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
