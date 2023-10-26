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

const tooltip = `Generates an email address using the given person's name as base.`;

const Schema = z.object({
    allowSpecialCharacters: z.boolean(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    provider: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.email>;

export function Email() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            allowSpecialCharacters: false,
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            provider: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const email = faker.internet.email({
                allowSpecialCharacters: values.allowSpecialCharacters,
                firstName: values.firstName,
                lastName: values.lastName,
                provider: values.provider ? values.provider : undefined,
            });
            setOutput(email);
            toast.success('Faked email!');
        },
    });

    const randomizeFirstName = () =>
        formik.setFieldValue('firstName', faker.person.firstName());

    const randomizeLastName = () =>
        formik.setFieldValue('lastName', faker.person.lastName());

    return (
        <FakerSection title='Email' id='email' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label='Allow Special Characters'
                    tooltip="Whether special characters such as .!#$%&'*+-/=?^_`{|}~ should be included in the email address."
                    checked={formik.values.allowSpecialCharacters}
                    onChange={(newValue) =>
                        formik.setFieldValue('allowSpecialCharacters', newValue)
                    }
                />
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
                <TextInput
                    label='Provider'
                    name='provider'
                    value={formik.values.provider ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.provider}
                    tooltip='The mail provider domain to use. If not specified, a random free mail provider will be chosen.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
