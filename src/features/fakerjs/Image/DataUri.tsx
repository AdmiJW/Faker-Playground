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

const tooltip = `Generates a random data uri containing an URL-encoded SVG image or a Base64-encoded SVG image.`;

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
            toast.success('Faked data URI!');
        },
    });

    return (
        <FakerSection title='Data URI' id='data-uri' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='Color'
                    name='color'
                    value={formik.values.color ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.color}
                    tooltip='The color of the image. Must be a color supported by svg.'
                />
                <TextInput
                    type='number'
                    label='Height'
                    name='height'
                    value={formik.values.height.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.height}
                    tooltip='The height of the image.'
                />
                <TextInput
                    type='number'
                    label='Width'
                    name='width'
                    value={formik.values.width.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.width}
                    tooltip='The width of the image.'
                />
                <Select
                    label='Type'
                    name='type'
                    value={formik.values.type}
                    onChange={formik.handleChange}
                    tooltip='The type of the image to return. Consisting of the file extension and the used encoding.'
                    options={[
                        { label: 'SVG Base64', value: 'svg-base64' },
                        { label: 'SVG URI', value: 'svg-uri' },
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
