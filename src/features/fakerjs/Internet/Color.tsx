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
    blueBase: z.number().int().min(0).max(255),
    greenBase: z.number().int().min(0).max(255),
    redBase: z.number().int().min(0).max(255),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.color>;

export function Color() {
    const t = useDict().internet.color;
    const faker = useFaker();

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
            toast.success(t.success);
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
        <FakerSection title={t.title} id='color' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label={t.blueBaseLabel}
                    name='blueBase'
                    value={formik.values.blueBase.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.blueBase}
                    tooltip={t.blueBaseTooltip}
                    randomFn={randomizeBlueBase}
                />
                <TextInput
                    type='number'
                    label={t.greenBaseLabel}
                    name='greenBase'
                    value={formik.values.greenBase.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.greenBase}
                    tooltip={t.greenBaseTooltip}
                    randomFn={randomizeGreenBase}
                />
                <TextInput
                    type='number'
                    label={t.redBaseLabel}
                    name='redBase'
                    value={formik.values.redBase.toString()}
                    onChange={formik.handleChange}
                    error={formik.errors.redBase}
                    tooltip={t.redBaseTooltip}
                    randomFn={randomizeRedBase}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
