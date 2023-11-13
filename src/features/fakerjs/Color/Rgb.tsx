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
    const t = useDict().color.rgb;
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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='rgb' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label={t.casingLabel}
                    value={formik.values.casing}
                    onChange={formik.handleChange}
                    name='casing'
                    options={[
                        { value: 'lower', label: t.optionLower },
                        { value: 'upper', label: t.optionUpper },
                        { value: 'mixed', label: t.optionMixed },
                    ]}
                    tooltip={t.casingTooltip}
                />
                <Select
                    label={t.formatLabel}
                    value={formik.values.format}
                    onChange={formik.handleChange}
                    name='format'
                    options={[
                        { value: 'binary', label: t.optionBinary },
                        { value: 'css', label: t.optionCss },
                        { value: 'decimal', label: t.optionDecimal },
                        { value: 'hex', label: t.optionHex },
                    ]}
                    tooltip={t.formatTooltip}
                />
                <Checkbox
                    label={t.includeAlphaLabel}
                    checked={formik.values.includeAlpha}
                    onChange={(newValue) =>
                        formik.setFieldValue('includeAlpha', newValue)
                    }
                    tooltip={t.includeAlphaTooltip}
                />
                <TextInput
                    label={t.prefixLabel}
                    name='prefix'
                    value={formik.values.prefix || ''}
                    onChange={formik.handleChange}
                    tooltip={t.prefixTooltip}
                    error={formik.errors.prefix}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
