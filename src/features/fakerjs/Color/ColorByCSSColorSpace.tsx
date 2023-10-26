'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a random color based on CSS color space specified.`;

const Schema = z.object({
    format: z.enum(['binary', 'css', 'decimal']),
    space: z.enum(['a98-rgb', 'display-p3', 'prophoto-rgb', 'rec2020', 'sRGB']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.color.colorByCSSColorSpace>;

export function ColorByCSSColorSpace() {
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
            toast.success('Faked color by CSS color space!');
        },
    });

    return (
        <FakerSection
            title='Color By CSS Color Space'
            id='color-by-css-color-space'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
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
                    tooltip='Format of generated color.'
                />
                <Select
                    label='Space'
                    value={formik.values.space}
                    onChange={formik.handleChange}
                    name='space'
                    options={[
                        { value: 'a98-rgb', label: 'A98 RGB' },
                        { value: 'display-p3', label: 'Display P3' },
                        { value: 'prophoto-rgb', label: 'ProPhoto RGB' },
                        { value: 'rec2020', label: 'Rec 2020' },
                        { value: 'sRGB', label: 'sRGB' },
                    ]}
                    tooltip='Color space to generate the color for.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
