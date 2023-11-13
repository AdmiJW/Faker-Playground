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

const Schema = z.object({
    minMax: z.array(z.number().min(-180).max(180)).length(2),
    precision: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.location.longitude>;

export function Longitude() {
    const t = useDict().location.longitude;
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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='longitude' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Slider
                    label={t.boundLabel}
                    name='minMax'
                    value={formik.values.minMax}
                    onChange={formik.handleChange}
                    min={-180}
                    max={180}
                    step={0.001}
                    tooltip={t.boundTooltip}
                />
                <TextInput
                    type='number'
                    label={t.precisionLabel}
                    name='precision'
                    value={formik.values.precision.toString()}
                    onChange={formik.handleChange}
                    tooltip={t.precisionTooltip}
                    error={formik.errors.precision}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
