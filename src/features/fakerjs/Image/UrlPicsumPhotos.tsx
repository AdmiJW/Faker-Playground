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
    const t = useDict().image.urlPicsumPhotos;
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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection
            title={t.title}
            id='url-picsum-photos'
            tooltip={t.tooltip}
        >
            <div className='flex flex-1 flex-col gap-4'>
                <Slider
                    label={t.blurLabel}
                    name='blur'
                    value={formik.values.blur}
                    onChange={formik.handleChange}
                    tooltip={t.blurTooltip}
                    min={0}
                    max={10}
                    step={1}
                />
                <Checkbox
                    checked={formik.values.grayscale}
                    label={t.greyscaleLabel}
                    onChange={(newValue) =>
                        formik.setFieldValue('grayscale', newValue)
                    }
                    tooltip={t.greyscaleTooltip}
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
            </div>
            <Output
                onFake={formik.handleSubmit}
                output={output}
                imageUrl={output}
            />
        </FakerSection>
    );
}
