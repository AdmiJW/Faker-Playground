'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    height: z.number().nonnegative(),
    width: z.number().nonnegative(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.image.url>;

export function Url() {
    const t = useDict().image.url;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            height: 480,
            width: 640,
        },
        validationSchema,
        onSubmit: (values) => {
            const url = faker.image.url({
                height: values.height,
                width: values.width,
            });
            setOutput(url);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='url' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
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
