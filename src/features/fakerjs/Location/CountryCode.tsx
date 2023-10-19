'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';

const tooltip = `Returns a random ISO_3166-1 country code.`;

const Schema = z.object({
    variant: z.enum(['alpha-2', 'alpha-3', 'numeric']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.countryCode>;

export function CountryCode() {
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
            toast.success('Faked country code!');
        },
    });

    return (
        <FakerSection title='Country Code' id='country-code' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label='Variant'
                    name='variant'
                    tooltip="The code to return. Can be either 'alpha-2' (two-letter code), 'alpha-3' (three-letter code) or 'numeric' (numeric code)."
                    onChange={formik.handleChange}
                    value={formik.values.variant}
                    options={[
                        { label: 'Alpha-2', value: 'alpha-2' },
                        { label: 'Alpha-3', value: 'alpha-3' },
                        { label: 'Numeric', value: 'numeric' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
