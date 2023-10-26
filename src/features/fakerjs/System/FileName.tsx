'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random file name with extension.`;

const Schema = z.object({
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.system.fileName>;

export function FileName() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 1,
            max: 1,
        },
        validationSchema,
        onSubmit: (values, { setErrors }) => {
            const isMinBiggerThanMax = values.min > values.max;
            if (isMinBiggerThanMax) {
                setErrors({
                    min: 'Min must be smaller than max.',
                    max: 'Max must be bigger than min.',
                });
                return;
            }

            const fileName = faker.system.fileName({
                extensionCount: {
                    min: values.min,
                    max: values.max,
                },
            });
            setOutput(fileName);
            toast.success('Faked file name!');
        },
    });

    return (
        <FakerSection title='File Name' id='file-name' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Min Extensions'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='Define how many extensions the file name should have.'
                />
                <TextInput
                    type='number'
                    label='Max Extensions'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='Define how many extensions the file name should have.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
