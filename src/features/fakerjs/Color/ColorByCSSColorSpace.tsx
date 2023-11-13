'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    format: z.enum(['binary', 'css', 'decimal']),
    space: z.enum(['a98-rgb', 'display-p3', 'prophoto-rgb', 'rec2020', 'sRGB']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.color.colorByCSSColorSpace>;

export function ColorByCSSColorSpace() {
    const t = useDict().color.colorByCssColorSpace;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            format: 'decimal',
            space: 'sRGB',
        },
        validationSchema,
        onSubmit: (values) => {
            const colorByCSSColorSpace = faker.color.colorByCSSColorSpace({
                format: values.format,
                space: values.space,
            });
            setOutput(colorByCSSColorSpace);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection
            title={t.title}
            id='color-by-css-color-space'
            tooltip={t.tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
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
                    tooltip={t.formatTooltip}
                />
                <Select
                    label={t.spaceLabel}
                    value={formik.values.space}
                    onChange={formik.handleChange}
                    name='space'
                    options={[
                        { value: 'a98-rgb', label: t.optionA98Rgb },
                        { value: 'display-p3', label: t.optionDisplayP3 },
                        { value: 'prophoto-rgb', label: t.optionProphotoRgb },
                        { value: 'rec2020', label: t.optionRec2020 },
                        { value: 'sRGB', label: t.optionSrgb },
                    ]}
                    tooltip={t.spaceTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
