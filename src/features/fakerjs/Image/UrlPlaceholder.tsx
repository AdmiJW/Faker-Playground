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

const tooltip = `Generates a random image url provided via https://via.placeholder.com/.`;

const Schema = z.object({
    backgroundColor: z.string().optional(),
    format: z.enum(['gif', 'jpeg', 'jpg', 'png', 'webp']),
    text: z.string().optional(),
    textColor: z.string().optional(),
    height: z.number().nonnegative(),
    width: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.image.urlPlaceholder>;

export function UrlPlaceholder() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            backgroundColor: faker.color.rgb({ format: 'hex', prefix: '' }),
            format: 'webp',
            text: faker.lorem.words(),
            textColor: faker.color.rgb({ format: 'hex', prefix: '' }),
            height: 480,
            width: 640,
        },
        validationSchema,
        onSubmit: (values) => {
            const url = faker.image.urlPlaceholder({
                backgroundColor: values.backgroundColor,
                format: values.format,
                text: values.text,
                textColor: values.textColor,
                height: values.height,
                width: values.width,
            });
            setOutput(url);
            toast.success('Faked url placeholder!');
        },
    });

    return (
        <FakerSection
            title='URL Placeholder'
            id='url-placeholder'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label='Background Color'
                    name='backgroundColor'
                    value={formik.values.backgroundColor ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.backgroundColor}
                    tooltip='The background color of the image.'
                />
                <Select
                    label='Format'
                    name='format'
                    value={formik.values.format}
                    onChange={formik.handleChange}
                    tooltip='The format of the image.'
                    options={[
                        { label: 'GIF', value: 'gif' },
                        { label: 'JPEG', value: 'jpeg' },
                        { label: 'JPG', value: 'jpg' },
                        { label: 'PNG', value: 'png' },
                        { label: 'WEBP', value: 'webp' },
                    ]}
                />
                <TextInput
                    label='Text'
                    name='text'
                    value={formik.values.text ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.text}
                    tooltip='The text to display on the image.'
                />
                <TextInput
                    label='Text Color'
                    name='textColor'
                    value={formik.values.textColor ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.textColor}
                    tooltip='The text color of the image.'
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
            </div>
            <Output
                onFake={formik.handleSubmit}
                output={output}
                imageUrl={output}
            />
        </FakerSection>
    );
}
