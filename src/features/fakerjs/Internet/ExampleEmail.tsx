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

const tooltip = `Generates an email address using an example mail provider using the given person's name as base.`;

const Schema = z.object({
    allowSpecialCharacters: z.boolean(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.exampleEmail>;

export function ExampleEmail() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            allowSpecialCharacters: false,
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
        },
        validationSchema,
        onSubmit: (values) => {
            const exampleEmail = faker.internet.exampleEmail({
                allowSpecialCharacters: values.allowSpecialCharacters,
                firstName: values.firstName,
                lastName: values.lastName,
            });
            setOutput(exampleEmail);
            toast.success('Faked example email!');
        },
    });

    const randomizeFirstName = () =>
        formik.setFieldValue('firstName', faker.person.firstName());

    const randomizeLastName = () =>
        formik.setFieldValue('lastName', faker.person.lastName());

    return (
        <FakerSection
            title='Example Email'
            id='example-email'
            tooltip={tooltip}
        >
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
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
