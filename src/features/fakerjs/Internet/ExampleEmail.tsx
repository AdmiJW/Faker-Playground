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
    allowSpecialCharacters: z.boolean(),
    firstName: z.string().optional(),
    lastName: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.exampleEmail>;

export function ExampleEmail() {
    const t = useDict().internet.exampleEmail;
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
            toast.success(t.success);
        },
    });

    const randomizeFirstName = () =>
        formik.setFieldValue('firstName', faker.person.firstName());

    const randomizeLastName = () =>
        formik.setFieldValue('lastName', faker.person.lastName());

    return (
        <FakerSection title={t.title} id='example-email' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Checkbox
                    label={t.allowSpecialCharactersLabel}
                    tooltip={t.allowSpecialCharactersTooltip}
                    checked={formik.values.allowSpecialCharacters}
                    onChange={(newValue) =>
                        formik.setFieldValue('allowSpecialCharacters', newValue)
                    }
                />
                <TextInput
                    label={t.firstNameLabel}
                    name='firstName'
                    value={formik.values.firstName ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.firstName}
                    tooltip={t.firstNameTooltip}
                    randomFn={randomizeFirstName}
                />
                <TextInput
                    label={t.lastNameLabel}
                    name='lastName'
                    value={formik.values.lastName ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.lastName}
                    tooltip={t.lastNameTooltip}
                    randomFn={randomizeLastName}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
