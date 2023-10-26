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
    Slider,
    TextInput,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates a random longitude.`;

const Schema = z.object({
    minMax: z.array(z.number().min(-180).max(180)).length(2),
    precision: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.longitude>;

export function Longitude() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            minMax: [-180, 180],
            precision: 4,
        },
        validationSchema,
        onSubmit: (values) => {
            const longitude = faker.location.longitude({
                min: values.minMax[0],
                max: values.minMax[1],
                precision: values.precision,
            });
            setOutput(longitude);
            toast.success('Faked longitude!');
        },
    });

    return (
        <FakerSection title='Longitude' id='longitude' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Slider
                    label='Bound'
                    name='minMax'
                    value={formik.values.minMax}
                    onChange={formik.handleChange}
                    min={-180}
                    max={180}
                    step={0.001}
                    tooltip='The bounds for the longitude to generate.'
                />
                <TextInput
                    type='number'
                    label='Precision'
                    name='precision'
                    value={formik.values.precision.toString()}
                    onChange={formik.handleChange}
                    tooltip='The number of decimal points of precision for the longitude.'
                    error={formik.errors.precision}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
