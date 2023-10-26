'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates a username using the given person's name as base. The resulting username may use neither, one or both of the names provided. This will always return a plain ASCII string. Some basic stripping of accents and transliteration of characters will be done.`;

const Schema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.email>;

export function UserName() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        },
        validationSchema,
        onSubmit: (values) => {
            const userName = faker.internet.userName({
                firstName: values.firstName,
                lastName: values.lastName,
            });
            setOutput(userName);
            toast.success('Faked username!');
        },
    });

    const randomizeFirstName = () =>
        formik.setFieldValue('firstName', faker.person.firstName());

    const randomizeLastName = () =>
        formik.setFieldValue('lastName', faker.person.lastName());

    return (
        <FakerSection title='Username' id='username' tooltip={tooltip}>
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
