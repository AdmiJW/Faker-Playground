'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';

const tooltip = `
    Generates a random css hex color code in aesthetically pleasing color palette.
    Based on http://stackoverflow.com/questions/43044/algorithm-to-randomly-generate-an-aesthetically-pleasing-color-palette
`;

const Schema = z.object({
    blueBase: z.number().int().min(0).max(255),
    greenBase: z.number().int().min(0).max(255),
    redBase: z.number().int().min(0).max(255),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.color>;

export function Color() {
    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            blueBase: 0,
            greenBase: 0,
            redBase: 0,
        },
        validationSchema,
        onSubmit: (values) => {
            const color = faker.internet.color({
                blueBase: values.blueBase,
                greenBase: values.greenBase,
                redBase: values.redBase,
            });
            setOutput(color);
            toast.success('Faked color!');
        },
    });

    const randomizeBlueBase = () =>
        formik.setFieldValue(
            'blueBase',
            faker.number.int({ min: 0, max: 255 })
        );
    const randomizeGreenBase = () =>
        formik.setFieldValue(
            'greenBase',
            faker.number.int({ min: 0, max: 255 })
        );
    const randomizeRedBase = () =>
        formik.setFieldValue('redBase', faker.number.int({ min: 0, max: 255 }));

    return (
        <FakerSection title='Color' id='color' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Blue Base'
                    name='blueBase'
                    value={formik.values.blueBase.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.blueBase}
                    tooltip='The optional base blue in range between 0 and 255.'
                    randomFn={randomizeBlueBase}
                />
                <TextInput
                    type='number'
                    label='Green Base'
                    name='greenBase'
                    value={formik.values.greenBase.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.greenBase}
                    tooltip='The optional base green in range between 0 and 255.'
                    randomFn={randomizeGreenBase}
                />
                <TextInput
                    type='number'
                    label='Red Base'
                    name='redBase'
                    value={formik.values.redBase.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.redBase}
                    tooltip='The optional base red in range between 0 and 255.'
                    randomFn={randomizeRedBase}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
