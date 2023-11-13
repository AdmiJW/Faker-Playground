'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    variant: z.enum(['alpha-2', 'alpha-3', 'numeric']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.countryCode>;

export function CountryCode() {
    const t = useDict().location.countryCode;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            variant: 'alpha-2',
        },
        validationSchema,
        onSubmit: (values) => {
            const countryCode = faker.location.countryCode({
                variant: values.variant,
            });
            setOutput(countryCode);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='country-code' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label={t.variantLabel}
                    name='variant'
                    tooltip={t.variantTooltip}
                    onChange={formik.handleChange}
                    value={formik.values.variant}
                    options={[
                        { label: t.optionAlpha2, value: 'alpha-2' },
                        { label: t.optionAlpha3, value: 'alpha-3' },
                        { label: t.optionNumeric, value: 'numeric' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
