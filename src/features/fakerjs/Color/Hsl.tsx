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
    Select,
    Checkbox,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns an HSL color.`;

const Schema = z.object({
    format: z.enum(['binary', 'css', 'decimal']),
    includeAlpha: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.color.hsl>;

export function Hsl() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            format: 'decimal',
            includeAlpha: false,
        },
        validationSchema,
        onSubmit: (values) => {
            const hsl = faker.color.hsl({
                format: values.format,
                includeAlpha: values.includeAlpha,
            });
            setOutput(hsl);
            toast.success('Faked hsl!');
        },
    });

    return (
        <FakerSection title='HSL' id='hsl' tooltip={tooltip}>
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
                    tooltip='Format of generated HSL color.'
                />
                <Checkbox
                    checked={formik.values.includeAlpha}
                    label='Include Alpha'
                    onChange={(newValue) =>
                        formik.setFieldValue('includeAlpha', newValue)
                    }
                    tooltip='Adds an alpha value to the color (RGBA).'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
