'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `
    Generates a random commit sha.
    By default, the length of the commit sha is 40 characters.
    For a shorter commit sha, use the length option.
    Usual short commit sha length is:
    7 for GitHub,
    8 for GitLab
`;

const Schema = z.object({
    length: z.number().int().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.git.commitSha>;

export function CommitSHA() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            length: 40,
        },
        validationSchema,
        onSubmit: (values) => {
            const commitSHA = faker.git.commitSha({
                length: values.length,
            });
            setOutput(commitSHA);
            toast.success('Faked commit SHA!');
        },
    });

    return (
        <FakerSection title='Commit SHA' id='commit-sha' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Length'
                    name='length'
                    value={formik.values.length.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.length}
                    tooltip='The length of the commit SHA.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
