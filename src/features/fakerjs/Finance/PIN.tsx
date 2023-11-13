'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    length: z.number().int().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.finance.pin>;

export function PIN() {
    const t = useDict().finance.pin;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            length: 4,
        },
        validationSchema,
        onSubmit: (values) => {
            const pin = faker.finance.pin({
                length: values.length,
            });
            setOutput(pin);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='pin' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label={t.lengthLabel}
                    name='length'
                    onChange={formik.handleChange}
                    tooltip={t.lengthTooltip}
                    value={formik.values.length.toString()}
                    error={formik.errors.length}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
