'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Slider } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    probability: z.number().min(0).max(1).step(0.01),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.datatype.boolean>;

export function Boolean() {
    const t = useDict().datatype.boolean;
    const faker = useFaker();

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='boolean' tooltip={t.tooltip}>
            <div className='flex-1'>
                <Slider
                    label={t.probabilityLabel}
                    name='probability'
                    value={formik.values.probability}
                    onChange={formik.handleChange}
                    min={0}
                    max={1}
                    step={0.01}
                    tooltip={t.probabilityTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
