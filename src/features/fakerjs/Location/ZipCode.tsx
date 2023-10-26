'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates random zip code from specified format. If format is not specified, the locale's zip format is used.`;

const Schema = z.object({
    format: z.string().optional(),
    state: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.zipCode>;

export function ZipCode() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            format: '#####',
        },
        validationSchema,
        onSubmit: (values) => {
            const zipCode = faker.location.zipCode({
                format: values.format ? values.format : undefined,
                state: values.state,
            });
            setOutput(zipCode);
            toast.success('Faked zip code!');
        },
    });

    return (
        <FakerSection title='Zip Code' id='zip-code' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='Format'
                    name='format'
                    value={formik.values.format ?? ''}
                    onChange={formik.handleChange}
                    tooltip="The optional format used to generate the zip code. This won't be used if the state option is specified."
                    error={formik.errors.format}
                />
                <TextInput
                    label='State'
                    name='state'
                    value={formik.values.state ?? ''}
                    onChange={formik.handleChange}
                    tooltip='The state to generate the zip code for. If the current locale does not have a corresponding postcode_by_state definition, an error is thrown.'
                    error={formik.errors.state}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
