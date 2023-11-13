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
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    firstName: z.string().optional(),
    lastName: z.string().optional(),
    sex: z.enum(['female', 'male']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.person.fullName>;

export function FullName() {
    const t = useDict().person.fullName;
    const faker = useFaker();

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
            toast.success(t.success);
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
        <FakerSection title={t.title} id='full-name' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.firstNameLabel}
                    name='firstName'
                    error={formik.errors.firstName}
                    value={formik.values.firstName ?? ''}
                    onChange={formik.handleChange}
                    tooltip={t.firstNameTooltip}
                    randomFn={randomizeFirstName}
                />
                <TextInput
                    label={t.lastNameLabel}
                    name='lastName'
                    error={formik.errors.lastName}
                    value={formik.values.lastName ?? ''}
                    onChange={formik.handleChange}
                    tooltip={t.lastNameTooltip}
                    randomFn={randomizeLastName}
                />
                <Select
                    label={t.sexLabel}
                    name='sex'
                    value={formik.values.sex}
                    onChange={formik.handleChange}
                    tooltip={t.sexTooltip}
                    options={[
                        { label: t.optionFemale, value: 'female' },
                        { label: t.optionMale, value: 'male' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
