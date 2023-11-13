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
    min: z.bigint(),
    max: z.bigint(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.number.bigInt>;

export function BigIntSection() {
    const t = useDict().number.bigInt;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            min: BigInt(0),
            max: BigInt('999999999999999'),
        },
        validationSchema,
        onSubmit: (values, { setErrors }) => {
            const isMinBiggerThanMax = values.min > values.max;
            if (isMinBiggerThanMax) {
                setErrors({
                    min: t.errorMinMustBeLessThanMax,
                    max: t.errorMaxMustBeGreaterThanMin,
                });
                return;
            }

            const bigInt = faker.number.bigInt({
                min: values.min,
                max: values.max,
            });
            setOutput(bigInt);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='big-int' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label={t.minLabel}
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={(e: any) =>
                        formik.setFieldValue('min', BigInt(e.target.value))
                    }
                    error={formik.errors.min}
                    tooltip={t.minTooltip}
                />
                <TextInput
                    type='number'
                    label={t.maxLabel}
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={(e: any) =>
                        formik.setFieldValue('max', BigInt(e.target.value))
                    }
                    error={formik.errors.max}
                    tooltip={t.maxTooltip}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
