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
    Checkbox,
    Slider,
} from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Generates a random image url provided via https://picsum.photos.`;

const Schema = z.object({
    blur: z.number().int().min(0).max(10),
    grayscale: z.boolean(),
    height: z.number().nonnegative(),
    width: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.image.urlPicsumPhotos>;

export function UrlPicsumPhotos() {
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            blur: 0,
            grayscale: false,
            height: 480,
            width: 640,
        },
        validationSchema,
        onSubmit: (values) => {
            const url = faker.image.urlPicsumPhotos({
                blur: values.blur as 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10,
                grayscale: values.grayscale,
                height: values.height,
                width: values.width,
            });
            setOutput(url);
            toast.success('Faked url picsum photos!');
        },
    });

    return (
        <FakerSection
            title='URL Picsum Photos'
            id='url-picsum-photos'
            tooltip={tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <Slider
                    label='Blur'
                    name='blur'
                    value={formik.values.blur}
                    onChange={formik.handleChange}
                    tooltip='Whether the image should be blurred.'
                    min={0}
                    max={10}
                    step={1}
                />
                <Checkbox
                    checked={formik.values.grayscale}
                    label='Grayscale'
                    onChange={(newValue) =>
                        formik.setFieldValue('grayscale', newValue)
                    }
                    tooltip='Whether the image should be grayscale.'
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
