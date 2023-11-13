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
    separator: z.enum([':', '-', 'none']),
});
const validationSchema = toFormikValidationSchema(Schema);
type State = z.infer<typeof Schema>;
type Output = ReturnType<typeof faker.internet.mac>;

export function MAC() {
    const t = useDict().internet.mac;
    const faker = useFaker();

    const [output, setOutput] = useState<Output>();

    const formik = useFormik<State>({
        initialValues: {
            separator: ':',
        },
        validationSchema,
        onSubmit: (values) => {
            const mac = faker.internet.mac({
                separator: values.separator === 'none' ? '' : values.separator,
            });
            setOutput(mac);
            toast.success(t.success);
        },
    });

    return (
        <FakerSection title={t.title} id='mac' tooltip={t.tooltip}>
            <div className='flex flex-1 flex-col gap-4'>
                <Select
                    label={t.separatorLabel}
                    name='separator'
                    tooltip={t.separatorTooltip}
                    onChange={formik.handleChange}
                    value={formik.values.separator}
                    options={[
                        { label: t.optionColon, value: ':' },
                        { label: t.optionDash, value: '-' },
                        { label: t.optionNone, value: 'none' },
                    ]}
                />
            </div>
            <Output onFake={formik.handleSubmit} output={output} />
        </FakerSection>
    );
}
