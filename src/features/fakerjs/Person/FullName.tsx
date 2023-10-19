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
    Select,
    TextInput,
} from '@core/components/FakerSection';

const tooltip = `Generates a random full name.`;

const Schema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    sex: z.enum(['female', 'male']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.person.fullName>;

export function FullName() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            sex: 'male',
        },
        validationSchema,
        onSubmit: (values) => {
            const fullName = faker.person.fullName({
                firstName:
                    values.firstName === '' ? undefined : values.firstName,
                lastName: values.lastName === '' ? undefined : values.lastName,
                sex: values.sex,
            });
            setOutput(fullName);
            toast.success('Faked full name!');
        },
    });

    const randomizeFirstName = () =>
        formik.setFieldValue(
            'firstName',
            faker.person.firstName(formik.values.sex)
        );

    const randomizeLastName = () =>
        formik.setFieldValue(
            'lastName',
            faker.person.lastName(formik.values.sex)
        );

    return (
        <FakerSection title='Full Name' id='full-name' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='First Name'
                    name='firstName'
                    error={formik.errors.firstName}
                    value={formik.values.firstName ?? ''}
                    onChange={formik.handleChange}
                    tooltip='The optional first name.'
                    randomFn={randomizeFirstName}
                />
                <TextInput
                    label='Last Name'
                    name='lastName'
                    error={formik.errors.lastName}
                    value={formik.values.lastName ?? ''}
                    onChange={formik.handleChange}
                    tooltip='The optional last name.'
                    randomFn={randomizeLastName}
                />
                <Select
                    label='Sex'
                    name='sex'
                    value={formik.values.sex}
                    onChange={formik.handleChange}
                    tooltip="The optional sex to use. Can be either 'female' or 'male'."
                    options={[
                        { label: 'Female', value: 'female' },
                        { label: 'Male', value: 'male' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
