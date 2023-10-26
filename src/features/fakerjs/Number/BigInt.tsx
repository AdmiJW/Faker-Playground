'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, TextInput } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const tooltip = `Returns a BigInt number.`;

const Schema = z.object({
    min: z.bigint(),
    max: z.bigint(),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.number.bigInt>;

export function BigIntSection() {
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
                    min: 'Min must be smaller than max.',
                    max: 'Max must be bigger than min.',
                });
                return;
            }

            const bigInt = faker.number.bigInt({
                min: values.min,
                max: values.max,
            });
            setOutput(bigInt);
            toast.success('Faked big int!');
        },
    });

    return (
        <FakerSection title='Big Int' id='big-int' tooltip={tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <TextInput
                    type='number'
                    label='Min'
                    name='min'
                    value={formik.values.min.toString()}
                    onChange={(e: any) =>
                        formik.setFieldValue('min', BigInt(e.target.value))
                    }
                    error={formik.errors.min}
                    tooltip='Lower bound for generated bigint.'
                />
                <TextInput
                    type='number'
                    label='Max'
                    name='max'
                    value={formik.values.max.toString()}
                    onChange={(e: any) =>
                        formik.setFieldValue('max', BigInt(e.target.value))
                    }
                    error={formik.errors.max}
                    tooltip='Upper bound for generated bigint.'
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
