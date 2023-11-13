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
    TextInput,
    Select,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    color: z.string().optional(),
    height: z.number().nonnegative(),
    width: z.number().nonnegative(),
    type: z.enum(['svg-base64', 'svg-uri']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.image.dataUri>;

export function DataUri() {
    const t = useDict().image.dataUri;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            color: faker.color.rgb(),
            height: 480,
            width: 640,
            type: 'svg-uri',
        },
        validationSchema,
        onSubmit: (values) => {
            const dataUri = faker.image.dataUri({
                color: values.color,
                height: values.height,
                width: values.width,
                type: values.type,
            });
            setOutput(dataUri);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='data-uri' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.colorLabel}
                    name='color'
                    value={formik.values.color ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.color}
                    tooltip={t.colorTooltip}
                />
                <TextInput
                    type='number'
                    label={t.heightLabel}
                    name='height'
                    value={formik.values.height.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.height}
                    tooltip={t.heightTooltip}
                />
                <TextInput
                    type='number'
                    label={t.widthLabel}
                    name='width'
                    value={formik.values.width.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.width}
                    tooltip={t.widthTooltip}
                />
                <Select
                    label={t.typeLabel}
                    name='type'
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    tooltip={t.typeTooltip}
                    options={[
                        { label: t.optionSvgBase64, value: 'svg-base64' },
                        { label: t.optionSvgUri, value: 'svg-uri' },
                    ]}
                />
            </div>
            <Output
                onFake={formik.handleSubmit}
                output={output}
                imageUrl={output}
            />
        </FakerSection>
    );
}
