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
    Select,
} from '@core/components/FakerSection';

const tooltip = `Returns a random sample of random or optionally specified length.`;

const Schema = z.object({
    min: z.number().int().nonnegative(),
    max: z.number().int().nonnegative(),
    strategy: z.enum(['any-length', 'closest', 'fail', 'longest', 'shortest']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.word.sample>;

export function Sample() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 1,
            max: 1,
            strategy: 'any-length',
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

            const sample = faker.word.sample({
                length: {
                    min: values.min,
                    max: values.max,
                },
                strategy: values.strategy,
            });
            setOutput(sample);
            toast.success('Faked sample!');
        },
    });

    return (
        <FakerSection title='Sample' id='sample' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='The expected length of the word.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='The expected length of the word.'
                />
                <Select
                    label='Strategy'
                    name='strategy'
                    value={formik.values.strategy}
                    onChange={formik.handleChange}
                    tooltip='The strategy to apply when no words with a matching length are found. Available error handling strategies:
                        fail: Throws an error if no words with the given length are found.
                        shortest: Returns any of the shortest words.
                        closest: Returns any of the words closest to the given length.
                        longest: Returns any of the longest words.
                        any-length: Returns a word with any length.
                    '
                    options={[
                        { label: 'Any length', value: 'any-length' },
                        { label: 'Closest', value: 'closest' },
                        { label: 'Fail', value: 'fail' },
                        { label: 'Longest', value: 'longest' },
                        { label: 'Shortest', value: 'shortest' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
