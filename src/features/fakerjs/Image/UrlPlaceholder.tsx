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
    const t = useDict().image.urlPlaceholder;
    const faker = useFaker();

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
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='url-placeholder' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    label={t.backgroundColorLabel}
                    name='backgroundColor'
                    value={formik.values.backgroundColor ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.backgroundColor}
                    tooltip={t.backgroundColorTooltip}
                />
                <Select
                    label={t.formatLabel}
                    name='format'
                    value={formik.values.format}
                    onChange={formik.handleChange}
                    tooltip={t.formatTooltip}
                    options={[
                        { label: t.optionGif, value: 'gif' },
                        { label: t.optionJpeg, value: 'jpeg' },
                        { label: t.optionJpg, value: 'jpg' },
                        { label: t.optionPng, value: 'png' },
                        { label: t.optionWebp, value: 'webp' },
                    ]}
                />
                <TextInput
                    label={t.textLabel}
                    name='text'
                    value={formik.values.text ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.text}
                    tooltip={t.textTooltip}
                />
                <TextInput
                    label={t.textColorLabel}
                    name='textColor'
                    value={formik.values.textColor ?? ''}
                    onChange={formik.handleChange}
                    error={formik.errors.textColor}
                    tooltip={t.textColorTooltip}
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
