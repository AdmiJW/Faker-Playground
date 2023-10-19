'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';

const tooltip = `Returns a lowercase hexadecimal number.`;

const Schema = z.object({
    min: z.number().int(),
    max: z.number().int(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.number.hex>;

export function Hex() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: 0,
            max: 15,
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

            const hex = faker.number.hex({
                min: values.min,
                max: values.max,
            });
            setOutput(hex);
            toast.success('Faked hex!');
        },
    });

    return (
        <FakerSection title='Hex' id='hex' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.min}
                    tooltip='Lower bound for generated number.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.max}
                    tooltip='Upper bound for generated number.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
