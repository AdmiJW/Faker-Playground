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
    countryCode: z.string().optional(),
    formatted: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.iban>;

export function IBAN() {
    const t = useDict().finance.iban;
    const faker = useFaker();

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='iban' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.countryCodeLabel}
                    name='countryCode'
                    onChange={formik.handleChange}
                    tooltip={t.countryCodeTooltip}
                    value={formik.values.countryCode || ''}
                    error={formik.errors.countryCode}
                />
                <Checkbox
                    label={t.formattedLabel}
                    checked={formik.values.formatted}
                    onChange={(newValue) =>
                        formik.setFieldValue('formatted', newValue)
                    }
                    tooltip={t.formattedTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
