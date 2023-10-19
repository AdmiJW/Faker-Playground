'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Slider } from '@core/components/FakerSection';

const tooltip = `
    Returns the boolean value true or false.
    Note: A probability of 0.75 results in true being returned 75% of the calls; 
    likewise 0.3 => 30%. If the probability is <= 0.0, it will always return false. 
    If the probability is >= 1.0, it will always return true. 
    The probability is limited to two decimal places.
`;

const Schema = z.object({
    probability: z.number().min(0).max(1).step(0.01),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.datatype.boolean>;

export function Boolean() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            probability: 0.5,
        },
        validationSchema,
        onSubmit: (values) => {
            const boolean = faker.datatype.boolean({
                probability: values.probability,
            });
            setOutput(boolean);
            toast.success('Faked boolean!');
        },
    });

    return (
        <FakerSection title='Boolean' id='boolean' tooltip={tooltip}>
            <div className='flex-1'>
                <Slider
                    label='Probability'
                    name='probability'
                    value={formik.values.probability}
                    onChange={formik.handleChange}
                    min={0}
                    max={1}
                    step={0.01}
                    tooltip='The probability ([0.00, 1.00]) of returning true.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
