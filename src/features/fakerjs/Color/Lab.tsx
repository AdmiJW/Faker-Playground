'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a LAB (CIELAB) color.`;

const Schema = z.object({
    format: z.enum(['binary', 'css', 'decimal']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.color.lab>;

export function Lab() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            format: 'decimal',
        },
        validationSchema,
        onSubmit: (values) => {
            const lab = faker.color.lab({
                format: values.format,
            });
            setOutput(lab);
            toast.success('Faked lab!');
        },
    });

    return (
        <FakerSection title='LAB' id='lab' tooltip={tooltip}>
            <div className='flex-1'>
                <Select
                    label='Format'
                    value={formik.values.format}
                    onChange={formik.handleChange}
                    name='format'
                    options={[
                        { value: 'binary', label: 'Binary' },
                        { value: 'css', label: 'CSS' },
                        { value: 'decimal', label: 'Decimal' },
                    ]}
                    tooltip='Format of generated LAB color.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
