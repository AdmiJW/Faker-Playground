'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';

const tooltip = `
    Generates a display name using the given person's name as base. The resulting display name may use one or both of the provided names. 
    If the input names include Unicode characters, the resulting display name will contain Unicode characters. It will not contain spaces.
`;

const Schema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.displayName>;

export function DisplayName() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        },
        validationSchema,
        onSubmit: (values) => {
            const displayName = faker.internet.displayName({
                firstName: values.firstName,
                lastName: values.lastName,
            });
            setOutput(displayName);
            toast.success('Faked display name!');
        },
    });

    const randomizeFirstName = () =>
        formik.setFieldValue('firstName', faker.person.firstName());
    const randomizeLastName = () =>
        formik.setFieldValue('lastName', faker.person.lastName());

    return (
        <FakerSection title='Display Name' id='display-name' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='First Name'
                    name='firstName'
                    value={formik.values.firstName ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.firstName}
                    tooltip='The optional first name to use.'
                    randomFn={randomizeFirstName}
                />
                <TextInput
                    label='Last Name'
                    name='lastName'
                    value={formik.values.lastName ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.lastName}
                    tooltip='The optional last name to use.'
                    randomFn={randomizeLastName}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
