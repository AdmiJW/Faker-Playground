'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates a string from the given characters.`;

const Schema = z.object({
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
    characters: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.string.fromCharacters>;

export function FromCharacters() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 1,
            max: 1,
            characters: 'abcdef',
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

            const fromCharacters = faker.string.fromCharacters(
                values.characters || '',
                {
                    min: values.min,
                    max: values.max,
                }
            );
            setOutput(fromCharacters);
            toast.success('Faked from characters!');
        },
    });

    return (
        <FakerSection
            title='From Characters'
            id='from-characters'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='The minimum length of the string to generate.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='The maximum length of the string to generate.'
                />
                <TextInput
                    label='Characters'
                    name='characters'
                    onChange={formik.handleChange}
                    error={formik.errors.characters}
                    tooltip='The characters to use for the string. Can be a string or an array of characters. If it is an array, then each element is treated as a single character even if it is a string with multiple characters.'
                    value={formik.values.characters || ''}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
