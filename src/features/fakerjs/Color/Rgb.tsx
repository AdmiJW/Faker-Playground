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
    TextInput,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns an RGB color.`;

const Schema = z.object({
    casing: z.enum(['lower', 'upper', 'mixed']),
    format: z.enum(['binary', 'css', 'decimal', 'hex']),
    includeAlpha: z.boolean(),
    prefix: z.string().optional(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.color.rgb>;

export function Rgb() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            casing: 'lower',
            format: 'hex',
            includeAlpha: false,
            prefix: '#',
        },
        validationSchema,
        onSubmit: (values) => {
            const rgb = faker.color.rgb({
                casing: values.casing,
                format: values.format,
                includeAlpha: values.includeAlpha,
                prefix: values.prefix,
            });
            setOutput(rgb);
            toast.success('Faked rgb!');
        },
    });

    return (
        <FakerSection title='RGB' id='rgb' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label='Casing'
                    value={formik.values.casing}
                    onChange={formik.handleChange}
                    name='casing'
                    options={[
                        { value: 'lower', label: 'Lower' },
                        { value: 'upper', label: 'Upper' },
                        { value: 'mixed', label: 'Mixed' },
                    ]}
                    tooltip="Letter type case of the generated hex color. Only applied when 'hex' format is used."
                />
                <Select
                    label='Format'
                    value={formik.values.format}
                    onChange={formik.handleChange}
                    name='format'
                    options={[
                        { value: 'binary', label: 'Binary' },
                        { value: 'css', label: 'CSS' },
                        { value: 'decimal', label: 'Decimal' },
                        { value: 'hex', label: 'Hex' },
                    ]}
                    tooltip='Format of generated RGB color.'
                />
                <Checkbox
                    label='Include Alpha'
                    checked={formik.values.includeAlpha}
                    onChange={(newValue) =>
                        formik.setFieldValue('includeAlpha', newValue)
                    }
                    tooltip='Adds an alpha value to the color (RGBA).'
                />
                <TextInput
                    label='Prefix'
                    name='prefix'
                    value={formik.values.prefix || ''}
                    onChange={formik.handleChange}
                    tooltip="Prefix of the generated hex color. Only applied when 'hex' format is used."
                    error={formik.errors.prefix}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
