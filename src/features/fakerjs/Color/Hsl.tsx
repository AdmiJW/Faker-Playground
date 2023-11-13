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

const Schema = z.object({
    format: z.enum(['binary', 'css', 'decimal']),
    includeAlpha: z.boolean(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.color.hsl>;

export function Hsl() {
    const t = useDict().color.hsl;
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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='hsl' tooltip={t.tooltip}>
            <div className='flex-1'>
                <Select
                    label={t.formatLabel}
                    value={formik.values.format}
                    onChange={formik.handleChange}
                    name='format'
                    options={[
                        { value: 'binary', label: t.optionBinary },
                        { value: 'css', label: t.optionCss },
                        { value: 'decimal', label: t.optionDecimal },
                    ]}
                    tooltip={t.tooltip}
                />
                <Checkbox
                    checked={formik.values.includeAlpha}
                    label={t.includeAlphaLabel}
                    onChange={(newValue) =>
                        formik.setFieldValue('includeAlpha', newValue)
                    }
                    tooltip={t.includeAlphaTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
