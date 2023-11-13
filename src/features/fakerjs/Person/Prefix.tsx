'use client';

import { useState } from 'react';
import { faker } from '@faker-js/faker';
import toast from 'react-hot-toast';
import { useFormik } from 'formik';
import { z } from 'zod';
import { toFormikValidationSchema } from 'zod-formik-adapter';

import { FakerSection, Output, Select } from '@core/components/FakerSection';
import { useDict, useFaker } from '@locale';

const Schema = z.object({
    sex: z.enum(['female', 'male']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.person.prefix>;

export function Prefix() {
    const t = useDict().person.prefix;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            sex: 'male',
        },
        validationSchema,
        onSubmit: (values) => {
            const prefix = faker.person.prefix(values.sex);
            setOutput(prefix);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='prefix' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label={t.sexLabel}
                    name='sex'
                    value={formik.values.sex}
                    onChange={formik.handleChange}
                    tooltip={t.sexTooltip}
                    options={[
                        { label: t.optionFemale, value: 'female' },
                        { label: t.optionMale, value: 'male' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
